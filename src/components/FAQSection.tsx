import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { WhatsAppButton } from "./WhatsAppButton";

const faqs = [
  {
    question: "¿Qué electrodomésticos reparan?",
    answer: "Reparamos ventiladores, lavadoras, planchas, licuadoras, microondas, refrigeradores, hornos, freidoras, cafeteras, procesadores de alimentos y muchos otros electrodomésticos del hogar. Si tienes algún aparato específico, contáctanos por WhatsApp para confirmar."
  },
  {
    question: "¿Hacen servicio a domicilio en Montelíbano?",
    answer: "Sí, ofrecemos servicio técnico a domicilio en todo Montelíbano sin costo adicional por el desplazamiento. También atendemos en municipios cercanos como Puerto Libertador, San José de Uré y Tierralta."
  },
  {
    question: "¿Cuánto cuesta una revisión?",
    answer: "La revisión y diagnóstico es completamente GRATUITA. Solo pagas si decides proceder con la reparación. Te damos un presupuesto claro antes de cualquier trabajo."
  },
  {
    question: "¿Qué garantía ofrecen en las reparaciones?",
    answer: "Ofrecemos 30 días de garantía en todas nuestras reparaciones y en los repuestos utilizados. Si el mismo problema aparece dentro de este período, lo arreglamos sin costo adicional."
  },
  {
    question: "¿Cuánto tiempo toma una reparación?",
    answer: "La mayoría de reparaciones las completamos el mismo día de la visita. En casos especiales donde necesitemos conseguir un repuesto específico, puede tomar 1-2 días adicionales."
  },
  {
    question: "¿Utilizan repuestos originales?",
    answer: "Sí, trabajamos con repuestos de calidad y originales cuando están disponibles. En caso de necesitar una alternativa, siempre te informamos previamente y utilizamos repuestos compatibles de buena calidad."
  },
  {
    question: "¿Cobran por el diagnóstico si no se repara?",
    answer: "No, el diagnóstico es 100% gratuito. Solo cobras si decides proceder con la reparación. No hay compromisos ni costos ocultos."
  },
  {
    question: "¿Atienden fines de semana?",
    answer: "Sí, atendemos de lunes a sábado. Para emergencias los domingos, puedes contactarnos por WhatsApp y evaluamos según la disponibilidad."
  }
];

export const FAQSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-foreground">Preguntas</span>{" "}
            <span className="text-primary">frecuentes</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Resolvemos las dudas más comunes sobre nuestro servicio técnico en Montelíbano. 
            Si tienes otra pregunta, ¡contáctanos directamente!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card rounded-lg border-0 shadow-sm"
              >
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <span className="text-left font-semibold text-foreground">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-16 text-center bg-card rounded-2xl p-8 shadow-card max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold mb-4 text-foreground">
            ¿Tienes otra pregunta?
          </h3>
          <p className="text-muted-foreground mb-6">
            No dudes en contactarnos por WhatsApp. Respondemos rápidamente 
            y te ayudamos con cualquier duda sobre tu electrodoméstico.
          </p>
          <WhatsAppButton 
            text="Hacer una pregunta"
            variant="cta"
            size="lg"
          />
        </div>
      </div>
    </section>
  );
};