"use client";
import TanstackProvider from "./tanstack";

type ProvidersProps = {
  children: React.ReactNode;
};

const Providers = ({ children }: ProvidersProps) => {
  return <TanstackProvider>{children}</TanstackProvider>;
};

export default Providers;
