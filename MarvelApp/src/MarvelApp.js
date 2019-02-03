import React, { Component } from 'react';
import {
    View,
} from 'react-native';


import SearchBar from './components/SearchBar';
import CharList from './components/CharList';

class MarvelApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            characters: [],
            fullChars: [],
            showCharSearched: false,
            text:''
        };
    }
    
    render() {            
        return (
            <View style={{flex:1}}>                
                <CharList state={this.state} />
            </View>
        );
    }
}

export default MarvelApp;


