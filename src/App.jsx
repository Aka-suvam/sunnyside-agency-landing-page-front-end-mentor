
import Header from "./components/Header/Header.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Footer from "./components/Footer/Footer.jsx";
import ImageGallery from "./components/ImageGallery/ImageGallery.jsx";
import Testimonials from "./components/Testimonial/Testimonials.jsx";
import Detail from "./components/Detail/Detail.jsx";
import Graphic from "./components/Graphic/Graphic.jsx";

const App=()=> {

  return (
   <div className="app">
  
  <Header/>
  <main>
  <Hero/>
  <Detail/>
  <Graphic/>
  <Testimonials/>
 <ImageGallery/> 
  </main>
   <Footer/>
   </div>
      
      
  )
}

export default App;
