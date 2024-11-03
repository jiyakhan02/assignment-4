import Link from "next/link";
import Image from "next/image";
import pic from "./p1.jpeg";
export default function Ssg() {
  return (
    <div className="flex justify-between bg-black item-center h-[561px] gap-6">
      <div className="w-1/2 mx-10 text-white">
        <h1 className="font-serif text-[35px] gap-2 my-5">
          Static-Site Generator
        </h1>
        <p className="my-5 text-[25px]">
          A static site generator is a tool that Generates a full static HTML
          website based on raw data and templates. Automates the task of coding
          individual HTML pages. Produces a set of HTML, CSS, and JavaScript
          files that can be served by a web server to visitors.
        </p>
      </div>
      <div className="m-8">
        <Image src={pic} alt="SSG" />
      </div>
    </div>
  );
}
