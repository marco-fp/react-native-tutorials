import React from 'react';
import { Text, View, Button } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import styles from './../styles/App';
import {sendCode, setCode} from './../actions/autenticationActions';
import AccessInfo from './../components/AccessInfo';

const MainView = ({accessStatus, code, sendCode}) => (
  <View style={styles.container}>
    <AccessInfo status={accessStatus} />

    <View style={styles.botones}>

      <Button
        onPress={sendCode}
        title="Access"
        color="#841584"
      />
    </View>
  </View>
);

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    sendCode
  }, dispatch);
};

const mapStateToProps = ({autentication: {code, accessStatus}}) => ({
  code,
  accessStatus
})

export default connect(mapStateToProps, mapDispatchToProps)(MainView);
