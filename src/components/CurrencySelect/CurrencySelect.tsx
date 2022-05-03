import "./CurrencySelect.css";

export const Currencies = {
  USD: "USD",
  EURO: "EURO",
};

export type Currency = keyof typeof Currencies;

interface Properties {
  currency: Currency;
  setCurrency: (value: Currency) => void;
}

export const CurrencySelect = ({ currency, setCurrency }: Properties) => (
  <select
    className="currency-select"
    onChange={(e) => setCurrency(e.target.value as Currency)}
  >
    {Object.values(Currencies).map((currency) => (
      <option>{currency}</option>
    ))}
  </select>
);
