import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity,Alert} from 'react-native';
import { width, height, fontSize } from '../constants/photoProportions';
const sizePhoto = 'portrait_fantastic';

class CharContainer extends Component {
    constructor(props) {
        super(props);
    }
    handleButton = (char)=>{
        // const {id} = char;
        // const {characters}=this.props.state;

        // var selectedChar; 
        // characters.map(item=>{
        //     (item.id === id ) ? selectedChar = item : null;
        // })
        // console.log(selectedChar.description);
        // Alert.alert(selectedChar.description);
    }
    render() {
        return (
            <View style={styles.imageContainer}>
                <TouchableOpacity onPress={()=>this.handleButton(this.props.char)}>
                    <Image style={styles.image} source={{ uri: `${this.props.char.thumbnail.path}/${sizePhoto}.${this.props.char.thumbnail.extension}` }} />
                    <Text style={{ maxWidth: width, color: '#000', fontSize: fontSize, paddingTop: 3 }}>
                        {this.props.char.name}
                    </Text>
                </TouchableOpacity>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    imageContainer: {
        padding: 8,
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    image: {
        borderRadius: 10,
        width: width,
        height: height,
    }
});


export default CharContainer;
