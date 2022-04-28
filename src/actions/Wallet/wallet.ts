import axios from "axios";
import { ENVVARS } from "../../../envvars";
import { getToken } from "../Login/login";

export interface Wallet {
  old: boolean;
  favorite: boolean;
  address: string;
  eth: number;
  usd: number;
  euro: number;
}

interface Wallets {
  wallets: Wallet[];
}

export const getWallets = async (): Promise<Wallet[] | undefined> => {
  const token = getToken();
  if (token) {
    const wallets = await axios
      .get<Wallets>(ENVVARS.BACKEND_API + "/wallets", { headers: { token } })
      .then((res) => {
        return res.data.wallets;
      });
    return wallets;
  }
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
      .patch(`${ENVVARS.BACKEND_API}/wallets/${address}/favorite`, {
        headers: { token },
      })
      .then((res) => {
        return res.data;
      });
  }
};
