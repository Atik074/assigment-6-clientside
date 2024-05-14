import img from'../../assets/woman2.jpg'
import './ImageGallery.css'

const ImagesGallaery = () => {
    return (
    <div className='grid grid-cols-3 gap-8'>
      <div className='w-[400px] border shadow-md relative photo_allbum rounded-md'>
            <img src={img} className="allbum rounded-md shadow  " alt="" />    
    <div className='bottom-8 absolute description  text-center px-10 invisible'>
            <p className='text-[20px] '>Natural disaster, health company , access to adequate healthcare and medical supplies.</p>
     </div>
   </div>
   {/*  */}
   <div className='w-[400px] border shadow-md relative photo_allbum rounded-md'>
            <img src={img} className="allbum rounded-md shadow  " alt="" />    
    <div className='bottom-8 absolute description  text-center px-10 invisible'>
            <p className='text-[20px] '>Health and medical supplies is not merely a charitable gesture; it's a tangible expression.</p>
     </div>
   </div>
   {/*  */}
   <div className='w-[400px] border shadow-md relative photo_allbum rounded-md'>
            <img src={img} className="allbum rounded-md shadow  " alt="" />    
    <div className='bottom-8 absolute description text-center px-10 invisible'>
            <p className='text-[20px] p-2 '>Most significant challenges in humanitarian work is ensuring  donated  efficiently</p>
          
     </div>
   </div>
   {/*  */}
 </div>
    );
};

export default ImagesGallaery;
