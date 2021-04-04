import React from 'react';
import "./Header.css"
import "../style.css"
import Navigation from './Navigation';
import Terminal from './Terminal';
export default class Header extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            x:0,
            y:0,
        };
    }
    // componentDidMount(){
    //     setInterval(this.moveStar, 1);
    // }
    moveStar=()=>{
        const {x,y}=this.state;
        this.setState({x:(x+Math.random()-0.5)%100,y:(y+Math.random()-0.5)%100});
    }
    // getAllDots=()=>{
    //     let i=10,j=10;
        
    // }
    render() {
        return (
            <div className="header-main">
                {/* <div className="header-tiles">
                <div className="header-tile">Projects</div>
                <div className="header-tile">Projects</div>
                <div className="header-tile">Projects</div>
                <div className="header-tile">Projects</div>
                </div> */}
                <Navigation/>

                <div className="my-heading">Chilukuri Sri Harsha</div>
                
                <center>
                    <Terminal/>
                </center>
                {/* <div className="header-dot" style={{left:`${(125+this.state.x)%100}vw`,top:`${(175+this.state.y)%100}vh`}}/>
                <div className="header-dot" style={{left:`${(175+this.state.x)%100}vw`,top:`${(175+this.state.y)%100}vh`}}/>
                <div className="header-dot" style={{left:`${(175+this.state.x)%100}vw`,top:`${(125+this.state.y)%100}vh`}}/>
                <div className="header-dot" style={{left:`${(125+this.state.x)%100}vw`,top:`${(125+this.state.y)%100}vh`}}/>
                <div className="header-dot" style={{left:`${(150+this.state.x)%100}vw`,top:`${(150+this.state.y)%100}vh`}}/> */}
            </div>
        )
    }
}