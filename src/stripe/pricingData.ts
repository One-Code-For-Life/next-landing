
import { Price } from "@/types/price";

interface Feature {
  description: string;
}

interface TierFeature {
  id: string;
  name: string;
  duration: number;
  price: number;
  features: Feature[];
}

export const getPricingData = async (): Promise<Price[]> => {
  const apiURL = process.env.NEXT_PUBLIC_MRCARWASH_API;

  if (!apiURL) {
    throw new Error("NEXT_PUBLIC_MRCARWASH_API environment variable is not defined.");
  }

  try {
    const response = await fetch(`${apiURL}/tier-features`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: TierFeature[] = await response.json();

    return data.map((item) => ({
      id: item.id,
      name: item.name,
      duration: item.duration,
      unit_amount: item.price / 12,
      nickname: item.name,
      offers: item.features.map((feature) => feature.description),
    }));
  } catch (error: any) {
    console.error("Error fetching pricing data:", error);
    throw error; // Re-throw the error to be handled by the caller
  }
};
