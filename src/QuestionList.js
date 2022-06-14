import { useEffect, useState, Navigate, useNavigate } from "react";
import { API } from "./globalAPI";
import { Question } from "./Question";
import { AskQuestion, askQuestion } from "./AskQuestion";


export function QuestionList() {
  
  const [company, setCompany] = useState([]);
  // const navigate = useNavigate();

  useEffect(() => {
    fetch(`${API}/Question`, {
      method:"GET",
      headers:{
        "x-auth-token": localStorage.getItem("token")
      }
    })
      .then((data) => data.json())
      .then((com) => setCompany(com));
  }, []);

  return (
    <div>
      <div>
        <p>All Questions</p>
        <button onClick={() => Navigate("/askQuestion")}>Ask Questions</button>
      </div>
      {company.map((Ques) => (
        <Question Ques={Ques} key={Ques._id} />
      ))}
    </div>
  );
}
