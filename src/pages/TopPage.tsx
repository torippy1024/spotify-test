import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SpotifyEmbedded from "../components/SpotifyEmbedded";

const TopPage = () => {
  const trackIds = [
    "2uOu92n9vW1yHir6Na8vpM",
    "1lAz5N2RaBtHmGapbnLwm4",
    "2uOu92n9vW1yHir6Na8vpM",
    "1lAz5N2RaBtHmGapbnLwm4",
    "2uOu92n9vW1yHir6Na8vpM",
    "1lAz5N2RaBtHmGapbnLwm4",
  ];

  return  (
      <div data-theme="dark" className="flex flex-col min-h-screen">
      <Header />
      <div className="grow container mx-auto my-4 px-4">
        {trackIds.map((id, index) =>
          <div key={index} className="mb-4">
            <SpotifyEmbedded id={id} />
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default TopPage;