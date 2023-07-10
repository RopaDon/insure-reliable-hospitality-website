"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import toast from "react-hot-toast";
import Logo from "@/components/ui/logo";
import { useForm } from "react-hook-form";
import { CircularProgress } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import CountrySelect from "@/components/country-select";
import DisplayMessages from "@/config/constants/message";
import BlankAvatar from "@/public/images/blank_avatar.webp";
import { PartnershipSchema } from "@/config/constants/schemas";
import WaitlistSuccess from "@/public/images/waitlist-success.png";
import { useRequestPartnershipMutation } from "@/redux/slices/api/service-slice";

export default function Partnerships() {
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(PartnershipSchema),
  });

  const [loading, setLoading] = useState(false);
  const [requestPartnershipMutation] = useRequestPartnershipMutation();
  const [partnershipRequested, setRequestPartnerShip] = useState(false);

  const requestPartnership = async (data: any) => {
    setLoading((prevState) => !prevState);

    try {
      const { success, errors } = await requestPartnershipMutation(data).unwrap();

      if (!success && errors.length > 0) {
        toast.error(errors[0].message);
        return;
      }

      setRequestPartnerShip(true);
    } catch (err) {
      toast.error(DisplayMessages.GENERIC_ERROR);
    } finally {
      setLoading((prevState) => !prevState);
    }
  };
  return (
    <>
      {/* Content */}
      <div className="w-full md:w-1/2">
        <div className="min-h-screen h-full flex flex-col justify-center">
          <div className="px-5 sm:px-6 py-8">
            <div className="w-full max-w-md mx-auto">
              {partnershipRequested ? (
                <div className="flex flex-col items-center justify-center">
                  <h1 className="h2 font-playfair-display text-slate-800 mb-5 text-center">Thank you for requesting a partnership </h1>
                  <h6 className="h6 text-sm mb-4 p-10 text-center text-slate-500">
                    We appreciate your interest and will review your submission promptly. Our team will be in touch soon to discuss the potential collaboration
                    further.
                  </h6>

                  <Image src={WaitlistSuccess} height={200} width={200} alt="" />
                </div>
              ) : (
                <div>
                  <Link href="/home" className="absolute top-0 left-0 mt-4 ml-4 text-gray-600 focus:outline-none">
                    {/* Replace the "icon-arrow-left.svg" with the path to your SVG icon */}
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                    </svg>
                  </Link>
                  {/* Site branding */}
                  <div className="mb-6">
                    {/* Logo */}
                    <Logo isLight={false} />
                  </div>

                  <h1 className="h2 font-playfair-display text-slate-800 mb-5">Reach out to us</h1>

                  <span className="mt-1 text-sm">
                    Are you ready to embark on a journey of collaboration, growth, and success? By requesting a partnership with us, you open the door to
                    endless possibilities.
                  </span>

                  {/* Form */}
                  <form className="mt-8">
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium mb-1" htmlFor="email">
                          Email <span className="text-rose-500">*</span>
                        </label>
                        <input
                          className={`form-input w-full ${errors.email && "border-rose-500"}`}
                          type="email"
                          {...register("email", {
                            required: true,
                            maxLength: 80,
                          })}
                          required
                        />
                        <label className="block text-sm text-rose-500 mb-1 h-5" htmlFor="name">
                          {errors.email?.message}
                        </label>
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1" htmlFor="name">
                          Contact Name <span className="text-rose-500">*</span>
                        </label>
                        <input
                          className={`form-input w-full ${errors.contactName && "border-rose-500"}`}
                          {...register("contactName", {
                            required: true,
                            maxLength: 80,
                          })}
                          required
                        />
                        <label className="block text-sm text-rose-500 mb-1 h-5" htmlFor="contactName">
                          {errors.contactName?.message}
                        </label>
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1" htmlFor="name">
                          Contact Number <span className="text-rose-500">*</span>
                        </label>
                        <input
                          className={`form-input w-full ${errors.contactNumber && "border-rose-500"}`}
                          {...register("contactNumber", {
                            required: true,
                            maxLength: 80,
                          })}
                          required
                        />
                        <label className="block text-sm text-rose-500 mb-1 h-5" htmlFor="contactNumber">
                          {errors.contactNumber?.message}
                        </label>
                      </div>
                      <div className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
                        <div className="sm:w-1/2">
                          <label className="block text-sm font-medium mb-1" htmlFor="city">
                            City <span className="text-rose-500">*</span>
                          </label>
                          <input
                            className={`form-input w-full ${errors.city && "border-rose-500"}`}
                            {...register("city", {
                              required: true,
                              maxLength: 80,
                            })}
                            required
                          />
                          <label className="block text-sm text-rose-500 mb-1 h-5" htmlFor="city">
                            {errors.city?.message}
                          </label>
                        </div>
                        <div className="sm:w-1/2">
                          <label className="block text-sm font-medium mb-1" htmlFor="pcode">
                            Postal Code <span className="text-rose-500">*</span>
                          </label>
                          <input
                            className={`form-input w-full ${errors.postalCode && "border-rose-500"}`}
                            {...register("postalCode", {
                              required: true,
                              maxLength: 80,
                            })}
                            required
                          />
                          <label className="block text-sm text-rose-500 mb-1 h-5" htmlFor="postalCode">
                            {errors.postalCode?.message}
                          </label>
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1" htmlFor="streetAddress">
                          Street Address <span className="text-rose-500">*</span>
                        </label>
                        <input
                          className={`form-input w-full ${errors.streetAddress && "border-rose-500"}`}
                          {...register("streetAddress", {
                            required: true,
                            maxLength: 80,
                          })}
                          required
                        />
                        <label className="block text-sm text-rose-500 mb-1 h-5" htmlFor="streetAddress">
                          {errors.streetAddress?.message}
                        </label>
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1" htmlFor="country">
                          Country <span className="text-rose-500">*</span>
                        </label>
                        <CountrySelect
                          onSelect={(option) => {
                            setValue("country", option?.id, { shouldValidate: true });
                          }}
                        />
                      </div>
                    </div>
                    <div className="mt-6">
                      <button
                        disabled={loading}
                        onClick={handleSubmit(requestPartnership)}
                        className="btn-sm w-full text-sm text-white bg-blue-600 hover:bg-blue-700 group"
                      >
                        {loading ? (
                          <CircularProgress style={{ height: 23, width: 23, color: "white" }} />
                        ) : (
                          <span>
                            {" "}
                            Submit{" "}
                            <span className="tracking-normal text-blue-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                              -&gt;
                            </span>
                          </span>
                        )}
                      </button>
                    </div>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Right side */}
      <div className="relative hidden md:block md:w-1/2 bg-slate-900" aria-hidden="true">
        {/* Bg image */}
        <div className="absolute inset-0" data-aos="fade">
          {/* <Image className="opacity-10 w-full h-full object-cover" src={PageBg} width={760} height={900} priority alt="Background" /> */}
        </div>

        {/* Quote */}
        <div className="min-h-screen h-full flex flex-col justify-center">
          <div className="px-5 sm:px-6">
            <div className="w-full max-w-lg mx-auto">
              <h2 className="h3 md:text-4xl font-playfair-display text-slate-100 mb-4">Insure Realiable Hospitality</h2>
              <div className="space-y-3">
                <svg className="fill-blue-600" width="20" height="16" viewBox="0 0 20 16">
                  <path d="M2.76 16c2.577 0 5.154-3.219 5.154-5.996 0-1.357-.613-2.272-1.748-2.272s-2.27.726-3.283 1.64C3.16 6.439 5.613 3.346 9.571.885L9.233 0C3.466 2.903 0 7.732 0 12.213 0 14.517.828 16 2.76 16Zm10.43 0c2.577 0 5.154-3.219 5.154-5.996 0-1.357-.614-2.272-1.749-2.272-1.135 0-2.27.726-3.282 1.64.276-2.934 2.73-6.027 6.687-8.488L19.663 0c-5.767 2.903-9.234 7.732-9.234 12.213 0 2.304.829 3.787 2.761 3.787Z" />
                </svg>
                <blockquote className="text-slate-400 italic">
                  Success is built on a solid foundation of determination, innovation, and impeccable craftsmanship.
                </blockquote>
              </div>
              <div className="flex items-center mt-4">
                <a href="#0">
                  <Image className="rounded-full shrink-0 mr-3" src={BlankAvatar} width={32} height={32} alt="Customer Avatar 04" />
                </a>
                <div className="font-medium">
                  <span className="text-slate-200">Danyel Roper</span>
                  <span className="text-slate-600"> · </span>
                  <span className="text-slate-500">CTO</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
