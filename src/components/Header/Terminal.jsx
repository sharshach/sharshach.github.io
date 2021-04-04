import React, { Component } from 'react'
import './Header.css'

export default class Terminal extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            content:[[true,""]],
            fullContent:[
                [true,"name"],
                [false,"Chilukuri Sri Harsha"],
                [true,"location"],
                [false,"Nagandla, Inkollu, Andhra Pradesh, India"],
                [true,"study"],
                [false,"National Institute of Technology, Durgapur"],
                [true,""]
            ]
        }
    }
    sleep=ms=> {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    async componentDidMount(){
        const {fullContent}=this.state;
        var content=[[true,""]];
        for(var i=0;i+2<fullContent.length;i+=2){
            await this.sleep(1000);
            content[i][1]=fullContent[i][1];
            this.setState({content});
            await this.sleep(1500);
            content.push(fullContent[i+1]);
            content.push([fullContent[i+2][0],""]);
            this.setState({content});
        }
    }
    
    render() {
        const {content}=this.state;
        return (
            <div className="terminal">
            {
                content.map(line=>(
                    <div className="terminal-line">
                        {
                            line[0]&&(
                                <div className="terminal-left-line">
                                <div className="terminal-name">
                                    SriHarsha@Chilukuri
                                </div>
                                :
                                <div className="terminal-path">~</div>
                                $&nbsp;
                                </div>
                            )
                        }
                        <div>
                            {line[1]}
                        </div>
                    </div>
                ))
            }
            </div>
        )
    }
}
