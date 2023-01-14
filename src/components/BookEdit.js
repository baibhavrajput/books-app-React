import { useState } from "react";

function BookEdit({ book, onSubmit}) {
  const [title, setTitle] = useState(book.title);

  const onChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    onSubmit(book.id, title);
  };

  return (
    <div>
      <form className="book-edit" onSubmit={onSubmitHandler}>
        <label>Title</label>
        <input className="input" value={title} onChange={onChangeHandler} />
        <button className="button is-primary">Save</button>
      </form>
    </div>
  );
}

export default BookEdit;
