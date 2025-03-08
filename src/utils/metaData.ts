import { Metadata } from "next";

export function mergeMetadata(
  defaultMeta: Metadata,
  pageMeta?: Metadata,
): Metadata {
  if (!pageMeta) {
    return defaultMeta;
  }

  const mergedMeta: Metadata = { ...defaultMeta, ...pageMeta };

  if (defaultMeta.openGraph && pageMeta.openGraph) {
    mergedMeta.openGraph = {
      ...defaultMeta.openGraph,
      ...pageMeta.openGraph,
    };
  }
  return mergedMeta;
}
