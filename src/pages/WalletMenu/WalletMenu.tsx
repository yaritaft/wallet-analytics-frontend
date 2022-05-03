import Popup from "react-modal";
import { customStylesCreateEventPopUp } from "./customStylesPopUp";
import "./WalletMenu.css";
import { Logout } from "../../components/Logout/Logout";
import { WalletList } from "../../components/WalletList/WalletList";
import { storeWallet } from "../../actions/Wallet/wallet";
import { useWalletMenu } from "../../hooks/Wallet/uswWalletMenu";

interface Properties {
  setToken: (value: string | null) => void;
}

const addWallet = async (wallet: string): Promise<void> => {
  storeWallet(wallet);
  window.location.reload();
};

export const WalletMenu = ({ setToken }: Properties) => {
  const { isOpenPopUp, closeModal, openModal, newWallet, setNewWallet } =
    useWalletMenu();

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
