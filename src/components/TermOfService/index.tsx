
const TermsOfService = () => {
    return (
        <article className="py-12 bg-white dark:bg-[#18181a]">
            <div className="container mx-auto py-10 max-w-4xl">
                <h1 className="text-3xl font-bold text-center mb-6">
                    Syarat dan Ketentuan Layanan MrCarWash
                </h1>
                <p className="text-gray-600 text-center mb-4">Tanggal Efektif: 8 Maret 2025</p>

                <p>
                    Selamat datang di MrCarWash! Syarat dan Ketentuan Layanan ini mengatur
                    penggunaan Anda atas platform MrCarWash dan layanan terkait yang disediakan
                    oleh kami. Dengan mengakses atau menggunakan platform MrCarWash, Anda
                    setuju untuk terikat oleh Syarat dan Ketentuan ini.
                </p>

                <h2 className="text-2xl font-semibold mt-6">1. Penerimaan Syarat dan Ketentuan</h2>
                <p>
                    Dengan mengakses atau menggunakan platform MrCarWash (termasuk situs web,
                    aplikasi web, dan semua layanan terkait), Anda menyatakan bahwa Anda telah
                    membaca, memahami, dan menyetujui untuk terikat oleh Syarat dan Ketentuan
                    Layanan ini.
                </p>

                <h2 className="text-2xl font-semibold mt-6">2. Deskripsi Layanan</h2>
                <p>
                    MrCarWash adalah platform <i>Software as a Service</i> (SaaS) yang menyediakan
                    solusi manajemen bisnis lengkap untuk usaha cuci mobil dan motor.
                </p>
                <ul className="list-disc ml-6 mt-2">
                    <li><b>Sistem POS:</b> Untuk memproses transaksi penjualan.</li>
                    <li><b>Manajemen Hubungan Pelanggan (CRM):</b> Untuk mengelola data pelanggan.</li>
                    <li><b>Manajemen Karyawan:</b> Untuk memantau performa dan mengatur penggajian karyawan.</li>
                    <li><b>Laporan Keuangan:</b> Untuk analisis kinerja bisnis.</li>
                </ul>

                <h2 className="text-2xl font-semibold mt-6">3. Akun Pengguna</h2>
                <ul className="list-disc ml-6 mt-2">
                    <li>Pendaftaran akun diperlukan untuk mengakses fitur tertentu.</li>
                    <li>Keamanan akun adalah tanggung jawab pengguna.</li>
                    <li>Informasi yang diberikan harus akurat dan terkini.</li>
                </ul>

                <h2 className="text-2xl font-semibold mt-6">4. Pembayaran dan Langganan</h2>
                <ul className="list-disc ml-6 mt-2">
                    <li>Paket langganan tersedia dengan biaya tertentu.</li>
                    <li>Pembayaran harus dilakukan melalui metode yang tersedia.</li>
                    <li>Langganan diperpanjang otomatis kecuali dibatalkan.</li>
                </ul>

                <h2 className="text-2xl font-semibold mt-6">5. Penggunaan yang Diizinkan dan Dilarang</h2>
                <p>Pengguna dilarang menggunakan platform untuk aktivitas ilegal atau merugikan.</p>

                <h2 className="text-2xl font-semibold mt-6">6. Kekayaan Intelektual</h2>
                <p>
                    Semua hak cipta, merek dagang, dan elemen lainnya dari platform MrCarWash
                    adalah milik kami atau pemberi lisensi kami.
                </p>

                <h2 className="text-2xl font-semibold mt-6">7. Penafian Jaminan</h2>
                <p>
                    PLATFORM MR.CARWASH DISEDIAKAN &apos;SEBAGAIMANA ADANYA&apos; DAN &apos;SEBAGAIMANA TERSEDIA&apos;
                    TANPA JAMINAN APAPUN.
                </p>

                <p className="mt-6 text-gray-600 text-sm">
                    Dengan menggunakan platform ini, Anda menyetujui semua syarat dan ketentuan yang berlaku.
                </p>
            </div>
        </article>
    );
};

export default TermsOfService;
