import React from 'react'
import data from '../../data/github-stats.json'
import './github-stats.css';
import '../style.css';

export default function GithubStats() {
    return (
        <div className="github-stats">
            <div className="github-stats-left">
            <div className="my-heading">GitHub</div>
                <div className="margin-10">
                    <img class="github-stats-mobile-img" alt="Stats" src="https://github-readme-stats.vercel.app/api?username=sharshach&theme=highcontrast&show_icons=true&count_private=true"/>          
                </div>
                <div className="margin-10">
                    <img class="github-stats-mobile-img"  alt="languages" src="https://github-readme-stats.vercel.app/api/top-langs/?username=sharshach&theme=highcontrast&hide=html&layout=compact" />
                </div>
            </div>
            <div className="github-stats-right">
            {
                data.map(item=>(
                    <div className="margin-10 ">
                    <a href={`https://github.com/${item.user}/${item.repo}`}>
                        <img  className="github-stats-mobile-img" alt={item.repo} src={`https://github-readme-stats.vercel.app/api/pin/?username=${item.user}&repo=${item.repo}&theme=highcontrast`}/>
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

