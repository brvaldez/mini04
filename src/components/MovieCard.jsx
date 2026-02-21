import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";

const MovieCard = ({ movie, isWishlisted, isWatched, reaction, onToggleWishlist, onToggleWatched, onReaction }) => {
  const { title, director, releasing_year, short_description, genre, age_group, imdb_rating } = movie;

  return (
    <div className="card bg-base-100 shadow-sm">
      <div className="card-body p-4">
        <div className="flex gap-2 flex-wrap">
          <span className="badge badge-primary badge-sm">{genre}</span>
          <span className="badge badge-outline badge-sm">{age_group}</span>
          <span className="badge badge-ghost badge-sm">{releasing_year}</span>
        </div>
        <h2 className="card-title text-base">{title}</h2>
        <p className="text-sm opacity-80">{director}</p>
        <p className="text-sm">{short_description}</p>
        <p className="text-xs opacity-70">IMDB: {imdb_rating}</p>
        <div className="card-actions justify-end mt-2 flex-wrap gap-1">
          <button type="button" className="btn btn-sm btn-ghost" onClick={() => onReaction(movie.title, reaction === "like" ? null : "like")} aria-label="Like">
            <FaThumbsUp />
          </button>
          <button type="button" className="btn btn-sm btn-ghost" onClick={() => onReaction(movie.title, reaction === "dislike" ? null : "dislike")} aria-label="Dislike">
            <FaThumbsDown />
          </button>
          <button type="button" className={`btn btn-sm ${isWishlisted ? "btn-error" : "btn-ghost"}`} onClick={() => onToggleWishlist(movie.title)}>
            Wishlist
          </button>
          <button type="button" className={`btn btn-sm ${isWatched ? "btn-success" : "btn-ghost"}`} onClick={() => onToggleWatched(movie.title)}>
            Watched
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
