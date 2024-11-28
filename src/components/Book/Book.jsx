import PropTypes from 'prop-types';
import { CiStar } from "react-icons/ci";
const Book = ({ book }) => {
  const { image, bookName, author, tags, category, rating } = book;
  return (
    <div className="card bg-base-100 w-96 shadow-xl border p-6">
      <figure className='bg-gray-200 py-8 rounded-2xl'>
        <img
          className='h-[166px]'
          src={image}
          alt={bookName}
        />
      </figure>
      <div className="card-body">
        <div className='flex justify-center gap-3'>
        {
          tags.map(tag => <button key={book.idx} className='btn btn-xs bg-slate-100 text-green-400'> {tag} </button>)
        }
        </div>
        <h2 className="card-title">
          {bookName}
          <div className="badge badge-accent">NEW</div>
        </h2>
        <p>By: { author }</p>
        <div className="border-t-2 border-dashed"></div>
        <div className='flex flex-row justify-between'>
          <p>{category}</p>
          <div className='flex items-center gap-2'>
            <p> {rating} </p>
            <CiStar className='text-2xl' />
          </div>
        </div>
      </div>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.string,
};


export default Book;
