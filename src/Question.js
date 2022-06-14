export function Question({ Ques }) {
  return (
    <div>
      <div>
        <p>{Ques.title}</p>
        <p>{Ques.body}</p>
        <p>{Ques.tags}</p>
      </div>
      <input type="text" placeholder="Enter your comment here" />
      <button>Submit</button>
    </div>
  );
}
