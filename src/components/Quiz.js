import React, { useEffect, useState } from "react";
import { DataList } from "./DataList";
import "bootstrap/dist/css/bootstrap.min.css";

function QuizBack() {
  const [count, setCount] = useState(0);
  const [scoreF, setScoreF] = useState(0);
  const [scoreB, setScoreB] = useState(0);
  const [check, setCheck] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [indexSelected, setIndexSelected] = useState(null);
  const [timeLeft, setTimeLeft] = useState(300);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  useEffect(() => {
    let timer;
    if (timeLeft > 0 && !check) {
      timer = setInterval(() => {
        setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
      }, 1000);
    }
    return () => {
      clearInterval(timer);
    };
  }, [timeLeft, check]);

  const next = () => {
    if (count < DataList.length - 1) {
      setCount(count + 1);
      setSelectedAnswer(null);
      setIndexSelected(null);
    } else {
      setCheck(true);
    }
  };

  const checkAnswer = (c, index) => {
    if (selectedAnswer) {
      setScoreF(scoreF - 1);
    }
    setSelectedAnswer(c);
    setIndexSelected(index);
    if (c && DataList[count].category === "Frontend") {
      setScoreF(scoreF + 1);
    } else if (c && DataList[count].category === "backend") {
      setScoreB(scoreB + 1);
    }
  };

  let resultMessage;
  if (check || timeLeft === 0) {
    if (scoreB  >= 2 && scoreF >= 2) {
      resultMessage = "Full stack developer";
    } else if (scoreF > 2 && scoreF > scoreB) {
      resultMessage = "Frontend developer";
    } else if (scoreB > 2 && scoreB > scoreF){
      resultMessage = "Backend developer";
    }else{
      resultMessage = "Next time, give a little more attention to both the frontend and backend.";
    }
  }

  return (
    <div className="justify-content-center align-items-center d-flex " style={{ height: "100vh", width: "100vw" , backgroundColor: "#F0F0F0" }}>
      <div className={"m-auto p-4 bg-light  shadow-lg rounded"} style={{ width: "60%"}}>
        {check || timeLeft === 0 ? (
          <>
           
            <h2 className="text-center mb-5" style={{color:"red"}}>Congratulations! You Passed!</h2>

            <p> <span className="fw-bold">Your Score Frontend :</span> {scoreF}/{(DataList.length)/2}</p>
            <p> <span className="fw-bold">Your Score Backend :</span> {scoreB}/{(DataList.length)/2}</p>
            <p> <span className="fw-bold">Your Profil :</span> {resultMessage}</p>
            <p> <span className="fw-bold">  Message :</span> We are hiring you as a {resultMessage} and we'll check your email inbox for the interview date. Good Luck!</p>



          </>
        ) : (
          <>
          <h1 className="border text-center text-white shadow-sm p-2" style={{ backgroundColor: "#3A7291" }}>
          {DataList[count].category === "Frontend" ? "Frontend Questions" : "Backend Questions"}
        </h1>
        
            <p className="fs-4">
              {count + 1} / <span className="fs-5">{DataList.length}</span> - {DataList[count].question}
            </p>
            {DataList[count].answers.map((item, id) => (
              <div className="row" key={id}>
                <button
                  className="col-9 d-block w-80 gap-2 m-auto btn mb-2"
                  style={{
                    color: "#3A7291",
                    backgroundColor: "#F0F0F0",
                    border: id === indexSelected ? "2px solid #3A7291" : "none", 
                  }}
                  onClick={() => checkAnswer(item.isCorrect, id, item.category)}
                >
                  {item.ans}
                </button>
              </div>
            ))}
            <br />
            <button className="button float-end fs-7" onClick={next}>
              


  
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"></path>
  </svg>

  
  <div class="text">
  Next
  </div>


            </button>
            <div className="fs-5 mt-3"><span className="fw-bold" style={{color: '#3A7291'}}>Time Left:</span> {`${minutes}:${seconds < 10 ? "0" : ""}${seconds}`} </div>
          </>
        )}
      </div>
    </div>
  );
}

export default QuizBack;
