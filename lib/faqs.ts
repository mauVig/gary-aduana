/**
 * Preguntas frecuentes.
 *
 * Viven acá, fuera del componente, para que las consuman tanto el acordeón
 * (componente de cliente) como el marcado FAQPage de schema.org que se
 * renderiza en el servidor. Una sola fuente de verdad: si cambia una
 * respuesta, cambia en los dos lados.
 */
export const faqs = [
  {
    q: '¿Puedo importar si no estoy registrado como importador?',
    a: 'Sí, es posible. Si aún no estás inscrito en el Registro de Importadores y Exportadores de la AFIP, podemos asistirte en ese proceso o brindarte nuestro Servicio de Firma de Importador, que te permite operar de manera legal y ágil mientras tramitás tu propia habilitación. Te asesoramos en cada paso.',
  },
  {
    q: '¿Cuánto cuesta importar un producto?',
    a: 'El costo de importación depende de múltiples variables: el valor de la mercadería (FOB), el origen, los aranceles de importación (que varían según la posición arancelaria), el IVA, las tasas estadísticas, los gastos de flete y seguro internacional, el almacenaje y los honorarios del despachante. Realizamos una liquidación estimada personalizada para cada operación.',
  },
  {
    q: '¿Cuáles son los plazos de arribo de la mercadería?',
    a: 'Los plazos dependen del modo de transporte y el origen. En términos generales: transporte marítimo desde Asia puede demorar entre 25 y 45 días; desde Europa, 20 a 35 días; desde América del Norte o Sur, 10 a 25 días. El transporte aéreo reduce esos plazos significativamente. Una vez en Argentina, el despacho aduanero puede resolverse en 24 a 72 horas según el canal asignado.',
  },
  {
    q: '¿Qué documentación se requiere para importar?',
    a: 'La documentación básica incluye: Factura Comercial (Commercial Invoice), Lista de Empaque (Packing List), Conocimiento de Embarque (Bill of Lading o Airway Bill) y Certificado de Origen cuando aplica. Según el tipo de mercadería pueden requerirse también certificados sanitarios, habilitaciones del SENASA, ANMAT, INAL u otros organismos regulatorios. Los gestionamos por vos.',
  },
  {
    q: '¿En qué consiste el servicio integral que brindan?',
    a: 'Nuestro servicio integral cubre todo el ciclo de la operación: desde el análisis de viabilidad y la clasificación arancelaria, pasando por la gestión de toda la documentación y habilitaciones, la coordinación con el agente de cargas, el seguimiento de la mercadería en tránsito, la presentación del despacho ante aduana y el seguimiento hasta la liberación y entrega final. Receptás tu mercadería sin tener que ocuparte de ningún trámite.',
  },
] as const
