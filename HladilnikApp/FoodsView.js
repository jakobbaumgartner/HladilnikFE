import React, { Component } from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView, StatusBar, TouchableOpacity, View, Image } from 'react-native';

class FoodsView extends Component {

    constructor(props) {
        super(props)
        this.state = {
            names: ['Rič', 'Bore', 'Maja', 'Gašper', 'Igor', 'Milan', 'Sašo', 'Gregor', 'Vito', 'Gorazd', 'Dejan', 'Matevž', 'Andrej', 'Simon', 'Goran', 'Grega Č.', 'Miloš', 'Aljaž', 'Miha', 'Jakob'],
            userName: 'Jakob'
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

            <View style={styles.mainView}>

            <TouchableOpacity
                style={styles.topButton}
                    // onPress={onPress}
            >
                <Text  style={styles.topButtonText}>{this.state.userName}</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.reportButton}
                    // onPress={onPress}
            >
                <Image style={styles.reportIcon} source={require('./assets/report.png')} />
            </TouchableOpacity>
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

  mainView: {
    backgroundColor: '#f1faee',
    padding: 5,
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderWidth: 5,
    borderColor: '#457b9d'
  },



  topButton: {
    width: '70%',
    marginLeft: '3.5%',
    marginVertical: 20,
    padding: 15,
    paddingVertical: '4%',
    borderWidth: 0,
    borderRadius: 5,
    backgroundColor: '#457b9d',
  },

  reportButton: {
    width: '19.5%',
    marginLeft: '3.5%',
    marginVertical: 20,
    padding: 10,
    // paddingVertical: '4%',
    borderWidth: 0,
    borderRadius: 5,
    backgroundColor: '#a8dadc',
  },

  topButtonText: {
    textAlignVertical: "center", 
    textAlign: "center", 
    textTransform: 'uppercase',
    fontSize: 30,
  },

  reportIcon: {
    height: 50,
    width: 50
  }

});

export default FoodsView;