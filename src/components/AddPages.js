import React, { Component } from 'react';

export default class AddPages extends Component {
    submitPage(event) {
        event.preventDefault();
        let page = {
            title: this.refs.title.value,
            subtitle: this.refs.subtitle.value,
            shortDescription: this.refs.shortDescription.value,
            lang: this.refs.lang.value,
        }
        fetch("http://localhost:8080/api/pages", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(page),
        })
        .then(response => response.json());
        window.location.reload();
    }

    render() {
        return (
            <div className="row">
                <form className="col s12" onSubmit={this.submitPage.bind(this)}>
                <div className="row">
                    <div className="input-field col s6">
                        <input   ref="title" type="text" className="validate" />
                    <label htmlFor="title">Title</label>
                    </div>
                    <div className="input-field col s6">
                        <input ref="subtitle" type="text" className="validate" />
                        <label htmlFor="subtitle">Subtitle</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <input ref="shortDescription" type="text" className="validate" />
                        <label htmlFor="shortDescription">Short Description</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s2">
                        <input ref="lang" type="text" className="validate" />
                        <label htmlFor="lang">Language</label>
                    </div>
                </div>
                <div className="row">
                    <button className="waves-effect waves-light btn" type="submit" name="action">Submit</button>
                </div>
                </form>
            </div>
        )
    }
}