import React from 'react';
import "./Header.css"

export default class Header extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            x:0,
            y:0,
        };
    }
    componentDidMount(){
        setInterval(this.moveStar, 1);
    }
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
              
                <div className="header-dot" style={{left:`${this.state.x}vw`,top:`${this.state.y}vh`}}/>
                <div className="header-dot" style={{left:`${this.state.x}vw`,top:`${this.state.y}vh`}}/>
            </div>
        )
    }
}