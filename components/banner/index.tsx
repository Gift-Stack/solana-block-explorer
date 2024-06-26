import SolanaIcon from "@/icons/solana";

export interface BannerProps {
  title: string;
  description: string;
}

const Banner = ({ title, description }: BannerProps) => {
  return (
    <div className="grid grid-cols-1 gap-6 items-center">
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
