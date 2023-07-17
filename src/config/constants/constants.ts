import { DefaultToastOptions } from "react-hot-toast";

export const toastOptions: DefaultToastOptions = {
  error: {
    duration: 10000,
    style: { backgroundColor: "#EE4B46", color: "white" },
    iconTheme: {
      primary: "white",
      secondary: "#EE4B46",
    },
  },
  success: {
    duration: 4000,
    style: { backgroundColor: "#5cb85c", color: "white" },
    iconTheme: {
      primary: "white",
      secondary: "#5cb85c",
    },
  },
};

export const socialMediaLinks = {
  tikTok: "https://www.tiktok.com/@insure.reliable.h?lang=en",
  instagram: "https://www.instagram.com/i.r.h_services/?hl=en",
  linkedLn: "https://www.linkedin.com/company/insure-reliable-hospitality/about/?viewAsMember=false",
};

export const LOGO_URL =
  "https://firebasestorage.googleapis.com/v0/b/insure-reliable-hospitality.appspot.com/o/%2F%2Flogo.png?alt=media&token=24d3f5d5-8b00-4fff-bd68-6b5e3dfb914a";
