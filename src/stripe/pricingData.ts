import { Price } from "@/types/price";

export const getPricingData = async (): Promise<Price[]> => {
  const apiURL =
    process.env.NODE_ENV === "development"
      ? "https://carwash.show/api"
      : "https://reg.mrcarwash.app/api";
  const response = await fetch(`${apiURL}/tier-features`);
  const data = await response.json();

  return data.map((item: any) => ({
    id: item.id,
    name: item.name,
    duration: item.duration,
    unit_amount: item.price / 12,
    nickname: item.name,
    offers: item.features.map((feature: any) => feature.description),
  }));
};
