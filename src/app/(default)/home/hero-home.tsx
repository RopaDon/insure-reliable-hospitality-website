import Link from "next/link";
import Image from "next/image";
import VideoThumb from "@/public/images/hero-image-01.jpg";

export default function HeroHome() {
  return (
    <section className="relative">
      {/* Dark background */}
      <div
        className="absolute inset-0 bg-slate-900 pointer-events-none -z-10 [clip-path:polygon(0_0,_5760px_0,_5760px_calc(100%_-_352px),_0_100%)]"
        aria-hidden="true"
      ></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-20 md:pt-40 md:pb-44">
          {/* Hero content */}
          <div className="max-w-xl mx-auto md:max-w-none md:flex md:items-center md:space-x-8 lg:space-x-16 xl:space-x-20 space-y-16 md:space-y-0">
            {/* Content */}
            <div className="text-center md:text-left md:min-w-[32rem]" data-aos="fade-right">
              <h1 className="h1 font-playfair-display text-slate-100 mb-4">Transforming BPO Experiences</h1>
              <p className="text-l text-slate-400 mb-8">
                Our innovative solutions redefine the way businesses engage in outsourcing partnerships, ensuring seamless collaboration, enhanced productivity,
                and optimized results.
              </p>
              <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                <div>
                  <Link className="btn text-white bg-blue-600 hover:bg-blue-700 w-full group" href="/clients/partnership">
                    Explore Partnership
                    <span className="tracking-normal text-blue-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1"></span>
                  </Link>
                </div>
              </div>
            </div>

            <Image src={VideoThumb} width={540} height={405} alt={""} />
          </div>
        </div>
      </div>
    </section>
  );
}
