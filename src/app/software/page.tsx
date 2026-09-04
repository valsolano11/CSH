'use client'

import { useEffect, useMemo, useState } from 'react'
import {
  ArrowUpRight,
  Check,
  ChevronRight,
  Cloud,
  FileKey,
  Laptop,
  Search,
  ShieldCheck,
  X,
  Zap,
} from 'lucide-react'

import SiteHeader from '../components/Header'

const WHATSAPP_BASE =
  'https://wa.me/573025305818?text=Hola%20CSH%20Tech%20Solution,%20quiero%20informacion%20sobre%20sus%20soluciones%20de%20software.'

type SoftwareProduct = {
  id: string
  brand: string
  title: string
  category: string
  description: string
  longDescription: string
  icon: 'microsoft' | 'kaspersky' | 'sophos' | 'fortinet' | 'windows'
  modalities: string[]
  features: string[]
  idealFor: string
}

const products: SoftwareProduct[] = [
  {
    id: 'microsoft',
    brand: 'Microsoft',
    title: 'Soluciones Microsoft',
    category: 'Productividad',
    description:
      'Licenciamiento Microsoft para empresas, profesionales y diferentes necesidades tecnológicas.',
    longDescription:
      'Encuentra alternativas de licenciamiento Microsoft de acuerdo con el tipo de uso, equipo y necesidades de tu empresa. Contamos con diferentes modalidades para que puedas elegir la opción que mejor se adapte a tu operación.',
    icon: 'microsoft',
    modalities: [
      'CSP NCE · Suscripción anual',
      'ESD · Licencia digital',
      'OEM · Licencia para equipo',
      'Vitalicia / Perpetua',
    ],
    features: [
      'Licenciamiento oficial',
      'Diferentes modalidades de adquisición',
      'Opciones para empresas y profesionales',
      'Asesoría para elegir la licencia adecuada',
    ],
    idealFor:
      'Empresas, profesionales y usuarios que necesitan soluciones Microsoft con una modalidad de licenciamiento acorde a su operación.',
  },
  {
    id: 'kaspersky',
    brand: 'Kaspersky',
    title: 'Kaspersky',
    category: 'Ciberseguridad',
    description:
      'Soluciones de seguridad para proteger equipos y entornos empresariales.',
    longDescription:
      'Protege la información y los equipos de tu organización mediante soluciones de seguridad Kaspersky. Consulta con nuestro equipo las opciones disponibles y encuentra la alternativa de licenciamiento que mejor se ajuste a tus necesidades.',
    icon: 'kaspersky',
    modalities: ['CSP NCE'],
    features: [
      'Protección de equipos',
      'Enfoque empresarial',
      'Licenciamiento mediante CSP NCE',
      'Asesoría especializada',
    ],
    idealFor:
      'Empresas que buscan fortalecer la seguridad de sus equipos y contar con una solución de protección adecuada para su operación.',
  },
  {
    id: 'sophos',
    brand: 'Sophos',
    title: 'Sophos',
    category: 'Ciberseguridad',
    description:
      'Soluciones de ciberseguridad orientadas a la protección de organizaciones.',
    longDescription:
      'Sophos ofrece soluciones enfocadas en seguridad empresarial. En CSH Tech Solution puedes consultar las opciones disponibles mediante CSP NCE y recibir orientación para seleccionar la solución adecuada para tu organización.',
    icon: 'sophos',
    modalities: ['CSP NCE'],
    features: [
      'Seguridad empresarial',
      'Protección tecnológica',
      'Licenciamiento CSP NCE',
      'Acompañamiento especializado',
    ],
    idealFor:
      'Organizaciones que requieren soluciones de seguridad para proteger sus equipos e infraestructura tecnológica.',
  },
  {
    id: 'fortinet',
    brand: 'Fortinet',
    title: 'Fortinet',
    category: 'Redes y seguridad',
    description:
      'Soluciones Fortinet para seguridad, conectividad e infraestructura empresarial.',
    longDescription:
      'Fortinet ofrece tecnologías orientadas a la seguridad de redes y la infraestructura empresarial. Consulta con nuestro equipo las opciones de licenciamiento CSP NCE disponibles para tu organización.',
    icon: 'fortinet',
    modalities: ['CSP NCE'],
    features: [
      'Seguridad de redes',
      'Protección de infraestructura',
      'Soluciones empresariales',
      'Licenciamiento CSP NCE',
    ],
    idealFor:
      'Empresas que necesitan fortalecer la seguridad de su infraestructura y sus redes.',
  },
  {
    id: 'windows',
    brand: 'Windows',
    title: 'Sistemas Windows',
    category: 'Sistemas operativos',
    description:
      'Sistemas operativos Windows con diferentes alternativas de licenciamiento.',
    longDescription:
      'Adquiere soluciones Windows de acuerdo con las características de tus equipos y la forma en que tu empresa administra sus licencias. Contamos con alternativas de licenciamiento perpetuo y CSP NCE.',
    icon: 'windows',
    modalities: ['Perpetuo', 'CSP NCE'],
    features: [
      'Sistema operativo Windows',
      'Alternativas de licenciamiento',
      'Opciones para equipos profesionales',
      'Orientación para seleccionar la modalidad',
    ],
    idealFor:
      'Personas, profesionales y empresas que necesitan adquirir o regularizar licencias de Windows.',
  },
]

const categories = [
  'Todos',
  'Productividad',
  'Ciberseguridad',
  'Redes y seguridad',
  'Sistemas operativos',
]

function ProductIcon({
  type,
  large = false,
}: {
  type: SoftwareProduct['icon']
  large?: boolean
}) {
  const size = large ? 34 : 22

  if (type === 'microsoft') {
    return (
      <span
        className={`product-letter ${large ? 'product-letter-large' : ''
          }`}
      >
        M
      </span>
    )
  }

  if (type === 'windows') {
    return (
      <span
        className={`product-letter ${large ? 'product-letter-large' : ''
          }`}
      >
        W
      </span>
    )
  }

  if (type === 'kaspersky' || type === 'sophos') {
    return <ShieldCheck size={size} strokeWidth={1.8} />
  }

  return <Zap size={size} strokeWidth={1.8} />
}

export default function SoftwarePage() {
  const [selectedProduct, setSelectedProduct] =
    useState<SoftwareProduct | null>(null)
  const [category, setCategory] = useState('Todos')
  const [search, setSearch] = useState('')

  const filteredProducts = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase()

    return products.filter((product) => {
      const matchesCategory =
        category === 'Todos' || product.category === category

      if (!normalizedSearch) {
        return matchesCategory
      }

      const searchableText = [
        product.brand,
        product.title,
        product.category,
        product.description,
        product.longDescription,
        ...product.modalities,
        ...product.features,
      ]
        .join(' ')
        .toLowerCase()

      return (
        matchesCategory &&
        searchableText.includes(normalizedSearch)
      )
    })
  }, [category, search])

  useEffect(() => {
    if (!selectedProduct) {
      document.body.style.overflow = ''
      return
    }

    document.body.style.overflow = 'hidden'

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedProduct(null)
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [selectedProduct])

  const openProduct = (product: SoftwareProduct) => {
    setSelectedProduct(product)
  }

  const closeProduct = () => {
    setSelectedProduct(null)
  }

  const createWhatsAppUrl = () => {
    if (!selectedProduct) {
      return WHATSAPP_BASE
    }

    const message = `Hola CSH Tech Solution, quiero información sobre ${selectedProduct.title}.`

    return `https://wa.me/573025305818?text=${encodeURIComponent(
      message,
    )}`
  }

  return (
    <main className="software-page">
      <SiteHeader />

      <section className="software-hero">
        <div className="software-hero-grid">
          <div className="software-hero-content">
            <div className="software-kicker">
              <span />
              CATÁLOGO DE SOFTWARE
            </div>

            <h1>
              Tecnología que
              <strong> trabaja contigo.</strong>
            </h1>

            <p>
              Explora nuestras soluciones de software y encuentra la
              modalidad de licenciamiento adecuada para tu empresa, tus
              equipos y tus necesidades.
            </p>

            <div className="software-hero-actions">
              <a
                href="#catalogo"
                className="software-primary-button"
              >
                Explorar soluciones
                <ChevronRight size={17} />
              </a>

              <a
                href={WHATSAPP_BASE}
                target="_blank"
                rel="noopener noreferrer"
                className="software-secondary-link"
              >
                Necesito asesoría
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>

          <div className="software-hero-visual">
            <div className="hero-orbit orbit-one" />
            <div className="hero-orbit orbit-two" />
            <div className="hero-orbit orbit-three" />

            <div className="hero-floating-card hero-floating-top">
              <ShieldCheck size={18} />

              <div>
                <strong>Licenciamiento</strong>
                <span>Oficial y confiable</span>
              </div>
            </div>

            <div className="hero-main-card">
              <div className="hero-card-top">
                <span>CSH</span>
                <span>SOFTWARE</span>
              </div>

              <div className="hero-card-icon">
                <FileKey size={48} strokeWidth={1.3} />
              </div>

              <span className="hero-card-label">
                SOLUCIONES DIGITALES
              </span>

              <h2>
                El software
                <br />
                correcto.
              </h2>

              <div className="hero-card-lines">
                <span />
                <span />
                <span />
              </div>

              <div className="hero-card-bottom">
                <span>Licencias</span>
                <span>Seguridad</span>
                <span>Sistemas</span>
              </div>
            </div>

            <div className="hero-floating-card hero-floating-bottom">
              <Check size={17} />

              <div>
                <strong>Asesoría</strong>
                <span>Te ayudamos a elegir</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="catalogo" className="software-catalog">
        <div className="catalog-top">
          <div>
            <span className="section-label">
              NUESTRO CATÁLOGO
            </span>

            <h2>
              Encuentra la solución
              <br />
              <span>que necesitas.</span>
            </h2>
          </div>

          <p>
            Conoce nuestras marcas y modalidades de licenciamiento.
            Selecciona una solución para consultar toda la información
            disponible.
          </p>
        </div>

        <div className="catalog-toolbar">
          <div className="catalog-search-wrapper">
            <div className="catalog-search">
              <div className="catalog-search-icon">
                <Search size={18} />
              </div>

              <div className="catalog-search-input">
                <span>Buscar solución</span>

                <input
                  type="text"
                  placeholder="Microsoft, Kaspersky, Sophos..."
                  value={search}
                  onChange={(event) =>
                    setSearch(event.target.value)
                  }
                  aria-label="Buscar software"
                />
              </div>

              {search && (
                <button
                  type="button"
                  className="catalog-search-clear"
                  onClick={() => setSearch('')}
                  aria-label="Limpiar búsqueda"
                >
                  <X size={16} />
                </button>
              )}

              {!search && (
                <div className="catalog-search-shortcut">
                  <span>⌘</span>
                  <span>K</span>
                </div>
              )}
            </div>

            {search && (
              <div className="search-result-label">
                {filteredProducts.length}{' '}
                {filteredProducts.length === 1
                  ? 'resultado encontrado'
                  : 'resultados encontrados'}
              </div>
            )}
          </div>

          <div className="category-list">
            {categories.map((item) => (
              <button
                key={item}
                type="button"
                className={category === item ? 'selected' : ''}
                onClick={() => setCategory(item)}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="products-layout">
          <div className="product-results">
            {filteredProducts.map((product, index) => (
              <article
                key={product.id}
                className="product-card"
                onClick={() => openProduct(product)}
              >
                <div className="product-card-number">
                  {String(index + 1).padStart(2, '0')}
                </div>

                <div className="product-card-top">
                  <div className="product-brand-mark">
                    <ProductIcon type={product.icon} />
                  </div>

                  <span className="product-category">
                    {product.category}
                  </span>
                </div>

                <div className="product-card-body">
                  <span className="product-brand-name">
                    {product.brand}
                  </span>

                  <h3>{product.title}</h3>

                  <p>{product.description}</p>
                </div>

                <div className="product-card-modalities">
                  {product.modalities.map((modality) => (
                    <span key={modality}>{modality}</span>
                  ))}
                </div>

                <div className="product-card-footer">
                  <span>Ver información</span>

                  <div className="product-card-arrow">
                    <ArrowUpRight size={16} />
                  </div>
                </div>
              </article>
            ))}

            {filteredProducts.length === 0 && (
              <div className="empty-search">
                <div className="empty-search-icon">
                  <Search size={25} />
                </div>

                <h3>No encontramos esa solución</h3>

                <p>
                  Prueba buscando por marca, categoría o modalidad de
                  licenciamiento.
                </p>

                <button
                  type="button"
                  onClick={() => {
                    setSearch('')
                    setCategory('Todos')
                  }}
                >
                  Ver todas las soluciones
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="software-advice">
        <div className="advice-inner">
          <div className="advice-icon">
            <Cloud size={28} />
          </div>

          <div>
            <span className="section-label">¿NECESITAS AYUDA?</span>

            <h2>
              No tienes que saber
              <br />
              <span>qué licencia necesitas.</span>
            </h2>
          </div>

          <div className="advice-text">
            <p>
              Cuéntanos qué necesitas, qué equipos utilizas y cómo
              trabaja tu empresa. Te ayudamos a identificar la solución y
              modalidad que mejor se adapte a tu caso.
            </p>

            <a
              href={WHATSAPP_BASE}
              target="_blank"
              rel="noopener noreferrer"
              className="advice-button"
            >
              Hablar con un asesor
              <ArrowUpRight size={17} />
            </a>
          </div>
        </div>
      </section>

      <footer className="software-footer">
        <div className="software-footer-inner">
          <div>
            <a href="">
              <img
                src="/logo.png"
                alt="CSH Tech Solution"
                className="software-footer-logo"
              />
            </a>

            <p>Tecnología que impulsa tu negocio.</p>
          </div>

          <div className="software-footer-links">
            <span>Navegación</span>

            <a href="/software">Software</a>
            <a href="/hardware">Hardware</a>
            <a href="/ubicacion">Ubicación</a>
          </div>

          <div className="software-footer-contact">
            <span>Contacto</span>

            <a
              href={WHATSAPP_BASE}
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </a>

            <p>
              Calle 53 #64-49
              <br />
              Bello, Antioquia
            </p>
          </div>
        </div>

        <div className="software-footer-bottom">
          <span>© 2026 CSH Tech Solution</span>

          <span>Todos los derechos reservados.</span>
        </div>
      </footer>

      {selectedProduct && (
        <div
          className="software-modal-overlay"
          onClick={closeProduct}
          role="presentation"
        >
          <div
            className="software-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="software-modal-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="software-modal-close"
              onClick={closeProduct}
              aria-label="Cerrar información"
            >
              <X size={20} />
            </button>

            <div className="software-modal-header">
              <div className="software-modal-brand">
                <ProductIcon
                  type={selectedProduct.icon}
                  large
                />
              </div>

              <div className="software-modal-heading">
                <span>{selectedProduct.brand}</span>

                <h2 id="software-modal-title">
                  {selectedProduct.title}
                </h2>

                <div className="software-modal-category">
                  {selectedProduct.category}
                </div>
              </div>
            </div>

            <div className="software-modal-content">
              <div className="software-modal-description">
                <span className="modal-section-label">
                  SOBRE ESTA SOLUCIÓN
                </span>

                <p>{selectedProduct.longDescription}</p>
              </div>

              <div className="software-modal-grid">
                <div className="software-modal-block">
                  <div className="modal-block-heading">
                    <FileKey size={17} />

                    <span>Modalidades disponibles</span>
                  </div>

                  <div className="modalities-modal-grid">
                    {selectedProduct.modalities.map((modality) => (
                      <div
                        className="modal-modality"
                        key={modality}
                      >
                        <div className="modal-check">
                          <Check size={13} />
                        </div>

                        <span>{modality}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="software-modal-block">
                  <div className="modal-block-heading">
                    <ShieldCheck size={17} />

                    <span>Características</span>
                  </div>

                  <ul className="modal-features">
                    {selectedProduct.features.map((feature) => (
                      <li key={feature}>
                        <Check size={15} />

                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="software-modal-ideal">
                <div className="software-modal-ideal-icon">
                  <Laptop size={20} />
                </div>

                <div>
                  <span>IDEAL PARA</span>

                  <p>{selectedProduct.idealFor}</p>
                </div>
              </div>
            </div>

            <div className="software-modal-footer">
              <div>
                <span>¿Necesitas una cotización?</span>

                <strong>Habla con nuestro equipo.</strong>
              </div>

              <a
                href={createWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="software-modal-button"
              >
                Solicitar información
                <ArrowUpRight size={17} />
              </a>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}