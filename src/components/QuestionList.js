import React from "react";
import { useState, useEffect } from "react";
import QuestionItem from "./QuestionItem";

function QuestionList() {
  const [questionArray, setQuestionArray] = useState([])

  useEffect(() => {
    async function fetchData(){
      let req = await fetch("http://localhost:4000/questions")
      let res = await req.json()
      setQuestionArray(res)
    }
    fetchData()
  } ,[])

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {questionArray.map((question)=>{
          return <QuestionItem key={question.id} question={question} />
        })}
      </ul>
    </section>
  );
}

export default QuestionList;
