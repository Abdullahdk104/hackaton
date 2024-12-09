

import Editors from "./components/editorspicksection";

// import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import ProductCard from "./components/Products";
import TopNavbar from "./components/TopNavbar";
import Blog from "./components/Blog";
import Footer from "./components/footer";


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
