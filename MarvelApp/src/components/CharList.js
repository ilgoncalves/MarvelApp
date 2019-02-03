import React, { Component } from "react";
import {
    StyleSheet,
    FlatList,
    SafeAreaView,
    View,
    ScrollView
} from "react-native";
import { List } from "react-native-elements";
import API_INFO from '../constants/charaptersApi';
import axios from 'axios';
import SearchBar from './SearchBar';
import CharContainer from './CharContainer';

class CharList extends Component {
    constructor(props) {
        super(props);
        this.state = this.props.state;
    }

    componentWillMount() {
        axios.get(API_INFO.url, {
            params: {
                ts: API_INFO.ts,
                apikey: API_INFO.apiKey,
                hash: API_INFO.hash,
                
                limit:40
            }
        })
            .then(res => {
                const characters = res.data.data.results;
                this.setState({ characters,fullChars:[...characters] });                
            })
            .catch(err => {
                console.log(err);
            });
    }

    renderHeader = () => {
        return (<SearchBar state={this.state} />);
    }

    render() {
        return (
            <SafeAreaView>
                    <FlatList
                        data={this.state.characters}
                        renderItem={({ item }) => (
                            <CharContainer state={this.state} char={item} />
                        )}
                        keyExtractor={char => char.name}
                        numColumns={3}
                        contentContainerStyle={{alignSelf:'center'}}
                        ListHeaderComponent={this.renderHeader}
                    />  
            </SafeAreaView>
        );
    }
}
export default CharList;
