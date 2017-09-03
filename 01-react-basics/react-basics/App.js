import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class App extends React.Component {

  contructor(props) {
    super(props);
    this.aumentarContador = this.aumentarContador.bind(this);
    this.reducirContador = this.reducirContador.bind(this);
    this.state = {
      contador: 0
    }
  }

  aumentarContador() {
    this.setState({
      contador: this.state.contador + 1
    })
  }

  reducirContador() {
    this.setState({
      contador: this.state.contador - 1
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Contador valor={this.state.contador} />

        <Button
          onPress={this.aumentarContador}
          title="Aumentar"
          color="#841584"
        />

        <Button
          onPress={this.reducirContador}
          title="Reducir"
          color="#841584"
        />
      </View>
    );
  }
}

const Contador = ({valor}) => (
  <View>
    <Text>{valor}</Text>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
