# Pendientes — datos a pedirle al cliente

Registro de todo lo que falta completar en el sitio y que **no se puede resolver
desde el código**: depende de datos reales del estudio.

Última actualización: 9 de octubre de 2026

---

## 🔴 Bloquea la política de privacidad

La Ley 25.326 exige identificar al responsable de la base de datos. Hoy la
página `/privacidad` está publicada y funcional, pero **omite estos campos** en
lugar de inventarlos.

**Dónde se completan:** constante `RESPONSABLE` al principio de
[`app/privacidad/page.tsx`](app/privacidad/page.tsx). Un solo lugar.

| Dato | Estado | Para qué |
|---|---|---|
| Razón social completa (S.A. / S.R.L. / unipersonal) | ❌ Falta | Identificar al responsable de la base |
| CUIT | ❌ Falta | Identificar al responsable de la base |
| Domicilio legal completo (calle, nº, piso, CP, localidad, provincia) | ❌ Falta | Exigido por el art. 6 de la Ley 25.326 |
| Teléfono de contacto | ❌ Falta | Canal alternativo para ejercer derechos |

### Además, fuera del sitio

- [ ] **Inscribir la base de datos** en el Registro Nacional de Bases de Datos
      de la AAIP (obligación del art. 21 de la Ley 25.326, para quien trata
      datos personales de terceros).
- [ ] **Revisión por un abogado** del texto de `/privacidad` antes de darlo por
      definitivo. El borrador es sólido y estándar, pero el formulario recibe
      archivos adjuntos con documentación comercial, y eso conviene que lo mire
      un profesional.

---

## 🟠 Bloquea el marcado de negocio local (SEO)

Sin estos datos, el `LocalBusiness` de schema.org queda incompleto y el sitio no
puede competir en búsquedas locales. Es, además, el agujero de conversión más
grande: un despachante de aduana sin teléfono visible pierde llamadas.

**Dónde se completan:** los `TODO` de [`lib/schema.ts`](lib/schema.ts).

| Dato | Estado |
|---|---|
| Teléfono fijo y/o celular | ❌ Falta |
| WhatsApp de atención | ❌ Falta |
| Dirección física completa | ❌ Falta |
| Coordenadas geográficas (lat/long) | ❌ Falta |
| **Número de matrícula de despachante ante ARCA** | ❌ Falta — el sitio afirma tener la credencial pero nunca da el número |
| Email con dominio propio (hoy es un Gmail) | ❌ Falta |
| Perfil de LinkedIn (relevante por ser B2B) | ❌ Falta |
| Horario de atención confirmado | ⚠️ Está en `/contacto` pero no en el pie |

---

## 🟡 Contenido a verificar

| Ítem | Estado |
|---|---|
| Los 5 logos de clientes que faltan (Pinturerías Rex, Biscayne Servicios, Horcrisa, Dacomac, Octawind) | ❌ Hoy se muestran como una caja con la inicial, y se nota como relleno |
| Autorización escrita de los clientes listados en `components/Clients.tsx` para usar sus marcas | ⚠️ Confirmado verbalmente que son clientes reales con permiso — conviene tenerlo por escrito |
| Confirmación de que las biografías del equipo en `components/AboutStory.tsx` son de personas reales | ❌ Sin fotos, solo iniciales |
| Sustento de la cifra «+200 empresas» (`components/TrustBar.tsx`) | ❌ O cambiarla por una defendible |
| «100 % cobertura nacional» en `components/About.tsx` | ❌ Componente muerto, ver abajo |
| Fotos propias de la oficina y el equipo | ❌ Hoy hay 17 fotos de banco de puertos genéricos |

**Resuelto:** los testimonios de `components/Testimonials.tsx` fueron
anonimizados — se identifican por rubro y antigüedad, sin nombre de empresa.

---

## 🔵 Trabajo técnico pendiente

| Ítem | Dónde |
|---|---|
| ~~Conectar el formulario de contacto~~ | ✅ Resuelto — `app/api/contacto/route.ts` envía con Resend |
| ~~Casilla de consentimiento~~ | ✅ Resuelto — obligatoria, enlaza a `/privacidad`, con fecha y hora en el email |
| ~~Accesibilidad del formulario~~ | ✅ Resuelto — etiquetas asociadas, autocompletado, estados y foco |
| ~~`components/About.tsx` código muerto con «AFIP»~~ | ✅ Resuelto — borrado |
| **Configurar Resend + registros DNS** | ⏳ **Bloquea el envío real.** Sin esto el formulario devuelve 503 |
| Vulnerabilidades de npm: 4 preexistentes, 1 crítica en Next 14.2.5 | Requiere subir de versión mayor |

### Configurar Resend y el DNS — pendiente

El código está listo, pero el formulario **no envía nada hasta completar esto**:

1. Instalar Resend desde el Vercel Marketplace → crea `RESEND_API_KEY` sola.
2. Agregar `gary-global-trade.com.ar` en Resend, aceptando el subdominio de
   envío `send.gary-global-trade.com.ar`.
3. Cargar en Vercel → Domains → DNS los tres registros que da Resend: SPF (TXT),
   rebotes (MX) y DKIM (TXT). En el campo **Name** va solo `send` o
   `resend._domainkey`, nunca el dominio completo.
4. Verificar en Resend (5 a 15 minutos).
5. Agregar DMARC: TXT en `_dmarc` con `v=DMARC1; p=none; rua=mailto:despachantegary@gmail.com`.
6. Cargar en Vercel las variables `CONTACTO_EMAIL_DESTINO` y
   `CONTACTO_EMAIL_REMITENTE` (ver `.env.example`).
7. Desplegar.

### Especificación de la casilla de consentimiento (ya implementada)

Va en `components/Contact.tsx`, encima del botón de envío. No se implementó
desde acá para no generar conflictos con el trabajo en curso sobre ese archivo.

```tsx
<label className="flex items-start gap-3 text-xs text-slate-500 leading-relaxed">
  <input
    type="checkbox"
    name="consentimiento"
    required
    className="mt-0.5 shrink-0"
  />
  <span>
    Acepto que mis datos sean tratados conforme a la{' '}
    <a href="/privacidad" className="underline font-semibold text-slate-700">
      Política de Privacidad
    </a>
    .
  </span>
</label>
```

Tres detalles que importan:

1. **`required`** — sin el consentimiento no se puede enviar. Es lo que da base
   legal al tratamiento.
2. **El texto actual «Tu información es confidencial y no será compartida con
   terceros»** ya no queda huérfano: ahora hay una política que lo respalda.
3. Cuando el formulario empiece a enviar de verdad, **guardá también la fecha y
   hora del consentimiento** junto con el resto de los datos. Es lo que permite
   demostrar que se prestó.
