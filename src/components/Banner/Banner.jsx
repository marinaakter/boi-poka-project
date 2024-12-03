import { useRef } from "react";
import BannerImg from "../../assets/book.jpg";
const Banner = () => {
  const booksRef = useRef(null);

  const handleScroll = () => {
    if (booksRef.current) {
      booksRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="hero bg-base-200 pb-10 md:p-16 rounded-lg">
      <div className="hero-content flex-col md:px-12 lg:flex-row-reverse text-center">
        <img src={BannerImg} className="md:max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">
            Books to Freshen up your bookshelf!
          </h1>
          <button
            onClick={handleScroll}
            ref={booksRef}
            className="btn btn-accent mt-8"
          >
            View The List
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
