import { Wallet } from "../Wallet/Wallet";
import { useWalletList } from "../../hooks/Wallet/useWalletList";

export const WalletList = () => {
  const {
    exchangeRates,
    setExchangeRates,
    wallets,
    deletionMode,
    setDeletionMode,
    favoriteMode,
    setFavoriteMode,
  } = useWalletList();

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
