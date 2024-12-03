import { useLoaderData, useParams } from "react-router-dom";
import { addToStoredReadList } from "../../utility/addToDo";

const BookDetail = () => {
  const { bookId } = useParams();
  const id = parseInt(bookId);
  const data = useLoaderData();
  const book = data.find((book) => book.bookId === id);

  const {
    // bookId: currentBookId,
    bookName,
    author,
    image,
    review,
    totalPages,
    category,
    tags,
    publisher,
    yearOfPublishing,
    rating,
  } = book;

  const handleMarkAsRead = (id) => {
    /* 
    1. understand what to store or save: => bookId
    2. where to store: => database
    3. array, list, collection: 
    4. check if the book is already readlist or not. If not then add to the book to the list. if yes, do not add the book
    
    */
    addToStoredReadList(id)


  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 mb-10">
      <div className=" bg-gray-100 rounded-xl flex justify-center items-center  w-[450px]">
        <img className="h-[400px] " src={image} alt={bookName} />
      </div>
      <div>
        <h1 className="text-5xl font-bold mb-5">{bookName}</h1>
        <p>By: {author} </p>
        <div className="divider"></div>
        <p>{category}</p>
        <div className="divider"></div>
        <p>
          <span className="font-bold">Review:</span> {review}{" "}
        </p>
        <div className="flex gap-4 space-y-3">
          <span className="mt-3 font-bold">Tag </span>
          {tags.map((tag, index) => (
            <button
              key={index}
              className="btn btn-xs bg-slate-100 text-green-400"
            >
              #{tag}
            </button>
          ))}
        </div>
        <div className="divider"></div>
        <div className="flex gap-10">
          <div>
            <p>Number of Pages: </p>
            <p>Publisher: </p>
            <p>Year of Publishing: </p>
            <p>Ratings: </p>
          </div>
          <div className="ml-10">
            <p className="font-bold">{totalPages}</p>
            <p className="font-bold"> {publisher} </p>
            <p className="font-bold"> {yearOfPublishing} </p>
            <p className="font-bold"> {rating} </p>
          </div>
        </div>
        <div className="flex gap-5 mt-5">
        <button onClick={()=> handleMarkAsRead(bookId)} className="btn btn-outline btn-accent">Mark as Read</button>
          <button className="btn btn-info">Add to Wishlist</button>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
