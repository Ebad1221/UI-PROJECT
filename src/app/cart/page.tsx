import Image from "next/image";
import Footer from "../../../components/footer";
export default function cart(){
    return(
        <>
        <div className="main  ">
            <div className=" mb-14 mt-10 border-2 flex  bg-neutral-100 w-[717.33px] h-[62.89px] ml-32 ">
                <p>
                <span className="font-medium text-black ">Free Delievry<br/></span>
               <span className="text-black font-normal"> Applies to orders of ₹ 14 000.00 or more.</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                   <span className="font-semibold text-black underline"> View details</span>
                </p>
                </div>
                <div className="float-right relative top-[-120px] mr-10 mb-14">
                  <Image 
                  src={"/Frame (15).png"}
                  alt="oops"
                  width={350}
                  height={295}/>    
                </div> 
                <h1 className="font-medium text-xl ml-32">Bag</h1>   
                <Image className="ml-32"
                src={"/Auto Layout Vertical.png"}
                alt="oops"
                width={717}
                height={436}
                />
                <div className="">
                    <h1 className="font-medium text-xl ml-32 mt-7">
                        Favorites
                    </h1>
                    <p className="font-semibold text-base ml-32 text-black">There are no items saved to your favourites.</p>
                </div>
                <div>
                    <h1 className="font-medium text-xl ml-20 mt-7">
                        You Might Also Like
                    </h1>
                    <Image className="ml-20 mt-7"
                    src={"/Auto Layout Horizontal (2).png"}
                    alt="oops"
                    width={431}
                    height={523}
                    />
                </div>
            
        </div>
        <Footer />
        </>   
)
}         