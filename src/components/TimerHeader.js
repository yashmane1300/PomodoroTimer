import React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

class TimerHeader extends React.Component {

    // handles the display of timer header
    handleDisplay = () => {
        if (this.props.intervalType === "Working") {
            if (this.props.running === true) {
                return "Keep working hard!"
            }
            else {
                return "Time to work!"
            }
        }
        else {
            if (this.props.running === true) {
                return "It's break time! Enjoy"
            }
            else {
                return "Relax!"
            }
        }

    }
    render() {

        let texttoshow = this.handleDisplay()
        return (
            <Text style={styles.textStyle}>{texttoshow}</Text>
        )
    }
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 25,
        fontWeight: "300",
        marginTop: 7,
        padding: 40
    }
});

export default TimerHeader;