import * as React from "react";
import Image from "next/image";
import { images } from "../assets/images/images";
import { NavBar } from "../components/NavBar";
import { pastorate } from "./pastorate";
import PastorateCard from "../components/PastorateCard";
import Accordion from "../components/AccordionItem";
import { administration } from "./administration";
import PartnershipSection from "../components/PartnershipCard";
import { Footer } from "../components/Footer";


export default function About () {
    return (
        <div className="bg-stone-950 maxsm: pt-0 pt-6 ">
                  <section data-page="2" className="hidden"></section>
                 
                  
            {/* <div className="flex items-center pt-8 justify-center">
            <NavBar />
            </div> */}
            <div className="pl-[70px] pr-[87px] max-sm:px-[16px] max-sm:pt">
                <div className=" max-sm:hidden mt-[89px]">   
                    <Image 
                        src={images.about}
                    className="object-contain w-full h-[631px] aspect-square  max-md:mt-10"
                        alt='about'
                    />
                </div>
                <div className="md:hidden lg:hidden  max-sm:mt-0 ">
                    <Image 
                    alt="image"
                      src={images.aboutSmpng}
                      className="object-contain  aspect-square max-sm:mt-0 max-md:mt-10"

                    />
                    <div className="flex flex-col gap-4">
                      <p className="font-kumbhSans text-[16px] text-center font-normal text-[#8E8E8E]">Welcome to the Mortified Christian Discipleship and
                            Growth Platform. This is the family of God and the
                            body of Christ. We are glad to have you in our
                            community where we uphold the teachings of the
                            basic Christian faith. Feel free to browse through our
                            programs. We would be more than excited to have you
                            join our community.</p>
                      <p className="font-kumbhSans text-[16px] max-sm:mt-[24px] text-center font-normal text-[#8E8E8E]"><span className="text-[#CCC] font-[500]">MORTIFIED</span> is a non-denominational, Christian
                                Discipleship platform that fosters the believer’s
                                journey. We hold fast the tenets of scripture with
                                relation to Christian doctrine and the normal
                                Christian life. We are not bound by geographical
                                factors thereby ensuring that the gospel of the
                                Kingdom reaches out to the believer in every part
                                of the world.</p>
                    </div>
                    
                </div>

                <div className="flex overflow-hidden flex-col justify-center items-center self-stretch max-sm:py-4 py-32 max-sm:px-0 max-sm:mt-[50px]  w-full bg-stone-950 max-md:px-5 max-md:py-24 max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-wrap gap-10 justify-between w-full items-center -mb-6 max-md:mb-2.5 max-md:max-w-full">
          <div className="flex flex-col self-stretch my-auto min-w-[240px] w-[426px] max-md:max-w-full">
            <div className="flex flex-col w-full font-semibold max-md:max-w-full">
              <div className="font-kumbhSans gap-2.5 max-sm:self-center self-start px-4 py-2.5 text-[15px] font-normal  text-white rounded-3xl bg-zinc-800">
                FOR OVER HALF A DECADE
              </div>
              <div className=" font-kumbhSans text-[36px] max-sm:text-[24px] font-semibold mt-6 max-sm:text-center text-4xl text-neutral-200 max-md:max-w-full">
                Revealing the <span className="text-[#828282]"> purposes </span>  and <span className="text-[#828282]">intents</span> of God to the believer through <span className="text-[#828282]"> the word </span> .
              </div>
            </div>
            <div className="flex flex-col items-start mt-7 w-full max-md:max-w-full max-sm:items-center">
              <div className="flex max-w-full max-sm:min-h-[45px] max-sm:w-[148px] rounded-lg border border-solid bg-neutral-900 border-neutral-800 min-h-[86px] w-[228px]" />

              <div className="flex mt-6 max-sm:min-h-[48px] max-sm:w-[212px] max-w-full max-sm:rounded-[8px] rounded-lg border border-solid bg-neutral-900 border-neutral-800 min-h-[86px] w-[452px]" />
            </div>
          </div>
          <div className="flex flex-col self-stretch text-xl leading-8 min-w-[240px] w-[603px] max-md:max-w-full">
           
            <div className="font-kumbhSans max-sm:text-center max-sm:text-[16px] text-[#BDBDBD] max-md:max-w-full">
              We undertake trainings for our members who are interested 
              having help and guidance with their spiritual walk, through our
              various programs, targeted at achieving growth in the lives of
              our trainee members. Refer to our programs page to find an <br />
              outline of our programs
            </div>
          </div>
        </div>
                </div>

                <div className="flex overflow-hidden flex-col justify-center items-center self-stretch max-sm:px-0  py-32 max-sm:py-0  w-full bg-stone-950 max-md:px-5  max-md:py-24 max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-wrap gap-10 max-sm:gap-0 justify-between w-full items-center -mb-6 max-md:mb-2.5 max-md:max-w-full">
          <div className="flex flex-col self-stretch max-md:items-center my-auto min-w-[240px] w-[426px] max-md:max-w-full">
            <div className="flex flex-col w-full font-semibold max-md:max-w-full">
              <div className="font-kumbhSans gap-2.5 max-sm:self-center self-start px-4 py-2.5 text-[15px] font-normal  text-white rounded-3xl bg-zinc-800">
                OUR VISION
              </div>
              <div className=" font-kumbhSans max-sm:text-center max-sm:text-[24px] text-[36px] font-semibold mt-6 text-4xl text-neutral-200 max-md:max-w-full max-sm:w-[-webkit-fill-available]">
              To nurture <span className="text-[#828282]"> Spirit-led </span>  believers, fulfilling <span className="text-[#828282]"> purpose </span>, advancing <span className="text-[#828282]"> God's kingdom </span> , and <span className="text-[#828282]"> transforming </span>  lives globally
                
              </div>
            </div>
            <div className="relative flex flex-col max-sm:items-center items-start mt-7 w-full max-md:max-w-full">
              <Image 
                src={images.eye}
                alt="eye"
                className="absolute z-0 object-contain w-[324px] h-[218px] aspect-square"
              />
            </div>
          </div>
          <div className="flex flex-col self-stretch my-auto text-xl leading-8 max-sm:text-center min-w-[240px] w-[603px] max-md:max-w-full">
           
            <div className="z-50 font-kumbhSans mt-6 max-sm:text-[20px] text-[#BDBDBD] max-md:max-w-full">
            Our greatest concern at Mortified is the believer’s growth and a walk patterned to that of the Spirit while stressing issues relating to purpose and the advancement of God’s kingdom. Our motivation is the earnest desire to see the growing believer loving God without recourse to the systems of this world and to be actively participatory in God’s agenda for this time and age.
            </div>

            <div className="font-kumbhSans mt-6 max-sm:text-[20px] text-[#BDBDBD] max-md:max-w-full">
            We are dedicated to inspiring believers to actively participate in God’s agenda for this time and age. This involves equipping them with the understanding, resources, and encouragement to discern their purpose, embrace their calling, and impact their generation with the transformative power of the gospel.
            </div>

            <div className="font-kumbhSans mt-6 text-[#BDBDBD] max-md:max-w-full">
            In all that we do, Mortified seeks to create an environment where spiritual growth thrives, purpose is discovered, and a Christ-centred lifestyle becomes the defining hallmark of every believer's walk with God.
            </div>

          </div>
        </div>
                </div>

                <div className="flex max-sm:px-0 overflow-hidden flex-col self-stretch  py-20 w-full bg-stone-950 max-md:px-5 max-md:max-w-full">

        <div className="flex flex-col justify-center self-center max-w-full font-semibold w-[728px]">
          <div className="flex flex-col justify-center w-full max-md:max-w-full">
            <div className="font-kumbhSans gap-2.5 self-center px-4 py-2.5 text-[15px] font-normal text-white rounded-3xl bg-zinc-800">
              THE PASTORATE
            </div>
            <div className="font-kumbhSans font-semibold text-[36px] mt-6 text-4xl text-center text-neutral-200 max-md:max-w-full px-5 max-sm:text-[24px]">
            The pastorate is the bedrock of the Mortified Platform and where decisions pertaining to the network is made.
            </div>
          </div>
        </div>
        <div className="flex flex-row max-sm:gap-x-0 max-sm:justify-center max-sm:w-[-webkit-fill-available] w-[1100px] max-sm:items-center flex-wrap max-sm:flex-wrap gap-x-14 gap-y-[100px] justify-between items-center pt-[130px]">
            {pastorate.map((pastor, index) => <PastorateCard key={index} icon={pastor.icon} name={pastor.name} title={pastor.title} />)}
        </div>
       
      </div>


      <div className="flex overflow-hidden flex-col justify-center items-start self-stretch max-sm:py-0  py-32 w-full bg-stone-950 max-md:px-5 max-md:py-24 max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-wrap justify-between w-full gap-10 items-center -mb-6 max-md:mb-2.5 max-md:max-w-full">
          <div className="flex flex-col self-stretch  min-w-[240px] w-[426px] max-md:max-w-full">
            <div className="flex flex-col w-full font-semibold max-md:max-w-full">
              <div className="font-kumbhSans max-sm:self-center gap-2.5 self-start px-4 py-2.5 text-[15px] font-normal  text-white rounded-3xl bg-zinc-800">
                OUR DEPARTMENTS
              </div>
              <div className=" font-kumbhSans text-[36px] font-semibold mt-6 text-4xl max-sm:text-center text-neutral-200 max-md:max-w-full max-sm:text-[24px]">
              We operate efficiently by that which every joint supplies.
              </div>
            </div>
            
          </div>
          <div className="flex flex-col self-stretch my-auto text-xl leading-8 min-w-[240px] w-[603px] max-md:max-w-full">
            <div className="font-kumbhSans max-sm:text-center text-white max-md:max-w-full">
            
              <span className="max-sm:text-[16px] max-sm:text-center text-stone-300">
              At Mortified, every department plays a vital role in ensuring that we function seamlessly as one unified body. From the Prayer Department interceding for our mission to the Media Team creatively spreading our message, and the Admin Team maintaining order, every joint truly supplies what is needed to advance God’s kingdom.
              </span>
           
            </div>
            <div className="max-sm:text-center max-sm:text-[16px] font-kumbhSans mt-6 text-stone-300 max-md:max-w-full">
            Each department is driven by dedication, purpose, and commitment to excellence, contributing uniquely to our shared vision. Together, we align our efforts to glorify God, edify believers, and make a meaningful impact in this time and age.
            </div>
          </div>
        </div>
      </div>
        <div >
            <Accordion items={administration} />
        </div>
        <div className="mt-[149px] max-sm:hidden   mb-[160px]">
            <PartnershipSection />
        </div>
            </div>
            <div className=" hidden max-sm:flex bg-[#E0E0E0]  ">
            <PartnershipSection />
        </div>
            <Footer />
        </div>
    )
}