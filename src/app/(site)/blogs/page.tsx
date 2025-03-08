import SingleBlog from "@/components/Blog/SingleBlog";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { defaultMetadata } from "@/metadata/default";
import { getAllPosts } from "@/utils/markdown";
import { mergeMetadata } from "@/utils/metaData";
import { Metadata } from "next";

const pageMetadata: Metadata = {
  title: "Artikel | MrCarWash - Tips & Informasi Bisnis Cuci Mobil & Motor",
  description:
    "Baca artikel dan tips terbaru tentang manajemen bisnis cuci mobil dan motor, tren industri, dan informasi bermanfaat lainnya dari MrCarWash.",

};

export const metadata: Metadata = mergeMetadata(defaultMetadata, pageMetadata);


const Blog = () => {
  const posts = getAllPosts(["title", "date", "excerpt", "coverImage", "slug"]);

  return (
    <>
      <Breadcrumb pageName="Daftar Artikel" />

      <section className="pb-10 pt-20 lg:pb-20 lg:pt-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            {posts.map((blog, i) => (
              <div key={i} className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3">
                <SingleBlog blog={blog} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
