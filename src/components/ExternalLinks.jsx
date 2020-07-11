import React from 'react';

export default class ExternalLinks extends React.Component {
    render() {
        return (
            <div>
                <a href={this.props.link}>{this.props.name}</a>
            </div>
        );
    }
}
