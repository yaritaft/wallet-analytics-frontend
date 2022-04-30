import axios from "axios";
import { ENVVARS } from "../../../envvars";
import { getToken } from "../Login/login";

export interface WalletResponse {
  euroBalance: number;
  dolarBalance: number;
  account: string;
  balance: number;
  old: boolean;
  address: string;
  favorite: boolean;
}

interface Wallets {
  wallets: WalletResponse[];
}

export const getWallets = async (): Promise<WalletResponse[]> => {
  const token = getToken();
  if (!token) {
    throw new Error("No token stored in session.");
  }
  const wallets = await axios
    .get<Wallets>(ENVVARS.BACKEND_API + "/wallets", { headers: { token } })
    .then((res) => {
      return res.data.wallets;
    });
  return wallets;
};

export const storeWallet = async (address: string): Promise<void> => {
  const token = getToken();
  if (token) {
    await axios
      .post(
        ENVVARS.BACKEND_API + "/wallets",
        { address },
        { headers: { token } }
      )
      .then((res) => {
        return res.data;
      });
  }
};
export const setFavoriteWallet = async (address: string): Promise<void> => {
  const token = getToken();
  if (token) {
    await axios
      .patch(
        `${ENVVARS.BACKEND_API}/wallets/${address}/favorite`,
        {},
        {
          headers: { token },
        }
      )
      .then((res) => {
        return res.data;
      });
  }
};

export const removeWallet = async (address: string): Promise<void> => {
  const token = getToken();
  if (token) {
    await axios
      .delete(`${ENVVARS.BACKEND_API}/wallets/${address}`, {
        headers: { token },
      })
      .then((res) => {
        return res.data;
      });
  }
};
