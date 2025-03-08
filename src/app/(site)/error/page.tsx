import Breadcrumb from "@/components/Common/Breadcrumb";
import NotFound from "@/components/NotFound";
import { defaultMetadata } from "@/metadata/default";
import { mergeMetadata } from "@/utils/metaData";
import { Metadata } from "next";
const pageMetadata: Metadata = {
  title: "Error | MrCarWash",
  description:
    "Maaf, halaman yang Anda cari tidak dapat ditemukan. Silakan coba lagi atau kembali ke halaman utama.",

};

export const metadata: Metadata = mergeMetadata(defaultMetadata, pageMetadata);

const ErrorPage = () => {
  return (
    <>
      <Breadcrumb pageName="404 Page" />

      <NotFound />
    </>
  );
};

export default ErrorPage;
