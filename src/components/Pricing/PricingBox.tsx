import { Price } from "@/types/price";
import Link from "next/link";
import OfferList from "./OfferList";

const PricingBox = ({ product }: { product: Price }) => {
  return (
    <div className="w-full px-4 md:w-1/2 lg:w-1/3">
      <div className="relative h-full z-10 mb-10 overflow-hidden rounded-xl bg-white px-6 py-8 shadow-[0px_0px_40px_0px_rgba(0,0,0,0.08)] dark:bg-[#18181a] sm:px-8 sm:py-10 lg:px-6 lg:py-8 xl:px-10 xl:py-12">
        {product.nickname === "MPV" && (
          <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-md text-sm font-medium">
            Recommended
          </div>
        )}
        <div className="flex flex-col h-full gap-y-6">
          <span className="text-2xl font-semibold text-dark dark:text-white">
            {product.nickname}
          </span>
          <h2 className="text-3xl font-bold text-dark dark:text-white">
            <span className="text-xl font-medium">Rp </span>
            <span className="-ml-1 -tracking-[2px]">
              {(product.unit_amount).toLocaleString("id-ID", {
                currency: "IDR",
              })}
            </span>
            <span className="text-sm font-normal text-body-color dark:text-dark-6">
              {" "}
              / Bulan
            </span>
          </h2>

          <div>
            <h3 className="text-lg font-semibold text-dark dark:text-white mb-3">
              Keuntungan Paket {product.nickname}
            </h3>
            <ul className="list-disc pl-5 space-y-2">
              {product?.offers.map((offer, i) => (
                <li key={i}>
                  <OfferList text={offer} />
                </li>
              ))}
            </ul>
          </div>
          <div className="flex w-full justify-self-end mt-auto">
            <Link href="https://reg.mrcarwash.app" className="w-full rounded-md bg-primary px-4 py-2 text-center text-base font-medium text-white transition duration-300 hover:bg-primary/90">
              Purchase Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingBox;