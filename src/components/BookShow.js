function BookShow({ book, onDelete }) {
  const onClickHandler = () => {
    onDelete(book.id);
  };

  return (
    <div className="book-show">
      {book.title}
      <div className="actions">
        <button className="delete" onClick={onClickHandler}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default BookShow;
