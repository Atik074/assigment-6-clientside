import { FaFacebook, FaInstagram,  FaTwitter,FaLinkedinIn } from "react-icons/fa";


const Footer = () => {
    return (
        <div className="border-2   rounded-md p-16 flex justify-between mt-20">
                <div>
                   <h3 className="text-xl mb-6 font-medium">Explore</h3>
                <p className="text-[21px] mb-1">Medicine</p>
                <p className="text-[21px] mb-1">Anual cheackup</p>
                <p className="text-[21px] mb-1">Blog</p>
                <p className="text-[21px] mb-1">Contact us</p>
              
              
            </div>
            <div>
            <h3 className="text-xl mb-6 font-medium">Follow us</h3>
                <p className="text-[21px] mb-2">Health Plan</p>
                <p className="text-[21px] mb-2">Blue Shield</p>
                <p className="text-[21px] mb-2">Privacy Policy</p>
                <p className="text-[21px] mb-2">health Net </p>
              
            </div>
            <div>
                 <h3 className="text-xl mb-6 font-medium">Follow us</h3>
                 <div className="flex justify-between items-center">
                  <p className="text-[28px] size-11  mx-auto  border p-2 rounded-full text-center  bg-[#3742fa] hover:bg-[#161d95] text-white ml-3"> <FaFacebook/></p>

                 <p className="text-[28px] size-11  mx-auto  border p-2 rounded-full bg-[rgba(245,27,197,0.99)] hover:bg-[#B53471] text-white ml-3"> <FaInstagram/></p>
                <p className="text-[28px] size-11  mx-auto  border p-2 rounded-full bg-blue-600 hover:bg-blue-800 text-white ml-3"> <FaLinkedinIn/></p>
                 <p className="text-[28px] size-11  mx-auto  border p-2 rounded-full bg-red-500 text-white ml-3 hover:bg-red-800 "> <FaTwitter/></p>
               
           
                 </div>
              
              
            </div>
        </div>
    );
};

export default Footer;
