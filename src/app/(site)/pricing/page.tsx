import Breadcrumb from "@/components/Common/Breadcrumb";
import Faq from "@/components/Faq";
import Pricing from "@/components/Pricing";
import { defaultMetadata } from "@/metadata/default";
import { mergeMetadata } from "@/utils/metaData";
import { Metadata } from "next";

const pageMetadata: Metadata = {
  title: "Harga | MrCarWash - Platform Manajemen Cuci Mobil & Motor",
  description:
    "Temukan paket harga MrCarWash yang sesuai dengan kebutuhan bisnis cuci mobil dan motor Anda. Kelola bisnis Anda dengan fitur lengkap dan harga terjangkau.",

};

export const metadata: Metadata = mergeMetadata(defaultMetadata, pageMetadata);

const PricingPage = () => {
  return (
    <>
      <Breadcrumb pageName="Harga" />
      <Pricing />
      <Faq />
    </>
  );
};

export default PricingPage;
