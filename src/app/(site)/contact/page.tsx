import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";
import { defaultMetadata } from "@/metadata/default";
import { mergeMetadata } from "@/utils/metaData";
import { Metadata } from "next";
const pageMetadata: Metadata = {
  title: "Hubungi Kami | MrCarWash - Dukungan & Informasi",
  description:
    "Hubungi tim MrCarWash untuk pertanyaan, dukungan, atau informasi lebih lanjut. Kami siap membantu Anda mengembangkan bisnis cuci mobil dan motor Anda.",

};

export const metadata: Metadata = mergeMetadata(defaultMetadata, pageMetadata);

const ContactPage = () => {
  return (
    <>
      <Breadcrumb pageName="Hubungi Kami" />

      <Contact />
    </>
  );
};

export default ContactPage;
