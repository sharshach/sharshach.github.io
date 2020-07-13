import React from 'react';
import "./Header.css"

export default class Header extends React.Component{
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div class="header-main">
                <h1>CHILUKURI SRI HARSHA</h1>
            </div>
        )
    }
}