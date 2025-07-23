import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

interface WhatsAppButtonProps {
  text?: string;
  variant?: "default" | "whatsapp" | "hero" | "cta";
  size?: "default" | "lg" | "xl";
  className?: string;
}

export const WhatsAppButton = ({ 
  text = "Contactar por WhatsApp", 
  variant = "whatsapp",
  size = "default",
  className = ""
}: WhatsAppButtonProps) => {
  const whatsappUrl = "https://wa.me/573103556893";
  
  return (
    <Button
      asChild
      variant={variant}
      size={size}
      className={className}
    >
      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
        <MessageCircle className="mr-2 h-5 w-5" />
        {text}
      </a>
    </Button>
  );
};