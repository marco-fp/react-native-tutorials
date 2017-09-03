import React from 'react';
import { Text, View, Button, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import styles from './../styles/App';
import {sendCode, setCode} from './../actions/autenticationActions';
import AccessInfo from './../components/AccessInfo';

const MainView = ({accessStatus, code, setCode, sendCode}) => (
  <View style={styles.container}>
    <AccessInfo status={accessStatus} />

    <View style={styles.botones}>

      <TextInput
        onChangeText={(text) => setCode(text)}
        value={code}
      />
      <Button
        onPress={() => sendCode(code)}
        title="Access"
        color="#841584"
      />
    </View>
  </View>
);

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    sendCode,
    setCode
  }, dispatch);
};

const mapStateToProps = ({autentication: {code, accessStatus}}) => ({
  code,
  accessStatus
})

export default connect(mapStateToProps, mapDispatchToProps)(MainView);
