import axios from "axios";
import { ENVVARS } from "../../../envvars";
import { getToken } from "../Login/login";

export interface ExchangeRate {
  ETHToUSD?: number | null;
  ETHToEuro?: number | null;
}

export const setExchangeRate = async (
  exchangeRate: ExchangeRate
): Promise<void> => {
  const token = getToken();
  if (token) {
    // SEND NULL to Wipe hardcoded exchange rate.
    await axios
      .patch(ENVVARS.BACKEND_API + "/exchange-rate", exchangeRate, {
        headers: { token },
      })
      .then((res) => {
        return res.data;
      });
  }
};

export const getCurrentExchangeRate = async (): Promise<ExchangeRate> => {
  const token = getToken();
  if (!token) {
    throw new Error("Invalid token.");
  }
  // SEND NULL to Wipe hardcoded exchange rate.
  const exchangeRates = await axios
    .get<ExchangeRate>(ENVVARS.BACKEND_API + "/exchange-rate", {
      headers: { token },
    })
    .then((res) => {
      return res.data;
    });
  return exchangeRates;
};
