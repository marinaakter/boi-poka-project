import PropTypes from "prop-types";
import { CiStar } from "react-icons/ci";
import { Link } from "react-router-dom";
const Book = ({ book }) => {
  const { bookId, image, bookName, author, tags, category, rating } = book;
  return (
    <Link to={`/books/${bookId}`}>
      <div className="card bg-base-100  shadow-xl border p-6">
        <figure className="bg-gray-200 py-8 rounded-2xl">
          <img className="h-[166px]" src={image} alt={bookName} />
        </figure>
        <div className="card-body">
          <div className="flex justify-center gap-3">
            {tags.map((tag, idx) => (
              <button
                key={idx}
                className="btn btn-xs bg-slate-100 text-green-400"
              >
                {tag}
              </button>
            ))}
          </div>
          <h2 className="card-title">
            {bookName}
            <div className="badge badge-accent">NEW</div>
          </h2>
          <p>By: {author}</p>
          <div className="border-t-2 border-dashed"></div>
          <div className="flex flex-row justify-between">
            <p>{category}</p>
            <div className="flex items-center gap-2">
              <p> {rating} </p>
              <CiStar className="text-2xl" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

Book.propTypes = {
  book: PropTypes.object,
};

export default Book;
