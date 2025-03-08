import Breadcrumb from "@/components/Common/Breadcrumb";
import NotFound from "@/components/NotFound";
import { defaultMetadata } from "@/metadata/default";
import { mergeMetadata } from "@/utils/metaData";
import { Metadata } from "next";

const pageMetadata: Metadata = {
  title: "404 | Halaman Tidak Ditemukan | MrCarWash",
  description:
    "Halaman yang Anda cari tidak ditemukan. Periksa kembali URL atau kembali ke halaman utama.",

};

export const metadata: Metadata = mergeMetadata(defaultMetadata, pageMetadata);

const ErrorPage = () => {
  return (
    <>
      <Breadcrumb pageName="Halaman Tidak Ditemukan" />

      <NotFound />
    </>
  );
};

export default ErrorPage;
