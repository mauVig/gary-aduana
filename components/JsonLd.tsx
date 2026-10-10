/**
 * Inyecta datos estructurados schema.org.
 *
 * Es un server component: el JSON-LD queda en el HTML inicial, que es
 * donde los rastreadores lo buscan. Acepta un objeto o un array.
 */
export default function JsonLd({ data }: { data: object | object[] }) {
  const blocks = Array.isArray(data) ? data : [data]

  return (
    <>
      {blocks.map((block, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(block) }}
        />
      ))}
    </>
  )
}
