
'use client'

import './hardware.css'
import { useEffect, useMemo, useState } from 'react'
import { ArrowUpRight, ChevronRight, Cpu, Laptop, Monitor, MousePointer2, Network, Router, Search, Server, ShieldCheck, Smartphone, X } from 'lucide-react'

type Category = {
  id: string
  number: string
  title: string
  description: string
  icon: typeof Monitor
  brands: string[]
}

type BrandInfo = {
  name: string
  category: string
  description: string
  applications: string[]
  image: string
}

const categories: Category[] = [
  {
    id: 'desktop',
    number: '01',
    title: 'Equipos de escritorio',
    description: 'Equipos profesionales para oficinas, estaciones administrativas, productividad y trabajo especializado.',
    icon: Monitor,
    brands: ['Dell', 'HP', 'Lenovo', 'ASUS', 'Acer', 'Apple'],
  },
  {
    id: 'laptop',
    number: '02',
    title: 'Laptop / Portátiles',
    description: 'Computadores portátiles para trabajo, movilidad, productividad y diferentes perfiles profesionales.',
    icon: Laptop,
    brands: ['Dell', 'HP', 'Lenovo', 'ASUS', 'Acer', 'Apple'],
  },
  {
    id: 'servers',
    number: '03',
    title: 'Servidores',
    description: 'Infraestructura de cómputo para almacenamiento, virtualización, aplicaciones y servicios empresariales.',
    icon: Server,
    brands: ['Dell', 'Lenovo', 'HPE'],
  },
  {
    id: 'infrastructure',
    number: '04',
    title: 'Infraestructura',
    description: 'Equipamiento para redes, conectividad, seguridad, administración de infraestructura y comunicaciones.',
    icon: Network,
    brands: ['HPE Aruba', 'Fortinet', 'TP-Link', 'Cisco'],
  },
  {
    id: 'other',
    number: '05',
    title: 'Otros dispositivos',
    description: 'Tecnología complementaria para comunicación, impresión, videovigilancia, movilidad y diferentes necesidades empresariales.',
    icon: Smartphone,
    brands: ['Impresoras', 'Hikvision', 'Xiaomi', 'Motorola', 'Apple'],
  },
  {
    id: 'peripherals',
    number: '06',
    title: 'Periféricos',
    description: 'Accesorios y dispositivos complementarios para mejorar estaciones de trabajo, conectividad y productividad.',
    icon: MousePointer2,
    brands: ['Logitech', 'Kingston', 'Genius', 'TP-Link'],
  },
]

const brandDescriptions: Record<string, string> = {
  Dell: 'Portafolio de equipos empresariales, estaciones de trabajo, computadores portátiles y soluciones de infraestructura orientadas a organizaciones y profesionales.',
  HP: 'Tecnología para productividad empresarial con equipos de escritorio, portátiles, estaciones de trabajo y dispositivos diseñados para diferentes entornos.',
  Lenovo: 'Equipamiento tecnológico para empresas y profesionales, con soluciones orientadas a productividad, movilidad, rendimiento e infraestructura.',
  ASUS: 'Equipos de cómputo y dispositivos tecnológicos enfocados en rendimiento, productividad, movilidad y diferentes perfiles de usuario.',
  Acer: 'Computadores portátiles y de escritorio orientados a productividad, educación, trabajo y diferentes escenarios de uso.',
  Apple: 'Ecosistema de equipos y dispositivos enfocado en productividad, creatividad, movilidad y trabajo profesional.',
  HPE: 'Infraestructura empresarial para servidores, almacenamiento, centros de datos y administración de recursos tecnológicos.',
  'HPE Aruba': 'Soluciones de conectividad empresarial para redes inalámbricas, switching, administración y comunicaciones.',
  Fortinet: 'Tecnologías de seguridad de red orientadas a protección de infraestructura, conectividad empresarial y administración del tráfico.',
  'TP-Link': 'Soluciones de conectividad para redes, switching, Wi-Fi y comunicaciones en oficinas y diferentes entornos.',
  Cisco: 'Tecnología de redes y comunicaciones utilizada en infraestructuras empresariales, conectividad y administración de redes.',
  Hikvision: 'Soluciones profesionales de videovigilancia, cámaras IP, NVR y DVR para monitoreo, control y protección de diferentes espacios.',
  Xiaomi: 'Dispositivos tecnológicos orientados a movilidad, comunicación, conectividad y uso complementario.',
  Motorola: 'Dispositivos móviles destinados a comunicación, movilidad y diferentes necesidades de conectividad.',
  Logitech: 'Periféricos para productividad, comunicación y colaboración, incluyendo teclados, mouse, cámaras y accesorios.',
  Kingston: 'Soluciones de memoria y almacenamiento para computadores, estaciones de trabajo y diferentes dispositivos tecnológicos.',
  Impresoras: 'Soluciones de impresión para oficinas, empresas y diferentes entornos profesionales.',
  Genius: 'Periféricos y accesorios tecnológicos para productividad, comunicación y uso diario, incluyendo teclados, mouse, cámaras y dispositivos complementarios.',
}

const brandImages: Record<string, string> = {
  Dell: '/dell-logo.png',
  HP: '/hp.png',
  Lenovo: '/lenovo-logo.png',
  ASUS: '/asus-logo.png',
  Acer: '/acer.png',
  Apple: '/apple-logo.png',
  HPE: '/hpe.png',
  'HPE Aruba': '/hpe.png',
  Fortinet: '/fortinet.png',
  'TP-Link': '/tp-link.png',
  Cisco: '/cisco.png',
  Hikvision: '/hikvision.png',
  Xiaomi: '/xiaomi.png',
  Motorola: '/motorola.png',
  Logitech: '/logitech-logo.png',
  Kingston: '/kingston-logo.png',
  Genius: '/genius-logo.png',
  Impresoras: '/epson.png',
}

const categoryApplications: Record<string, string[]> = {
  desktop: [
    'Estaciones administrativas',
    'Oficinas corporativas',
    'Trabajo profesional',
    'Puestos de productividad',
  ],
  laptop: [
    'Trabajo remoto',
    'Movilidad empresarial',
    'Trabajo profesional',
    'Reuniones y desplazamientos',
  ],
  servers: [
    'Aplicaciones empresariales',
    'Almacenamiento',
    'Virtualización',
    'Infraestructura de TI',
  ],
  infrastructure: [
    'Redes empresariales',
    'Conectividad Wi-Fi',
    'Seguridad de red',
    'Administración de infraestructura',
  ],
  other: [
    'Comunicación',
    'Impresión empresarial',
    'Videovigilancia',
    'Tecnología complementaria',
  ],
  peripherals: [
    'Estaciones de trabajo',
    'Videoconferencias',
    'Almacenamiento',
    'Accesorios tecnológicos',
  ],
}

const productApplications: Record<string, string[]> = {
  Impresoras: [
    'Impresión empresarial',
    'Gestión documental',
    'Oficinas',
    'Productividad',
  ],
  Cámaras: [
    'Videovigilancia',
    'Monitoreo',
    'Seguridad empresarial',
    'Control de espacios',
  ],
  NVR: [
    'Grabación IP',
    'Videovigilancia',
    'Monitoreo centralizado',
    'Almacenamiento de video',
  ],
  DVR: [
    'Grabación CCTV',
    'Videovigilancia',
    'Monitoreo',
    'Seguridad empresarial',
  ],
  Hikvision: [
    'Videovigilancia',
    'Cámaras IP',
    'NVR y DVR',
    'Seguridad empresarial',
  ],
}

function getBrandInfo(brand: string, category: Category): BrandInfo {
  return {
    name: brand,
    category: category.title,
    description:
      brandDescriptions[brand] ||
      'Soluciones tecnológicas para complementar diferentes entornos profesionales y empresariales.',
    applications:
      productApplications[brand] ||
      categoryApplications[category.id] || [
        'Entornos profesionales',
        'Productividad',
        'Infraestructura tecnológica',
      ],
    image:
      brandImages[brand] ||
      '/hardware/products/default.png',
  }
}

function HardwareVisual() {
  return (
    <div className="hardware-visual">
      <div className="hardware-glow" />
      <div className="hardware-orbit hardware-orbit-one" />
      <div className="hardware-orbit hardware-orbit-two" />

      <div className="hardware-device hardware-monitor">
        <div className="device-screen">
          <div className="screen-top">
            <span />
            <span />
            <span />
          </div>

          <div className="screen-content">
            <div className="screen-line large" />
            <div className="screen-line" />
            <div className="screen-line short" />

            <div className="screen-cards">
              <div />
              <div />
              <div />
            </div>
          </div>
        </div>

        <div className="monitor-stand" />
      </div>

      <div className="hardware-device hardware-laptop">
        <div className="laptop-screen">
          <div className="laptop-interface">
            <div />
            <div />
            <div />
          </div>
        </div>

        <div className="laptop-base" />
      </div>

      <div className="hardware-device hardware-server">
        <div className="server-top">
          <span>SERVER</span>
          <i />
        </div>

        <div className="server-slot">
          <span />
          <span />
          <span />
        </div>

        <div className="server-slot">
          <span />
          <span />
          <span />
        </div>

        <div className="server-slot">
          <span />
          <span />
          <span />
        </div>
      </div>

      <div className="hardware-device hardware-network">
        <Router size={24} strokeWidth={1.5} />

        <div className="network-waves">
          <span />
          <span />
          <span />
        </div>
      </div>

      <div className="hardware-floating hardware-floating-one">
        <Cpu size={17} />
        <span>COMPUTE</span>
      </div>

      <div className="hardware-floating hardware-floating-two">
        <ShieldCheck size={17} />
        <span>SECURITY</span>
      </div>
    </div>
  )
}

export default function HardwarePage() {
  const [selectedCategory, setSelectedCategory] = useState('desktop')
  const [selectedBrand, setSelectedBrand] = useState<BrandInfo | null>(null)
  const [catalogOpen, setCatalogOpen] = useState(false)
  const [search, setSearch] = useState('')

  const activeCategory =
    categories.find((category) => category.id === selectedCategory) ??
    categories[0]

  const filteredCategories = useMemo(() => {
    const value = search.trim().toLowerCase()

    if (!value) return categories

    return categories.filter(
      (category) =>
        category.title.toLowerCase().includes(value) ||
        category.description.toLowerCase().includes(value) ||
        category.brands.some((brand) =>
          brand.toLowerCase().includes(value),
        ),
    )
  }, [search])

  const visibleBrands = useMemo(() => {
    const value = search.trim().toLowerCase()

    if (!value) return activeCategory.brands

    return activeCategory.brands.filter((brand) =>
      brand.toLowerCase().includes(value),
    )
  }, [activeCategory, search])

  const selectCategory = (id: string) => {
    setSelectedCategory(id)
    setSelectedBrand(null)
    setSearch('')
    setCatalogOpen(true)
  }

  const closeCatalog = () => {
    setCatalogOpen(false)
    setSelectedBrand(null)
    setSearch('')
  }

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        if (selectedBrand) {
          setSelectedBrand(null)
          return
        }

        if (catalogOpen) {
          closeCatalog()
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [catalogOpen, selectedBrand])

  useEffect(() => {
    document.body.style.overflow =
      catalogOpen || selectedBrand ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [catalogOpen, selectedBrand])

  return (
    <main className="hardware-page">
      <section className="hardware-hero">
        <div className="hardware-hero-inner">
          <div className="hardware-hero-copy">
            <div className="hardware-eyebrow">
              <span className="eyebrow-line" />
              HARDWARE · CSH TECH SOLUTION
            </div>

            <h1>
              Tecnología física
              <br />
              para cada <em>entorno.</em>
            </h1>

            <p>
              Equipos de escritorio, portátiles, servidores,
              infraestructura y dispositivos tecnológicos de marcas
              reconocidas.
            </p>

            <div className="hardware-hero-actions">
              <button
                type="button"
                onClick={() =>
                  document
                    .getElementById('hardware-categories')
                    ?.scrollIntoView({
                      behavior: 'smooth',
                      block: 'start',
                    })
                }
              >
                Explorar hardware
                <ArrowUpRight size={17} />
              </button>

              <span>
                <i />
                Soluciones tecnológicas
              </span>
            </div>
          </div>

          <HardwareVisual />
        </div>
      </section>

      <section
        className="hardware-categories-section"
        id="hardware-categories"
      >
        <div className="hardware-section-heading">
          <div>
            <span className="section-label">01 / CATÁLOGO</span>

            <h2>
              Encuentra la tecnología
              <br />
              que necesitas.
            </h2>
          </div>

          <p>
            Selecciona una categoría para consultar las marcas disponibles
            y conocer el tipo de tecnología que puedes encontrar en
            nuestro portafolio.
          </p>
        </div>

        <div className="hardware-search-wrapper">
          <Search size={19} />

          <input
            type="text"
            placeholder="Buscar categoría o marca..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />

          {search && (
            <button
              type="button"
              onClick={() => setSearch('')}
              aria-label="Limpiar búsqueda"
            >
              <X size={17} />
            </button>
          )}
        </div>

        <div className="hardware-category-grid">
          {filteredCategories.map((category) => {
            const Icon = category.icon

            return (
              <button
                type="button"
                key={category.id}
                className={`hardware-category-card ${selectedCategory === category.id && catalogOpen
                    ? 'selected'
                    : ''
                  }`}
                onClick={() => selectCategory(category.id)}
              >
                <div className="category-card-top">
                  <span>{category.number}</span>

                  <div className="category-icon">
                    <Icon size={23} strokeWidth={1.5} />
                  </div>
                </div>

                <div className="category-card-content">
                  <h3>{category.title}</h3>

                  <p>{category.description}</p>
                </div>

                <div className="category-card-bottom">
                  <span>
                    {category.brands.length > 0
                      ? `${category.brands.length} opciones disponibles`
                      : 'Ver portafolio'}
                  </span>

                  <ChevronRight size={18} />
                </div>
              </button>
            )
          })}
        </div>

        {filteredCategories.length === 0 && (
          <div className="hardware-empty">
            <Search size={26} />

            <h3>No encontramos resultados</h3>

            <p>
              Prueba con otro nombre de categoría o marca.
            </p>
          </div>
        )}
      </section>

      <section className="hardware-overview">
        <div className="hardware-overview-inner">
          <div className="overview-copy">
            <span className="section-label">02 / ECOSISTEMA</span>

            <h2>
              Hardware pensado como
              <br />
              parte de un <em>ecosistema.</em>
            </h2>

            <p>
              Desde una estación de trabajo hasta una infraestructura
              empresarial completa, nuestro portafolio reúne diferentes
              categorías de tecnología para cubrir distintos escenarios.
            </p>
          </div>

          <div className="overview-map">
            <div className="overview-node node-center">
              <Cpu size={23} />
              <span>CSH</span>
            </div>

            <div className="overview-line line-one" />
            <div className="overview-line line-two" />
            <div className="overview-line line-three" />
            <div className="overview-line line-four" />

            <div className="overview-node node-one">
              <Monitor size={19} />
              <span>Equipos</span>
            </div>

            <div className="overview-node node-two">
              <Server size={19} />
              <span>Servidores</span>
            </div>

            <div className="overview-node node-three">
              <Network size={19} />
              <span>Redes</span>
            </div>

            <div className="overview-node node-four">
              <Laptop size={19} />
              <span>Movilidad</span>
            </div>
          </div>
        </div>
      </section>

      {catalogOpen && (
        <div
          className="hardware-catalog-backdrop"
          onClick={closeCatalog}
        >
          <div
            className="hardware-catalog-modal"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="hardware-catalog-header">
              <div>
                <span className="catalog-overline">
                  {activeCategory.number} / CATÁLOGO
                </span>

                <h2>{activeCategory.title}</h2>

                <p>{activeCategory.description}</p>
              </div>

              <button
                type="button"
                className="hardware-catalog-close"
                onClick={closeCatalog}
                aria-label="Cerrar catálogo"
              >
                <X size={20} />
              </button>
            </div>

            <div className="hardware-catalog-toolbar">
              <div className="catalog-count">
                <span>PORTAFOLIO</span>

                <strong>
                  {activeCategory.brands.length
                    .toString()
                    .padStart(2, '0')}
                </strong>

                <small>opciones</small>
              </div>

              <div className="catalog-mini-search">
                <Search size={16} />

                <input
                  type="text"
                  placeholder="Buscar dentro de esta categoría..."
                  value={search}
                  onChange={(event) =>
                    setSearch(event.target.value)
                  }
                />
              </div>
            </div>

            {visibleBrands.length > 0 ? (
              <div className="hardware-catalog-grid">
                {visibleBrands.map((brand, index) => {
                  const product = getBrandInfo(brand, activeCategory)

                  return (
                    <button
                      type="button"
                      className="hardware-catalog-card"
                      key={brand}
                      onClick={() => setSelectedBrand(product)}
                    >
                      <div className="catalog-card-number">
                        {String(index + 1).padStart(2, '0')}
                      </div>


                      <div className="catalog-product-image">
                        <img
                          className={product.name === 'Apple' ? 'catalog-product-logo apple-logo' : 'catalog-product-logo'}
                          src={product.image}
                          alt={product.name}
                          loading="lazy"
                        />
                      </div>



                      <div className="catalog-card-content">
                        <span>{activeCategory.title}</span>

                        <h3>{brand}</h3>

                        <p>
                          {brandDescriptions[brand] ||
                            'Soluciones tecnológicas para diferentes entornos profesionales.'}
                        </p>
                      </div>

                      <div className="catalog-card-action">
                        <span>Ver información</span>
                        <ArrowUpRight size={17} />
                      </div>
                    </button>
                  )
                })}
              </div>
            ) : (
              <div className="catalog-empty">
                <Search size={28} />

                <h3>Opción no encontrada</h3>

                <p>
                  Prueba con otro término para consultar el
                  portafolio disponible.
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      {selectedBrand && (
        <div
          className="hardware-brand-detail-backdrop"
          onClick={() => setSelectedBrand(null)}
        >
          <div
            className="hardware-brand-detail"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="hardware-modal-close"
              onClick={() => setSelectedBrand(null)}
              aria-label="Cerrar"
            >
              <X size={20} />
            </button>

            <div className="hardware-detail-top">
              <div className="hardware-detail-image">
                <img
                  src={selectedBrand.image}
                  alt={selectedBrand.name}
                />
              </div>

              <div>
                <span>{selectedBrand.category}</span>

                <h2>{selectedBrand.name}</h2>
              </div>
            </div>

            <div className="hardware-detail-content">
              <div className="hardware-detail-description">
                <span className="section-label">
                  INFORMACIÓN
                </span>

                <p>{selectedBrand.description}</p>
              </div>

              <div className="hardware-detail-applications">
                <span className="section-label">
                  APLICACIONES
                </span>

                <div className="hardware-detail-list">
                  {selectedBrand.applications.map(
                    (application) => (
                      <div key={application}>
                        <span />
                        {application}
                      </div>
                    ),
                  )}
                </div>
              </div>
            </div>

            <div className="hardware-detail-footer">
              <span>CSH Tech Solution · Hardware</span>

              <button
                type="button"
                onClick={() => setSelectedBrand(null)}
              >
                Volver al catálogo
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}