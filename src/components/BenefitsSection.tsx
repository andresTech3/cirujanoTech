import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Clock, Home, DollarSign, Award, Wrench } from "lucide-react";

const benefits = [
  {
    icon: Home,
    title: "Servicio a Domicilio",
    description: "Vamos hasta tu casa en Montelíbano sin costo adicional por el desplazamiento"
  },
  {
    icon: Clock,
    title: "Reparación Rápida",
    description: "La mayoría de reparaciones las completamos el mismo día de la visita"
  },
  {
    icon: Shield,
    title: "Garantía Total",
    description: "30 días de garantía en todas nuestras reparaciones y repuestos"
  },
  {
    icon: DollarSign,
    title: "Presupuesto Gratuito",
    description: "Revisamos tu electrodoméstico y te damos un presupuesto sin compromiso"
  },
  {
    icon: Award,
    title: "Técnico Certificado",
    description: "Más de 5 años de experiencia reparando electrodomésticos"
  },
  {
    icon: Wrench,
    title: "Repuestos Originales",
    description: "Utilizamos repuestos de calidad y originales para mayor durabilidad"
  }
];

export const BenefitsSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-foreground">¿Por qué elegir nuestro</span>{" "}
            <span className="text-primary">servicio técnico?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Somos el servicio técnico de confianza en Montelíbano. 
            Tu tranquilidad y la reparación efectiva de tus electrodomésticos es nuestra prioridad.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-card border-0 shadow-card">
              <CardHeader className="pb-4">
                <div className="mx-auto p-4 bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <benefit.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 border border-primary/10">
          <h3 className="text-2xl font-bold mb-4 text-foreground">
            💰 Ahorra dinero reparando en lugar de comprar nuevo
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Una reparación profesional puede extender la vida útil de tu electrodoméstico 
            por años, ahorrándote hasta el 80% del costo de uno nuevo.
          </p>
        </div>
      </div>
    </section>
  );
};