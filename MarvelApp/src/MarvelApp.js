import React, { Component } from 'react';
import {
    View,
} from 'react-native';

import { Provider } from 'react-redux';
import store from './store'

import CharList from './components/CharList';

class MarvelApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            characters: [],
            fullChars: [],
            showCharSearched: false,
            text: ''
        };
    }

    render() {
        return (
            <Provider store={store} >
                <View style={{ flex: 1 }}>
                    <CharList state={this.state} />
                </View>
            </Provider>
        );
    }
}

export default MarvelApp;


