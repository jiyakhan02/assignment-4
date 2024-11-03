import Link from "next/link";
import Image from "next/image";
import pic from "./OIP.jpeg";
export default function Ssr() {
  return (
    <div className="flex justify-between bg-black item-center h-[561px] gap-6">
      <div className="w-1/2 mx-10 text-white">
        <h1 className="font-serif text-[35px] gap-2 my-5">
          Server-Side Rendering
        </h1>
        <p className="my-5 text-[25px]">
          Server Side Rendering (SSR) is a technique where the server generates
          the HTML content of a web page and sends it to the client's browser.
          This is in contrast to Client Side Rendering (CSR), where the browser
          generates the HTML content using JavaScript.
        </p>

        <h1> How SSR Works </h1>
        <p>
          When a user requests a web page, the server processes the request and
          generates the HTML content. This fully-formed HTML page is then sent
          to the client's browser, which can display it immediately. This
          process involves the following steps: An HTTP request is made to the
          server. The server processes the necessary code and generates the HTML
          content. The server sends the fully-formed HTML page to the client's
          browser.
        </p>
      </div>
      <div className="m-8">
        <Image src={pic} alt="SSR" />
      </div>
    </div>
  );
}
