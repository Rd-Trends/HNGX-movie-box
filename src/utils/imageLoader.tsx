import { BASEiMAGE_URL_500 } from "@/constants/endpoints";

export const resolveImageSrc = (src?: string) => {
  return !!src ? `${BASEiMAGE_URL_500}${src}` : "/No-Image-Placeholder.png";
};
