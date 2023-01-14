import { useState } from "react";
import BookEdit from "./BookEdit";

function BookShow({ book, onDelete, onEdit }) {
  const [showEdit, setShowEdit] = useState(false);

  const onDeleteClickHandler = () => {
    onDelete(book.id);
  };

  const onEditCLickHandler = () => {
    setShowEdit(!showEdit);
  };

  const onSubmitHandler = (id, title) => {
    setShowEdit(!showEdit);
    onEdit(id, title);
  };

  let content = <h3>{book.title}</h3>;

  if (showEdit) {
    content = <BookEdit book={book} onSubmit={onSubmitHandler} />;
  }

  return (
    <div className="book-show">
      <img src={`https://picsum.photos/seed/${book.id}/300/200`} alt="books" />
      <div>{content}</div>
      <div className="actions">
        <button className="edit" onClick={onEditCLickHandler}>
          Edit
        </button>
        <button className="delete" onClick={onDeleteClickHandler}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default BookShow;
