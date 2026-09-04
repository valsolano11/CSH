'use client'
import SiteHeader from './components/Header'
import { useEffect, useState } from 'react'
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  Cloud,
  Laptop,
  Network,
  ShieldCheck,
  Sparkles,
} from 'lucide-react'

const WHATSAPP_URL =
  'https://wa.me/573025305818?text=Hola%20CSH%20Tech%20Solution,%20quiero%20conocer%20sus%20soluciones%20tecnol%C3%B3gicas.'

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

  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <SiteHeader />

      <section
        id="inicio"
        className="hero-section mx-auto grid max-w-7xl items-center gap-10 px-6 pb-14 pt-14 lg:grid-cols-[0.9fr_1.1fr] lg:px-10 lg:pb-20 lg:pt-20"
      >
        <div className="relative z-10">
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

            <a
              className="text-link"
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Contáctanos
              <ArrowUpRight size={15} />
            </a>
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

                  <div className="license-logo">
                    <img src={license.image} alt={license.title} />
                  </div>

                  <span className="license-category">{license.category}</span>

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
                  className={index === licenseIndex ? 'selected' : ''}
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
              <div className="eyebrow">Una empresa, múltiples soluciones</div>
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

                <a
                  href={href}
                  target={href === WHATSAPP_URL ? '_blank' : undefined}
                  rel={
                    href === WHATSAPP_URL
                      ? 'noopener noreferrer'
                      : undefined
                  }
                >
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
          <div className="eyebrow justify-center">Una frase que nos define</div>

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

          <a
            className="button-primary mt-8"
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Habla con nosotros
            <ArrowUpRight size={17} />
          </a>
        </div>
      </section>

      <section
        id="nosotros"
        className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:px-10 lg:py-28"
      >
        <div>
          <div className="eyebrow">Conoce CSH Tech Solutions</div>

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

          <a
            className="mt-7 inline-flex items-center gap-1 text-sm font-bold text-primary transition-colors hover:text-accent"
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Conoce más sobre nosotros
            <ArrowUpRight size={15} />
          </a>
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
              Atendemos clientes de manera presencial y remota desde Bello,
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

                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-primary mt-6"
                >
                  Contactarnos
                  <ArrowUpRight size={16} />
                </a>
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
                <span className="mission-label">Nuestra misión</span>

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
                <span className="mission-label">Nuestra visión</span>

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

      <footer className="site-footer">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="footer-main">
            <div className="footer-brand">
              <a href="#inicio">
                <img
                  src="/logo.png"
                  alt="CSH Tech Solution"
                  className="h-14 w-auto object-contain"
                />
              </a>

              <p> Tecnología pensada para hacer crecer tu negocio. </p>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-whatsapp"
              >
                Escríbenos por WhatsApp
                <ArrowUpRight size={15} />
              </a>
            </div>

            <div className="footer-column">
              <span>Navegación</span>
              <a href="#inicio">Inicio</a>
              <a href="#software">Software</a>
              <a href="#hardware">Hardware</a>
              <a href="#ubicacion">Ubicación</a>
            </div>

            <div className="footer-column">
              <span>Contacto</span>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                +57 302 530 5818
              </a>

              <a href="mailto:ventas@cshtechsolution.com">
                ventas@cshtechsolution.com
              </a>

              <p>
                Calle 53 #64-49
                <br />
                Bello, Antioquia
                <br />
                Colombia
              </p>
            </div>
          </div>

          <div className="footer-bottom">
            <span>© 2026 CSH Tech Solution</span>
            <span>Tecnología que impulsa tu negocio.</span>
          </div>
        </div>
      </footer>
    </main>
  )
}
