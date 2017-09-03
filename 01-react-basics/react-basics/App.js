import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.suma = this.suma.bind(this);
    this.resta = this.resta.bind(this);
    this.state = {
      contador: 0
    }
  }

  suma() {
    this.setState({
      contador: this.state.contador + 1
    })
  }

  resta() {
    this.setState({
      contador: this.state.contador - 1
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Contador valor={this.state.contador} />

        <View style={styles.botones}>
          <Button
            onPress={this.suma}
            title="Suma"
            color="#841584"
          />

          <Button
            onPress={this.resta}
            title="Resta"
            color="#841584"
          />
        </View>
      </View>
    );
  }
}

const Contador = ({valor}) => (
  <View>
    <Text style={styles.contador}>{valor}</Text>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contador: {
    fontSize: 50,
  },
  botones: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '50%'
  }
});
