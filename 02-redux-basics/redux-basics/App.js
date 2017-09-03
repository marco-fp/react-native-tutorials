import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {styles} from './app/styles/App';
import {suma, resta} from './app/actions/counterActions';
import Contador from './app/components/Contador';

const App = ({valor, suma, resta}) => (
  <View style={styles.container}>
    <Contador valor={valor} />

    <View style={styles.botones}>
      <Button
        onPress={suma}
        title="Suma"
        color="#841584"
      />

      <Button
        onPress={resta}
        title="Resta"
        color="#841584"
      />
    </View>
  </View>
);

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    suma,
    resta
  }, dispatch);
};

const mapStateToProps = ({contador: {valor}}) => ({
  valor
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
