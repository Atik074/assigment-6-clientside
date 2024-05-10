import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import img1 from '../../assets/images3.jpeg'

const Supply = () => {
    return (

      <div className="mt-20 grid grid-cols-3 gap-8">
        <Card className="rounded-md">
            <div>
                <img className="w-full rounded-md" src={img1} alt="" />
            </div>
      <CardHeader>
        <CardTitle className="text-2xl font-medium">Medicine</CardTitle>
        <CardDescription className="text-[19px]">We provide primary treatment and  some medicine.For any crisis situation we send the patient general hospital</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-[22px] font-medium">Category:</p>
        <p className="text-[22px] font-medium">Amount :</p>
      </CardContent>
      <CardFooter className="flex justify-center">
         <Button className="text-[19px] ">View Details</Button>
      </CardFooter>
    </Card>
    {/* /////////// */}
    <Card className="rounded-md" >
                <img className="w-full rounded-md" src={img1} alt="" />
      <CardHeader>
        <CardTitle className="text-2xl font-medium">Medicine</CardTitle>
        <CardDescription className="text-[19px]">We provide primary treatment and  some medicine.For any crisis situation we send the patient general hospital</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-[22px] font-medium">Category:</p>
        <p className="text-[22px] font-medium">Amount :</p>
      </CardContent>
      <CardFooter className="flex justify-center">
         <Button className="text-[19px] ">View Details</Button>
      </CardFooter>
    </Card>
    {/* /////////////////// */}

    <Card className="rounded-md" >
                <img className="w-full rounded-md" src={img1} alt="" />
      <CardHeader>
        <CardTitle className="text-2xl font-medium">Medicine</CardTitle>
        <CardDescription className="text-[19px]">We provide primary treatment and  some medicine.For any crisis situation we send the patient general hospital</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-[22px] font-medium">Category:</p>
        <p className="text-[22px] font-medium">Amount :</p>
      </CardContent>
      <CardFooter className="flex justify-center">
         <Button className="text-[19px] ">View Details</Button>
      </CardFooter>
    </Card>

    {/* /////////////////// */}
    <Card className="rounded-md" >
                <img className="w-full rounded-md" src={img1} alt="" />
      <CardHeader>
        <CardTitle className="text-2xl font-medium">Medicine</CardTitle>
        <CardDescription className="text-[19px]">We provide primary treatment and  some medicine.For any crisis situation we send the patient general hospital</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-[22px] font-medium">Category:</p>
        <p className="text-[22px] font-medium">Amount :</p>
      </CardContent>
      <CardFooter className="flex justify-center">
         <Button className="text-[19px] ">View Details</Button>
      </CardFooter>
    </Card>

    {/* ///////////// */}
    <Card className="rounded-md" >
                <img className="w-full rounded-md" src={img1} alt="" />
      <CardHeader>
        <CardTitle className="text-2xl font-medium">Medicine</CardTitle>
        <CardDescription className="text-[19px]">We provide primary treatment and  some medicine.For any crisis situation we send the patient general hospital</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-[22px] font-medium">Category:</p>
        <p className="text-[22px] font-medium">Amount :</p>
      </CardContent>
      <CardFooter className="flex justify-center">
         <Button className="text-[19px] ">View Details</Button>
      </CardFooter>
    </Card>

    {/*  */}
    <Card className="rounded-md" >
                <img className="w-full rounded-md" src={img1} alt="" />
      <CardHeader>
        <CardTitle className="text-2xl font-medium">Medicine</CardTitle>
        <CardDescription className="text-[19px]">We provide primary treatment and  some medicine.For any crisis situation we send the patient general hospital</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-[22px] font-medium">Category:</p>
        <p className="text-[22px] font-medium">Amount :</p>
      </CardContent>
      <CardFooter className="flex justify-center">
         <Button className="text-[19px] ">View Details</Button>
      </CardFooter>
    </Card>
   
        </div>
      
    );
};

export default Supply;