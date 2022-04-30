import axios from "axios";
import { ENVVARS } from "../../../envvars";
import { getToken } from "../Login/login";

export interface ExchangeRate {
  ETHToUSD: number;
  ETHToEuro: number;
}

export const updateExchangeRate = async (
  exchangeRate: ExchangeRate
): Promise<void> => {
  const token = getToken();
  if (token) {
    // SEND NULL to Wipe hardcoded exchange rate.
    await axios
      .patch(ENVVARS.BACKEND_API + "/exchange-rates", exchangeRate, {
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
  const exchangeRates = await axios
    .get<ExchangeRate>(ENVVARS.BACKEND_API + "/exchange-rates", {
      headers: { token },
    })
    .then((res) => {
      return res.data;
    });
  return exchangeRates;
};
