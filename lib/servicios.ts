/**
 * Nombres de los servicios que ofrece el estudio.
 *
 * Fuente única: la grilla de `components/Services.tsx` enlaza a
 * `/contacto?servicio=<nombre>`, y `components/Contact.tsx` valida el
 * parámetro contra esta lista antes de mostrarlo. Sin esa validación,
 * cualquiera podría inyectar texto arbitrario en la página por URL.
 */
export const NOMBRES_SERVICIOS = [
  'Importación',
  'Exportación',
  'Despacho Aduanero',
  'Logística Internacional',
  'Clasificación Arancelaria',
  'Gestión de Certificados',
  'Firma de Importador',
  'Transporte Interno',
  'Asesoría en Comex',
  'Servicio de Courrier',
] as const

export function esServicioValido(valor: string | null): valor is string {
  return !!valor && (NOMBRES_SERVICIOS as readonly string[]).includes(valor)
}
