import { WhatsAppButton } from "./WhatsAppButton";
import { CheckCircle } from "lucide-react";
import heroImage from "@/assets/hero-repair-service.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-trust-blue-light via-background to-muted overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-trust-blue-light/50 to-background/80"></div>
      
      <div className="container mx-auto px-4 py-16 lg:py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contenido Principal */}
          <div className="text-center lg:text-left space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-foreground">¿Tu electrodoméstico</span>{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                se dañó?
              </span>
              <br />
              <span className="text-primary">¡Lo reparamos hoy!</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0">
              Técnico especializado en <strong>Montelíbano, Córdoba</strong>. 
              Reparamos ventiladores, lavadoras, planchas, licuadoras y más. 
              <span className="text-service-green font-semibold"> Servicio a domicilio con garantía.</span>
            </p>

            {/* Beneficios destacados */}
            <div className="grid grid-cols-2 gap-4 max-w-lg mx-auto lg:mx-0">
              {[
                "Servicio a domicilio",
                "Técnico certificado", 
                "Reparación garantizada",
                "Presupuesto sin costo"
              ].map((benefit, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-service-green flex-shrink-0" />
                  <span className="text-sm font-medium text-foreground">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA Principal */}
            <div className="space-y-4">
              <WhatsAppButton 
                text="💬 Solicitar Cotización GRATIS"
                variant="hero"
                size="xl"
                className="w-full sm:w-auto"
              />
              <p className="text-sm text-muted-foreground">
                📞 WhatsApp: <span className="font-semibold">310-355-6893</span>
              </p>
            </div>
          </div>

          {/* Imagen Hero */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src={heroImage} 
                alt="Técnico reparando electrodomésticos en Montelíbano"
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
            
            {/* Badge flotante */}
            <div className="absolute -bottom-6 -left-6 bg-card p-4 rounded-xl shadow-lg border border-border">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">+5 años</div>
                <div className="text-sm text-muted-foreground">experiencia</div>
              </div>
            </div>
            
            <div className="absolute -top-6 -right-6 bg-service-green text-white p-4 rounded-xl shadow-lg">
              <div className="text-center">
                <div className="text-lg font-bold">100%</div>
                <div className="text-sm">garantizado</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};