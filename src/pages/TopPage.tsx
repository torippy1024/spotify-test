import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

const TopPage = () => {
  return  (
      <div data-theme="light" className="flex flex-col min-h-screen">
      <Header />
      <div className="grow container mx-auto my-4 px-4">
        <iframe style={{borderRadius:"12px"}} src="https://open.spotify.com/embed/track/2uOu92n9vW1yHir6Na8vpM?utm_source=generator" width="100%" height="352" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </div>
      <Footer />
    </div>
  );
};

export default TopPage;