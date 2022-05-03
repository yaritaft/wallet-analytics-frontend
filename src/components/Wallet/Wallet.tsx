import { CrossIcon } from "../../assets/svg/CrossIcon";
import { EditIcon } from "../../assets/svg/EditIcon";
import { TickIcon } from "../../assets/svg/TickIcon";
import { Currencies, CurrencySelect } from "../CurrencySelect/CurrencySelect";
import "./Wallet.css";
import { ExchangeRate } from "../../actions/ExchangeRate/exchangeRate";
import { useWallet } from "../../hooks/Wallet/useWallet";

interface Properties {
  favoriteMode: boolean;
  deletionMode: boolean;
  setDeletionMode: (value: boolean) => void;
  setFavoriteMode: (value: boolean) => void;
  address: string;
  setExchangeRates: (value: ExchangeRate) => void;
  exchangeRates: ExchangeRate;
  favorite: boolean;
  old: boolean;
  dolarBalance: number;
  euroBalance: number;
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
  const {
    handleRemoveWallet,
    handleFavorite,
    handleEdit,
    handleCancel,
    handleSave,
    handleChange,
    isEditMode,
    editValue,
    currency,
    setCurrency,
  } = useWallet({
    favoriteMode,
    deletionMode,
    setDeletionMode,
    setFavoriteMode,
    address,
    setExchangeRates,
    exchangeRates,
  });
  return (
    <div className="wallet-container">
      <div className="wallet-header">
        <span>{`Address: ${address}`}</span>
        <div className="buttons">
          <div style={{ color: "red" }}>
            <button className={"cross"} onClick={handleRemoveWallet}>
              ✖
            </button>
          </div>
          <button
            className={favorite ? "is-favorite" : undefined}
            onClick={handleFavorite}
          >
            {favorite ? "★" : "☆"}
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
