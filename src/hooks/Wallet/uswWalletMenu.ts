import { Dispatch, SetStateAction, useCallback, useState } from "react";

interface Output {
  isOpenPopUp: boolean;
  setIsOpenPopUp: Dispatch<SetStateAction<boolean>>;
  newWallet: string;
  setNewWallet: Dispatch<SetStateAction<string>>;
  openModal: () => void;
  closeModal: () => void;
}

export const useWalletMenu = (): Output => {
  const [isOpenPopUp, setIsOpenPopUp] = useState(false);
  const [newWallet, setNewWallet] = useState("");
  const openModal = useCallback(() => {
    setIsOpenPopUp(true);
  }, [setIsOpenPopUp]);
  const closeModal = useCallback(() => {
    setIsOpenPopUp(false);
  }, [setIsOpenPopUp]);
  return {
    isOpenPopUp,
    setIsOpenPopUp,
    newWallet,
    setNewWallet,
    openModal,
    closeModal,
  };
};
