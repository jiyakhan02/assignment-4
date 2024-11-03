import Link from "next/link";
import Image from "next/image";
import pic from "./OIP.jpeg";
export default function CSR() {
  return ( 
    <div className="flex justify-between bg-black item-center h-[561px] gap-6">
    <div className="w-1/2 mx-10 text-white ">
      <h1 className="font-serif text-[35px] gap-2 my-5">Client-Side Rendering</h1>
      <p className="my-5 text-[25px] ">
        Client-side rendering (CSR) is a modern web rendering approach where:
        The bulk of the HTML, CSS, and JavaScript rendering processes are
        handled directly in the user’s browser, rather than on the server.
        The processing and rendering of the content happens in the browser using
        JavaScript, rather than on the server.
        The request to access a page is processed by the browser using only the
        JavaScript file to generate the HTML content.
      </p>
    </div>
    <div className="m-8">
        <Image src={pic} alt="CSR" width={500} height={400}/>
    </div>
    </div>
  );
}
