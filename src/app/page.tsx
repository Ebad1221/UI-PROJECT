
import Image from "next/image";
import Header from "./components/header";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <div className="hero-1 flex flex-col items-center justify-center bg-[#f5f5f5] p-4">
        <h1 className="font-helvetica font-medium text-[2.5vw] leading-[3vw] text-[#111111]">
          Hello Nike App
        </h1>
        <p className="text-center">
          Download the app to access everything Nike.
          <span className="underline font-medium">Get Your Great</span>
        </p>
      </div>
      <div className="flex justify-center w-full">
        <Image
          src={"/Image.png"}
          alt="oops"
          width={1200}
          height={700}
          className="w-full max-w-[1200px] h-auto"
        />
      </div>
      <div className="flex justify-center mt-6 w-full">
        <Image
          src={"/Frame (4).png"}
          alt="oops"
          width={1000}
          height={229}
          className="w-full max-w-[1000px] h-auto"
        />
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between w-full p-4">
        <h1 className="new-hero font-medium text-2xl">Best of Air Max</h1>
        <div className="flex items-center">
          <span className="new-hero font-semibold text-base">Shop</span>
          <span>
            <Image
              src={"/Frame (6).png"}
              alt="oops"
              width={48}
              height={48}
            />
          </span>
          <span>
            <Image
              src={"/Frame (5).png"}
              alt="oops"
              width={48}
              height={48}
            />
          </span>
        </div>
      </div>
      <div className="w-full">
        <Image
          src={"/Frame (8).png"}
          alt="oops"
          width={1440}
          height={540.36}
          className="w-full h-auto"
        />
      </div>
      <div>
        <h2 className="new-hero text-2xl font-medium ml-12">Featured</h2>
      </div>
      <div className="flex justify-center mt-6 w-full">
        <Image
          src={"/Image (1).png"}
          alt="oops"
          width={1200}
          height={300}
          className="w-full max-w-[1200px] h-auto"
        />
      </div>
      <div className="flex justify-center items-center mt-6">
        <h1 className="new-hero text-5xl font-medium">STEP INTO WHAT FEELS GOOD</h1>
      </div>
      <div className="flex justify-center items-center mt-6">
        <p className="new-hero text-base font-normal text-center">
          Cause everyone should know the feeling of running in that perfect pair.
        </p>
      </div>
      <div className="flex justify-center items-center mt-6">
        <button className="bg-[#111111] text-white rounded-full px-6 py-3 text-sm">
          Find Your Shoe
        </button>
      </div>
      <div className="new-hero text-2xl font-medium ml-12">Gear Up</div>
      <div>
        <Image
          src={"/Frame (7).png"}
          alt="oops"
          width={1356}
          height={509}
          className="w-full h-auto"
        />
      </div>
      <div className="new-hero ml-12 text-2xl font-medium">
        <h1>Don't Miss</h1>
        <Image
          className="mt-4 w-full"
          src ={"/Image (2).png"}
          alt="oops"
          width={1344}
          height={700}
        />
      </div>
      <div className="new-hero text-5xl font-medium flex justify-center items-center mt-6">
        <h1>FLIGHT ESSENTIALS</h1>
      </div>
      <p className="new-hero font-normal text-base flex justify-center items-center mt-6">
        Your built-to-last, all-week wears—but with style only Jordan Brand can deliver.
      </p>
      <div className="flex justify-center items-center mt-6">
        <button className="bg-[#111111] text-white rounded-full px-6 py-3 text-sm">
          Shop
        </button>
      </div>
      <div>
        <h1 className="new-hero ml-12 text-2xl font-medium">The Essentials</h1>
      </div>
      <div className="flex justify-center">
        <Image
          className="mt-4 w-full"
          src={"/Frame (9).png"}
          alt="oops"
          width={1270}
          height={470}
        />
      </div>
      <div className="flex justify-center items-center">
        <Image
          className="mt-24 w-full"
          src={"/Frame (10).png"}
          alt="oops"
          width={880}
          height={192}
        />
      </div>
      <Footer />
    </div>
  );
}