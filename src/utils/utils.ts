export const getNumberFromCurrency = (price: string): number => {
  const priceNumber = parseInt(price.replace(/[^0-9]/g, ""));
  return priceNumber;
};

export const formatCurrency = (amount: number): string => {
  return amount.toLocaleString("en-IN", { style: "currency", currency: "INR" });
};
