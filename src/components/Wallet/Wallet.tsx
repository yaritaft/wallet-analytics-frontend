import { useState } from "react";
import { CrossIcon } from "../../assets/svg/CrossIcon";
import { EditIcon } from "../../assets/svg/EditIcon";
import { TickIcon } from "../../assets/svg/TickIcon";
import {
  Currencies,
  Currency,
  CurrencySelect,
} from "../CurrencySelect/CurrencySelect";
import "./Wallet.css";
import {
  ExchangeRate,
  updateExchangeRate,
} from "../../actions/ExchangeRate/exchangeRate";
import { removeWallet, setFavoriteWallet } from "../../actions/Wallet/wallet";

interface Properties {
  favoriteMode: boolean;
  deletionMode: boolean;
  setDeletionMode: (value: boolean) => void;
  setFavoriteMode: (value: boolean) => void;
  address: string;
  old: boolean;
  favorite: boolean;
  dolarBalance: number;
  euroBalance: number;
  exchangeRates: ExchangeRate;
  setExchangeRates: (value: ExchangeRate) => void;
}

export const Wallet = ({
  favoriteMode,
  deletionMode,
  setDeletionMode,
  setFavoriteMode,
  address,
  old,
  dolarBalance,
  euroBalance,
  exchangeRates,
  favorite,
  setExchangeRates,
}: Properties) => {
  const [currency, setCurrency] = useState<Currency>(
    Currencies.USD as Currency
  );
  const [isEditMode, setEditMode] = useState(false);
  const [editValue, setEditValue] = useState<number>(
    currency === Currencies.USD
      ? exchangeRates.ETHToUSD
      : exchangeRates.ETHToEuro
  );
  const handleCancel = () => {
    setEditMode(false);
  };
  const handleSave = () => {
    updateExchangeRate(
      currency === Currencies.USD
        ? { ...exchangeRates, ETHToUSD: Number(editValue) }
        : { ...exchangeRates, ETHToEuro: Number(editValue) }
    );
    if (currency === Currencies.USD) {
      setExchangeRates({ ...exchangeRates, ETHToUSD: Number(editValue) });
    } else if (currency === Currencies.EURO) {
      setExchangeRates({ ...exchangeRates, ETHToEuro: Number(editValue) });
    }
    setEditMode(false);
  };
  const handleEdit = () => {
    setEditMode(true);
    setEditValue(
      currency === Currencies.USD
        ? exchangeRates?.ETHToUSD!
        : exchangeRates?.ETHToEuro!
    );
  };

  const handleFavorite = () => {
    setFavoriteWallet(address);
    setFavoriteMode(!favoriteMode);
  };

  const handleRemoveWallet = () => {
    removeWallet(address);
    setDeletionMode(!deletionMode);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditValue(Number(e.target.value));
  };
  return (
    <div className="wallet-container">
      <div className="wallet-header">
        <span>{`Address: ${address}`}</span>
        <div className="buttons">
          <button onClick={handleRemoveWallet}>Remove</button>
          <button onClick={handleFavorite}>
            {favorite ? "Remove Favorite" : "Add Favorite"}
          </button>
        </div>
      </div>
      {old && <div className="old-wallet">⚠ Wallet is old!</div>}
      <div className="wallet">
        <div className="exchange-rate">
          {!isEditMode && (
            <>
              <EditIcon onClick={handleEdit} />
              <span className="exchange-rate-amount">
                {currency === Currencies.USD
                  ? String(exchangeRates?.ETHToUSD)
                  : String(exchangeRates?.ETHToEuro)}
              </span>
            </>
          )}
          {isEditMode && (
            <>
              <div className="accept-cancel-icons">
                <CrossIcon onClick={handleCancel} />
                <TickIcon onClick={handleSave} />
              </div>
              <input
                className="exchange-rate-amount"
                type="number"
                value={editValue}
                onChange={handleChange}
              />
            </>
          )}
        </div>
        <div className="currency">
          <CurrencySelect currency={currency} setCurrency={setCurrency} />
          <span className="total-balance">
            {currency === Currencies.USD ? dolarBalance : euroBalance}
          </span>
        </div>
      </div>
    </div>
  );
};
