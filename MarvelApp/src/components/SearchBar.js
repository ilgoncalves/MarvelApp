import React, { Component } from 'react';
import {
    View,
    TouchableOpacity,
    TextInput,
    StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import _ from 'lodash';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = this.props.state;
    }

    // callback = ()=> {

    //     // console.warn(this.state.showCharSearched);
    // }

    // a = (text,callback) => {
    //     const EMPTY_ARRAY = [];

    //     if (text === '') {
    //         this.setState({
    //             charsSearched: [...EMPTY_ARRAY],
    //             showCharSearched: false
    //         });
    //         console.warn("false");
    //     } else {
    //         this.setState({
    //             text: text,
    //             showCharSearched: true
    //         });
    //         console.warn(this.state.text);
    //         console.warn("true");
    //     }
    //     callback();
    // }

    // changeText = (text) => {


    //     this.a(text,this.callback);



    // }

    handleSearch = text => {
        const formatName = text.toLowerCase();
        // console.log(formatName);
        const { fullChars } = this.props.state;
        
        
        const data = _.filter(fullChars, item => {
            // console.log(item.name);
            const formatItem = item.name.toLowerCase();
            // console.log(formatName);
            // console.log(formatItem);
            if(formatItem.includes(formatName)){
                // console.log('**********************Igual************************');
                return item;
            }else{
                // console.log("a");
            }

            
            // return formatName.indexOf(item.name.toLowerCase()) > -1;
        });
        data.map(item=>{
            console.log(item.name);
        })
        console.log("****************************************")
        this.setState({ text, characters: data });
    }


    render() {

        return (
            <View style={styles.container}>
                <TextInput
                    ref={input => this.buscador = input}

                    onChangeText={text => this.handleSearch(text)}
                    value={this.state.text}
                    style={styles.input}
                    placeholder="Buscar Personagem"
                    underlineColorAndroid='transparent'
                    placeholderTextColor="#818081"
                />

                <View style={styles.iconContainer}>
                    <TouchableOpacity onPress={() => this.changeText(this.buscador.props.value)} >
                        <Icon color='#253c77' name='search' size={30} />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
export default SearchBar;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginHorizontal: 5,
        marginTop: 10,
        backgroundColor: '#d1d1e3',
        borderRadius: 10,
        marginBottom: 10
    },
    input: {
        flex: 1,
        backgroundColor: '#d1d1e3',
        padding: 5,
        paddingLeft: 25,
        borderRadius: 10,
        color: '#2c354b',
    },
    iconContainer: {
        backgroundColor: '#d1d1e3',
        height: 50,
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingRight: 10,
        borderRadius: 10

    }
});
