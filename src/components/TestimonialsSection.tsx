import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "María González",
    location: "Barrio Centro, Montelíbano",
    rating: 5,
    text: "Excelente servicio! Mi lavadora llevaba 2 meses dañada y la repararon en una sola visita. Muy profesional y puntual.",
    appliance: "Lavadora"
  },
  {
    name: "Carlos Mendoza",
    location: "Barrio La Esperanza",
    rating: 5,
    text: "Recomendado al 100%. Arreglaron mi ventilador de techo que nadie más podía reparar. Precio justo y con garantía.",
    appliance: "Ventilador"
  },
  {
    name: "Ana Rodríguez",
    location: "Sector Pueblo Nuevo",
    rating: 5,
    text: "Muy contenta con el servicio. Repararon mi licuadora y mi plancha el mismo día. Ahora funcionan como nuevas.",
    appliance: "Licuadora y Plancha"
  },
  {
    name: "José Martínez",
    location: "Barrio San José",
    rating: 5,
    text: "Servicio rápido y confiable. Vinieron a casa, revisaron el microondas gratis y lo repararon al mejor precio.",
    appliance: "Microondas"
  }
];

export const TestimonialsSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-foreground">Lo que dicen nuestros</span>{" "}
            <span className="text-primary">clientes de Montelíbano</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Testimonios reales de familias que ya confiaron en nuestro servicio técnico. 
            Su satisfacción es nuestro mejor respaldo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 bg-card border-0 shadow-card">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex space-x-1 mr-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-warning text-warning" />
                    ))}
                  </div>
                  <span className="text-sm font-medium bg-success/10 text-success px-2 py-1 rounded-full">
                    {testimonial.appliance}
                  </span>
                </div>
                
                <blockquote className="text-foreground mb-4 italic">
                  "{testimonial.text}"
                </blockquote>
                
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium text-primary">✅ Verificado</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center bg-trust-blue-light rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-4 text-primary">
            ⭐ Calificación promedio: 5.0 estrellas
          </h3>
          <p className="text-muted-foreground text-lg mb-6">
            Basado en más de 50 reparaciones exitosas en Montelíbano y municipios cercanos
          </p>
          <div className="grid grid-cols-3 gap-4 max-w-md mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">98%</div>
              <div className="text-sm text-muted-foreground">Clientes satisfechos</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">24h</div>
              <div className="text-sm text-muted-foreground">Tiempo promedio</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">5+</div>
              <div className="text-sm text-muted-foreground">Años experiencia</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};