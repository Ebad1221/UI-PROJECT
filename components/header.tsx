import Image from "next/image";
import Link from "next/link";
export default function Header() {
    return (


        <div >
           <div className="bg-neutral-100 flex items-center justify-between w-[full] h-[36px]      ">
              <Image className="ml-14"
                src={"/Frame (1).png"}
                alt="oops"
                width={24}
                height={24}
              />
              
              <ul className="flex gap-3 mr-10 font-medium">
                <li>
                    Find a store  
                </li>
                <li>
                    |
                </li>
                <li>
                      Help
                </li>
                <li>
                    |
                </li>
                <li>
                     Join Us
                </li>
                <li>
                    |
                </li>
                <li>
                     Sign In
                </li>
              </ul>
           </div >
           <div className="flex  items-center  w-[full] h-[60px] ">
           <span className=" ml-10 "> 
            <Image
            src={"/Frame.png"}
            alt="oops"
            width={78.47}
            height={78.47}/></span>
            <ul className= "nav-middle flex gap-4 ml-[23rem] text-[#111111] font-medium">
                <li>New & Featured</li>
                <li>Men</li>
                <li>Women</li>
                <li>Kids</li>
                <li>Sale</li>
                <li>SNKRS</li>
            </ul>
            
            <div className=" ml-32 gap-5 flex items-center">
              <Image 
              src={"/Frame (2).png"}
              alt="oops"
              width={150}
              height={40}/>
            <Image 
            src={"/Frame(3).png"}
            alt="oops"
            width={84}
            height={60}
            />
            </div>
            </div>
        </div>
    )}
  