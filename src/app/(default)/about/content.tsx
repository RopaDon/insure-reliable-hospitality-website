import Image from "next/image";
import Signature from "@/public/images/signature.png";

export default function AboutContent() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 mt-10">
        <div className="pb-12 md:pb-20">
          <div className="max-w-3xl mx-auto">
            <div className="text-lg text-slate-500">
              <h2 className="h3 font-playfair-display text-slate-800 mb-4">Our Story</h2>
              <p className="mb-8 text-sm">
                At Insure Reliable BPO, we go beyond traditional outsourcing companies. We are a team of experts, innovators, and creators dedicated to
                transforming businesses and delivering exceptional results. Our story is one of passion, expertise, and an unwavering commitment to excellence
                in the realm of business process outsourcing. From our humble beginnings, we set out on a mission to redefine the landscape of the BPO industry.
                We recognized the significant impact that reliable and efficient processes can have on the success of businesses across various sectors. With a
                deep understanding of the unique challenges and demands faced by organizations, we aimed to create a company that could provide unparalleled BPO
                solutions while upholding the highest standards of service. Driven by our founders' unwavering belief in the power of streamlined operations, we
                embarked on a journey to build a company that would be synonymous with trust, professionalism, and seamless business processes. Our team,
                comprised of industry experts and dedicated professionals, possesses a wealth of knowledge and experience in BPO services. We carefully select
                and train our staff members, ensuring they possess the skills, expertise, and commitment necessary to excel in various roles within the BPO
                sector. What sets us apart is our deep understanding of the intricate workings of organizations and our ability to tailor solutions to meet
                their unique needs.
              </p>

              <Image src={Signature} height={150} width={250} alt="Company Signature" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
