import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"



  const slides=[
    'https://shorturl.at/sNV28',
    'https://shorturl.at/joGJU',
    'https://shorturl.at/sJTV2',
    'https://shorturl.at/fhT67',
    'https://shorturl.at/cgoJR' ,
    'https://shorturl.at/wADPY' ,

]

const TestimonialCard = () => {
    return (
        <div className="w-full px-40 mt-10 mb-[100px]"> 

    <Carousel>
    <CarouselContent >
      {slides.map((img , index) => (
        <CarouselItem className="flex-none " key={index}> 
              <div className="shadow-lg w-[350px]  border rounded-md ">
                
              <img className="w-[200px] h-[200px] mx-auto mt-10 rounded-full mb-4"  src={img} alt="#" />

              <div className="text-center ">
                <h2 className="text-xl mb-3">Adam Smith</h2>
                <p className="text-[19px] px-2 mb-3">We are very satisfy to help this fund.Their medical service is well.</p>
              </div>

               
              </div>    
       </CarouselItem>
    
      ))}
        
    </CarouselContent>
    <CarouselPrevious/>
    <CarouselNext />
  </Carousel>

  </div>

    );
};

export default TestimonialCard;