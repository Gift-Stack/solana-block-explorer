import localFont from "next/font/local";

export const gilroy = localFont({
  src: [
    {
      path: "./gilroy/thin.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "./gilroy/extraLight.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "./gilroy/light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./gilroy/regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./gilroy/medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./gilroy/semiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./gilroy/bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./gilroy/extraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "./gilroy/black.ttf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-gilroy",
});
