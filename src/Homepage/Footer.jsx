import React from 'react';
import { Link } from 'react-router-dom';
import "../css/Footer.css"

const Footer = () => {
  return (
    <footer>
      <div className="inner">
        <ul className="menu">
          <li><Link to="/privacy-policy" className="green">개인정보처리방침</Link></li>
          <li><Link to="/video-info-policy">영상정보처리기기 운영관리 방침</Link></li>
          <li><Link to="/terms-of-use">홈페이지 이용약관</Link></li>
          <li><Link to="/location-info-terms">위치정보 이용약관</Link></li>
          <li><Link to="/korea-tour-card-terms">한국관광 카드 이용약관</Link></li>
          <li><Link to="/email-collection-opt-out">전자우편무단수집거부</Link></li>
        </ul>

        <div className="btn-group">
          <Link to="https://ujb.greenart.co.kr/campus/campusLocation?cam_idx=17" className="btn btn--white">찾아오시는 길</Link>
          <Link to="/qna" className="btn btn--white">Q&A</Link>
          <Link to="/site-map" className="btn btn--white">사이트 맵</Link>
        </div>

        <div className="info">
          <span>사업자등록번호 201-81-367548</span>
          <span>한국관광공사</span>
          <span>TEL : 033) 738-3000 / FAX : 033) 738-3000</span>
          <span>개인정보 책임자 : 권익현</span>
        </div>

        <p className="copyright">
          &copy; <span className="this-year"></span> 2024 Republic of Korea, Ministry of Culture Departure
        </p>
        <img src="https://cdn.snakorea.com/news/photo/202001/372820_230255_3820.jpg" alt="" className="logo" />
      </div>
    </footer>
  );
};

export default Footer;
