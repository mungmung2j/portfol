import React from "react";
import '../styles/main.scss';
import 바다 from '../assets/beach.jpg'
import 루피 from '../assets/루피.png';
import 깃허브 from '../assets/github_logo.png';
import 벨로그 from '../assets/velog_logo.png';
import 인스타 from '../assets/insta_logo.png';

export default function Main(){
  return(
    <main id="main">
      <section id="section1">
        <div className="profill">
          <div className="header-wrap">
            <div className="header-wrap-top">
              <div className="img-box">
                <img src={루피} alt="루피"/>
              </div>
            </div>
            <div className="text-box">
              신정명<br/><br/>
              프론트엔드 개발자
            </div>
            <ul className="sns">
              <li className="github-li">
                <a href="https://github.com/mungmung2j"><img src={깃허브} alt="깃허브" /></a>
              </li>
              <li>
                <a href="https://velog.io/@sjm6715"><img src={벨로그} alt="벨로그" /></a>
              </li>
              <li>
                <a href="https://www.instagram.com/sinjeongmyeong/"><img src={인스타} alt="인스타" /></a>
              </li>
            </ul>
          </div>
        </div>
        <div className="ocean-wrap">
          <img className="ocean" src={바다}/>
        </div>
      </section>
    </main>
  )
}