import * as React from "react";
import { images } from "../assets/images/images";
import Image from "next/image";

function AccountDetails({ title, details }) {
  return (
    <div className="flex flex-col mt-12 text-xl leading-relaxed max-md:mt-10 max-md:max-w-full">
      <div className="font-kumbhSans font-semibold text-zinc-800 max-md:max-w-full">
        {title}
      </div>
      <div className="flex flex-col  mt-6 w-full text-neutral-600 max-md:max-w-full">
        {details.map((detail, index) => (
          <div key={index} className="mt-3 first:mt-0 max-md:max-w-full font-normal font-kumbhSans">
            {detail.label}: <span className="font-semibold font-kumbhSans">{detail.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}


function PartnershipSection() {
  const accountDetails = {
    title: "ACCOUNT DETAILS",
    details: [
      {
        label: "Account Name",
        value: "THEMORTI.CHRIST.DISCI&GRO. PLA."
      },
      {
        label: "Account Number",
        value: "1305897018"
      },
      {
        label: "Bank Name",
        value: "Providus Bank"
      }
    ]
  };

  return (
    <div className="overflow-hidden pl-16 pt-16 pb-16 bg-neutral-200 rounded-[32px] max-md:pl-5">
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col self-stretch my-auto mr-0 max-md:mt-10 max-md:max-w-full">
            <h2 className="self-start text-5xl font-kumbhSans font-semibold text-zinc-800 max-md:max-w-full max-md:text-4xl">
              Interested in partnering
              <br  />
              with us?
            </h2>
            <hr className="border-[#B7B7B7] h-[1px] mt-[20px] mb-[12px]"  />
            <AccountDetails 
              title={accountDetails.title} 
              details={accountDetails.details} 
            />
          </div>
        </div>
        <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
          <Image
            loading="lazy"
            src={images.transferIllustration}
            alt="Partnership illustration"
            className="object-contain grow w-full aspect-[1.6] max-md:max-w-full"
          />
        </div>
      </div>
    </div>
  );
}

export default PartnershipSection;