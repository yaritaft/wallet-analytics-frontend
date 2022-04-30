import Popup from "react-modal";
import { customStylesCreateEventPopUp } from "./customStylesPopUp";
import "./WalletMenu.css";
import { Logout } from "../../components/Logout/Logout";
import { WalletList } from "../../components/WalletList/WalletList";
import { useState } from "react";
import { storeWallet } from "../../actions/Wallet/wallet";

interface Properties {
  setToken: (value: string | null) => void;
}

export const WalletMenu = ({ setToken }: Properties) => {
  const [isOpenPopUp, setIsOpenPopUp] = useState(false);
  const [newWallet, setNewWallet] = useState("");
  const openModal = () => {
    setIsOpenPopUp(true);
  };
  const closeModal = () => {
    setIsOpenPopUp(false);
  };

  const addWallet = async (): Promise<void> => {
    storeWallet(newWallet);
    window.location.reload();
  };

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
              <button onClick={addWallet}>Save</button>
            </div>
          </div>
        </Popup>
      )}
      <div className="buttons">
        <Logout setToken={setToken} />
        <button className="add-wallet" onClick={openModal}>
          Add Wallet
        </button>
      </div>
      <WalletList />
    </div>
  );
};
