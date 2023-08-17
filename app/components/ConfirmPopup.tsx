/*************************************************
 * Wallet
 * @exports
 * ConfirmPopup.tsx
 * Created by Dhivya on 08/08/2023
 * Copyright © 2023 Wallet. All rights reserved.
 *************************************************/

// imports
import {View, Text, Pressable, StyleSheet} from 'react-native';
import Modal from 'react-native-modal';

// components and utilities
import {COLOR, FONT_FAMILY, FONT_SIZE} from '../utils/Constants';

type Params = {
  key?: string;
  title?: string;
  label?: string;
  label2?: string;
  isVisible?: boolean;
  setIsVisible?: () => void;
  confirmText?: string;
  cancelText?: string;
  onConfirmClick?: () => void;
  onCancelClick?: () => void;
  confirmLoading?: boolean;
};

export default ({
  key = 'ConfirmPopup',
  title,
  label,
  label2,
  isVisible,
  setIsVisible = () => {},
  confirmText = 'Yes',
  cancelText = 'No',
  onConfirmClick = () => {},
  onCancelClick = () => {},
}: Params) => {
  return (
    <Modal
      key={key}
      isVisible={isVisible}
      hasBackdrop={true}
      backdropOpacity={0.1}
      animationIn="zoomIn"
      animationOut="zoomOut"
      onBackdropPress={setIsVisible}
      onBackButtonPress={setIsVisible}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View>
            {!!title && <Text style={styles.modalTitle}>{title}</Text>}
            <Text style={styles.modalText}>{label}</Text>
            {!!label2 && <Text style={styles.modalText}>{label2}</Text>}
          </View>
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Pressable
              style={[styles.button, styles.buttonOutlined]}
              onPress={onCancelClick}>
              <Text style={[styles.btnText, styles.oulinedBtnText]}>
                {cancelText}
              </Text>
            </Pressable>
            <Pressable style={[styles.button]} onPress={onConfirmClick}>
              <Text style={styles.btnText}>{confirmText}</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    backgroundColor: COLOR.WHITE,
    width: '92%',
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    width: '48%',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    backgroundColor: COLOR.PRIMARY_1,
  },
  buttonOutlined: {
    backgroundColor: COLOR.WHITE,
    borderWidth: 1,
    borderColor: COLOR.PRIMARY_1,
  },
  btnText: {
    color: COLOR.WHITE,
    fontFamily: FONT_FAMILY.BOLD,
    fontSize: FONT_SIZE.REGULAR,
    textAlign: 'center',
  },
  oulinedBtnText: {
    color: COLOR.PRIMARY_1,
  },
  modalTitle: {
    marginBottom: 4,
    color: COLOR.BLACK,
    fontSize: FONT_SIZE.M,
    fontFamily: FONT_FAMILY.SEMI_BOLD,
    alignSelf: 'center',
  },
  modalText: {
    marginBottom: 20,
    marginTop: 5,
    color: COLOR.BLACK,
    fontSize: FONT_SIZE.S,
    fontFamily: FONT_FAMILY.REGULAR,
  },
});
