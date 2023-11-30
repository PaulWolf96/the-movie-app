import Footer from "../components/Footer";
import Header from "../components/Header";
import ListMovies from "../components/ListMovies";
import Aside from "../components/Aside";
import '../styles/app.css'
import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import MovieContext from "../context/MovieContext";
import ListSearchMovie from "../components/ListSearchMovie";


const HomePage = () => {

  const API_KEY = '52a625a829f55a42813acab1b8e140d2';

  const initialEndpoint = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`;

  const {modeDark} = useContext(ThemeContext);
  const {query} = useContext(MovieContext);

  return (
    <div className={modeDark ? 'container-dark' : 'container'}>
      <Header />
      <br />
      <div className="div-main-aside">
        {query ? <ListSearchMovie /> : <ListMovies endpoint={initialEndpoint}/> }
        <br />
        <Aside />
      </div>
      <br />
      <Footer />
    </div >
  );
}

export default HomePage;