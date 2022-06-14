import { API } from "./globalAPI";
import { useNavigate } from "react-router-dom";
import { useState } from "react";


export function AskQuestion(newQuestion) {

  const [title,setTitle] = useState("");
  const [body, setBody] = useState("");
  const [tags, setTags] = useState("");

  const navigate = useNavigate();

  const Question = () => {
    const question ={
    title: title,
    body: body,
    tags: tags,
    }
  }

  fetch(`${API}/Question`, {
      method: "POST",
      body: JSON.stringify(newQuestion),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => navigate("/Question"));

  return (
    <div>
      <p>Title</p>
      <p>Be specific and imagine you are asking a question to another person</p>
      <input
      onChange={(event) => setTitle(event.target.value)}
       type="text" />

      <p>Body</p>
      <p>
        Include all the information someone would need to answer your question
      </p>
      <input 
      onChange={(event) => setBody(event.target.value)}
      type="text" />
      <p>Tags</p>
      <p>Add up to 5 tags to describe what your question is about</p>
      <input 
      onChange={(event) => setTags(event.target.value)}
      type="text" />
      <button>Submit</button>
    </div>
  );
}
