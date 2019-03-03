import * as React from "react";
import QuoteCard from './QuoteCard'
import QuoteService from "../services/QuoteService";

const service = new QuoteService();

class QuoteLayout extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }


    render() {
        return (<div className="card">{this.state.items.map((item, index) => (
            item.content))}</div>);
    }




    componentDidMount() {
        service.getQuotes().then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result
                    });
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                })
    }

}

export default QuoteLayout;