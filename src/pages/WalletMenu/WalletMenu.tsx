import Popup from "react-modal";
import { customStylesCreateEventPopUp } from "./customStylesPopUp";
import "./WalletMenu.css";
import { Logout } from "../../components/Logout/Logout";
import { WalletList } from "../../components/WalletList/WalletList";
import { useState, useCallback } from "react";
import { storeWallet } from "../../actions/Wallet/wallet";

interface Properties {
  setToken: (value: string | null) => void;
}

const addWallet = async (wallet: string): Promise<void> => {
  storeWallet(wallet);
  window.location.reload();
};

export const WalletMenu = ({ setToken }: Properties) => {
  const [isOpenPopUp, setIsOpenPopUp] = useState(false);
  const [newWallet, setNewWallet] = useState("");
  const openModal = useCallback(() => {
    setIsOpenPopUp(true);
  }, [setIsOpenPopUp]);
  const closeModal = useCallback(() => {
    setIsOpenPopUp(false);
  }, [setIsOpenPopUp]);

  return (
    <div className="wallet-list">
      {isOpenPopUp && (
        <Popup
          isOpen={isOpenPopUp}
          className="popup"
          style={customStylesCreateEventPopUp}
          onRequestClose={closeModal}
        >
          <div className="add-new-wallet">
            <h1>Add new wallet address</h1>
            <input
              type="text"
              value={newWallet}
              onChange={(e) => setNewWallet(e.target.value)}
            />
            <div className="buttons">
              <button onClick={closeModal}>Cancel</button>
              <button onClick={() => addWallet(newWallet)}>Save</button>
            </div>
          </div>
        </Popup>
      )}
      <div className="buttons">
        <Logout setToken={setToken} />
        <button className="add-wallet" onClick={openModal}>
          +
        </button>
      </div>
      <WalletList />
    </div>
  );
};
