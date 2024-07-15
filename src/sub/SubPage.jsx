import React from "react";
import './style.css'
import GoogleMap from './GoogleMap.tsx'

const SubPage = () =>{

    return(
        
        <div id="sub_wrap">
            
                <h2>TITLE</h2>
                <h4>경기도 안산시 부흥로48-41</h4>
                <img className="sub_img" src="https://cdn.visitkorea.or.kr/img/call?cmd=VIEW&id=7c9b0f4a-8d86-4b9b-8217-e1c7a1d510b4" /> 
                <div className="text_wrap">
                    <h3>상세정보</h3>
                    <p>청계산 남쪽 태봉 자락에 있는 청계사는 불상에 우담바라꽃이 피어 세간에 큰 화제가 되었던 사찰이다. 청계사는 대한불교조계종 제2교구 본사인 용주사의 말사로, 통일신라시대에 창건된 것으로 추측되며, 1284년(고려 충렬왕 10년)에 당대의 세력가였던 평양부원군 조인규가 중창하였고, 이후 그 후손들이 500년간 중창을 거듭하였다.
                    2000년에 10월에는 영력이 강한 곳에서 핀다는 전설 속의 꽃 우담바라가 피어 화제가 되었다. 꽃이 피면 영화스럽고 상서로운 일이 일어난다하여 영서화라 부르기도 하는 청계사의 우담바라는 부처님 눈썹에 모두 21송이가 피었다. 그 모습은 현재 사진으로 볼 수 있다.</p>
                </div>
                <br />
                <br />
            
                <GoogleMap />
        
                <br /><br />
                <div className="input_review"> 리뷰 입력 </div>
                <div className="review_list"> 리뷰 리스트 </div>




            



        </div>
    )
}

export default SubPage;