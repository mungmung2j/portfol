import React from "react";
import '../styles/skill.scss';
import 마크업 from '../assets/HTML&CSS.png';
import 깃 from '../assets/github_logo.png';
import 자바스크립트 from '../assets/JS.png';
import 뷰 from '../assets/vue.png';
import 리액트 from '../assets/React-icon.svg.png';


export default function Skill(){
    return(
        <div id="skill">
            <section id="section2">
                <h2>SKill</h2>
                <div className="skill-div-wrap">
                    <div className="skill-div">
                        <img src={마크업} alt="" />
                        <div>
                            <h3>HTML/CSS</h3>
                            HTML 태그를 활용한 웹 페이지 화면 구현 가능<br/>
                            웹 접근성을 고려한 마크업 가능<br/>
                            flex 속성 활용 가능<br/>
                            grid 속성으로 반응형 프로젝트 경험<br/>
                            SCSS 활용 가능
                        </div>
                    </div>
                    <div className="skill-div">
                        <img src={자바스크립트} alt="" />
                        <div>
                            <h3>JavaScript</h3>
                            JavaScript를 활용하여 동적인 웹 페이지 구축 가능<br/>
                            기본문법 if/for/함수/변수/배열 사용 가능<br/>
                            바닐라 프로젝트로 마켓컬리 사이트 구현 경험
                        </div>  
                    </div>
                    <div className="skill-div">
                        <img src={리액트} alt="" />
                        <div>
                            <h3>React</h3>
                            React 개발환경 설정, JSX 문법 사용과 컴포넌트 작성 가능<br/>
                            State, props 개념과 데이터 흐름 이해 가능<br/>
                            Axios를 활용해 DB와 통신 가능<br/>
                            Redux 활용 가능
                        </div>
                    </div>
                    <div className="skill-div">
                        <img src={깃} alt="" />
                        <div>
                            <h3>Git/Github</h3>
                            Git/Github를 활용 해 프로젝트 소스 이력 관리 가능
                        </div>                       
                    </div>
                    <div className="skill-div">
                        <img src={뷰} alt="" />
                        <div>
                            <h3>Vue</h3>
                            Vue 개발환경 설정 가능<br/>
                            Vue3를 사용해 농심 프로젝트 구현 경험
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}