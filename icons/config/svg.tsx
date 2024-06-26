import { IconSize } from "./types";
import { ICON_SIZE } from "./constants";

interface SvgProps extends React.SVGProps<SVGSVGElement> {
  children: React.ReactNode;
  size?: IconSize;
}

const Svg = ({ size = "md", children, ...props }: SvgProps) => {
  return (
    <svg width={ICON_SIZE[size]} height={ICON_SIZE[size]} {...props}>
      {children}
    </svg>
  );
};

export default Svg;
