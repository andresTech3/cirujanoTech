import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { WhatsAppButton } from "./WhatsAppButton";
import beforeAfterImage from "@/assets/before-after-repair.jpg";

export const BeforeAfterSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-foreground">Transformamos electrodomésticos</span>{" "}
            <span className="text-primary">dañados en perfectas condiciones</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Mira algunos ejemplos de nuestro trabajo. Con técnica profesional y repuestos de calidad, 
            devolvemos la vida útil a tus electrodomésticos.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="relative">
            <img 
              src={beforeAfterImage} 
              alt="Antes y después de reparación de electrodomésticos en Montelíbano"
              className="w-full rounded-2xl shadow-lg"
            />
            <div className="absolute top-4 left-4 bg-destructive text-white px-3 py-1 rounded-full text-sm font-semibold">
              ANTES
            </div>
            <div className="absolute top-4 right-4 bg-service-green text-white px-3 py-1 rounded-full text-sm font-semibold">
              DESPUÉS
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-foreground">
                Resultados que hablan por sí solos
              </h3>
            </div>

            <div className="space-y-4">
              <Card className="border-l-4 border-l-service-green">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg text-service-green">✅ Lavadora que no encendía</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Problema: Tablero quemado y bomba dañada. 
                    <strong> Solución:</strong> Reemplazo de componentes y ahora funciona perfectamente.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-service-green">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg text-service-green">✅ Ventilador sin velocidades</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Problema: Capacitor dañado y cables sueltos. 
                    <strong> Solución:</strong> Mantenimiento completo, ahora como nuevo.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-service-green">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg text-service-green">✅ Licuadora sin fuerza</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Problema: Motor desgastado y cuchillas desafiladas. 
                    <strong> Solución:</strong> Reparación del motor y cuchillas nuevas.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="bg-primary/5 rounded-xl p-6 border border-primary/10">
              <h4 className="font-bold text-foreground mb-3">
                💡 ¿Sabías que el 85% de los electrodomésticos "dañados" tienen reparación?
              </h4>
              <p className="text-muted-foreground mb-4">
                Muchas veces el problema es más simple de lo que parece. 
                Una revisión profesional puede ahorrarte cientos de miles de pesos.
              </p>
              <WhatsAppButton 
                text="Revisar mi electrodoméstico"
                variant="cta"
                size="lg"
                className="w-full sm:w-auto"
              />
            </div>
          </div>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-3xl font-bold text-primary">95%</div>
            <div className="text-muted-foreground">Reparaciones exitosas</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-primary">24h</div>
            <div className="text-muted-foreground">Tiempo promedio de reparación</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-primary">30 días</div>
            <div className="text-muted-foreground">Garantía en reparaciones</div>
          </div>
        </div>
      </div>
    </section>
  );
};