"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import FeatImage from "@/public/images/features-01.png";

export default function FeaturesSet() {
  const [tab, setTab] = useState<number>(1);

  const tabs = useRef<HTMLDivElement>(null);
  const [category, setCategory] = useState<string>("1");

  const heightFix = () => {
    if (tabs.current && tabs.current.parentElement) tabs.current.parentElement.style.height = `${tabs.current.clientHeight}px`;
  };

  useEffect(() => {
    heightFix();
  }, []);

  return (
    <section className="relative bg-slate-100 ">
      <div className="absolute inset-0 bg-slate-100 pointer-events-none mb-64 md:mb-80" aria-hidden="true"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h2 className="h2 font-cabinet-grotesk">Everything you need to find, hire, and manage talents</h2>
          </div>

          <div>
            {/* Section content */}
            <div className="max-w-xl mx-auto md:max-w-none flex flex-col md:flex-row md:space-x-8 lg:space-x-16 xl:space-x-20 space-y-8 space-y-reverse md:space-y-0">
              {/* Content */}
              <div className="md:w-7/12 lg:w-1/2 order-1 md:order-none" data-aos="fade-up">
                {/* Content #1 */}
                <div className={`${category !== "1" && "hidden"}`}>
                  <h4 className="h4 font-cabinet-grotesk mb-3">Affordable Talent Solutions for Every Budget</h4>
                  <p className="text-md text-gray-500 mb-8">
                    We offer a range of cost-effective talent solutions that empower you to find, hire, and manage top-notch professionals without breaking the
                    bank. Our platform combines efficiency, affordability, and quality to provide you with unparalleled value for your investment.
                  </p>
                  <ul className="inline-flex flex-col space-y-6">
                    <li className="flex items-start">
                      <svg className="w-3 h-3 fill-current text-blue-500 mt-1.5 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <div>
                        <div className="font-cabinet-grotesk font-bold text-lg mb-1">Budget-Friendly Pricing</div>
                        <div className="text-gray-500">
                          ur talent solutions are designed to fit every budget, offering competitive pricing options that ensure affordability without
                          compromising on quality. We understand the importance of cost-effectiveness in talent acquisition and management.
                        </div>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-3 h-3 fill-current text-blue-500 mt-1.5 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <div>
                        <div className="font-cabinet-grotesk font-bold text-lg mb-1">Streamlined Hiring Process</div>
                        <div className="text-gray-500">
                          Save time and resources with our streamlined hiring process. Our intuitive platform automates and simplifies various stages of
                          recruitment, allowing you to make efficient hiring decisions while minimizing costs associated with manual processes.
                        </div>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-3 h-3 fill-current text-blue-500 mt-1.5 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <div>
                        <div className="font-cabinet-grotesk font-bold text-lg mb-1">Cost-Efficient Onboarding</div>
                        <div className="text-gray-500">Optimize your onboarding process while keeping costs in check.</div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Image */}
              <div className="md:w-5/12 lg:w-1/2" data-aos="fade-up" data-aos-delay="100">
                <Image className="mx-auto md:max-w-none" src={FeatImage} width="540" height="405" alt="Features" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
