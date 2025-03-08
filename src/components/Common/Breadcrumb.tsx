import Link from "next/link";

const Breadcrumb = ({
  pageName,
  pageDescription,
}: {
  pageName: string;
  pageDescription?: string;
}) => {
  return (
    <>
      <div className="bg-gradient-to-br from-white/95 to-[#fafafa]
dark:from-gray-900/30 dark:to-[#09090b] relative z-10 overflow-hidden pb-[60px] pt-[120px] md:pt-[130px] lg:pt-[160px]">
        <div className=" absolute bottom-0 left-0 h-px w-full  "></div>
        <div className="container">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4">
              <div className="text-center">
                <h1 className="text-dark mb-4 text-3xl font-bold dark:text-white sm:text-4xl md:text-[40px] md:leading-[1.2]">
                  {pageName}
                </h1>
                <p className="text-body-color dark:text-dark-6 mb-5 text-base">
                  {pageDescription}
                </p>

                <div className="flex items-baseline justify-center gap-[10px]">
                  <div>
                    <Link
                      href="/"
                      className="text-dark flex items-center gap-[10px] text-base font-medium dark:text-white"
                    >
                      Home
                    </Link>
                  </div>

                  {
                    pageName == "Detail Artikel" && (

                      <div>
                        <span className="text-body-color dark:text-dark-6 pr-2">
                          /
                        </span>
                        <Link
                          href="/blogs"
                          className="text-dark text-base font-medium dark:text-white hover:text-blue-500"
                        >
                          Daftar Artikel
                        </Link>
                      </div>
                    )
                  }
                  <div>
                    <p className="text-body-color flex items-center gap-[10px] text-base font-medium">
                      <span className="text-body-color dark:text-dark-6">
                        {" "}
                        /{" "}
                      </span>
                      {pageName}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Breadcrumb;
