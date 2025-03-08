import Image from "next/image";
import Link from "next/link";

const Footer = () => {

  const supportUrl = process.env.NEXT_PUBLIC_SUPPORT_URL || "https://support.mrcarwash.com";
  const registrationUrl = process.env.NEXT_PUBLIC_MRCARWASH_REG || "https://reg.mrcarwash.app";

  return (
    <footer
      className="wow fadeInUp relative z-10 bg-gradient-to-tl from-white/95 to-[#fafafa]
dark:from-gray-900/30 dark:to-[#09090b] pt-20 lg:pt-[100px]"
      data-wow-delay=".15s"
    >
      <div className="container">
        <div className="w-full flex flex-col sm:flex-row">
          <div className="w-full flex flex-col sm:flex-row gap-4 sm:gap-8 items-center sm:items-start justify-start">

            <Link href="/" className="mb-6 inline-block max-w-[160px]">
              <Image
                src="https://ucarecdn.com/71baba41-88cc-4985-8cc3-046fdbee6436/-/preview/641x641/"
                alt="logo"
                width={140}
                height={30}
                className="max-w-full"
              />
            </Link>
            <div className="w-full items-center sm:items-start">
              <p className="mb-8 text-center sm:text-left text-base text-gray-900 dark:text-gray-100">
                MrCarWash bukan sekadar Point of Sale (POS) biasa, melainkan platform manajemen bisnis pencucian mobil dan motor lengkap yang dirancang khusus untuk mengoptimalkan manajemen bisnis pencucian mobil dan motor Anda.
              </p>
            </div>

          </div>
          <div className="w-full px-4 text-center sm:text-right">
            <div className="w-full">
              <h4 className="mb-4 text-lg font-semibold text-gray-900 dark:text-gray-100">
                Tautan Terkait
              </h4>
              <ul>
                <li>
                  <Link
                    href={registrationUrl}
                    className="mb-3 inline-block text-base text-gray-800 dark:text-gray-200 hover:text-primary"
                  >
                    Daftar
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blogs"
                    className="mb-3 inline-block text-base text-gray-800 dark:text-gray-200 hover:text-primary"
                  >
                    Artikel
                  </Link>
                </li>
                <li>
                  <Link
                    href={supportUrl}
                    className="mb-3 inline-block text-base text-gray-800 dark:text-gray-200 hover:text-primary"
                  >
                    Bantuan
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="mb-3 inline-block text-base text-gray-800 dark:text-gray-200 hover:text-primary"
                  >
                    About
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 border-t border-white border-opacity-40 py-8 lg:mt-[60px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="my-1 mx-auto">
                <div className="-mx-3 flex items-center justify-center">
                  <Link
                    href="/#"
                    className="px-3 text-base text-gray-800 dark:text-gray-200 hover:text-white hover:underline"
                  >
                    Privacy policy
                  </Link>
                  <Link
                    href="/#"
                    className="px-3 text-base text-gray-800 dark:text-gray-200 hover:text-white hover:underline"
                  >
                    Terms of service
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
