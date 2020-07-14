import React from 'react';
import { Platform, StyleSheet, Text, View, TextInput } from 'react-native';
import Timer from './Timer'

class PomodoroTimer extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            workTime: 25,
            breakTime: 5,
            intervalType: "Working",
        }
    }

    // handles completion of timer
    handleTimerCompleted = () => {
        if (this.state.intervalType === "Working") {
            this.setState({
                intervalType: "Break"
            })
        }
        else {
            this.setState({
                intervalType: "Working"
            })
        }
    }

    // gets triggered on change of worktimer text
    handleWorkTime = (text) => {
        if (text >= 0) {
            this.setState({
                workTime: text
            })
        }
        else {
            alert("Time invalid. Setting value to default. Please enter valid time")
            this.setState({
                workTime: 25
            })
        }
    }

    // gets triggered on change of breaktimer text
    handleBreakTime = (text) => {
        if (text >= 0) {
            this.setState({
                breakTime: text
            })
        }
        else {
            alert("Time invalid. Setting value to default. Please enter valid time")
            this.setState({
                breakTime: 5
            })
        }
    }

    // called to set the timer's time
    handleTime = () => {
        if (this.state.intervalType === "Working") {
            return this.state.workTime
        }
        else {
            return this.state.breakTime
        }
    }

    render() {
        let time = this.handleTime()
        return (
            <View style={styles.container}>
                <View style={styles.row}>
                    <View style={styles.inputWrap}>
                        <Text style={styles.textStyle}>Work Time</Text>
                        <TextInput style={styles.textStyle} keyboardType={"numeric"} defaultValue={'' + this.state.workTime} placeholder="in mins" onChangeText={this.handleWorkTime} />
                    </View>
                    <View style={styles.inputWrap}>
                        <Text style={styles.textStyle}>Break Time</Text>
                        <TextInput style={styles.textStyle} keyboardType={"numeric"} defaultValue={'' + this.state.breakTime} placeholder="in mins" onChangeText={this.handleBreakTime} />
                    </View>
                </View>
                <Timer
                    intervalType={this.state.intervalType}
                    Oncomplete={this.handleTimerCompleted}
                    period={time}
                />
            </View>
        )
    }
}
export default PomodoroTimer;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },

    row: {
        flex: 1,
        flexDirection: "row",
    },
    inputWrap: {
        flex: 1,
        borderColor: "#cccccc",
        borderBottomWidth: 1,
    },
    textStyle: {
        fontSize: 25,
        fontWeight: "300",
        marginTop: 7,
        padding: 20
    }
});