import React, {Component} from 'react';
import './App.css';
import './styles/styles.css'
import QuoteCard from './components/QuoteCard'
import Header from "./components/Header";


class App extends Component {
    render() {
        return (
            <div id="container">
                <Header/>
                <QuoteCard/>
            </div>

        );
    }
}

export default App;
