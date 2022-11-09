import React, { Component } from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView, StatusBar, TouchableOpacity, View } from 'react-native';

class NamesView extends Component {

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
                    <Text  style={{textAlignVertical: "center", textAlign: "center", textTransform: 'uppercase'}}>{name}</Text>
                </TouchableOpacity>
            );

        return (
            <SafeAreaView style={styles.container}>
            <View style={styles.namesView}>

            {nameButtons}


            </View>
            </SafeAreaView>
        );
            }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  namesView: {
    backgroundColor: '#ffb703',
    padding: 5,
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },

  nameButton: {
    width: '45%',
    borderWidth: 1,
    marginLeft: '3.5%',
    marginVertical: 3,
    height: 50,
    padding: 15,
    color: 'red',
    backgroundColor: '#8ecae6',
    borderRadius: 5,
    borderWidth: 0
  }

});

export default NamesView;