import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SpotifyEmbedded from "../components/SpotifyEmbedded";

const TopPage = () => {
  return  (
      <div data-theme="dark" className="flex flex-col min-h-screen">
      <Header />
      <div className="grow container mx-auto my-4 px-4">
        <SpotifyEmbedded id="2uOu92n9vW1yHir6Na8vpM" />
      </div>
      <Footer />
    </div>
  );
};

export default TopPage;