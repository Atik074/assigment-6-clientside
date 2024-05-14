import Testimonials from "../Testimonials/Testimonials";
import AboutUs from "../about/AboutUs";
import Banner from "../banner/Banner";
import Footer from "../footer/Footer";
import ImagesGallaery from "../gallery/ImagesGallaery";
import Navbar from "../navbar/Navbar";
import Supply from "../services/Supply";


const MainLayout = () => {
    return (
        <div>
            <Navbar/>
            <Banner/>
           <Supply/>
           <Testimonials/>
           <ImagesGallaery/>
           <AboutUs/>
           <Footer/>
        </div>
    );
};

export default MainLayout;