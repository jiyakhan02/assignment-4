import Link from "next/link";
import Image from "next/image";
import pic from "./public/p3.png";

export default function Home() {
  return (
    <div className="flex justify-between bg-black item-center h-[561px] gap-6">
      <div className="w-1/2 mx-10 text-white">
        <h1 className="font-serif text-[35px] gap-2 my-5">RENDERING</h1>
        <p className="my-5 text-[25px]">
          By default, Next.js pre-renders every page. This means that Next.js
          generates HTML for each page in advance, instead of having it all done
          by client-side JavaScript. Pre-rendering can result in better
          performance and SEO. Each generated HTML is associated with minimal
          JavaScript code necessary for that page. When a page is loaded by the
          browser, its JavaScript code runs and makes the page fully interactive
          (this process is called hydration in React).
        </p>
      </div>
      <div className="m-8">
        <Image src={pic} alt="Rendering" />
      </div>
    </div>
  );
}
