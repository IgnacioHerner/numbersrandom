import React from "react";
import { View, Text, Image, Button } from "react-native";
import { Card } from '../../components'
import colors from "../../constans/colors";
import { styles } from "./styles";

const GameOver = ({round, selectedNumber, onRestart}) => {
    return(
    <View style={styles.container}>
        <Card styles={styles.content}>
            <Image source={{uri: 'https://play-lh.googleusercontent.com/shAAX3m_CJQyahe1eIochbdEqH7FDiLEQ9i5WdI8DwNj2N9auke35k8CRmyL0mh7ULs'}}  style={styles.image} />
            <Text style={styles.textContent}>Rounds: {round}</Text>
            <Text style={styles.textContent}>Selected Number: {selectedNumber}</Text>
            <Button
                title="Restart"
                onPress={onRestart}
                color={colors.primary}
            />
        </Card>
    </View>
    )
}

export default GameOver;