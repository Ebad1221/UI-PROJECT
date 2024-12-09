import Image from "next/image";
import Footer from "../../../components/footer";

export default function checkout() {
  return (
    <div className="main">
        <div className="ml-[289px]">
      <h1 className="text-xl font-medium text-[#111111] ">How would you like to get your order?</h1>
      <p className="text-base font-normal text-[#757575] w-[440px] h-[208px] ">
        Customs regulation for India require a copy of the recipient's KYC. The
        address on the KYC needs to match the shipping address. Our courier will
        contact you via SMS/email to obtain a copy of your KYC. The KYC will be
        stored securely and used solely for the purpose of clearing customs
        (including sharing it with customs officials) for all orders and
        returns. If your KYC does not match your shipping address, please click
        the link for more information. <span className="underline "> Learn More</span>
        
      </p>
     <span> <Image src={"/Auto Layout Horizontal (3).png"}
      alt="oops"
      width={440}
      height={82}/> </span>
    </div>
    <div className="ml-[289px] mt-10 ">
        <Image src={"/Frame (18).png"}
        alt="oops"
        width={440}
        height={1504}/>
   
     </div>
    </div>
  );

}