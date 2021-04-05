import React from 'react'
import data from '../../data/github-stats.json'
import './github-stats.css';
import '../style.css';

export default class GithubStats extends React.Component {
    constructor(props){
        super(props)
    
        this.state = {
             theme:this.props.theme,
        }
    }
    
    componentDidUpdate(){
        const {theme}=this.props;
        if(this.state.theme!==theme){
            this.setState({theme})
        }
    }
    render() {
        const {theme}=this.state;
        return (
            <div className={`github-stats ${theme==="dark"?"background-dark":"background-light"}`}>
            <div className="github-stats-left">
            <div className="my-heading">Projects</div>
                <div className="margin-10">
                    <img className="github-stats-mobile-img" alt="Stats" src={`https://github-readme-stats.vercel.app/api?username=sharshach&theme=${theme==="dark"?"highcontrast":"solarizedlight"}&show_icons=true&count_private=true`}/>          
                </div>
                <div className="margin-10">
                    <img className="github-stats-mobile-img"  alt="languages" src={`https://github-readme-stats.vercel.app/api/top-langs/?username=sharshach&theme=${theme==="dark"?"highcontrast":"solarizedlight"}&hide=html&layout=compact`} />
                </div>
            </div>
            <div className="github-stats-right">
            {
                data.map(item=>(
                    <div key={item.repo} className="margin-10 ">
                    <a href={`https://github.com/${item.user}/${item.repo}`}>
                        <img  className="github-stats-mobile-img" alt={item.repo} src={`https://github-readme-stats.vercel.app/api/pin/?username=${item.user}&repo=${item.repo}&theme=${theme==="dark"?"highcontrast":"solarizedlight"}`}/>
                    </a>
                    </div>
                ))
            }
            <a href="https://github.com/sharshach" target="blank">
            <button style={{width:"200px"}}>More Projects </button>
            </a>
            </div>
        </div>
        )
    }
}