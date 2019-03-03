import React, {Component} from 'react';
import './App.css';
import './styles/styles.css'
import QuoteLayout from './components/QuoteLayout'
import Header from "./components/Header";


class App extends Component {
    render() {
        return (
            <div id="container">
                <Header/>
                <QuoteLayout/>
            </div>

        );
    }
}

export default App;
