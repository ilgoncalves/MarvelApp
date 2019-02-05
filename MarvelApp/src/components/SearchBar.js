import React, { Component } from 'react';
import {
    View,
    TouchableOpacity,
    TextInput,
    StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import _ from 'lodash';
import { connect } from 'react-redux';
import { updateChars, pullChars } from '../actions';

class SearchBar extends Component {
    constructor(props) {
        super(props);
    }
    handleSearch = text => {
        console.log(text);
        const formatName = text.toLowerCase();
        const { fullChars } = this.props;
        console.log('Numero total de Personagens: ' + fullChars.length);
        
        const data = _.filter(fullChars, item => {
            const formatItem = item.name.toLowerCase();
            return (formatItem.includes(formatName)) ? item : null;            
        });

        data.map(item => {
            console.log(item.name);
        })
        console.log("****************************************")
        this.props.dispatch(updateChars(data));        
    }


    render() {

        return (
            <View style={styles.container}>
                <TextInput
                    onChangeText={text => this.handleSearch(text)}

                    style={styles.input}
                    placeholder="Buscar Personagem"
                    underlineColorAndroid='transparent'
                    placeholderTextColor="#818081"
                />
                <View style={styles.iconContainer}>
                    <Icon color='#253c77' name='search' size={30} />
                </View>
            </View>
        );
    }
}

const mapStateToProps = state => ({
    fullChars: state.charactersReducers.fullChars
});

export default connect(mapStateToProps)(SearchBar);

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
