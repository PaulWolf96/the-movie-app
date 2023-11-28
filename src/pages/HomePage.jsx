import Footer from "../components/Footer";
import Header from "../components/Header";
import ListMovies from "../components/ListMovies";
import Aside from "../components/Aside";
import '../styles/app.css'


const HomePage = () => {

  const API_KEY = '52a625a829f55a42813acab1b8e140d2';

  const initialEndpoint = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`;

  return (
    <div className="container">
      <Header />
      <br />
      <div className="div-main-aside">
        <ListMovies endpoint={initialEndpoint}/>
        <br />
        <Aside />
      </div>
      <br />
      <Footer />
    </div >
  );
}

export default HomePage;