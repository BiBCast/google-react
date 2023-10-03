import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { SearchBar } from "./components/SearchBar";
import google from "./assets/google.png";

function App() {
  return (
    <>
      <Header />
      <div className="central_image">
        <img src={google}></img>
      </div>
      <SearchBar />
      <Footer />
    </>
  );
}

export default App;
