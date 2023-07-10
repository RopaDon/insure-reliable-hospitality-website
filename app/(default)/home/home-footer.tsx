import Link from "next/link";

export default function HomeFooter() {
  return (
    <section className="relative">
      {/* Dark background */}
      <div
        className="h-[20rem] absolute inset-0 bg-slate-900 pointer-events-none -z-10 [clip-path:polygon(0_0,_5760px_0,_5760px_calc(100%_-_352px),_0_100%)]  md:mb-64"
        aria-hidden="true"
      ></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h3 font-playfair-display text-slate-100">
              {" "}
              Say goodbye to lengthy project delays, overwhelming updates, and <span className="text-emerald-500">perplexing complexities.</span>
            </h2>
          </div>

          {/* Section content */}
          <div className="max-w-sm mx-auto md:max-w-none items-center flex justify-center">
            <div className="relative max-w-xl mx-auto px-4 sm:px-6">
              <div>
                <div>
                  <Link className="btn text-white bg-blue-600 hover:bg-blue-700 group" href="/clients/partnership">
                    Explore Partnership
                    <span className="tracking-normal text-blue-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
                  </Link>
                </div>
                <div className="mb-20"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
