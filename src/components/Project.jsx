import React from "react";
import '../styles/project.scss';
import 마켓컬리  from '../assets/market_kurly_main.png';
import 깃허브 from '../assets/github_logo.png';

export default function Project(){
    
    return(
        <div id="project">
            <section id="section3">
                <div className="project-wrap">
                    <h2>Project</h2>
                    <div className="kurly-box">
                        <div className="kurly-img-box">
                            <img src={마켓컬리} alt="마켓컬리" />
                        </div>
                        <div className="kurly-text-box">
                            <h3>마켓컬리</h3>
                            <span>market kurly</span>
                            <div>
                                리액트를 이용한 프로젝트<br/>
                                scss, axios, redux, json, php, mysql 사용
                            </div>
                            <a href="https://github.com/mungmung2j/kurly-final"><img src={깃허브} alt="" /></a>
                            <a className="kurly-link" href="https://sjm6715.com/kurly_week_11/">이동하기</a>
                        </div>
                    </div>
                </div>
                
            </section>  
        </div>
    )
}