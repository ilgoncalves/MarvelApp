import React, { Component } from "react";
import {
    FlatList,
    SafeAreaView,
} from "react-native";
import { List } from "react-native-elements";
import API_INFO from '../constants/charactersApi';
import axios from 'axios';
import SearchBar from './SearchBar';
import CharContainer from './CharContainer';
import {connect} from 'react-redux';
import {pullChars} from '../actions'

class CharList extends Component {
    constructor(props) {
        super(props);
    }
    componentWillMount() {
        axios.get(API_INFO.url, {
            params: {
                ts: API_INFO.ts,
                apikey: API_INFO.apiKey,
                hash: API_INFO.hash,                
                limit:20
            }
        })
            .then(res => {
                let characters = res.data.data.results;
                this.props.dispatch(pullChars(characters));               
            })
            .catch(err => {
                console.log(err);
            });
    }

    renderHeader = () => {
        return (<SearchBar />);
    }

    render() {
        return (
            <SafeAreaView>
                    <FlatList
                        data={this.props.characters}
                        renderItem={({ item }) => (
                            <CharContainer char={item} />
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
const mapStateToProps = state => ({
    characters: state.charactersReducers.characters
});
export default connect(mapStateToProps)(CharList);
