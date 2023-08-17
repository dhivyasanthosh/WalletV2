/*************************************************
 * Wallet
 * @exports
 * RadioButton.tsx
 * Created by Dhivya on 02/08/2023
 * Copyright © 2023 Wallet. All rights reserved.
 *************************************************/

// imports
import {View, Image, StyleSheet, TouchableOpacity} from 'react-native';

// components and utilities
import {IMAGES} from '../utils/SharedImages';

type Params = {
  value: boolean;
  onChange: (data: boolean) => void;
};

export default ({value, onChange}: Params) => {
  return (
    <View>
      <TouchableOpacity
        style={{flexDirection: 'row'}}
        onPress={() => {
          onChange(!value);
        }}>
        <Image
          style={styles.box}
          source={
            value ? IMAGES.radioButtonClicked : IMAGES.radioButtonUnClicked
          }
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    width: 20,
    height: 20,
    marginRight: 8,
  },
});
