ARG NODE=node:20-alpine

# Stage 1: Install dependencies
FROM ${NODE} AS deps
RUN apk update \
    && apk add --no-cache openssl libc6-compat\
    && rm -rf /var/lib/apt/lists/* \
    && rm -rf /var/cache/apk/*
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

# Stage 2: Build the app
FROM ${NODE} AS builder
ENV NEXT_TELEMETRY_DISABLED=1
ARG NEXT_PUBLIC_APP_URL
ENV NEXT_PUBLIC_APP_URL=$NEXT_PUBLIC_APP_URL

ARG NEXT_PUBLIC_MRCARWASH_API
ENV NEXT_PUBLIC_MRCARWASH_API=$NEXT_PUBLIC_MRCARWASH_API

ARG NEXT_PUBLIC_SUPPORT_URL
ENV NEXT_PUBLIC_SUPPORT_URL=$NEXT_PUBLIC_SUPPORT_URL

ARG NEXT_PUBLIC_MRCARWASH_REG
ENV NEXT_PUBLIC_MRCARWASH_REG=$NEXT_PUBLIC_MRCARWASH_REG

ARG NEXT_PUBLIC_MRCARWASH_DEMO
ENV NEXT_PUBLIC_MRCARWASH_DEMO=$NEXT_PUBLIC_MRCARWASH_DEMO

RUN apk update \
    && apk add --no-cache openssl libc6-compat \
    && rm -rf /var/cache/apk/*

WORKDIR /app
COPY . .
COPY --from=deps /app/node_modules ./node_modules
RUN npm run build
RUN npm run postbuild

# Stage 3: Run the production
FROM ${NODE} AS runner
RUN apk update \
    && apk add --no-cache openssl libc6-compat bash\
    && rm -rf /var/cache/apk/*

WORKDIR /app

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# copy assets and the generated standalone server
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs
ARG HOSTNAME="0.0.0.0"
ENV HOSTNAME=${HOSTNAME}
ARG PORT=3000
EXPOSE ${PORT}

# Use the startup script
CMD ["node", "server.js"]
