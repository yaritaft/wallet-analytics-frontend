import { Dispatch, SetStateAction, useState } from "react";
import {
  ExchangeRate,
  updateExchangeRate,
} from "../../actions/ExchangeRate/exchangeRate";
import { removeWallet, setFavoriteWallet } from "../../actions/Wallet/wallet";
import {
  Currencies,
  Currency,
} from "../../components/CurrencySelect/CurrencySelect";

interface Output {
  handleRemoveWallet: () => void;
  handleFavorite: () => void;
  handleEdit: () => void;
  handleCancel: () => void;
  handleSave: () => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setEditValue: Dispatch<SetStateAction<number>>;
  isEditMode: boolean;
  editValue: number;
  currency: Currency;
  setCurrency: Dispatch<SetStateAction<"USD" | "EURO">>;
}

interface Properties {
  favoriteMode: boolean;
  deletionMode: boolean;
  setDeletionMode: (value: boolean) => void;
  setFavoriteMode: (value: boolean) => void;
  address: string;
  setExchangeRates: (value: ExchangeRate) => void;
  exchangeRates: ExchangeRate;
}

export const useWallet = ({
  favoriteMode,
  deletionMode,
  setDeletionMode,
  setFavoriteMode,
  address,
  setExchangeRates,
  exchangeRates,
}: Properties): Output => {
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
    setFavoriteWallet(address).then(() => setFavoriteMode(!favoriteMode));
  };

  const handleRemoveWallet = () => {
    removeWallet(address).then(() => setDeletionMode(!deletionMode));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditValue(Number(e.target.value));
  };

  return {
    handleRemoveWallet,
    handleFavorite,
    handleEdit,
    handleCancel,
    handleSave,
    handleChange,
    editValue,
    setEditValue,
    isEditMode,
    currency,
    setCurrency,
  };
};
