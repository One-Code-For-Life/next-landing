'use client'
import Link from "next/link";

const CallToAction = () => {
  return (
    <section className="relative overflow-hidden bg-blue-700 py-20 lg:py-[115px]">
      <div className="container mx-auto z-50">
        <div className="relative overflow-hidden z-100">
          <div className="-mx-4 flex flex-wrap items-stretch">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[570px] text-center z-100">
                <h2 className="mb-2.5 text-3xl font-bold text-white md:text-[38px] md:leading-[1.44]">
                  <span>Bingung Kelola Bisnis Cuci Mobil & Motor?</span>
                </h2>
                <p className="mx-auto mb-6 max-w-[515px] text-base leading-[1.5] text-white">
                  Tidak perlu lagi repot mengelola bisnis cuci mobil secara manual. MrCarWash hadir sebagai solusi lengkap untuk menyederhanakan operasional, meningkatkan efisiensi, dan memaksimalkan keuntungan Anda.
                </p>
                <Link
                  href="https://dash.mrcarwash.app/register"
                  className="inline-block rounded-md border border-transparent bg-black px-7 py-3 text-base font-medium text-gray-100 transition hover:bg-gray-700"
                >
                  Mulai Gunakan MrCarWash
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
