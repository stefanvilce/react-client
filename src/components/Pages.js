import React, { Component } from 'react';
import Page from './Page';
import AddPages from './AddPages';

export default class Pages extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pages: [],
        };
    }

    componentDidMount() {
        fetch('http://localhost:8080/api/pages')
        .then(response => response.json())
        .then(data => this.setState({pages: data}))
    }

    render() {
        return (
            <div>
                <div className="row">
                    <AddPages />
                </div>
                <div className="row">
                    { this.state.pages.map((item) => (
                        <Page key={item.id} item={item} />
                    ))}
                </div>
            </div>
        )
    }
}