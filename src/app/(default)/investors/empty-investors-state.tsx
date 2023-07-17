export default function EmptyState() {
  return (
    <div className="border-t border-slate-200 dark:border-slate-700">
      <div className="max-w-2xl m-auto mt-16">
        <div className="text-center px-4">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-t from-slate-200 to-slate-100 dark:from-slate-700 dark:to-slate-800 mb-4">
            <svg className="w-5 h-6 fill-current" viewBox="0 0 20 24">
              <path className="text-slate-500 dark:text-slate-600" d="M10 10.562l9-5-8.514-4.73a1 1 0 00-.972 0L1 5.562l9 5z" />
              <path className="text-slate-300 dark:text-slate-400" d="M9 12.294l-9-5v10.412a1 1 0 00.514.874L9 23.294v-11z" />
              <path className="text-slate-400 dark:text-slate-500" d="M11 12.294v11l8.486-4.714a1 1 0 00.514-.874V7.295l-9 4.999z" />
            </svg>
          </div>
          <h2 className="text-2xl text-slate-800 dark:text-slate-100 font-bold mb-2">Investment Opportunities Coming Soon</h2>
          <p className="mb-6 mt-6 text-sm">
            Get ready for an exciting journey into the world of investment possibilities with IRH BPO. While our investor page is under development, we are
            diligently working to bring you lucrative opportunities that will redefine your investment portfolio. Stay tuned for updates and be prepared to
            embark on a rewarding investment journey with us. Together, we'll unlock new horizons of success and growth in the dynamic realm of Business Process
            Outsourcing.
          </p>
        </div>
      </div>
    </div>
  );
}
