import numeral from "numeral";

const dollarFilter = (val) => {
  if (!val) return "$ 0";
  return numeral(val).format("$ 0.00a");
};
const percentageFilter = (value) => {
  if (!value) return "0%";
  return `${Number(value).toFixed(2)}%`;
};

export { dollarFilter, percentageFilter };
