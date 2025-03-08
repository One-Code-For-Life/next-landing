import Link from "next/link";

const About = () => {

  const registrationUrl = process.env.NEXT_PUBLIC_MRCARWASH_REG || "https://reg.mrcarwash.app";

  return (
    <section id="about" className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <h2 className="font-secondary mb-4 text-3xl font-bold text-gray-800 dark:text-white">
            Tentang Kami - MrCarWash
          </h2>
          <p className="text-gray-600 dark:text-gray-100">
            Selamat datang di MrCarWash, platform manajemen bisnis cuci mobil dan motor yang dirancang untuk membantu Anda meningkatkan efisiensi, produktivitas, dan keuntungan. Kami memahami tantangan yang dihadapi oleh pemilik bisnis cuci mobil dan motor, dan kami hadir dengan solusi terintegrasi yang mudah digunakan
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8">
          <div>
            <h3 className="mb-4 text-2xl font-semibold text-gray-800 dark:text-white font-secondary">
              Visi dan Misi
            </h3>
            <p className="mb-4 text-gray-600 dark:text-gray-200">
              <strong>Visi:</strong> Menjadi platform manajemen bisnis cuci
              mobil dan motor nomor satu di Indonesia, dengan menyediakan solusi
              inovatif dan terpercaya.
            </p>
            <div className="text-gray-600 dark:text-gray-200">
              <strong>Misi:</strong>
              <ul className="pl-4 list-outside list-disc">
                <li>
                  Memberikan alat dan fitur yang lengkap untuk mengelola
                  operasional bisnis secara efektif.
                </li>
                <li>
                  Meningkatkan pengalaman pelanggan dengan layanan yang lebih
                  cepat dan terorganisir.
                </li>
                <li>
                  Membantu pemilik bisnis meningkatkan pendapatan dan
                  mengembangkan usaha mereka.
                </li>
                <li>
                  Membangun komunitas bisnis cuci mobil dan motor yang solid dan
                  saling mendukung.
                </li>
              </ul>
            </div>

            <h3 className="mb-4 text-2xl font-semibold text-gray-800 dark:text-white font-secondary mt-6">
              Nilai-Nilai Kami:
            </h3>
            <div className="text-gray-600 dark:text-gray-200">
              <ul className="pl-4 list-outside list-disc">
                <li>
                  <strong>Inovasi:</strong> Kami terus berinovasi untuk menghadirkan fitur-fitur terbaru yang sesuai dengan kebutuhan bisnis Anda.
                </li>
                <li>
                  <strong>Kualitas:</strong> Kami berkomitmen untuk memberikan layanan dan dukungan terbaik kepada pelanggan kami.
                </li>
                <li>
                  <strong>Kepercayaan:</strong> Kami membangun hubungan yang kuat dan saling percaya dengan pelanggan kami.
                </li>
                <li>
                  <strong>Kemudahan:</strong> Kami merancang platform yang mudah digunakan dan dipahami oleh semua orang.
                </li>
                <li>
                  <strong>Dukungan:</strong> Kami menyediakan dukungan pelanggan yang responsif dan siap membantu Anda kapan saja.
                </li>
              </ul>
            </div>

            <h3 className="mb-4 text-2xl font-semibold text-gray-800 dark:text-white font-secondary mt-6">
              Keunggulan MrCarWash
            </h3>
            <div className="text-gray-600 dark:text-gray-200">
              <ul className="pl-4 list-outside list-disc">
                <li>
                  <strong>Platform Terintegrasi:</strong> Kelola semua aspek bisnis Anda dalam satu platform, mulai dari operasional, karyawan, pelanggan, hingga keuangan.
                </li>
                <li>
                  <strong>Fitur Lengkap:</strong> Nikmati berbagai fitur canggih seperti sistem kasir, manajemen pelanggan (CRM), laporan keuangan, dan banyak lagi.
                </li>
                <li>
                  <strong>Mudah Digunakan:</strong> Antarmuka yang intuitif dan ramah pengguna, sehingga Anda dapat langsung menggunakannya tanpa kesulitan.
                </li>
                <li>
                  <strong>Dukungan Pelanggan:</strong> Tim dukungan kami siap membantu Anda dengan cepat dan efisien.
                </li>
                <li>
                  <strong>Harga Terjangkau:</strong> Paket berlangganan yang fleksibel dan sesuai dengan anggaran bisnis Anda.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-10 text-center">
          <Link
            href={registrationUrl}
            className="inline-block rounded-md bg-blue-700 px-6 py-3 text-white transition-colors hover:bg-blue-800"
          >
            Mulai Gunakan MrCarWash
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
