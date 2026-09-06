'use client'

import { useEffect, useState } from 'react'
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  Laptop,
  Network,
  ShieldCheck,
  Sparkles,
  X,
} from 'lucide-react'

const WHATSAPP_NUMBER = '573025305818'

const WHATSAPP_SUPPORT = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  'Hola CSH Tech Solution, necesito soporte técnico.',
)}`

const WHATSAPP_PURCHASE = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  'Hola CSH Tech Solution, estoy interesado en comprar un producto.',
)}`

const licenses = [
  {
    type: 'MICROSOFT',
    category: 'PRODUCTIVIDAD',
    title: 'Microsoft',
    description:
      'Soluciones y licenciamiento Microsoft para empresas y profesionales.',
    detail: 'Licencias oficiales',
    support: 'Asesoría especializada',
    image: '/microsoft.png',
  },
  {
    type: 'SOPHOS',
    category: 'CIBERSEGURIDAD',
    title: 'Sophos',
    description:
      'Protección avanzada para equipos, redes y entornos empresariales.',
    detail: 'Seguridad empresarial',
    support: 'Protección avanzada',
    image: '/sophos.png',
  },
  {
    type: 'FORTINET',
    category: 'SEGURIDAD DE RED',
    title: 'Fortinet',
    description:
      'Soluciones de seguridad de red para proteger la infraestructura de tu empresa.',
    detail: 'Seguridad de redes',
    support: 'Soluciones empresariales',
    image: '/fortinet.png',
  },
  {
    type: 'HP',
    category: 'HARDWARE',
    title: 'HP',
    description:
      'Equipos de cómputo, impresión y soluciones tecnológicas para entornos profesionales y empresariales.',
    detail: 'Equipos originales',
    support: 'Soporte y garantía',
    image: '/hp.png',
  },
{
  type: 'HIKVISION',
  category: 'SEGURIDAD',
  title: 'Hikvision',
  description: 'Soluciones de videovigilancia y seguridad Hikvision para proteger espacios, equipos y sistemas mediante tecnología de monitoreo avanzada.',
  detail: 'Videovigilancia y seguridad',
  support: 'Asesoría especializada',
  image: '/hikvision.png',
  },
  {
    type: 'TELEFONO',
    category: 'TELEFONIA',
    title: 'Lenovo',
    description: 'Soluciones tecnológicas Lenovo para equipos portátiles, computadores y dispositivos diseñados para el trabajo, estudio y productividad.',
    detail: 'Computadores y dispositivos',
    support: 'Asesoría especializada',
    image: '/lenovo.png',
  },

  {
    type: 'APPLE',
    category: 'TECNOLOGIA',
    title: 'Apple',
    description: 'Tecnología Apple con dispositivos innovadores como computadores, teléfonos, tabletas y accesorios para diferentes necesidades.',
    detail: 'Dispositivos Apple',
    support: 'Asesoría especializada',
    image: '/apple-logo.png',
  },

  {
    type: 'DELL',
    category: 'TECNOLOGIA',
    title: 'Dell',
    description: 'Equipos Dell para trabajo, estudio y empresas, incluyendo computadores, portátiles, monitores y soluciones tecnológicas.',
    detail: 'Computadores y equipos',
    support: 'Asesoría especializada',
    image: '/dell-logo.png',
  },

  {
    type: 'TP_LINK',
    category: 'REDES',
    title: 'TP-Link',
    description: 'Soluciones de conectividad TP-Link para redes domésticas y empresariales, incluyendo routers, switches, access points y dispositivos inalámbricos.',
    detail: 'Redes y conectividad',
    support: 'Asesoría especializada',
    image: '/tp-link.png',
  },

  {
    type: 'LOGITECH',
    category: 'PERIFERICOS',
    title: 'Logitech',
    description: 'Periféricos Logitech para mejorar la productividad y experiencia digital, incluyendo teclados, mouse, cámaras, audífonos y accesorios.',
    detail: 'Periféricos y accesorios',
    support: 'Asesoría especializada',
    image: '/logitech-logo.png',
  },

  {
    type: 'GENIUS',
    category: 'PERIFERICOS',
    title: 'Genius',
    description: 'Periféricos Genius para computadores y espacios de trabajo, con soluciones en teclados, mouse, cámaras, audio y accesorios.',
    detail: 'Periféricos y accesorios',
    support: 'Asesoría especializada',
    image: '/genius-logo.png',
  },

  {
    type: 'HPE',
    category: 'SERVIDORES',
    title: 'HPE',
    description: 'Soluciones HPE para infraestructura tecnológica empresarial, incluyendo servidores, almacenamiento, redes y soluciones para centros de datos.',
    detail: 'Servidores e infraestructura',
    support: 'Asesoría especializada',
    image: '/hpe.png',
  },

  {
    type: 'ASUS',
    category: 'TECNOLOGIA',
    title: 'ASUS',
    description: 'Equipos ASUS de alto rendimiento para trabajo, estudio, gaming y productividad, incluyendo portátiles, computadores, monitores y componentes.',
    detail: 'Computadores y componentes',
    support: 'Asesoría especializada',
    image: '/asus-logo.png',
  },
  {
    type: 'QNAP',
    category: 'ALMACENAMIENTO',
    title: 'QNAP',
    description: 'Soluciones QNAP para almacenamiento y gestión de datos, incluyendo servidores NAS, copias de seguridad, virtualización y soluciones de almacenamiento empresarial.',
    detail: 'Almacenamiento e infraestructura',
    support: 'Asesoría especializada',
    image: '/qnap-logo.png',
  },
]

const solutions = [
  {
    icon: Laptop,
    title: 'Software',
    text: 'Licenciamiento y soluciones para las necesidades tecnológicas de tu empresa.',
    href: '/software',
  },
  {
    icon: Network,
    title: 'Hardware',
    text: 'Equipos y tecnología para trabajar, crecer y mantener tu negocio conectado.',
    href: '/hardware',
  },
]

const reasons = [
  [
    'Precios competitivos',
    'Soluciones con una excelente relación entre calidad y precio.',
  ],
  [
    'Asesoría personalizada',
    'Te ayudamos a decidir según lo que realmente necesita tu negocio.',
  ],
  [
    'Calidad y confianza',
    'Trabajamos con soluciones y marcas reconocidas y confiables.',
  ],
  [
    'Atención cercana',
    'Acompañamos a nuestros clientes más allá de una compra.',
  ],
  [
    'Para cada necesidad',
    'Desde renovar un equipo hasta resolver toda tu infraestructura.',
  ],
]

export default function Page() {
  const [licenseIndex, setLicenseIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const [showWhatsAppBot, setShowWhatsAppBot] = useState(false)

  useEffect(() => {
    if (paused) return

    const interval = setInterval(() => {
      setLicenseIndex((current) => (current + 1) % licenses.length)
    }, 3500)

    return () => clearInterval(interval)
  }, [paused])

  const nextLicense = () => {
    setLicenseIndex((current) => (current + 1) % licenses.length)
  }

  const previousLicense = () => {
    setLicenseIndex(
      (current) => (current - 1 + licenses.length) % licenses.length,
    )
  }

  const getLicense = (offset: number) => {
    return licenses[
      (licenseIndex + offset + licenses.length) % licenses.length
    ]
  }

  const openWhatsAppBot = () => {
    setShowWhatsAppBot(true)
  }

  const closeWhatsAppBot = () => {
    setShowWhatsAppBot(false)
  }

  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
     <section
        id="inicio"
        className="hero-section mx-auto grid max-w-7xl items-center gap-8 px-5 pb-10 pt-2 sm:px-6 sm:pt-3 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10 lg:px-10 lg:pb-16 lg:pt-5"
      >
        <div className="relative z-10 lg:-translate-y-14">
            <div className="eyebrow">
            <Sparkles size={14} />
            Tecnología que impulsa
          </div>

          <h1 className="mt-6 max-w-xl text-balance text-5xl font-medium leading-[0.98] tracking-[-0.07em] text-primary sm:text-6xl lg:text-[68px]">
            Soluciones que
            <br />
            hacen avanzar
            <br />
            <span>tu negocio.</span>
          </h1>

          <p className="mt-7 max-w-md text-base leading-7 text-muted-foreground">
            Licencias oficiales, equipos e infraestructura para crecer con
            tecnología segura, clara y a tu medida.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-5">
            <a className="button-primary" href="#soluciones">
              Explorar soluciones
              <ArrowUpRight size={17} />
            </a>

            <button
              type="button"
              className="text-link"
              onClick={openWhatsAppBot}
            >
              Contáctanos
              <ArrowUpRight size={15} />
            </button>
          </div>

          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-xs text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <Check size={13} className="text-accent" />
              Licencias originales
            </span>

            <span className="flex items-center gap-1.5">
              <Check size={13} className="text-accent" />
              Atención personalizada
            </span>
          </div>
        </div>
        <div
          className="license-carousel"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="carousel-background-circle circle-one" />
          <div className="carousel-background-circle circle-two" />

          <div className="license-carousel-track">
            {[0, 1, 2].map((offset) => {
              const license = getLicense(offset)

              return (
                <article
                  key={`${license.title}-${offset}-${licenseIndex}`}
                  className={`license-carousel-card ${offset === 0
                    ? 'license-carousel-card-active'
                    : 'license-carousel-card-side'
                    }`}
                >
                  <div className="license-top">
                    <span>{license.type}</span>
                    <ShieldCheck size={17} />
                  </div>

                  <div className={`license-logo ${license.type === 'APPLE' ? 'license-logo-apple' : ''}`}>
                    <img
                      src={license.image}
                      alt={license.title}
                    />
                  </div>

                  <span className="license-category">
                    {license.category}
                  </span>

                  <h2>{license.title}</h2>

                  <p>{license.description}</p>

                  <div className="license-separator" />

                  <div className="license-details">
                    <span>{license.detail}</span>
                    <span>{license.support}</span>
                  </div>
                </article>
              )
            })}
          </div>

          <button
            type="button"
            className="license-arrow license-arrow-left"
            onClick={previousLicense}
            aria-label="Licencia anterior"
          >
            <ArrowLeft size={18} />
          </button>

          <button
            type="button"
            className="license-arrow license-arrow-right"
            onClick={nextLicense}
            aria-label="Siguiente licencia"
          >
            <ArrowRight size={18} />
          </button>

          <div className="license-carousel-bottom">
            <div className="stage-caption">
              <span className="caption-dot" />
              Licenciamiento oficial
            </div>

            <div className="stage-pager">
              {licenses.map((license, index) => (
                <button
                  key={license.title}
                  type="button"
                  onClick={() => setLicenseIndex(index)}
                  className={
                    index === licenseIndex ? 'selected' : ''
                  }
                  aria-label={`Mostrar ${license.title}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      <section
        id="soluciones"
        className="border-y border-border/70 bg-card/55 px-6 py-20 lg:px-10"
      >
        <div className="mx-auto max-w-7xl">
          <div className="section-heading">
            <div>
              <div className="eyebrow">
                Una empresa, múltiples soluciones
              </div>

              <h2>
                Todo lo que necesitas, <span>en un solo lugar.</span>
              </h2>
            </div>

            <p>
              Encontramos la tecnología que realmente aporta valor a tu
              negocio, sin complicaciones.
            </p>
          </div>

          <div className="mt-12 grid justify-center gap-5 md:grid-cols-2">
            {solutions.map(({ icon: Icon, title, text, href }) => (
              <article
                key={title}
                id={
                  title === 'Software'
                    ? 'software'
                    : title === 'Hardware'
                      ? 'hardware'
                      : undefined
                }
                className="solution-card"
              >
                <div className="icon-box">
                  <Icon size={22} />
                </div>

                <h3>{title}</h3>

                <p>{text}</p>

                <a href={href}>
                  Conocer más
                  <ArrowUpRight size={15} />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <div className="section-heading">
          <div>
            <div className="eyebrow">La diferencia CSH</div>

            <h2>
              ¿Por qué <span>CSH?</span>
            </h2>
          </div>

          <p>
            Tu tecnología, en manos de un aliado que entiende tus necesidades.
          </p>
        </div>

        <div className="mt-12 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map(([title, text]) => (
            <article key={title} className="reason-item">
              <div className="reason-icon">
                <Check size={16} />
              </div>

              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="brand-statement px-6 py-20 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-4xl text-center">
          <div className="eyebrow justify-center">
            Una frase que nos define
          </div>

          <h2 className="mt-6 text-balance text-4xl font-medium tracking-[-0.06em] text-primary sm:text-6xl">
            No se trata solo de comprar tecnología.
            <br />
            <span>
              Se trata de encontrar la solución correcta para ti.
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-muted-foreground">
            En CSH analizamos tus necesidades para ayudarte a encontrar una
            alternativa que se adapte a tu presupuesto, objetivos y crecimiento.
          </p>

          <button
            type="button"
            className="button-primary mt-8"
            onClick={openWhatsAppBot}
          >
            Habla con nosotros
            <ArrowUpRight size={17} />
          </button>
        </div>
      </section>
      <section id="nosotros" className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:px-10 lg:py-28">
        <div>
          <div className="eyebrow">
            Conoce CSH Tech Solutions
          </div>
          <h2 className="mt-5 max-w-md">
            Más que un proveedor,
            <span> tu aliado tecnológico.</span>
          </h2>
        </div>

        <div className="max-w-xl">
          <p className="text-xl leading-8 text-primary/80">
            Somos una empresa dedicada a brindar soluciones tecnológicas para
            personas, emprendimientos y empresas.
          </p>

          <p className="mt-5 leading-7 text-muted-foreground">
            Nuestro propósito es facilitar el acceso a la tecnología mediante
            productos, servicios y soluciones que combinen calidad, asesoría y
            precios competitivos.
          </p>

          <button
            type="button"
            className="mt-7 inline-flex items-center gap-1 text-sm font-bold text-primary transition-colors hover:text-accent"
            onClick={openWhatsAppBot}
          >
            Conoce más sobre nosotros
            <ArrowUpRight size={15} />
          </button>
        </div>
      </section>
      <section
        id="ubicacion"
        className="border-y border-border/70 bg-card/55 px-6 py-20 lg:px-10 lg:py-24"
      >
        <div className="mx-auto max-w-7xl">
          <div className="section-heading">
            <div>
              <div className="eyebrow">Nuestra ubicación</div>

              <h2 className="mt-5">
                Estamos en <span>Bello.</span>
              </h2>
            </div>

            <p>
              Atendemos clientes de manera remota o visitas corporativas,
              Antioquia.
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
            <div className="location-card flex-col justify-center">
              <div className="location-pin">
                <Network size={22} />
              </div>

              <div>
                <h3>CSH Tech Solutions</h3>

                <p>Calle 53 #64-49</p>

                <p>Bello, Antioquia, Colombia</p>

                <p className="mt-5 text-sm text-muted-foreground">
                  Atención presencial y remota
                </p>

                <button
                  type="button"
                  className="button-primary mt-6"
                  onClick={openWhatsAppBot}
                >
                  Contactarnos
                  <ArrowUpRight size={16} />
                </button>
              </div>
            </div>

            <div className="map-container">
              <iframe
                title="Ubicación CSH Tech Solutions"
                src="https://www.google.com/maps?q=Calle%2053%20%2364-49%2C%20Bello%2C%20Antioquia%2C%20Colombia&output=embed"
                width="100%"
                height="420"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="mission-section px-6 py-20 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="section-heading">
            <div>
              <div className="eyebrow">Nuestra esencia</div>

              <h2>
                Lo que nos mueve <span>cada día.</span>
              </h2>
            </div>

            <p>
              Tecnología con propósito, construida alrededor de las necesidades
              reales de nuestros clientes.
            </p>
          </div>

          <div className="mission-grid mt-12">
            <article className="mission-card mission-card-light">
              <div className="mission-card-number">01</div>

              <div className="mission-card-content">
                <span className="mission-label">
                  Nuestra misión
                </span>

                <h3>
                  Hacer que la tecnología
                  <span> trabaje para ti.</span>
                </h3>

                <p>
                  Brindar soluciones tecnológicas confiables, accesibles y a la
                  medida, acompañando a cada cliente con asesoría clara, cercana
                  y orientada a sus verdaderas necesidades.
                </p>

                <div className="mission-footer">
                  Soluciones · Asesoría · Confianza
                </div>
              </div>
            </article>

            <article className="mission-card mission-card-blue">
              <div className="mission-card-number">02</div>

              <div className="mission-card-content">
                <span className="mission-label">
                  Nuestra visión
                </span>

                <h3>
                  Ser el aliado tecnológico que
                  <span> impulsa tu futuro.</span>
                </h3>

                <p>
                  Construir relaciones duraderas y ayudar a más personas y
                  empresas a crecer mediante tecnología útil, segura y
                  correctamente elegida.
                </p>

                <div className="mission-footer">
                  Innovación · Crecimiento · Futuro
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
      <button
        type="button"
        onClick={openWhatsAppBot}
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl"
        aria-label="Abrir WhatsApp"
      >
        <svg
          viewBox="0 0 24 24"
          className="h-7 w-7 fill-current"
          aria-hidden="true"
        >
          <path d="M20.52 3.48A11.82 11.82 0 0 0 12.04 0C5.5 0 .18 5.32.18 11.86c0 2.09.55 4.13 1.59 5.92L.1 24l6.36-1.67a11.84 11.84 0 0 0 5.58 1.42h.01c6.54 0 11.86-5.32 11.86-11.86 0-3.17-1.23-6.15-3.39-8.41ZM12.05 21.7h-.01a9.84 9.84 0 0 1-5.02-1.37l-.36-.21-3.77.99 1.01-3.67-.23-.38a9.82 9.82 0 0 1-1.5-5.2c0-5.42 4.42-9.84 9.85-9.84 2.62 0 5.08 1.02 6.93 2.87a9.76 9.76 0 0 1 2.88 6.97c0 5.42-4.42 9.84-9.84 9.84Zm5.4-7.38c-.3-.15-1.77-.87-2.05-.97-.28-.1-.48-.15-.69.15-.2.3-.79.97-.97 1.17-.18.2-.36.23-.66.08-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.76-1.67-2.06-.18-.3-.02-.46.13-.61.13-.13.3-.36.45-.54.15-.18.2-.3.3-.51.1-.2.05-.38-.03-.53-.08-.15-.69-1.65-.94-2.26-.25-.59-.5-.51-.69-.52h-.59c-.2 0-.53.08-.81.38-.28.3-1.06 1.03-1.06 2.51s1.08 2.91 1.23 3.11c.15.2 2.13 3.25 5.16 4.56.72.31 1.28.5 1.72.64.72.23 1.38.2 1.9.12.58-.09 1.77-.72 2.02-1.42.25-.69.25-1.28.18-1.41-.08-.13-.28-.2-.59-.36Z" />
        </svg>
      </button>
      {showWhatsAppBot && (
        <>

          <div
            className="fixed inset-0 z-[60] bg-[#061D34]/45 backdrop-blur-sm"
            onClick={closeWhatsAppBot}
          />
          <div className="fixed bottom-5 left-4 right-4 z-[70] mx-auto w-auto max-w-[390px] overflow-hidden rounded-3xl border border-[#dce6eb] bg-white shadow-[0_25px_70px_rgba(6,29,52,0.25)] sm:bottom-6 sm:left-auto sm:right-6 sm:mx-0 sm:w-[390px]">
            <div className="relative overflow-hidden bg-[#061D34] px-5 py-5 text-white">
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#12CBD1]/15" />
              <div className="absolute -bottom-12 -left-8 h-28 w-28 rounded-full bg-[#0A4174]/60" />

              <button
                type="button"
                onClick={closeWhatsAppBot}
                className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
                aria-label="Cerrar"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="relative flex items-center gap-3">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#25D366] shadow-lg shadow-[#25D366]/20">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-7 w-7 text-white"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M20.52 3.48A11.82 11.82 0 0 0 12.04 0C5.5 0 .18 5.32.18 11.86c0 2.09.55 4.13 1.59 5.92L.1 24l6.36-1.67a11.84 11.84 0 0 0 5.58 1.42h.01c6.54 0 11.86-5.32 11.86-11.86 0-3.17-1.23-6.15-3.39-8.41ZM12.05 21.7h-.01a9.84 9.84 0 0 1-5.02-1.37l-.36-.21-3.77.99 1.01-3.67-.23-.38a9.82 9.82 0 0 1-1.5-5.2c0-5.42 4.42-9.84 9.85-9.84 2.62 0 5.08 1.02 6.93 2.87a9.76 9.76 0 0 1 2.88 6.97c0 5.42-4.42 9.84-9.84 9.84Zm5.4-7.38c-.3-.15-1.77-.87-2.05-.97-.28-.1-.48-.15-.69.15-.2.3-.79.97-.97 1.17-.18.2-.36.23-.66.08-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.76-1.67-2.06-.18-.3-.02-.46.13-.61.13-.13.3-.36.45-.54.15-.18.2-.3.3-.51.1-.2.05-.38-.03-.53-.08-.15-.69-1.65-.94-2.26-.25-.59-.5-.51-.69-.52h-.59c-.2 0-.53.08-.81.38-.28.3-1.06 1.03-1.06 2.51s1.08 2.91 1.23 3.11c.15.2 2.13 3.25 5.16 4.56.72.31 1.28.5 1.72.64.72.23 1.38.2 1.9.12.58-.09 1.77-.72 2.02-1.42.25-.69.25-1.28.18-1.41-.08-.13-.28-.2-.59-.36Z" />
                  </svg>
                </div>

                <div>
                  <p className="text-sm font-medium text-[#12CBD1]">
                    CSH Tech Solution
                  </p>

                  <h3 className="mt-0.5 text-lg font-bold">
                    ¿Cómo podemos ayudarte?
                  </h3>
                </div>
              </div>
            </div>

            <div className="bg-[#f8fafb] p-5">

              <p className="mb-4 text-sm leading-6 text-[#66798A]">
                Selecciona una opción y te conectaremos directamente con nuestro
                equipo por WhatsApp.
              </p>

              <div className="space-y-3">
                <a
                  href={WHATSAPP_SUPPORT}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeWhatsAppBot}
                  className="group flex w-full items-center gap-4 rounded-2xl border border-[#dce6eb] bg-white p-4 text-left shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-[#12CBD1] hover:shadow-[0_10px_30px_rgba(10,65,116,0.10)]"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#edf5f8] text-[#0A4174] transition-colors group-hover:bg-[#0A4174] group-hover:text-white">
                    <ShieldCheck className="h-6 w-6" />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="font-semibold text-[#061D34]">
                      Soporte técnico
                    </p>

                    <p className="mt-1 text-xs leading-5 text-[#66798A]">
                      Necesito ayuda con un servicio o producto
                    </p>
                  </div>

                  <ArrowUpRight className="h-5 w-5 shrink-0 text-[#12CBD1] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>

                {/* Comprar */}
                <a
                  href={WHATSAPP_PURCHASE}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeWhatsAppBot}
                  className="group flex w-full items-center gap-4 rounded-2xl border border-[#dce6eb] bg-white p-4 text-left shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-[#12CBD1] hover:shadow-[0_10px_30px_rgba(10,65,116,0.10)]"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#0A4174] text-white transition-colors group-hover:bg-[#12CBD1] group-hover:text-[#061D34]">
                    <Laptop className="h-6 w-6" />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="font-semibold text-[#061D34]">
                      Comprar productos
                    </p>

                    <p className="mt-1 text-xs leading-5 text-[#66798A]">
                      Estoy interesado en adquirir un producto
                    </p>
                  </div>

                  <ArrowUpRight className="h-5 w-5 shrink-0 text-[#12CBD1] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>

              </div>

              {/* Footer */}
              <div className="mt-5 flex items-center justify-center gap-2 border-t border-[#dce6eb] pt-4">
                <span className="h-2 w-2 rounded-full bg-[#25D366]" />

                <span className="text-xs font-medium text-[#66798A]">
                  Atención directa por WhatsApp
                </span>
              </div>
            </div>
          </div>
        </>
      )}
    </main>
  )
}
