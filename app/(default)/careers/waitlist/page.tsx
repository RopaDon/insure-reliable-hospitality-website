export const metadata = {
  title: "Waitlist",
  description: "Page description",
};

import WaitlistForm from "./waitlist-form";
import WaitlistWorld from "./waitlist-world";

export default function Waitlist() {
  return (
    <div>
      <section className="relative">
        <div
          className="absolute inset-0 bg-slate-900 pointer-events-none -z-10 mb-36 lg:mb-0 lg:h-[48rem] [clip-path:polygon(0_0,_5760px_0,_5760px_calc(100%_-_352px),_0_100%)]"
          aria-hidden="true"
        />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-32 md:pt-20"></div>
        </div>
      </section>
      <WaitlistWorld />
      <WaitlistForm />
    </div>
  );
}
