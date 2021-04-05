import React, { Component } from 'react'

export default class Navigation extends Component {
    render() {
        return (
            <div className="navigation">
                <a className="navigation-link" href="#jobs" >Experiences</a>
                <a className="navigation-link" href="#github" >Projects</a>
                <a className="navigation-link" href="https://drive.google.com/file/d/16Jd6EdoW-pBH0ogppZTt0oN6Is6fL5dI/view" target="blank" >Resume</a>
                <div className="navigation-empty-div"></div>
            </div>
        )
    }
}
