"use client";
import { getPricingData } from "@/stripe/pricingData";
import { Price } from "@/types/price";
import { useEffect, useState } from 'react';
import SectionTitle from "../Common/SectionTitle";
import PricingBox from "./PricingBox";

const Pricing = () => {
  const [pricingData, setPricingData] = useState<Price[]>([]);

  useEffect(() => {
    const loadPricingData = async () => {
      const data = await getPricingData();
      setPricingData(data);
    };

    loadPricingData();
  }, []);

  return (
    <section
      id="pricing"
      className="relative z-20 overflow-hidden bg-white pb-12 pt-20 dark:bg-[#0a0a0c] lg:pb-[90px] lg:pt-[120px]"
    >
      <div className="container">
        <div className="mb-[60px]">
          <SectionTitle
            subtitle="Daftar Paket"
            title="Pilih Paket yang Tepat untuk Bisnis Anda"
            paragraph="Berikut adalah pilihan paket langganan MrCarWash. Bandingkan fitur dan harga untuk menemukan solusi terbaik bagi bisnis cuci mobil Anda."
            center
          />
        </div>
        <div className="-mx-4 flex flex-wrap gap-y-8 justify-center">
          {pricingData.map((product, i) => (
            <PricingBox key={i} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;