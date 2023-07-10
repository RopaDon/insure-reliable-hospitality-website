import * as yup from "yup";

export const WaitlistSchema = yup.object().shape({
  country: yup.string().required("Country is required"),
  lastName: yup.string().required("Last Name is required"),
  email: yup.string().email().required("Email is required"),
  industryId: yup.number().required("Industry is required"),
  firstName: yup.string().required("First Name is required"),
  phoneNumber: yup.string().required("Phone Number is required"),
  jobExperienceLevelId: yup.number().required("Job Experience is required"),
});

export const PartnershipSchema = yup.object().shape({
  city: yup.string().nullable(),
  postalCode: yup.string().nullable(),
  streetAddress: yup.string().nullable(),
  country: yup.string().required("Country is required"),
  email: yup.string().email().required("Email is required"),
  contactName: yup.string().required("Contact Name is required"),
  contactNumber: yup.string().required("Phone Number is required"),
});
