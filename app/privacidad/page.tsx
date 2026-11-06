import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import PageBanner from '@/components/PageBanner'
import FooterParallax from '@/components/FooterParallax'

/* ──────────────────────────────────────────────────────────────────────────
   DATOS DEL RESPONSABLE DE LA BASE

   La Ley 25.326 exige identificar al responsable de la base de datos con su
   denominación y domicilio, y admite expresamente que sea una «persona física»
   (art. 2). Acá el responsable es una persona humana, no una sociedad: por eso
   va `titular` con nombre y apellido, y no una razón social.

   «Estudio Aduanero Gary» es el nombre de fantasía bajo el que opera.
   ────────────────────────────────────────────────────────────────────────── */
const RESPONSABLE = {
  nombre: 'Estudio Aduanero Gary',
  titular: 'Guillermo Damián Gary',
  cuit: '20-20526819-8',
  domicilio: 'Venezuela 634, piso 6, departamento 27 — C1095 Ciudad Autónoma de Buenos Aires',
  email: 'despachantegary@gmail.com',
  telefono: '+54 9 11 3438-5230',
  telefonoLink: '+5491134385230',
  horario: 'Lunes a viernes de 9:00 a 18:00 h',
}

const ULTIMA_ACTUALIZACION = '13 de octubre de 2026'

export const metadata: Metadata = {
  title: 'Política de Privacidad',
  description:
    'Cómo Estudio Aduanero Gary recolecta, usa y protege tus datos personales, conforme a la Ley 25.326 de Protección de Datos Personales.',
  alternates: { canonical: '/privacidad' },
  openGraph: {
    title: 'Política de Privacidad | Estudio Aduanero Gary',
    description:
      'Cómo recolectamos, usamos y protegemos tus datos personales, conforme a la Ley 25.326.',
    url: '/privacidad',
    images: ['/opengraph-image.png'],
  },
}

function Seccion({
  n,
  titulo,
  children,
}: {
  n: string
  titulo: string
  children: React.ReactNode
}) {
  return (
    <section className="mb-12">
      <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 flex gap-3 items-baseline">
        <span style={{ color: '#fc7114' }}>{n}</span>
        {titulo}
      </h2>
      <div className="space-y-4 text-slate-600 leading-relaxed text-[15px]">
        {children}
      </div>
    </section>
  )
}

export default function PrivacidadPage() {
  return (
    <>
      <Navbar />
      <main id="contenido">
      <div className="relative z-10 bg-white">
        <PageBanner
          eyebrow="Información legal"
          title="Política de Privacidad"
        />

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <p className="text-sm text-slate-400 mb-12 pb-6 border-b border-slate-100">
            Última actualización: {ULTIMA_ACTUALIZACION}
          </p>

          <Seccion n="01" titulo="Quiénes somos">
            <p>
              <strong className="text-slate-800">{RESPONSABLE.titular}</strong>, que
              opera bajo el nombre de fantasía {RESPONSABLE.nombre}, es responsable
              del tratamiento de los datos personales que se recolectan a través de
              este sitio web.
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>CUIT: {RESPONSABLE.cuit}</li>
              <li>Domicilio: {RESPONSABLE.domicilio}</li>
              <li>Horario de atención: {RESPONSABLE.horario}</li>
            </ul>
            <p>
              Podés contactarnos por cualquier cuestión relativa a tus datos
              personales escribiendo a{' '}
              <a
                href={`mailto:${RESPONSABLE.email}`}
                className="font-semibold underline"
                style={{ color: '#15355c' }}
              >
                {RESPONSABLE.email}
              </a>{' '}
              o llamando al{' '}
              <a
                href={`tel:${RESPONSABLE.telefonoLink}`}
                className="font-semibold underline"
                style={{ color: '#15355c' }}
              >
                {RESPONSABLE.telefono}
              </a>
              .
            </p>
          </Seccion>

          <Seccion n="02" titulo="Qué datos recolectamos">
            <p>
              Solo recolectamos los datos que vos nos proporcionás voluntariamente
              a través del formulario de contacto:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Nombre y apellido</li>
              <li>Dirección de correo electrónico</li>
              <li>Teléfono</li>
              <li>Empresa y servicio de interés</li>
              <li>
                Los archivos que decidas adjuntar (facturas, listas de empaque,
                documentación de la operación u otros)
              </li>
            </ul>
            <p>
              No recolectamos datos sensibles en los términos del artículo 2 de la
              Ley 25.326, ni te pedimos información que no sea necesaria para
              responder tu consulta.
            </p>
          </Seccion>

          <Seccion n="03" titulo="Para qué los usamos">
            <p>Usamos tus datos exclusivamente para:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Responder la consulta que nos enviaste</li>
              <li>Elaborar una cotización o un análisis de viabilidad de tu operación</li>
              <li>Gestionar la operación de comercio exterior si decidís contratarnos</li>
              <li>Mantener el historial de nuestra relación comercial</li>
            </ul>
            <p>
              <strong className="text-slate-800">
                No usamos tus datos para enviarte publicidad no solicitada
              </strong>{' '}
              ni para ninguna finalidad distinta de las enumeradas arriba.
            </p>
          </Seccion>

          <Seccion n="04" titulo="Carácter de los datos solicitados">
            <p>
              Completar el formulario es voluntario. Los campos marcados como
              obligatorios son los mínimos necesarios para poder contactarte y
              entender tu consulta: si no los completás, no vamos a poder
              responderte, pero eso no te genera ninguna otra consecuencia.
            </p>
          </Seccion>

          <Seccion n="05" titulo="Con quién los compartimos">
            <p>
              <strong className="text-slate-800">
                No vendemos, alquilamos ni cedemos tus datos personales a terceros
                con fines comerciales.
              </strong>
            </p>
            <p>
              Solo podemos compartirlos cuando sea imprescindible para ejecutar la
              operación que nos encargaste —por ejemplo con el agente de cargas, la
              compañía de transporte o los organismos públicos intervinientes como
              la Aduana, ARCA, SENASA o ANMAT— o cuando una norma legal o una orden
              judicial nos obligue a hacerlo.
            </p>

            <h3 className="text-base font-bold text-slate-900 pt-3">
              Proveedores tecnológicos
            </h3>
            <p>
              Para que este sitio funcione nos apoyamos en dos proveedores que
              procesan datos únicamente por nuestra cuenta y siguiendo nuestras
              instrucciones, sin usarlos para fines propios:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <strong className="text-slate-800">Vercel Inc.</strong> — alojamiento
                del sitio web.
              </li>
              <li>
                <strong className="text-slate-800">Resend</strong> — envío de los
                correos que genera el formulario de contacto, incluidos los archivos
                que adjuntes.
              </li>
            </ul>

            <h3 className="text-base font-bold text-slate-900 pt-3">
              Transferencia internacional de datos
            </h3>
            <p>
              Ambos proveedores tienen sus servidores fuera de la Argentina,
              principalmente en los Estados Unidos. Eso significa que{' '}
              <strong className="text-slate-800">
                al enviar el formulario tus datos se transfieren y almacenan en el
                exterior
              </strong>
              , en los términos del artículo 12 de la Ley 25.326.
            </p>
            <p>
              Al completar y enviar el formulario prestás tu consentimiento para esa
              transferencia. Si preferís evitarla, podés contactarnos directamente
              por teléfono al{' '}
              <a
                href={`tel:${RESPONSABLE.telefonoLink}`}
                className="font-semibold underline"
                style={{ color: '#15355c' }}
              >
                {RESPONSABLE.telefono}
              </a>
              .
            </p>
          </Seccion>

          <Seccion n="06" titulo="Cuánto tiempo los conservamos">
            <p>
              Conservamos los datos de las consultas que no derivan en una
              contratación por un plazo máximo de dos años. Si se concreta una
              operación, conservamos la documentación durante los plazos que exige
              la normativa aduanera y fiscal argentina, que puede extenderse hasta
              diez años. Cumplido el plazo, los datos se eliminan.
            </p>
          </Seccion>

          <Seccion n="07" titulo="Seguridad">
            <p>
              Adoptamos medidas técnicas y organizativas razonables para proteger
              tus datos frente al acceso no autorizado, la pérdida o la alteración.
              El sitio se sirve íntegramente sobre conexión cifrada (HTTPS).
            </p>
            <p>
              Aun así, ningún sistema es completamente infalible: si detectás algo
              irregular, avisanos a {RESPONSABLE.email}.
            </p>
          </Seccion>

          <Seccion n="08" titulo="Tus derechos">
            <p>
              Como titular de los datos, podés solicitarnos en cualquier momento:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <strong className="text-slate-800">Acceso:</strong> saber qué datos
                tuyos tenemos y cómo los usamos
              </li>
              <li>
                <strong className="text-slate-800">Rectificación:</strong> corregir
                datos inexactos o incompletos
              </li>
              <li>
                <strong className="text-slate-800">Supresión:</strong> que
                eliminemos tus datos, salvo que debamos conservarlos por una
                obligación legal
              </li>
              <li>
                <strong className="text-slate-800">Actualización:</strong> poner al
                día información que haya cambiado
              </li>
            </ul>
            <p>
              Para ejercerlos, escribinos a{' '}
              <a
                href={`mailto:${RESPONSABLE.email}`}
                className="font-semibold underline"
                style={{ color: '#15355c' }}
              >
                {RESPONSABLE.email}
              </a>
              . Respondemos dentro de los diez días corridos de recibida la
              solicitud, como establece la Ley 25.326.
            </p>

            <div
              className="mt-6 p-5 rounded-xl text-sm leading-relaxed"
              style={{ background: '#f4f7fa', borderLeft: '3px solid #fc7114' }}
            >
              <p className="mb-3">
                El titular de los datos personales tiene la facultad de ejercer el
                derecho de acceso a los mismos en forma gratuita a intervalos no
                inferiores a seis meses, salvo que se acredite un interés legítimo
                al efecto, conforme lo establecido en el artículo 14, inciso 3 de la
                Ley 25.326.
              </p>
              <p>
                La Agencia de Acceso a la Información Pública, órgano de control de
                la Ley 25.326, tiene la atribución de atender las denuncias y
                reclamos que se interpongan con relación al incumplimiento de las
                normas sobre protección de datos personales.
              </p>
            </div>
          </Seccion>

          <Seccion n="09" titulo="Cookies y analítica">
            <p>
              Este sitio <strong className="text-slate-800">no utiliza cookies
              publicitarias ni de seguimiento de terceros</strong>, y no construye
              perfiles de navegación.
            </p>
            <p>
              Usamos Vercel Analytics para medir visitas de forma agregada y
              anónima. Es una herramienta sin cookies: no almacena identificadores
              en tu navegador ni permite reconocerte entre distintas visitas.
            </p>
          </Seccion>

          <Seccion n="10" titulo="Menores de edad">
            <p>
              Este sitio está dirigido a empresas y profesionales. No recolectamos
              de forma consciente datos de menores de 18 años. Si detectamos que
              recibimos datos de un menor, los eliminamos.
            </p>
          </Seccion>

          <Seccion n="11" titulo="Cambios en esta política">
            <p>
              Podemos actualizar esta política para reflejar cambios en nuestras
              prácticas o en la normativa aplicable. La fecha de última
              actualización figura al comienzo de esta página. Si el cambio es
              sustancial, lo informaremos de forma visible en el sitio.
            </p>
          </Seccion>

          <div className="pt-10 border-t border-slate-100">
            <p className="text-slate-500 text-sm mb-5">
              ¿Alguna duda sobre el tratamiento de tus datos?
            </p>
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm text-white transition-colors duration-200"
              style={{ background: '#15355c' }}
            >
              Escribinos
            </Link>
          </div>
        </div>
      </div>
      </main>
      <FooterParallax />
    </>
  )
}
