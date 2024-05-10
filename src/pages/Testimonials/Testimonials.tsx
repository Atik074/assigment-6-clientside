import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
    return (
        <div className="mt-32">
            <div className="text-center">
              <h1 className="text-3xl mb-4 text-amber-500 underline decoration-wavy font-semibold">Testimonials</h1>
              <p className="text-xl">Our golden member who donates highest pay in  every year.</p>
            </div>
 
       <TestimonialCard/>
  </div>
    );
};

export default Testimonials;