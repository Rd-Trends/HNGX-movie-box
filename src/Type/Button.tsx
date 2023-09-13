export enum ButtonVariant {
  Primary = "primary",
  Secondary = "secondary",
}

export enum ButtonSize {
  Small = "small",
  Medium = "medium",
}

export type ButtonProps = {
  children: React.ReactNode;
  rounded?: boolean;
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWIdth?: boolean;
  className?: string;
} & React.ButtonHTMLAttributes<any>;
