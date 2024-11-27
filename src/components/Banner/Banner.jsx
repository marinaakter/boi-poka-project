import BannerImg from '../../assets/book.jpg';
const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-screen rounded-lg">
  <div className="hero-content flex-col px-12  lg:flex-row-reverse">
    <img
      src={BannerImg}
      className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">Books to Freshen up your bookshelf!</h1>

      <button className="btn btn-primary mt-8">View The List</button>
    </div>
  </div>
</div>
  )
}

export default Banner
