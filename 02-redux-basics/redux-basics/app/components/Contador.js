import {styles} from '../styles/Contador.js';

const Contador = ({valor}) => (
  <View>
    <Text style={styles.contador}>{valor}</Text>
  </View>
)

export default Contador;
