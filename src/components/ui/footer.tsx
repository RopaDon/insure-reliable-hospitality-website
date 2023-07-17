import Link from "next/link";
import Logo from "./logo";
import { socialMediaLinks } from "@/src/config/constants/constants";

export default function Footer() {
  return (
    <footer>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Top area: Blocks */}
        {/* <div className="grid sm:grid-cols-12 gap-8 py-8 md:py-12">
          {/* 1st block */}

        {/* 2nd block */}
        {/* <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-sm text-slate-800 font-semibold mb-2">How it works</h6>
            <ul className="text-sm font-medium space-y-2">
              <li>
                <a href="#" className="text-slate-500 hover:text-blue-600 transition duration-150 ease-in-out">
                  Overview
                </a>
              </li>
            </ul>
          </div>


          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-sm text-slate-800 font-semibold mb-2">Resources</h6>
            <ul className="text-sm font-medium space-y-2">
              <li>
                <a href="#" className="text-slate-500 hover:text-blue-600 transition duration-150 ease-in-out">
                  Knowledge Base
                </a>
              </li>
            </ul>
          </div>


          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-sm text-slate-800 font-semibold mb-2">Products</h6>
            <ul className="text-sm font-medium space-y-2">
              <li>
                <a href="#" className="text-slate-500 hover:text-blue-600 transition duration-150 ease-in-out">
                  Corporate Partners
                </a>
              </li>
            </ul>
          </div>

  
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-sm text-slate-800 font-semibold mb-2">Company</h6>
            <ul className="text-sm font-medium space-y-2">
              <li>
                <a href="#" className="text-slate-500 hover:text-blue-600 transition duration-150 ease-in-out">
                  Terms of Use
                </a>
              </li>
            </ul>
          </div>
        </div> */}

        {/* Bottom area */}
        <div className="md:flex md:items-center md:justify-between py-6 md:py-8 border-t border-slate-200">
          {/* Social links */}
          <ul className="flex space-x-6 mb-4 md:order-1 md:ml-4 md:mb-0">
            <li>
              <a className="text-blue-500 hover:text-blue-600 transition duration-150 ease-in-out" href={socialMediaLinks.linkedLn} aria-label="Twitter">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                  <path d="M28.778 1.004h-25.56c-0.008-0-0.017-0-0.027-0-1.199 0-2.172 0.964-2.186 2.159v25.672c0.014 1.196 0.987 2.161 2.186 2.161 0.010 0 0.019-0 0.029-0h25.555c0.008 0 0.018 0 0.028 0 1.2 0 2.175-0.963 2.194-2.159l0-0.002v-25.67c-0.019-1.197-0.994-2.161-2.195-2.161-0.010 0-0.019 0-0.029 0h0.001zM9.9 26.562h-4.454v-14.311h4.454zM7.674 10.293c-1.425 0-2.579-1.155-2.579-2.579s1.155-2.579 2.579-2.579c1.424 0 2.579 1.154 2.579 2.578v0c0 0.001 0 0.002 0 0.004 0 1.423-1.154 2.577-2.577 2.577-0.001 0-0.002 0-0.003 0h0zM26.556 26.562h-4.441v-6.959c0-1.66-0.034-3.795-2.314-3.795-2.316 0-2.669 1.806-2.669 3.673v7.082h-4.441v-14.311h4.266v1.951h0.058c0.828-1.395 2.326-2.315 4.039-2.315 0.061 0 0.121 0.001 0.181 0.003l-0.009-0c4.5 0 5.332 2.962 5.332 6.817v7.855z"></path>
                </svg>
              </a>
            </li>
            <li>
              <a className="text-blue-500 hover:text-blue-600 transition duration-150 ease-in-out" href={socialMediaLinks.tikTok} aria-label="Facebook">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 512 512" id="icons" xmlns="http://www.w3.org/2000/svg">
                  <path d="M412.19,118.66a109.27,109.27,0,0,1-9.45-5.5,132.87,132.87,0,0,1-24.27-20.62c-18.1-20.71-24.86-41.72-27.35-56.43h.1C349.14,23.9,350,16,350.13,16H267.69V334.78c0,4.28,0,8.51-.18,12.69,0,.52-.05,1-.08,1.56,0,.23,0,.47-.05.71,0,.06,0,.12,0,.18a70,70,0,0,1-35.22,55.56,68.8,68.8,0,0,1-34.11,9c-38.41,0-69.54-31.32-69.54-70s31.13-70,69.54-70a68.9,68.9,0,0,1,21.41,3.39l.1-83.94a153.14,153.14,0,0,0-118,34.52,161.79,161.79,0,0,0-35.3,43.53c-3.48,6-16.61,30.11-18.2,69.24-1,22.21,5.67,45.22,8.85,54.73v.2c2,5.6,9.75,24.71,22.38,40.82A167.53,167.53,0,0,0,115,470.66v-.2l.2.2C155.11,497.78,199.36,496,199.36,496c7.66-.31,33.32,0,62.46-13.81,32.32-15.31,50.72-38.12,50.72-38.12a158.46,158.46,0,0,0,27.64-45.93c7.46-19.61,9.95-43.13,9.95-52.53V176.49c1,.6,14.32,9.41,14.32,9.41s19.19,12.3,49.13,20.31c21.48,5.7,50.42,6.9,50.42,6.9V131.27C453.86,132.37,433.27,129.17,412.19,118.66Z" />
                </svg>
              </a>
            </li>
            <li>
              <a className="text-blue-500 hover:text-blue-600 transition duration-150 ease-in-out" href={socialMediaLinks.instagram} aria-label="Instagram">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  {" "}
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />{" "}
                </svg>
              </a>
            </li>
          </ul>

          {/* Copyrights note */}
          <div className="flex lg:max-w-xs">
            <div className="mb-2">
              {/* Logo */}
              <Link href="/" className="inline-flex text-blue-600 transition duration-150 ease-in-out" aria-label="Cruip">
                <Logo isLight={false} />
              </Link>
            </div>
            <div className="text-sm text-slate-500 ml-2">© IRH. All rights reserved.</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
