import Popup from "react-modal";
import { customStylesCreateEventPopUp } from "./customStylesPopUp";

import { Logout } from "../../components/Logout/Logout";
import { WalletList } from "../../components/WalletList/WalletList";
import { useState } from "react";
import { storeWallet } from "../../actions/Wallet/wallet";

export const WalletMenu = () => {
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
          <input
            type="text"
            value={newWallet}
            onChange={(e) => setNewWallet(e.target.value)}
          />
          <div>
            <button onClick={closeModal}>Cancel</button>
            <button onClick={addWallet}>Save</button>
          </div>
        </Popup>
      )}
      <button onClick={openModal}>Add Wallet</button>
      <Logout />
      <WalletList />
    </div>
  );
};
