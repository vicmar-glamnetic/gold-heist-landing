import { PRIMARY_REGISTER } from "@/lib/site";
import { CtaButton } from "./CtaButton";

type Props = {
  children: React.ReactNode;
  variant?: "gold" | "ghost";
  className?: string;
};

// Every register CTA links straight to the ACCM gateway. The per-member picker
// (RegisterModal) is kept around in case we bring it back.
export function RegisterButton({ children, variant = "gold", className = "" }: Props) {
  return (
    <CtaButton href={PRIMARY_REGISTER} variant={variant} className={className}>
      {children}
    </CtaButton>
  );
}
