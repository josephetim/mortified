import * as React from "react";


export default function NewsletterSection() {
  return (
    <div className="overflow-hidden px-14 py-12 bg-neutral-200 rounded-[32px] max-md:px-5">
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex flex-col w-[67%] max-md:ml-0 max-md:w-full">
          <NewsletterContent />
          <NewsletterForm />
        </div>
        <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col self-stretch my-auto max-md:mt-10">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/3b85b14153e1ae2400e6325a2d8bd633250a491691cbf1f1ce66bb16feddacb5?placeholderIfAbsent=true&apiKey=b6f033a57499465b896f604c46ab0dcb"
              alt="Newsletter subscription illustration"
              className="object-contain max-w-full aspect-[1.19] w-[352px]"
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
          Subscribe to our <br />
          Newsletter.
        </h2>
        <p className="mt-6 text-xl leading-8 text-neutral-600 max-md:max-w-full font-kumbhSans">
          Join our community by subscribing to our newsletter,
          <br />
          Receive regular updates on upcoming events, stories of faith,
          and resources
          <br />
          to help you grow spiritually. Stay informed, encouraged, and
          connected with
          <br />
          content that uplifts and empowers your journey with Christ.
          Don't miss out <br />
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
      className="flex flex-wrap gap-4 items-center self-start mt-12 text-xl max-md:mt-10 max-md:max-w-full"
    >
      <div className="relative">
        <label htmlFor="emailInput" className="sr-only">
          Enter your email address
        </label>
        <input
          type="email"
          id="emailInput"
          required
          className="font-poppins gap-2.5 self-stretch py-4 pr-60 pl-4 my-auto rounded-lg border border-solid bg-neutral-200 border-zinc-500 min-w-[240px] text-zinc-500 max-md:pr-5 max-md:max-w-full"
          placeholder="Enter your email address"
          aria-label="Enter your email address"
        />
      </div>
      <button
       
        className="font-poppins gap-2.5 self-stretch p-4 my-auto whitespace-nowrap rounded-lg bg-zinc-800 text-neutral-200"
      >
        Subscribe
      </button>
    </form>
  );
}

