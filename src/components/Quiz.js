import React, { useState } from "react";
import { DataList } from "./DataList";
import "bootstrap/dist/css/bootstrap.min.css";

function Quiz() {
  const [count, setCount] = useState(0);
  const [score, setScore] = useState(0);
  const [check, setCheck] = useState(false);
//   const [df, setD] = useState("d-block");
//   const [db, setDb] = useState("d-none");

  const next = () => {
    if (count < DataList.length - 1) {
      setCount(count + 1);
    } else {
      setCheck(true);
    //   setD("d-none");
    //   setDb("d-block");
    }
  };

  const checkAnswer = (c) => {
    if (c) {
      setScore(score + 1);
    }
  };

  return (
    // front end -------------
    <div className="justify-content-center align-items-center d-flex" style={{ height: "100vh", width: "100vw" }}>
      <div className={"m-auto p-4 bg-light shadow rounded"} style={{ width: "60%"}}>
        <h1 className="border text-center shadow-sm p-2" style={{ backgroundColor: "#3A7291"}} >Frontend Questions</h1>
        {check ? (
          <p>Your score is {score}/{DataList.length}</p>
        ) : (
          <>
            <p className="fs-4">{count + 1} / <span className="fs-5">{DataList.length}</span> - {DataList[count].question}</p>
            {DataList[count].answers.map((item, id) => (
              <div className="row" key={id}>
                <button className="col-9 d-block w-80 gap-2 m-auto btn mb-2" style={{ color: "#3A7291" , backgroundColor:"#F0F0F0" }} onClick={() => checkAnswer(item.isCorrect)}>{item.ans}</button>
              </div>
            ))}
            <br />
            <button className="float-end px-4" onClick={next}>Next</button>
          </>
        )}
      </div>
    </div>

  );
}

export default Quiz;
