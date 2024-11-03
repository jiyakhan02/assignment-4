import Link from "next/link";
import Image from "next/image";
import pic from "./p2.webp";

export default function ISR() {
  return (
    <div className="flex justify-between bg-black item-center h-[561px] gap-6">
      <div className="w-1/2 mx-10 text-white">
        <h1 className="font-serif text-[35px] gap-2 my-5">
          Incremental Static Regeneration
        </h1>
        <p className="my-5 text-[25px]">
          Incremental Static Regeneration (ISR) is a feature in Next.js that
          allows developers to update static content after the build process has
          completed. Unlike traditional static site generation that builds pages
          at compile time, ISR regenerates pages on-demand, post-deployment.
          This is amazing for SSG because a full site build is no longer
          required to update a single page.
        </p>
      </div>
      <div className="m-8">
        <Image src={pic} alt="ISR" width="700" />
      </div>
    </div>
  );
}
