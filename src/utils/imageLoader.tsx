import { BASEiMAGE_URL_500 } from "@/constants/endpoints";

export const imageLoader = ({
  src,
  width = 500,
  quality = 75,
}: {
  src: string;
  width: number;
  quality?: number;
}) => {
  return `${BASEiMAGE_URL_500}${src}?w=${width}&q=${quality || 75}`;
};
