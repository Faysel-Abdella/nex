import { useFormatter } from "next-intl";
import React from "react";

interface FormattedPriceProps {
  amount: number;
  className?: string;
}
const FormattedPrice = ({ amount, className }: FormattedPriceProps) => {
  const formatter = useFormatter();

  return <span className={className}>{formatter.number(amount)}</span>;
};

export default FormattedPrice;
