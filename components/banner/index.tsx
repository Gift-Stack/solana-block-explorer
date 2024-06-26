import Link from "next/link";
import SolanaIcon from "@/icons/solana";
import ArrowLeftIcon from "@/icons/arrow-left";
import { Button } from "../button";

type BannerProps = {
  title: string;
  description: string;
  href?: string;
};

const Banner = ({ title, description, href }: BannerProps) => {
  return (
    <div
      className={`grid ${
        href ? "grid-cols-[auto_1fr]" : "grid-cols-1"
      } gap-6 items-center`}
    >
      {href && (
        <Link aria-label="Go back" href={href} className="h-full rounded-3xl">
          <Button aria-hidden="true" className="!h-full w-[72px] rounded-3xl">
            <ArrowLeftIcon size="sm" />
          </Button>
        </Link>
      )}
      <div className="flex w-full p-6 gap-6 border border-white/10 rounded-3xl">
        <div className="bg-black min-w-14 w-14 min-h-14 h-14 rounded-full flex items-center justify-center">
          <SolanaIcon size="lg" />
        </div>

        <div className="w-full flex flex-col gap-2 font-medium">
          <h1 className="text-2xl">{title}</h1>
          <p className="text-white/60 ">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
