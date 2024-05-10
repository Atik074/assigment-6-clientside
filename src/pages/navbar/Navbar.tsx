import { Button } from "@/components/ui/button";
import logo from '../../assets/images.png'


const Navbar = () => {
    return (
        <div className="flex justify-between items-center bg-[#dcdde1] p-2">
          <img className="w-16 rounded-full" src={logo} alt="#" />
            <div>
                <ul className="flex text-xl justify-between">
                    <li className="mr-10"><a href="#">All supplies</a></li>
                    <li className="mr-10"><a href="/dashboard">Dashboard</a></li>
                    <li className="mr-10"><a href="/about">About</a></li>
                    <li className="mr-10"><a href="/contact">Contact</a></li>
    
                  
                 
                </ul>
            </div>
             <Button className="text-[21px]">Login</Button>
        </div>
    );
};

export default Navbar;