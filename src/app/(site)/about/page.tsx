import About from "@/components/About";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Team from "@/components/Team";
import { defaultMetadata } from "@/metadata/default";
import { mergeMetadata } from "@/utils/metaData";
import { Metadata } from "next";

const pageMetadata: Metadata = {
  title: "Tentang Kami | MrCarWash - Platform Manajemen Cuci Mobil & Motor",
  description:
    "Pelajari lebih lanjut tentang MrCarWash, visi dan misi kami, serta tim di balik platform manajemen bisnis cuci mobil dan motor terdepan.",

};

export const metadata: Metadata = mergeMetadata(defaultMetadata, pageMetadata);

const AboutPage = () => {
  return (
    <main>
      <Breadcrumb pageName="Tentang Kami" />
      <About />
      <Team />
    </main>
  );
};

export default AboutPage;
