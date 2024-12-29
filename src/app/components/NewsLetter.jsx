import * as React from "react";
import { images } from "../assets/images/images";
import Image from "next/image";

export default function NewsletterSection() {
  return (
    <div className="overflow-hidden relative max-sm:w-full max-sm:px-0  bg-neutral-200 rounded-[32px] max-md:px-5">
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex flex-col max-sm:px-0 max-sm:w-full px-14 py-12 w-[67%] max-md:ml-0 max-md:w-full">
          <NewsletterContent />
          <NewsletterForm />
        </div>
        <div className="flex ml-5 w-[33%] max-md:ml-0 max-md:w-full">
          <div className="flex   max-md:mt-10">
            <Image
              loading="lazy"
              src={images.newsletterIllustration}
              alt="Newsletter subscription illustration"
              className=" absolute w-[63%] h-[100%] ri object-cover grow  aspect-[1.6] max-md:max-w-full"
            />
            <Image
              loading="lazy"
              src={images.linesBg}
              alt="Newsletter subscription illustration"
              className=" absolute h-[60%] left-0 top-0 max-w-full aspect-[1.19] w-[50%]"
            />

          </div>
        </div>
      </div>
    </div>
  );
}


function NewsletterContent() {
  return (
    <div className="flex flex-col w-full max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-col w-full max-md:max-w-full">
        <h2 className="text-5xl font-semibold text-zinc-800 max-md:text-4xl font-kumbhSans">
          Subscribe to our <br/>Newsletter.
        </h2>
        <p className="mt-6 text-xl leading-8 text-neutral-600 max-md:max-w-full font-kumbhSans">
          Join our community by subscribing to our newsletter<br/>
          Receive regular updates on upcoming events, stories of faith,
          and resources

          to help you grow spiritually. 
          Don't miss out <br/>
          Sign up today!
        </p>
      </div>
    </div>
  );
}



function NewsletterForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form 
      className="flex flex-wrap gap-4  items-center self-start mt-12 max-sm:items-stretch text-xl max-md:mt-10 max-md:max-w-full"
    >
      <div className="relative max-sm:w-full">
        <label htmlFor="emailInput" className="sr-only">
          Enter your email address
        </label>
        <input
          type="email"
          id="emailInput"
          required
          className="font-poppins gap-2.5 self-stretch py-4 pr-60 pl-4  max-sm:w-full my-auto rounded-lg border border-solid bg-neutral-200 border-zinc-500 min-w-[240px] text-zinc-500  max-md:max-w-full"
          placeholder="Enter your email address"
          aria-label="Enter your email address"
        />
      </div>
      <button
       
        className="font-poppins gap-2.5 self-stretch max-sm:w-full p-4 my-auto whitespace-nowrap rounded-lg bg-zinc-800 text-neutral-200"
      >
        Subscribe
      </button>
    </form>
  );
}

