import { useMovies } from "./hooks/useMovies";
import { sortMovies } from "./utils/filterSort";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MovieFilters from "./components/MovieFilters";
import MovieSort from "./components/MovieSort";
import MovieList from "./components/MovieList";

const defaultFilters = { ageGroup: "All", genre: "All", year: "All" };

const App = () => {
  const { movies, loading, error } = useMovies();
  const genreOptions = [...new Set(movies.map((m) => m.genre).filter(Boolean))].sort();
  const ageGroupOptions = [...new Set(movies.map((m) => m.age_group).filter(Boolean))].sort();
  const yearOptions = [...new Set(movies.map((m) => m.releasing_year))].filter(Boolean).sort((a, b) => b - a);
  const display = sortMovies(movies, "year");

  return (
    <div className="min-h-screen flex flex-col bg-base-200">
      <Header />
      <Navbar view="all" onViewChange={noop} wishlistCount={0} onDownload={noop} />
      <main className="flex-1 container mx-auto p-4">
        {loading && <div className="flex justify-center items-center min-h-[200px]"><span className="loading loading-spinner loading-lg text-primary" aria-label="Loading" /></div>}
        {error && <div className="alert alert-error"><span>Failed to load movies.</span></div>}
        {!loading && !error && movies.length > 0 && (
          <>
            <MovieFilters filters={defaultFilters} onFilterChange={noop} genreOptions={genreOptions} ageGroupOptions={ageGroupOptions} yearOptions={yearOptions} />
            <MovieSort sortBy="year" onSortChange={noop} />
            <MovieList
              movies={display}
              wishlist={new Set()}
              watched={new Set()}
              reactions={{}}
              onToggleWishlist={noop}
              onToggleWatched={noop}
              onReaction={noop}
              onClearFilters={noop}
            />
          </>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default App;
