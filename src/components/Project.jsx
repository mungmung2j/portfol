import React from "react";
import '../styles/project.scss'
import 마켓컬리  from '../assets/market_kurly_main.png'

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
                            <button>이동하기</button>
                        </div>
                    </div>
                </div>
                
            </section>  
        </div>
    )
}