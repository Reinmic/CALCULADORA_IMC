import React from 'react';
import { Text, View } from 'react-native';
import styles from '../assets/styles/styles';

const Resultat = ({ valorImc }) => {

    const missatgeAMostrar = () => {
        let mensaje = '-';
        let color = 'black';

        if (valorImc < 18.5) {
            mensaje = 'Peso insuficiente';
            color = 'green';
        } else if (valorImc < 25) {
            mensaje = 'Peso normal';
            color = 'green';
        } else if (valorImc < 27) {
            mensaje = 'Sobrepeso grado I (preobesidad)';
            color = 'green';
        } else if (valorImc < 30) {
            mensaje = 'Sobrepeso grado II (preobesidad)';
            color = 'orange';
        } else if (valorImc < 35) {
            mensaje = 'Obesidad de tipo I';
            color = 'orange';
        } else if (valorImc < 40) {
            mensaje = 'Obesidad de tipo II';
            color = 'orange';
        } else if (valorImc < 50) {
            mensaje = 'Obesidad de tipo III (mórbida)';
            color = 'red';
        } else {
            mensaje = 'Obesidad de tipo IV (extrema)';
            color = 'red';
        }

        return { mensaje, color };
    }

    const resultado = missatgeAMostrar();

    return (
        <View style={styles.sectionResult}>
            <Text style={{ color: resultado.color, fontSize: 20, fontWeight: '600' }}>
                Tens un IMC de: {valorImc}
            </Text>
            <Text style={{ color: resultado.color, fontSize: 20, fontWeight: '600' }}>
                {resultado.mensaje}
            </Text>
        </View>
    );
}

export default Resultat;
