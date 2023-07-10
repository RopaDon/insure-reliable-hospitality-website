"use client";

import Image from "next/image";
import { useState } from "react";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { CircularProgress } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import CountrySelect from "@/components/country-select";
import DisplayMessages from "@/config/constants/message";
import IndustrySelect from "@/components/industry-select";
import { WaitlistSchema } from "@/config/constants/schemas";
import WaitlistSuccess from "@/public/images/waitlist-success.png";
import JobExperienceSelect from "@/components/job-experience-select";
import { useCreateWaitlistUserMutation } from "@/redux/slices/api/waitlist-slice";

export default function WaitlistForm() {
  const [loading, setLoading] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [createWaitlistMutation] = useCreateWaitlistUserMutation();

  const {
    watch,
    reset,
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(WaitlistSchema),
  });

  const countryIso = watch<"country">("country");
  const industryId = watch<"industryId">("industryId");
  const jobExperienceLevelId = watch<"jobExperienceLevelId">("jobExperienceLevelId");

  const createWaitlistUser = async (form: any) => {
    setLoading((prevState) => !prevState);

    try {
      const { success, errors } = await createWaitlistMutation(form).unwrap();

      if (!success && errors.length > 0) {
        toast.error(errors[0].message);
        return;
      }

      reset();
      setHasSubmitted(true);
    } catch (err) {
      toast.error(DisplayMessages.GENERIC_ERROR);
    } finally {
      setLoading((prevState) => !prevState);
    }
  };

  return (
    <div className="flex justify-center items-center bg-gray-200 p-6 w-full">
      {hasSubmitted ? (
        <div className="flex flex-col items-center justify-center">
          <h6 className="h6 text-sm mb-4 p-10 text-center w-1/2">
            We have received your submission and appreciate your interest in joining our team. Your information has been added to our waitlist, and we will
            notify you as soon as new positions become available.{" "}
          </h6>

          <Image src={WaitlistSuccess} height={200} width={200} alt="" />
        </div>
      ) : (
        <div className="bg-white p-6 w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3 mx-auto shadow-md rounded-md max-w-6xl">
          {/* Modal content */}
          <div className="px-5 pt-4 pb-1">
            <div className="text-sm">
              <div className="font-normal text-sm text-slate-500 dark:text-slate-100 mb-2">
                To join our exclusive waitlist, simply provide us with your name, contact information, and a brief overview of your skills and experience.
              </div>

              <div className="flex items-center space-y-0 space-x-4 mt-8">
                <div className="w-1/2">
                  <label className="block text-sm font-medium mb-1 " htmlFor="name">
                    First Name<span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    {...register("firstName", {
                      required: true,
                      maxLength: 80,
                    })}
                    className={`form-input w-full ${errors.firstName && "border-rose-500"}`}
                  />
                  <label className="block text-sm text-rose-500 mb-1 h-5" htmlFor="name">
                    {errors.firstName?.message}
                  </label>
                </div>
                <div className="w-1/2">
                  <label className="block text-sm font-medium mb-1" htmlFor="name">
                    Last Name<span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    {...register("lastName", {
                      required: true,
                      maxLength: 80,
                    })}
                    className={`form-input w-full ${errors.lastName && "border-rose-500"}`}
                  />
                  <label className="block text-sm text-rose-500 mb-1 h-5" htmlFor="email">
                    {errors.lastName?.message}
                  </label>
                </div>
              </div>

              <div className="md:flex sm:items-center space-y-4 md:space-y-0 md:space-x-4 mt-5">
                <div className="w-1/2">
                  <label className="block text-sm font-medium mb-1" htmlFor="business-id">
                    Email
                  </label>
                  <input
                    type="text"
                    {...register("email", {
                      required: true,
                      maxLength: 80,
                    })}
                    className={`form-input w-full ${errors.email && "border-rose-500"}`}
                  />

                  <label className="block text-sm text-rose-500 mb-1 h-5" htmlFor="representative">
                    {errors.email?.message}
                  </label>
                </div>
                <div className="w-1/2">
                  <label className="block text-sm font-medium mb-1" htmlFor="phoneNumber">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    {...register("phoneNumber", {
                      required: true,
                      maxLength: 80,
                    })}
                    className={`form-input w-full ${errors.phoneNumber && "border-rose-500"}`}
                  />

                  <label className="block text-sm text-rose-500 mb-1 h-5" htmlFor="phoneNumber">
                    {errors.phoneNumber?.message}
                  </label>
                </div>
              </div>

              <div className="md:flex sm:items-center space-y-4 md:space-y-0 md:space-x-4 mt-4">
                <div className="w-full">
                  <label className="block text-sm font-medium mb-1" htmlFor="business-id">
                    Industry<span className="text-rose-500">*</span>
                  </label>
                  <IndustrySelect
                    value={industryId}
                    onSelect={(option) => {
                      setValue("industryId", option?.id, { shouldValidate: true });
                    }}
                  />

                  <label className="block text-sm text-rose-500 mb-1 h-5" htmlFor="representative">
                    {errors.industryId?.message}
                  </label>
                </div>
              </div>

              <div className="md:flex sm:items-center space-y-4 md:space-y-0 md:space-x-4 mt-4">
                <div className="w-full">
                  <label className="block text-sm font-medium mb-1" htmlFor="country">
                    Country<span className="text-rose-500">*</span>
                  </label>
                  <CountrySelect
                    value={countryIso}
                    onSelect={(option) => {
                      setValue("country", option?.id, { shouldValidate: true });
                    }}
                  />

                  <label className="block text-sm text-rose-500 mb-1 h-5" htmlFor="country">
                    {errors.country?.message}
                  </label>
                </div>
              </div>

              <div className="md:flex sm:items-center space-y-4 md:space-y-0 md:space-x-4 mt-4">
                <div className="w-full">
                  <label className="block text-sm font-medium mb-1" htmlFor="business-id">
                    Job Expereince Level<span className="text-rose-500">*</span>
                  </label>
                  <JobExperienceSelect
                    value={jobExperienceLevelId}
                    onSelect={(option) => setValue("jobExperienceLevelId", option?.id, { shouldValidate: true })}
                  />

                  <label className="block text-sm text-rose-500 mb-1 h-5" htmlFor="jobExperienceLevelId">
                    {errors.jobExperienceLevelId?.message}
                  </label>
                </div>
              </div>
            </div>
          </div>
          {/* Modal footer */}
          <div className="px-5 py-4">
            <div className="flex flex-wrap justify-end space-x-2">
              <button disabled={loading} onClick={handleSubmit(createWaitlistUser)} className="btn-sm bg-indigo-500 hover:bg-indigo-600 text-white">
                {loading ? <CircularProgress style={{ height: 23, width: 23, color: "white" }} /> : <span>Submit</span>}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
