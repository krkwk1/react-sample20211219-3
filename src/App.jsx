import { useState } from "react";
import "./styles.css";
import { InputTodo } from "./components/InputTodo";

export default function App() {
  const [todoText, setTodoText] = useState("sample");
  const [incompleteList, setIncompleteList] = useState([]);
  const [completeList, setCompleteList] = useState([]);

  const onChangeTodoText = (e) => setTodoText(e.target.value);
  const onClickAdd = () => {
    if (todoText === "") return;

    const newlist = [...incompleteList, todoText];
    setIncompleteList(newlist);

    setTodoText("");
  };

  const onClickDelete = (index) => {
    const newList = [...incompleteList];
    newList.splice(index, 1);
    setIncompleteList(newList);
  };
  const onClickComplete = (index) => {
    const newCompleteList = [...completeList, incompleteList[index]];
    setCompleteList(newCompleteList);

    const newInCompleteList = [...incompleteList];
    newInCompleteList.splice(index, 1);
    setIncompleteList(newInCompleteList);
  };
  const onClickBack = (index) => {
    const newCompleteList = [...completeList];
    newCompleteList.splice(index, 1);
    setCompleteList(newCompleteList);

    const newInCompleteList = [...incompleteList, completeList[index]];
    setIncompleteList(newInCompleteList);
  };

  return (
    <>
      {/* <div className="input-area">
        <input
          type="text"
          id="inputtext"
          value={todoText}
          onChange={onChangeTodoText}
        />
        <button id="addButton" onClick={onClickAdd}>
          追加
        </button>
      </div> */}
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
        disabled={incompleteList.length >= 5}
      />
      {incompleteList.length >= 5 && <p>OVER 5items!</p>}
      <div className="incomplete-area">
        <h2>未完了</h2>
        <ul id="incomplete-area_ul">
          {incompleteList.map((todo, index) => {
            return (
              <li key={todo}>
                <span>{todo}</span>
                <button onClick={() => onClickComplete(index)}>完了</button>
                <button onClick={() => onClickDelete(index)}>削除</button>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="complete-area">
        <h2>完了</h2>
        <ul id="complete-area_ul">
          {completeList.map((todo, index) => {
            return (
              <li key={todo}>
                <span>{todo}</span>
                <button onClick={() => onClickBack(index)}>戻る</button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
