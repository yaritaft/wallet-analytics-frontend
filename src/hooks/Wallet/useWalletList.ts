import { Dispatch, SetStateAction, useState } from "react";
import { useAsyncEffect } from "use-async-effect";
import {
  ExchangeRate,
  getCurrentExchangeRate,
} from "../../actions/ExchangeRate/exchangeRate";
import { getWallets, WalletResponse } from "../../actions/Wallet/wallet";

interface Output {
  exchangeRates: ExchangeRate | undefined;
  setExchangeRates: Dispatch<SetStateAction<ExchangeRate | undefined>>;
  wallets: WalletResponse[];
  setWallets: Dispatch<SetStateAction<WalletResponse[]>>;
  deletionMode: boolean;
  setDeletionMode: Dispatch<SetStateAction<boolean>>;
  favoriteMode: boolean;
  setFavoriteMode: Dispatch<SetStateAction<boolean>>;
}

export const useWalletList = (): Output => {
  const [exchangeRates, setExchangeRates] = useState<ExchangeRate>();
  const [wallets, setWallets] = useState<WalletResponse[]>([]);
  const [deletionMode, setDeletionMode] = useState(false);
  const [favoriteMode, setFavoriteMode] = useState(false);

  useAsyncEffect(async () => {
    const currentExchangeRate = await getCurrentExchangeRate();
    setExchangeRates(currentExchangeRate);
  }, [exchangeRates?.ETHToEuro, exchangeRates?.ETHToUSD]);

  useAsyncEffect(async () => {
    const wallets = await getWallets();
    setWallets(wallets);
  }, [
    exchangeRates?.ETHToEuro,
    exchangeRates?.ETHToUSD,
    deletionMode,
    favoriteMode,
  ]);
  return {
    exchangeRates,
    setExchangeRates,
    wallets,
    setWallets,
    deletionMode,
    setDeletionMode,
    favoriteMode,
    setFavoriteMode,
  };
};
