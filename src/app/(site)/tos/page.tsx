import Breadcrumb from "@/components/Common/Breadcrumb";
import TermsOfService from "@/components/TermOfService";
import { defaultMetadata } from "@/metadata/default";
import { mergeMetadata } from "@/utils/metaData";
import { Metadata } from "next";

const pageMetadata: Metadata = {
    title: "Syarat & Ketentuan Layanan | MrCarWash - Manajemen Cuci Mobil",
    description:
        "Pelajari Syarat & Ketentuan Layanan MrCarWash sebelum menggunakan platform manajemen bisnis cuci mobil & motor kami. Pahami hak dan kewajiban Anda sebagai pengguna.",
};

export const metadata: Metadata = mergeMetadata(defaultMetadata, pageMetadata);

const TosPage = () => {
    return (
        <>
            <Breadcrumb pageName="Syarat & Ketentuan Layanan" />
            <TermsOfService />
        </>
    );
};

export default TosPage;