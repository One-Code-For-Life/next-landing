import Breadcrumb from "@/components/Common/Breadcrumb";
import PrivacyPolicy from "@/components/PrivacyPolicy";
import { defaultMetadata } from "@/metadata/default";
import { mergeMetadata } from "@/utils/metaData";
import { Metadata } from "next";

const pageMetadata: Metadata = {
    title: "Kebijakan Privasi | MrCarWash - Platform Manajemen Cuci Mobil & Motor",
    description:
        "Kebijakan Privasi MrCarWash menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi informasi pribadi Anda saat Anda menggunakan platform manajemen bisnis cuci mobil dan motor kami.",
};

export const metadata: Metadata = mergeMetadata(defaultMetadata, pageMetadata);

const PrivacyPage = () => {
    return (
        <>
            <Breadcrumb pageName="Kebijakan Privasi" />
            <PrivacyPolicy />
        </>
    );
};

export default PrivacyPage;