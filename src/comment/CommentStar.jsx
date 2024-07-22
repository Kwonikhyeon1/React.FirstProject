import React from "react";
import { FaStar } from "react-icons/fa";
import './index.css';


const CommentStar = ({score, setScore}) => {
    
    // 별 클릭 핸들러
    const starScoreClickHandler = (index) => {
        console.log('starScoreClickHandler()', index + 1);

        if (index + 1 === score) {
            setScore(0);
            return;
        }

        setScore(index + 1); // 클릭된 별의 인덱스 + 1을 점수로 설정
        

    };

    const totalStars = 5;

    return (
        <div className="star_score">
            <div className="inner">
                {[...Array(totalStars)].map((star, index) => (
                    <li key={index}>
                        <FaStar 
                            onClick={() => starScoreClickHandler(index)} // 클릭 핸들러를 각각의 별에 전달
                            color={score > index ? "gold" : "gray"} 
                        />
                    </li>
                ))}
            </div>
        </div>
    );
};

export default CommentStar;
