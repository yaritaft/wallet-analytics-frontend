import { ChangeEventHandler, useEffect, useState } from "react";
import { CrossIcon } from "../../assets/svg/CrossIcon";
import { EditIcon } from "../../assets/svg/EditIcon";
import { TickIcon } from "../../assets/svg/TickIcon";
import {
  Currencies,
  Currency,
  CurrencySelect,
} from "../CurrencySelect/CurrencySelect";
import {
  ExchangeRate,
  getCurrentExchangeRate,
  updateExchangeRate,
} from "../../actions/ExchangeRate/exchangeRate";

import { useAsyncEffect } from "use-async-effect";
import { Wallet } from "../Wallet/Wallet";
import { getWallets, WalletResponse } from "../../actions/Wallet/wallet";

export const WalletList = () => {
  const [exchangeRates, setExchangeRates] = useState<ExchangeRate>();
  const [wallets, setWallets] = useState<WalletResponse[]>([]);
  const [deletionMode, setDeletionMode] = useState(false);
  const [favoriteMode, setFavoriteMode] = useState(false);

  useAsyncEffect(async () => {
    // const currentExchangeRate = { ETHToEuro: 1.23, ETHToUSD: 4 };
    const currentExchangeRate = await getCurrentExchangeRate(); // TODO: ABOVE LINE REPLACE THIS
    setExchangeRates(currentExchangeRate);
  }, [exchangeRates?.ETHToEuro, exchangeRates?.ETHToUSD]);

  useAsyncEffect(async () => {
    // const currentExchangeRate = { ETHToEuro: 1.23, ETHToUSD: 4 };
    const wallets = await getWallets(); // TODO: ABOVE LINE REPLACE THIS
    setWallets(wallets);
  }, [
    exchangeRates?.ETHToEuro,
    exchangeRates?.ETHToUSD,
    deletionMode,
    favoriteMode,
  ]);

  return (
    <div className="wallet-list">
      {exchangeRates &&
        wallets.map((wallet) => (
          <Wallet
            deletionMode={deletionMode}
            favoriteMode={favoriteMode}
            setDeletionMode={setDeletionMode}
            setFavoriteMode={setFavoriteMode}
            exchangeRates={exchangeRates}
            setExchangeRates={setExchangeRates}
            {...wallet}
          />
        ))}
    </div>
  );
};
