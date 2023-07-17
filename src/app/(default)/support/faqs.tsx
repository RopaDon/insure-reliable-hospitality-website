import Accordion from "@/src/components/utils/accordion";

export default function Faqs() {
  return (
    <section className="bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-slate-50">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 font-playfair-display text-slate-800">Frequently Asked Questions</h2>
          </div>

          <ul className="max-w-3xl mx-auto divide-y divide-slate-200">
            <Accordion title="Are your postions remote?" active>
              Yes, all our positions at Insure Reliable BPO are remote. We embrace the flexibility and advantages of remote work, allowing our team members to
              work from anywhere and maintain a healthy work-life balance. Join our team and enjoy the benefits of a remote work environment.
            </Accordion>

            <span className="block border-t border-gray-200" aria-hidden="true"></span>
          </ul>
        </div>
      </div>
    </section>
  );
}
