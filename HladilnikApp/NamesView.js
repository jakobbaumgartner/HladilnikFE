import React, { Component } from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView, StatusBar, TouchableOpacity, View } from 'react-native';

class FoodsView extends Component {

    constructor(props) {
        super(props)
        this.state = {
            names: ['Rič', 'Bore', 'Maja', 'Gašper', 'Igor', 'Milan', 'Sašo', 'Gregor', 'Vito', 'Gorazd', 'Dejan', 'Matevž', 'Andrej', 'Simon', 'Goran', 'Grega Č.', 'Miloš', 'Aljaž', 'Miha', 'Jakob']
        }
    }
    
    render() {

        var nameButtons = this.state.names.map((name) =>
              
                 <TouchableOpacity
                    style={styles.nameButton}
                    // onPress={onPress}
                >
                    <Text  style={styles.nameButtonText}>{name}</Text>
                </TouchableOpacity>
            );

        return (
            <SafeAreaView style={styles.container}>
            <StatusBar hidden />
            <View style={styles.namesView}>
            <TouchableOpacity
                style={styles.topButton}
                    // onPress={onPress}
            >
                <Text  style={styles.topButtonText}>{'Hladilnik'}</Text>
            </TouchableOpacity>
            {nameButtons}
            </View>
            </SafeAreaView>
        );
            }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: StatusBar.currentHeight,
  },
  namesView: {
    backgroundColor: '#f1faee',
    padding: 5,
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderWidth: 5,
    borderColor: '#457b9d'
  },

  nameButton: {
    width: '45%',
    borderWidth: 0,
    marginLeft: '3.5%',
    marginVertical: 3,
    height: 50,
    padding: 8,
    backgroundColor: '#457b9d',
    borderRadius: 5,
  },

  nameButtonText: {
    textAlignVertical: "center", 
    textAlign: "center", 
    textTransform: 'uppercase',
    fontSize: 25,
    color: 'white'
  },

  topButton: {
    width: '93%',
    margin: '3.5%',
    marginVertical: 50,
    padding: 15,
    paddingVertical: '4%',
    borderWidth: 0,
    borderRadius: 5,
    backgroundColor: '#e63946',
  },

  topButtonText: {
    textAlignVertical: "center", 
    textAlign: "center", 
    textTransform: 'uppercase',
    fontSize: 30,
  },

});

export default FoodsView;