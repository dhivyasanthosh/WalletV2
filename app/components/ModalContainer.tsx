/*************************************************
 * Wallet
 * @exports
 * ModalContainer.tsx
 * Created by Dhivya on 31/07/2023
 * Copyright © 2023 Wallet. All rights reserved.
 *************************************************/

// imports
import Modal from 'react-native-modal';

type Params = {
  children: any;
  isVisible: boolean;
  backdropOpacity: number;
  setIsVisible?: () => void;
};

export default ({
  isVisible,
  children,
  backdropOpacity,
  setIsVisible,
}: Params) => {
  return (
    <Modal
      isVisible={isVisible}
      hasBackdrop={true}
      backdropOpacity={backdropOpacity}
      animationIn="fadeIn"
      animationOut="fadeOut"
      onBackdropPress={setIsVisible}
      onBackButtonPress={setIsVisible}>
      {children}
    </Modal>
  );
};
