import React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

class Header extends React.Component {
    render() {
        return (
            <View style={styles.headerContainer}>
                <Text style={styles.textStyle}> POMODORO TIMER </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    headerContainer: {
        backgroundColor: 'rgb(0,135,205)',
        height: 130,
        justifyContent: "center",
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 1,
        elevation: 5,
        position: "relative",
    },
    textStyle: {
        color: "white",
        fontSize: 30,
        fontWeight: "300",
        marginTop: 50,
        letterSpacing: 1.2,
    }
})

export default Header;