import Link from "next/link";
import Image from "next/image";
import NotFoundImage from "@/public/images/404-illustration.svg";
import NotFoundImageDark from "@/public/images/404-illustration-dark.svg";

type Props = {
  message?: string;
};

export default function EmptyDisplay(props: Props) {
  return (
    <main className="grow [&>*:first-child]:scroll-mt-16">
      <div className="relative dark:bg-slate-900 h-full">
        <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-[96rem] mx-auto">
          <div className="max-w-2xl m-auto mt-16">
            <div className="text-center px-4">
              <div className="inline-flex mb-8">
                <Image className="dark:hidden" src={NotFoundImage} width={176} height={176} alt="404 illustration" />
                <Image className="hidden dark:block" src={NotFoundImageDark} width={176} height={176} alt="404 illustration dark" />
              </div>
              <div className="mb-6 text-slate-500 text-sm">{props.message}</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
