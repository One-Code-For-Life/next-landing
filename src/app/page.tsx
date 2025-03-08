// import HomeBlogSection from "@/components/Blog/HomeBlogSection";
// import { getAllPosts } from "@/utils/markdown";

import CallToAction from "@/components/CallToAction";
import ScrollUp from "@/components/Common/ScrollUp";
import Faq from "@/components/Faq";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import { defaultMetadata } from '@/metadata/default';
import { mergeMetadata } from "@/utils/metaData";
import { Metadata } from "next";

const pageMetadata: Metadata = {
  title: "Ganting Judul",
  description: "Welcome to the home page of my awesome application.",
  openGraph: {
    images: "/home-og-image.png",
  },
};

export const metadata: Metadata = mergeMetadata(defaultMetadata, pageMetadata);


export default function Home() {
  // const posts = getAllPosts(["title", "date", "excerpt", "coverImage", "slug"]);

  return (
    <main>
      <ScrollUp />
      <Hero />
      <Features />
      {/* <About /> */}
      <CallToAction />
      <Pricing />
      {/* <Testimonials /> */}
      <Faq />
      {/* <Team /> */}
      {/* <HomeBlogSection posts={posts} /> */}
      {/* <Contact /> */}
      {/* <Clients /> */}
    </main>
  );
}
