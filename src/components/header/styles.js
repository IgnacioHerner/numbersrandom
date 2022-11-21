import { StyleSheet } from "react-native";  
import colors from "../../constans/colors";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.primary,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 20,
    },
    title: {
        fontSize: 22,
        color: colors.white,
        fontWeight: 'bold',

    },
})