import Image from "next/image";
import VideoThumb from "@/public/images/wof-hero.jpg";

export default function OpenPositionHero() {
  return (
    <section className="relative">
      {/* Dark background */}
      <div
        className="absolute inset-0 bg-slate-900 pointer-events-none -z-10 mb-36 lg:mb-0 lg:h-[48rem] [clip-path:polygon(0_0,_5760px_0,_5760px_calc(100%_-_352px),_0_100%)]"
        aria-hidden="true"
      ></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 md:pt-40">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-16">
            <h2 className="h2 font-playfair-display text-slate-100 mb-4">Explore Exciting Job Opportunities</h2>
            <p className="text-md text-slate-400">
              Explore our open job listings and find the perfect position to advance your career. Join our team of talented professionals and be a part of our
              dynamic and innovative work environment.{" "}
            </p>
          </div>
          <div className="max-w-3xl mx-auto" data-aos="fade-up">
            <div className="relative flex justify-center items-center">
              <Image src={VideoThumb} width={768} height={432} alt={""} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
