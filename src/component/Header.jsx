// import { useState } from "react";
import { SlArrowDown } from "react-icons/sl";

export default function Header() {
    // const [isOpen, setIsOpen] = useState(false);
    

    return(
        <>
            <div className="header1 hidden justify-between p-3 md:flex">
                <div className="flex lg:mx-12 items-center">
                    <h1 className="font-bold text-3xl mx-4">snap</h1>
                    <div className="pt-1.5 mx-8 gap-7 hidden lg:flex">
                        <h4 className="flex">Features <SlArrowDown className="mt-2.5 text-[0.6rem] mx-1"/></h4>
                        <h4 className="flex">Company <SlArrowDown className="mt-2.5 text-[0.6rem] mx-1"/></h4>
                        <h4 className="">Careers</h4>
                        <h4 className="">About</h4>
                    </div>
                </div>
                <div className="items-center hidden lg:flex">
                    <h1 className="mx-4">Login</h1>                 
                    <h1 className="border-black border-2 p-1 px-3 mx-4 rounded-xl">Register</h1> 
                </div>
            </div>
            {/* Header 2 */}
            <div className="header1 justify-between p-3 shadow-lg flex md:hidden">
                <div className="flex lg:mx-12 items-center">
                    <h1 className="font-bold text-3xl mx-4">snap</h1>
                    <div className="pt-1.5 mx-8 gap-7 hidden">
                        <h4 className="flex">Features <SlArrowDown className="mt-2.5 text-[0.6rem] mx-1"/></h4>
                        <h4 className="flex">Company <SlArrowDown className="mt-2.5 text-[0.6rem] mx-1"/></h4>
                        <h4 className="">Careers</h4>
                        <h4 className="">About</h4>
                    </div>
                </div>
                <div className="items-center hidden">
                    <h1 className="mx-4">Login</h1>                 
                    <h1 className="border-black border-2 p-1 px-3 mx-4 rounded-xl">Register</h1> 
                </div>
            </div>
        </>
        
        
    )
}