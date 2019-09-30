import React, {Component} from "react";
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from "react-native";

const { width, height} = Dimensions.get("window");
export default class ToDo extends React.Component {
  state = {
    isEditing: false,
    isCompleted: false
  }

  _toggleComplete = () => {
    this.setState(prevState => {
      return ({
        isCompleted: !prevState.isCompleted
      })
    })
  }

  render() {
    const { isCompleted, isEditing } = this.state;
    return (
    <View style={styles.container}>
      <View style={styles.column}>
        <TouchableOpacity onPress={this._toggleComplete}>
          <View style={[
            styles.circle,
            isCompleted ? styles.completedCircle : styles.uncompletedCircle
            ]}>
          </View>
        </TouchableOpacity>
        <Text style={[
          styles.text,
          isCompleted ? styles.completedText: styles.uncompletedText
          ]}>
        Hello I am a To Do
        </Text>
      </View>
      <View style={styles.column}>
        {isEditing ? (
          <View style={styles.action}>
            <TouchableOpacity>
              <View style={styles.actionContainer}>
                <Text style={styles.actionText}>✅</Text>
              </View>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.action}>
            <TouchableOpacity>
              <View style={styles.actionContainer}>
                <Text style={styles.actionText}>✏️</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.actionContainer}>
                <Text style={styles.actionText}>❌</Text>
              </View>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: width - 50,
    borderBottomColor: "#bbb",
    borderBottomWidth: StyleSheet.hairlineWidth,
    flexDirection: "row",
    alignItems: "center"
  },
  circle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 3,
    marginRight: 20
  },
  completedCircle: {
    borderColor: "green"
  },
  uncompletedCircle: {
    borderColor: "#F23657"
  },
  text: {
    fontWeight: "600",
    fontSize: 20,
    marginVertical: 20
  },
  completedText: {
    color: "#bbb",
    textDecorationLine: "line-through"
  },
  uncompletedText: {
    color: "#353839"
  }
})