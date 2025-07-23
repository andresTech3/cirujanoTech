import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { WhatsAppButton } from "./WhatsAppButton";
import { MapPin, Phone, Clock, MessageCircle } from "lucide-react";
import { useState } from "react";

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    appliance: '',
    problem: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hola! Necesito reparar mi ${formData.appliance}. 
Problema: ${formData.problem}
Mi nombre: ${formData.name}
Mi teléfono: ${formData.phone}`;
    
    const whatsappUrl = `https://wa.me/573103556893?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-foreground">¡Contacta con nosotros</span>{" "}
            <span className="text-primary">ahora mismo!</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Estamos listos para ayudarte. Escoge la forma más cómoda para ti de contactarnos 
            y agenda tu reparación hoy.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Información de contacto */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-foreground">
                Información de contacto
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">WhatsApp</h4>
                    <p className="text-muted-foreground">310-355-6893</p>
                    <p className="text-sm text-success">Respuesta inmediata</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Área de servicio</h4>
                    <p className="text-muted-foreground">Montelíbano, Córdoba</p>
                    <p className="text-sm text-muted-foreground">También: Puerto Libertador, San José de Uré, Tierralta</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Horarios</h4>
                    <p className="text-muted-foreground">Lunes a Sábado: 7:00 AM - 6:00 PM</p>
                    <p className="text-sm text-muted-foreground">Domingos: Solo emergencias</p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="bg-gradient-to-br from-service-green/10 to-service-green/5 border-service-green/20">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MessageCircle className="h-5 w-5 text-service-green" />
                  <span>Contacto directo por WhatsApp</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  La forma más rápida de contactarnos. Te respondemos inmediatamente 
                  y podemos agendar tu cita en minutos.
                </p>
                <WhatsAppButton 
                  text="💬 Abrir WhatsApp ahora"
                  variant="whatsapp"
                  size="lg"
                  className="w-full"
                />
              </CardContent>
            </Card>
          </div>

          {/* Formulario de contacto */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Formulario de contacto rápido</CardTitle>
              <p className="text-muted-foreground">
                Completa este formulario y te contactaremos por WhatsApp
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Tu nombre completo
                  </label>
                  <Input
                    placeholder="Ej: María González"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Tu número de WhatsApp
                  </label>
                  <Input
                    placeholder="Ej: 310-123-4567"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    required
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    ¿Qué electrodoméstico necesitas reparar?
                  </label>
                  <Input
                    placeholder="Ej: Lavadora, Ventilador, Licuadora..."
                    value={formData.appliance}
                    onChange={(e) => setFormData({...formData, appliance: e.target.value})}
                    required
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Describe el problema (opcional)
                  </label>
                  <Textarea
                    placeholder="Ej: La lavadora no enciende, hace ruido extraño, no drena agua..."
                    value={formData.problem}
                    onChange={(e) => setFormData({...formData, problem: e.target.value})}
                    rows={3}
                  />
                </div>

                <Button type="submit" variant="cta" size="lg" className="w-full">
                  Enviar por WhatsApp
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  Al enviar este formulario serás redirigido a WhatsApp con tu información prellenada
                </p>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* CTA final */}
        <div className="mt-16 text-center bg-gradient-to-r from-primary to-accent rounded-2xl p-8 text-white">
          <h3 className="text-3xl font-bold mb-4">
            🚀 ¡No esperes más! Tu electrodoméstico puede estar funcionando hoy
          </h3>
          <p className="text-xl mb-6 opacity-90">
            Más de 5 años reparando electrodomésticos en Montelíbano. 
            Servicio garantizado, precios justos.
          </p>
          <WhatsAppButton 
            text="💬 ¡Solicitar reparación YA!"
            variant="hero"
            size="xl"
          />
        </div>
      </div>
    </section>
  );
};