// Card props interface
export interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
  onClick?: () => void;
}

// Button props interface
export interface ButtonProps {
  text: string;
  onClick: () => void;
  variant?: "primary" | "secondary";
}
