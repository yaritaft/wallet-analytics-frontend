import { useEffect, useState } from "react";
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
  getCurrentExchangeRate,
} from "../../actions/ExchangeRate/exchangeRate";

import { useAsyncEffect } from "use-async-effect";

export const Wallet = () => {
  const [currency, setCurrency] = useState<Currency>(
    Currencies.USD as Currency
  );
  const [isOld, setIsOld] = useState(true);
  const [isEditMode, setEditMode] = useState(false);
  const [exchangeRates, setExchangeRates] = useState<ExchangeRate>();
  const handleCancel = () => {
    setEditMode(false);
  };
  const handleSave = () => {
    // setExchangeRate({}); // TODO: TAKE FROM INPUT THE VALUE
    setEditMode(false);
  };
  const handleEdit = () => {
    setEditMode(true);
  };
  useAsyncEffect(async () => {
    const currentExchangeRate = { ETHToEuro: 1.23, ETHToUSD: 4 };
    // const currentExchangeRate = await getCurrentExchangeRate(); // TODO: ABOVE LINE REPLACE THIS
    setExchangeRates(currentExchangeRate);
  }, [exchangeRates?.ETHToEuro, exchangeRates?.ETHToUSD]);
  return (
    <div className="wallet-container">
      {isOld && <div className="old-wallet">⚠ Wallet is old!</div>}
      <div className="wallet">
        <div className="exchange-rate">
          {!isEditMode && (
            <>
              <EditIcon onClick={handleEdit} />
              <span className="exchange-rate-amount">{"1.32"}</span>
            </>
          )}
          {isEditMode && (
            <>
              <div className="accept-cancel-icons">
                <CrossIcon onClick={handleCancel} />
                <TickIcon />
              </div>
              <input
                className="exchange-rate-amount"
                value={currency === Currencies.USD ? 2 : 4}
              />
            </>
          )}
        </div>
        <div className="currency">
          <CurrencySelect currency={currency} setCurrency={setCurrency} />
          <span className="total-balance">{"30 $"}</span>
        </div>
      </div>
    </div>
  );
};
