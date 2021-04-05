import React, { Component } from 'react'
import './Header.css'

export default class Terminal extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            content:[[true,""]],
            fullContent:[
                [true,"whoami"],
                [false,"Chilukuri Sri Harsha"],
                [true,"whereami"],
                [false,"Nagandla, Inkollu, Andhra Pradesh, India"],
                [true,"study"],
                [false,"National Institute of Technology, Durgapur"],
                [true,"projects"],
                [false,"I worked in several projects personally and in teams <a href='#github'>click here to view my projects</a>"],
                [true,"experience"],
                [false,"Currently I am working in work@tech. <a href='#github'>click here to view my Experiences</a>"],
                [true,"contact"],
                [false,"Contact Me through <a href='mailto:sharshach@gmail.com'>mail(click here)</a><br/>Or you can contact me through any of the social media (given at bottom right)"],
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
            var elem = document.getElementById('terminal-core');
            elem.scrollTop = elem.scrollHeight;
        }
    }
    
    render() {
        const {content}=this.state;
        return (
            <div className="terminal">
            <div className="terminal-top">SriHarsha@Chilukuri:~</div>
            <div id="terminal-core" className="terminal-core">
            {
                content.map(line=>(
                    <div key={line[1]} className="terminal-line">
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
                        <div dangerouslySetInnerHTML={{__html:line[1]}} />
                    </div>
                ))
            }
            </div>
            </div>
        )
    }
}
