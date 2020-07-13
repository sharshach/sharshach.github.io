import React from 'react';

export default class ExternalLinks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <a href={this.props.link}>{this.props.name}</a>
            </div>
        );
    }
}
