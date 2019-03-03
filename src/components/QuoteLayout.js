import * as React from "react";
import Card from '@material-ui/core/Card';
import QuoteService from "../services/QuoteService";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/es/CardHeader/CardHeader";

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
        return this.state.items.map((item, index) =>
            <Card key={index} className="card">
                <CardHeader title={item.title}/>
                <CardContent><div dangerouslySetInnerHTML={{ __html: item.content }} /></CardContent>
            </Card>
        )
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