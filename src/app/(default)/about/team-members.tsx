import Image from "next/image";
import Avatar from "@/public/images/avatar.webp";

export default function TeamMembers() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center ">
            <h2 className="h2 font-playfair-display text-slate-800">Our passionate team</h2>
          </div>

          <p className="text-slate-600 p-10 ">
            Our passionate team thrives on challenges and continuously seeks innovative solutions to exceed client expectations. We believe that passion fuels
            success, and it is evident in our unwavering dedication to achieving remarkable outcomes. By harnessing our individual talents and collaborating
            seamlessly, we create a dynamic and inspiring work environment.
          </p>

          {/* Team members */}
          <div className="mt-10 relative max-w-sm mx-auto flex flex-wrap justify-center gap-y-12 gap-x-6 sm:max-w-xl lg:max-w-none" data-aos-id-team>
            {/* 1st member */}
            <div className="text-center" data-aos="fade-up" data-aos-anchor="[data-aos-id-team]">
              <div className="inline-flex mb-4">
                <Image className="rounded-full" src={Avatar} width={120} height={120} alt="Member 01" />
              </div>
              <h4 className="h4 font-playfair-display text-slate-800 mb-2">Matthew Cunningham</h4>
              <div className="font-medium text-blue-600">Co-Founder, Business Development Manager</div>
            </div>

            <div className="text-center" data-aos="fade-up" data-aos-anchor="[data-aos-id-team]" data-aos-delay={100}>
              <div className="inline-flex mb-4">
                <Image className="rounded-full" src={Avatar} width={120} height={120} alt="Member 02" />
              </div>
              <h4 className="h4 font-playfair-display text-slate-800 mb-2">Danyel Roper</h4>
              <div className="font-medium text-blue-600">Co-Founder, Cheif Technology Officer</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
