'use client'

import { Copyright, Mail, MapPin, Phone } from 'lucide-react'
import Link from 'next/link'

const WHATSAPP_NUMBER = '573025305818'

const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  'Hola CSH Tech Solution, necesito información sobre sus productos y servicios.',
)}`

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="footer-main">
          <div className="footer-brand">
            <Link href="/" className="footer-logo-link">
              <img
                src="/logo-white.png"
                alt="CSH Tech Solution"
                className="footer-logo"
              />
            </Link>

            <p className="footer-description">
              Tecnología pensada para hacer crecer tu negocio.
            </p>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contactar por WhatsApp"
              className="footer-whatsapp"
            >
              <svg viewBox="0 0 32 32" className="whatsapp-icon">
                <path
                  fill="currentColor"
                  d="M19.11 17.23c-.28-.14-1.65-.81-1.9-.9-.25-.09-.44-.14-.63.14-.19.28-.72.9-.88 1.08-.16.19-.32.21-.6.07-.28-.14-1.17-.43-2.23-1.38-.82-.73-1.38-1.63-1.54-1.9-.16-.28-.02-.43.12-.57.12-.12.28-.32.42-.49.14-.16.19-.28.28-.46.09-.19.05-.35-.02-.49-.07-.14-.63-1.51-.86-2.07-.23-.54-.46-.47-.63-.48h-.54c-.19 0-.49.07-.74.35-.25.28-.97.95-.97 2.31s.99 2.68 1.13 2.87c.14.19 1.94 2.96 4.7 4.15.66.28 1.17.45 1.57.58.66.21 1.26.18 1.73.11.53-.08 1.65-.67 1.88-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.19-.53-.33z"
                />
                <path
                  fill="currentColor"
                  d="M16.01 3.2c-7.06 0-12.8 5.74-12.8 12.8 0 2.26.59 4.47 1.72 6.41L3.1 28.8l6.56-1.72a12.74 12.74 0 0 0 6.35 1.68h.01c7.06 0 12.8-5.74 12.8-12.8S23.08 3.2 16.01 3.2zm0 23.42h-.01a10.61 10.61 0 0 1-5.41-1.48l-.39-.23-3.89 1.02 1.04-3.79-.25-.4a10.61 10.61 0 1 1 8.91 4.88z"
                />
              </svg>
              <span>WhatsApp</span>
            </a>
          </div>

          <div className="footer-column">
            <span className="footer-title">Navegación</span>
            <Link href="/">Inicio</Link>
            <Link href="/software">Software</Link>
            <Link href="/hardware">Hardware</Link>
          </div>

          <div className="footer-column footer-contact">
            <span className="footer-title">Contacto</span>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-item"
            >
              <Phone size={15} />
              <span>+57 302 530 5818</span>
            </a>

            <a
              href="mailto:csbtechcomercial@gmail.com"
              className="contact-item"
            >
              <Mail size={15} />
              <span>csbtechcomercial@gmail.com</span>
            </a>

            <div className="contact-item">
              <MapPin size={15} />
              <span>
                Bello, Antioquia
                <br />
                Colombia
              </span>
            </div>
          </div>
        </div>

        <div className="footer-legal">
          Las marcas, nombres comerciales, logotipos e imágenes pertenecen a
          sus respectivos propietarios.
        </div>

        <div className="footer-bottom">
          <div className="footer-copyright">
            <Copyright size={13} />
            <span>© 2026 CSH Tech Solution v1.1.3</span>
          </div>
          <span className="footer-slogan">
            Tecnología que impulsa tu negocio.
          </span>
        </div>
      </div>
    </footer>
  )
}