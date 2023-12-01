import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { Button, HelperText, TextInput } from 'react-native-paper';
import styles from '../assets/styles/styles';
import entradaCorrecta from '../assets/functions/utils';
import Resultat from './resultat';

const Calculadora = () => {

    const [peso, setPeso] = useState("");
    const [altura, setAltura] = useState("");
    const [pesoError, setPesoError] = useState("");
    const [alturaError, setAlturaError] = useState("");
    const [imc, setImc] = useState(0);
    const [mostraResultat, setMostraResultat] = useState(false);


    const showButton = () => {
        return (pesoError === '' && alturaError === '');
    }


    const CalculaIMC = () => {
        let pesoCalc = parseFloat(peso);
        let alturaCalc = parseFloat(altura);

        const imc = pesoCalc / (alturaCalc * alturaCalc);

        setImc(imc);
        setMostraResultat(true);
    };

    const handleChangeInputPes = (text) => {
        setMostraResultat(false);
        if (text === "") {
            setPesoError("");
            setPeso(text);
        } else {
            if (entradaCorrecta(text)) {
                const pesoFloat = parseFloat(text);
                if (pesoFloat <= 0) {
                    setPesoError("El pes ha de ser major de 0 kg.");
                } else {
                    setPesoError('');
                }
                setPeso(text);
            } else {
                setPeso(text);
                setPesoError('Escriu el pes en kg. i amb valors positius (ex: 50.5)');
            }
        }
    };

    const handleChangeInputAltura = (text) => {

        setMostraResultat(false);
        if (text === "") {
            setAlturaError("");
            setAltura(text);
        } else {
            if (entradaCorrecta(text)) {
                const alturaFloat = parseFloat(text);
                if (alturaFloat <= 0) {
                    setAlturaError("L'alçada ha de ser major de 0.0 m.");
                } else {
                    setAlturaError('');
                }
                setAltura(text);
            } else {
                setAltura(text);
                setAlturaError('Escriu l\'alçada en m. i amb valors positius (ex: 1.25)');
            }
        }
    };

    return (
        <View style={styles.sectionData}>
            <View style={styles.sectionPesAlturaLine}>
                <View style={styles.sectionInputDivider}>
                    <TextInput
                        mode='outlined'
                        outlineColor='green'
                        activeOutlineColor='green'
                        style={styles.textInput}
                        label="Pes (kg)"
                        onChangeText={handleChangeInputPes}
                        right={<TextInput.Affix text="kg." />}
                        value={peso}
                        keyboardType="numeric"
                    />
                </View>
                <View style={styles.sectionInputDivider}>
                    <HelperText style={styles.errorText} type="error">
                        {pesoError}
                    </HelperText>
                </View>
            </View>
            <View style={styles.sectionPesAlturaLine}>
                <View style={styles.sectionInputDivider}>
                    <TextInput
                        mode='outlined'
                        outlineColor='orange'
                        activeOutlineColor='orange'
                        style={styles.textInput}
                        label="Alçada (m)"
                        right={<TextInput.Affix text="m." />}
                        onChangeText={handleChangeInputAltura}
                        value={altura}
                        keyboardType="numeric"
                    />
                </View>
                <View style={styles.sectionInputDivider}>
                    <HelperText type="error">
                        {alturaError}
                    </HelperText>
                </View>
            </View>
            <View style={styles.sectionCalcula}>
                {showButton() && (<Button contentStyle={styles.buttonContent} icon={'calculator'} mode="contained" onPress={CalculaIMC}>
                    Calcular
                </Button>)}
            </View>
            {mostraResultat && <Resultat valorImc={imc.toFixed(2)} />}
        </View>
    );
}

export default Calculadora;