import * as yup from "yup";

export const WaitlistSchema = yup.object().shape({
  country: yup.string().required("Country is required"),
  lastName: yup.string().required("Last Name is required"),
  email: yup.string().email().required("Email is required"),
  industryId: yup.number().required("Industry is required"),
  firstName: yup.string().required("First Name is required"),
  phoneNumber: yup.string().required("Phone Number is required"),
  hasSuitablelDevice: yup.boolean().required("This is required"),
  hasSuitableInternet: yup.boolean().required("This is required"),
  jobExperienceLevelId: yup.number().required("Job Experience is required"),
});

export const PartnershipSchema = yup.object().shape({
  email: yup.string().email().required("Email is required"),
  fullName: yup.string().required("Full Name is required"),
  companyName: yup.string().required("Company Name is required"),
  contactNumber: yup.string().required("Phone Number is required"),
  partnershipDescription: yup.string().required("Short description is required"),
});
