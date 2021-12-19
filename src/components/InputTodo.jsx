export const InputTodo = (props) => {
  const style = {
    backgroundColor: "#FFFFCC"
  };
  const { todoText, onChange, onClick, disabled } = props;
  return (
    <div className="input-area" style={style}>
      <input
        type="text"
        id="inputtext"
        value={todoText}
        onChange={onChange}
        disabled={disabled}
      />
      <button id="addButton" onClick={onClick} disabled={disabled}>
        追加
      </button>
    </div>
  );
};
