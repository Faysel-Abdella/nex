export interface TocItem {
  id: string;
  text: string;
  level: number;
}

type BillingPeriod = "/month" | "/year" | string;

type MigrationType = "one-time" | "included";

interface MigrationInfo {
  price: number;
  type: MigrationType;
  note: string;
}

interface FeatureCategory {
  title: string; // can be empty string in enterprise
  features: string[];
}

interface PriceRange {
  min: number;
  max: number | string; // your data mixes number + formatted string
}

interface BasePlan {
  id: "starter" | "business" | "pro" | "enterprise";
  name: string;
  billingPeriod: BillingPeriod;
  tagline: string;
  team?: string;
  cta: string;
  inclusionLabel?: string;
  modalInclusionLabel?: string;
  summarizedFeatures: string[];
  featureCategories: FeatureCategory[];
  migration: MigrationInfo;
}

/**
 * Plans with a fixed monthly price
 */
interface FixedPricePlan extends BasePlan {
  price: number;
  priceRange?: never;
}

/**
 * Enterprise-style plan that ALSO shows a range
 */
interface RangePricePlan extends BasePlan {
  id: "enterprise";
  price: number; // base display price (e.g. "starting from")
  priceRange: PriceRange;
}

export type PricingPlan = FixedPricePlan | RangePricePlan;
