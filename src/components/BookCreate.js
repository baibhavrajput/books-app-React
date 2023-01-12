import { useState } from "react";

function BookCreate({ onCreate }) {
  const [title, setTitle] = useState("");

  const onChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    onCreate(title);
    setTitle("");
  };

  return (
    <div className="book-create" onSubmit={onSubmitHandler}>
      <h3>Add a Book</h3>
      <form>
        <label>Title</label>
        <input className="input" value={title} onChange={onChangeHandler} />
        <button className="button">Create!</button>
      </form>
    </div>
  );
}

export default BookCreate;
