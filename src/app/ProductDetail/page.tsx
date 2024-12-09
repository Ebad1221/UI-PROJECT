import Footer from "../components/footer";
import Header from "../components/header";
import Image from "next/image";

export default function ProductDetail() {
  return (
    <div className="container mx-auto px-4">
      <div className="main flex flex-col md:flex-row items-center justify-center gap-8 md:gap-24 mt-10">
        <div className="flex-shrink-0">
          <Image src={"/Rectangle.png"} alt="Product Image" width={653} height={653} className="w-full h-auto" />
        </div>
        <div className="flex-grow">
          <h1 className="detail-1 font-medium text-3xl md:text-5xl text-[#111111] mb-4">Nike Air Force 1 PLT.AF.ORM</h1>
          <div className="w-full h-auto font-normal text-sm text-[#111111] mb-4">
            Turn style on its head with this crafted take on the Air Jordan 1
            Mid. Its "inside out"-inspired construction, including unique
            layering and exposed foam accents, ups the ante on this timeless
            Jordan Brand silhouette. Details like the deco stitching on the
            Swoosh add coveted appeal, while the unexpected shading, rich
            mixture of materials and aged midsole aesthetic give this release an
            artisan finish.
          </div>
          <h1 className="font-medium text-2xl md:text-4xl text-[#111111] mb-4">₹ 8,695.00</h1>
          <span>
            <Image
              src={"/Image(10).png"}
              alt="Brand Logo"
              width={172.42}
              height={44}
              className="w-full h-auto"
            />
          </span>
        </div>
      </div>
      <Footer />
    </div>
  );
}
