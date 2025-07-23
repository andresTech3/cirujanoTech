import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { WhatsAppButton } from "./WhatsAppButton";
import { Fan, Utensils, Shirt, Microwave, Refrigerator, WashingMachine } from "lucide-react";
import appliancesImage from "@/assets/appliances-services.jpg";

const services = [
  {
    icon: Fan,
    title: "Ventiladores",
    description: "Reparación de motores, aspas, controles y sistemas eléctricos"
  },
  {
    icon: WashingMachine,
    title: "Lavadoras",
    description: "Bombas de agua, programadores, motores y sistema de drenaje"
  },
  {
    icon: Utensils,
    title: "Licuadoras",
    description: "Motores, cuchillas, controles de velocidad y bases"
  },
  {
    icon: Shirt,
    title: "Planchas",
    description: "Resistencias, termostatos, cables y sistemas de vapor"
  },
  {
    icon: Microwave,
    title: "Microondas",
    description: "Magnetrones, controles, platos giratorios y puertas"
  },
  {
    icon: Refrigerator,
    title: "Refrigeradores",
    description: "Compresores, termostatos, descongelamiento y sellado"
  }
];

export const ServicesSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-foreground">Reparamos todo tipo de</span>{" "}
            <span className="text-primary">electrodomésticos</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Más de 5 años de experiencia reparando electrodomésticos en Montelíbano. 
            Técnico certificado con garantía en todos nuestros trabajos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative">
            <img 
              src={appliancesImage} 
              alt="Electrodomésticos que reparamos en Montelíbano"
              className="w-full rounded-2xl shadow-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent rounded-2xl"></div>
          </div>
          
          <div className="grid gap-4">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow duration-300">
                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center bg-muted rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-4 text-foreground">
            ¿No ves tu electrodoméstico en la lista?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            También reparamos hornos, freidoras, procesadores de alimentos, 
            cafeteras y muchos otros electrodomésticos. ¡Pregúntanos!
          </p>
          <WhatsAppButton 
            text="Consultar mi electrodoméstico"
            variant="cta"
            size="lg"
          />
        </div>
      </div>
    </section>
  );
};