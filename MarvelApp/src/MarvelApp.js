// ******DEBUG WITH GENYMOTION******
//     'http://10.0.3.2:3000/v1' 

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
    }
    render() {
        return (
            <Provider store={store} >
                <View style={{ flex: 1 }}>
                    <CharList />
                </View>
            </Provider>
        );
    }
}

export default MarvelApp;


