import MovieCard from "../../components/MovieCard";
import MoviesScore from "../../components/MoviesScore";
import Pagination from "../../components/Pagination";

function Listing() {
  return (
    <>

      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
            <MovieCard />
          </div>
        </div>
      </div>
      <Pagination />
    </>
  );
}

export default Listing;