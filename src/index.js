import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Voyager} from 'graphql-voyager';
import fetch from 'isomorphic-fetch';
import "graphql-voyager/dist/voyager.css"

const INTROSPECTION_URL = 'https://gist.githubusercontent.com/RomanGotsiy/0f472e61cc50b497ec48c24b3cb283f1/raw/a544b330f773dcdefeb16364451f7b469800dc5d/swapi-introspection.json';

class Test extends React.Component {

    render() {
        return (
            <Voyager introspection={Test.introspectionProvider} displayOptions={{skipRelay: false}}/>
        )
    }

    static introspectionProvider(query) {
        return fetch(INTROSPECTION_URL, {
            method: 'get',
        }).then(response => response.json());
    }
}

ReactDOM.render(<Test/>, document.getElementById('root'));
