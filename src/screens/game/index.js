import React, {useState, useRef, useEffect} from "react";
import { View, Text, Button, Alert } from "react-native";
import { Card, NumberContainer } from '../../components'
import colors from "../../constans/colors";
import { styles } from "./styles";



const generateRandomNumber = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const randomNumber = Math.floor(Math.random() * (max - min) + min)
    if(randomNumber === exclude) {
        return generateRandomNumber(min, max, exclude)
    } else {
        return randomNumber;
    }
}

const Game = ({selectedNumber, onGameOver}) =>{
    const [currentGuess, setCurrentGuess] = useState(generateRandomNumber(1, 100, selectedNumber));
    const [round, setRound] = useState(0);

    const currentLow = useRef(1);
    const currentHigh = useRef(100);

    const onHandleNextGuess = (direction) => {
        if (
            direction === 'lower' && currentGuess < selectedNumber || direction === 'greater' && currentGuess > selectedNumber
        ) {
            Alert.alert ('Don\'t', 'You know that this wrong', [{text: 'Sorry', style: 'cancel'}]);
        }
        if(direction ==='lower'){
            currentHigh.current = currentGuess;
        } else {
            currentLow.current = currentGuess;
        }
        const nextNumber = generateRandomNumber(currentLow.current, currentHigh.current, currentGuess);
        setCurrentGuess(nextNumber);
        setRound(currentRounds => currentRounds + 1);
    }

    useEffect(() => {
        if(currentGuess === selectedNumber){
            onGameOver(round)
        }
    }, [currentGuess, selectedNumber, onGameOver]);

    return(
        <View style={styles.container}>
            <Card style={styles.content}>
                <Text style={styles.title}>Opponent's Number</Text>
                <NumberContainer number={currentGuess}/>
                <View style={styles.containerButton}>
                    <Button                        
                        title="lower"
                        onPress={() => onHandleNextGuess('lower')}
                        color={colors.secondary}
                    />
                    <Button
                        title="greater"
                        onPress={() => onHandleNextGuess('greater')}
                        color={colors.primary}
                    />
                </View>
            </Card>   
        </View>
    )
}

export default Game;