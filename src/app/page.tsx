

import Editors from "./components/editorspicksection";

// import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import ProductCard from "./components/Products";
import TopNavbar from "./components/TopNavbar";
import WhiteSection from "./components/WhiteSection";
import Blog from "./components/Blog";
import GreenSection from "./components/GreenSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <TopNavbar/>
      <HeroSection/>
      <Editors/>
      <ProductCard/>
      <Blog/>
      <Footer/>
      
     
    </div>
  );
}
