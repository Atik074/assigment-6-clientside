import Testimonials from "../Testimonials/Testimonials";
import Banner from "../banner/Banner";
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
        </div>
    );
};

export default MainLayout;