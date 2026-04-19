import { useForm } from '@formspree/react'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  CheckCircle2,
  Code2,
  Globe,
  LayoutTemplate,
  Layers3,
  QrCode,
  ShieldCheck,
  Smartphone,
  Zap,
} from 'lucide-react'

const INSTAGRAM_URL = 'https://www.instagram.com/r2developmentt/'
const WHATSAPP_URL = 'https://wa.me/905317714127'

const navItems = [
  { label: 'Hizmetler', id: 'services' },
  { label: 'Süreç', id: 'process' },
  { label: 'Hakkımızda', id: 'about' },
  { label: 'İletişim', id: 'contact' },
]

const highlights = [
  'Modern ve premium görünüm',
  'Tam mobil uyumlu yapı',
  'Hız odaklı geliştirme',
  'Markaya özel tasarım dili',
]

const expertise = [
  'Kurumsal site',
  'QR menü sistemi',
  'Ürün katalog sistemi',
  'İletişim formları',
  'Özel yönetim paneli',
]

const services = [
  {
    icon: Globe,
    title: 'Kurumsal Web Siteleri',
    description:
      'Markanı profesyonel gösteren, hızlı açılan ve mobil uyumlu modern web siteleri tasarlıyoruz.',
  },
  {
    icon: QrCode,
    title: 'İşletmeye Özel QR Sistemleri',
    description:
      'Restoran, mağaza, menü, katalog ve yönlendirme ihtiyaçlarına özel akıllı QR çözümleri geliştiriyoruz.',
  },
  {
    icon: Smartphone,
    title: 'Mobil Öncelikli Deneyim',
    description:
      'Ziyaretçilerin büyük kısmı telefondan geldiği için her ekran boyutunda kusursuz deneyim sunuyoruz.',
  },
  {
    icon: LayoutTemplate,
    title: 'Özel Arayüz Tasarımı',
    description:
      'Hazır kalıplar yerine markana uygun, dikkat çekici ve güven veren arayüzler hazırlıyoruz.',
  },
  {
    icon: Code2,
    title: 'Özel Geliştirme',
    description:
      'İhtiyaca göre panel, form akışı, ürün yönetimi ve etkileşimli bileşenler geliştiriyoruz.',
  },
  {
    icon: ShieldCheck,
    title: 'Performans ve Güven',
    description:
      'Hızlı yüklenen, düzenli yapılandırılmış ve ölçeklenebilir altyapılarla uzun vadeli çözüm sunuyoruz.',
  },
]

const processSteps = [
  {
    step: '01',
    title: 'İhtiyacı Anlıyoruz',
    text: 'Markanı, hedef kitleni ve sana uygun dijital yapıyı netleştiriyoruz.',
  },
  {
    step: '02',
    title: 'Tasarımı Kuruyoruz',
    text: 'Etkileyici, sade ve güven veren arayüz yapısını markana göre şekillendiriyoruz.',
  },
  {
    step: '03',
    title: 'Geliştirip Yayınlıyoruz',
    text: 'İsteğini hızlı, düzenli ve kullanıma hazır şekilde teslim ediyoruz.',
  },
]

const stats = [
  { value: 'Hızlı', label: 'teslim süreci' },
  { value: '%100', label: 'mobil uyum' },
  { value: 'Özel', label: 'tasarım yaklaşımı' },
  { value: '7/24', label: 'iletişim odağı' },
]

const qualityPoints = [
  {
    title: 'Net marka dili',
    text: 'Renk, yazı, boşluk ve arayüz düzeni markana özel kurgulanır.',
  },
  {
    title: 'Temiz kullanıcı deneyimi',
    text: 'Ziyaretçi aradığı bilgiye hızlı ulaşır; site karışık değil, yönlendirici olur.',
  },
  {
    title: 'Profesyonel teslim',
    text: 'Gereksiz karmaşa olmadan, düzenli ve kullanıma hazır yapı hazırlanır.',
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
}

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

function InstagramIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
      <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" />
    </svg>
  )
}

function WhatsAppIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path
        d="M16 4C9.38 4 4 9.18 4 15.56c0 2.2.65 4.25 1.77 5.99L4.65 28 11 26.38c1.62.78 3.46 1.22 5 1.22 6.62 0 12-5.18 12-11.56S22.62 4 16 4Z"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.12 10.55c-.28.02-.58.12-.8.36-.45.5-1.15 1.18-1.15 2.85 0 1.68 1.2 3.3 1.37 3.53.17.22 2.36 3.75 5.82 5.1 2.88 1.12 3.47.9 4.1.85.63-.06 2.03-.82 2.32-1.62.28-.8.28-1.5.2-1.64-.08-.15-.3-.23-.63-.4-.33-.17-1.95-.96-2.25-1.07-.3-.11-.53-.17-.75.17-.22.34-.86 1.07-1.05 1.3-.2.22-.39.25-.72.08-.33-.17-1.4-.51-2.66-1.63-.98-.87-1.64-1.94-1.83-2.27-.2-.34-.02-.52.15-.69.15-.15.33-.39.5-.58.17-.2.22-.34.33-.56.11-.23.06-.42-.03-.59-.08-.17-.75-1.83-1.03-2.5-.27-.65-.54-.56-.75-.57-.19-.01-.41-.02-.63 0Z"
        fill="currentColor"
      />
    </svg>
  )
}

function ButtonLink({ href, onClick, children, variant = 'primary' }) {
  return (
    <motion.a
      href={href}
      onClick={onClick}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className={`button ${variant === 'secondary' ? 'button-secondary' : 'button-primary'}`}
    >
      {children}
    </motion.a>
  )
}

export default function App() {
  const [state, handleSubmit] = useForm('xjgjyzgj')

  const scrollToSection = (id) => (event) => {
    event.preventDefault()
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const openExternalLink = (url) => (event) => {
    event.preventDefault()
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="site-shell">
      <div className="site-background">
        <div className="site-gradient" />
        <motion.div className="blob blob-left" animate={{ y: [0, 30, 0], x: [0, 20, 0], scale: [1, 1.12, 1] }} transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }} />
        <motion.div className="blob blob-right" animate={{ y: [0, -25, 0], x: [0, -15, 0], scale: [1, 1.08, 1] }} transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }} />
      </div>

      <motion.header initial={{ opacity: 0, y: -18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: 'easeOut' }} className="site-header">
        <div className="container header-row">
          <a href="#home" onClick={scrollToSection('home')} className="brand-wrap">
            <motion.div whileHover={{ rotate: 8, scale: 1.08 }} transition={{ type: 'spring', stiffness: 260, damping: 16 }} className="brand-badge">
              <img src="/logo.png" alt="r2 development logo" />
            </motion.div>
            <div className="brand-text">
              <p>r2zgar</p>
              <h1>r2 development</h1>
            </div>
          </a>

          <nav className="desktop-nav">
            {navItems.map((item) => (
              <a key={item.id} href={`#${item.id}`} onClick={scrollToSection(item.id)}>
                {item.label}
              </a>
            ))}
          </nav>

          <ButtonLink href="#contact" onClick={scrollToSection('contact')}>
            Teklif Al
          </ButtonLink>
        </div>

        <nav className="mobile-nav container">
          {navItems.map((item) => (
            <a key={item.id} href={`#${item.id}`} onClick={scrollToSection(item.id)} className="mobile-nav-pill">
              {item.label}
            </a>
          ))}
        </nav>
      </motion.header>

      <main>
        <section id="home" className="section home-section container">
          <div className="hero-grid">
            <div>
              <motion.h2 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.05 }} className="hero-title">
                Markanı dijitalde
                <span>güçlü ve premium göster.</span>
              </motion.h2>

              <motion.p initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.12 }} className="hero-description">
                r2 development olarak işletmeler ve kişisel markalar için modern web siteleri,
                işletmeye özel QR sistemleri ve yüksek güven veren dijital deneyimler üretiyoruz.
              </motion.p>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.18 }} className="hero-actions">
                <ButtonLink href="#contact" onClick={scrollToSection('contact')}>
                  Projeni Başlat <ArrowRight className="icon-sm" />
                </ButtonLink>
                <ButtonLink href="#services" onClick={scrollToSection('services')} variant="secondary">
                  Hizmetleri İncele
                </ButtonLink>
              </motion.div>

              <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="highlight-grid">
                {highlights.map((item) => (
                  <motion.div key={item} variants={fadeUp} whileHover={{ x: 6, backgroundColor: 'rgba(54,56,119,0.18)' }} className="highlight-card">
                    <CheckCircle2 className="icon-sm icon-primary" />
                    {item}
                  </motion.div>
                ))}
              </motion.div>
            </div>

            <motion.div initial={{ opacity: 0, scale: 0.96, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.15 }} className="preview-wrap">
              <div className="preview-glow" />
              <motion.div whileHover={{ y: -6 }} transition={{ type: 'spring', stiffness: 170, damping: 18 }} className="preview-panel">
                <motion.div className="scan-line" animate={{ x: ['-100%', '100%'] }} transition={{ duration: 2.8, repeat: Infinity, ease: 'linear' }} />
                <div className="preview-inner">
                  <div className="window-dots">
                    <span />
                    <span />
                    <span />
                  </div>

                  <div className="preview-stack">
                    <div className="feature-card feature-card-primary">
                      <div className="feature-card-head">
                        <div>
                          <p>r2 development</p>
                          <h3>Dijital Çözümler</h3>
                        </div>
                        <motion.div animate={{ rotate: [0, 8, -8, 0], scale: [1, 1.08, 1] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }} className="feature-icon-wrap">
                          <Zap className="icon-md icon-primary" />
                        </motion.div>
                      </div>
                      <p className="feature-copy">
                        Web sitesi, marka görünümü ve akıllı QR sistemlerini tek çatı altında topluyoruz.
                      </p>
                    </div>

                    <div className="mini-grid">
                      {[
                        ['Teslim odaklı', 'Hızlı', 'Sade süreç, temiz sonuç'],
                        ['Deneyim odaklı', 'Modern', 'Premium ve mobil uyumlu tasarım'],
                      ].map(([top, title, text]) => (
                        <motion.div key={title} whileHover={{ y: -5 }} className="mini-card">
                          <p className="mini-top">{top}</p>
                          <p className="mini-title">{title}</p>
                          <p className="mini-copy">{text}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="expertise-strip">
            {expertise.map((item) => (
              <motion.div key={item} variants={fadeUp} className="expertise-pill">
                {item}
              </motion.div>
            ))}
          </motion.div>
        </section>

        <section id="services" className="section container">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.7 }} className="section-heading">
            <p className="section-kicker">Hizmetler</p>
            <h2>İhtiyacına uygun dijital çözümler</h2>
            <p>
              Tasarım, geliştirme ve kullanıcı deneyimini birleştirerek markana özel güçlü bir vitrin kuruyoruz.
            </p>
          </motion.div>

          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} className="services-grid">
            {services.map((service) => {
              const Icon = service.icon
              return (
                <motion.div key={service.title} variants={fadeUp} whileHover={{ y: -6, scale: 1.01 }} transition={{ type: 'spring', stiffness: 220, damping: 18 }} className="service-card">
                  <motion.div whileHover={{ rotate: 8, scale: 1.08 }} transition={{ type: 'spring', stiffness: 260, damping: 16 }} className="service-icon-wrap">
                    <Icon className="icon-md icon-primary" />
                  </motion.div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </motion.div>
              )
            })}
          </motion.div>
        </section>

        <section id="process" className="section container">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.18 }} transition={{ duration: 0.7 }} className="process-shell">
            <div className="section-heading compact-heading">
              <p className="section-kicker">Süreç</p>
              <h2>Temiz iletişim, net sonuç.</h2>
            </div>

            <div className="process-grid">
              {processSteps.map((item) => (
                <motion.div key={item.step} whileHover={{ y: -5, scale: 1.01 }} transition={{ type: 'spring', stiffness: 220, damping: 18 }} className="process-card">
                  <div className="process-step">{item.step}</div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        <section id="about" className="section container">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.7 }}>
            <div className="about-grid">
              <div className="about-card about-main-card">
                <p className="section-kicker">Hakkımızda</p>
                <h2>Dijital görünümünü sıradanlıktan çıkarıyoruz.</h2>
                <p>
                  r2 development, markaların dijitalde daha güçlü görünmesi için tasarım ve geliştirmeyi birlikte ele alır. Amacımız sadece bir site yayınlamak değil; güven veren, hızlı çalışan ve müşteriye profesyonel hissettiren bir deneyim oluşturmaktır.
                </p>
              </div>

              <div className="stats-grid">
                {stats.map((stat) => (
                  <motion.div key={stat.label} whileHover={{ y: -5, scale: 1.01 }} transition={{ type: 'spring', stiffness: 220, damping: 18 }} className="stat-card">
                    <div className="stat-value">{stat.value}</div>
                    <div className="stat-label">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="quality-grid">
              {qualityPoints.map((item) => (
                <motion.div key={item.title} whileHover={{ y: -5, scale: 1.01 }} transition={{ type: 'spring', stiffness: 220, damping: 18 }} className="quality-card">
                  <div className="quality-icon-wrap">
                    <Layers3 className="icon-md icon-primary" />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        <section id="contact" className="section container contact-section">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.18 }} transition={{ duration: 0.7 }} className="contact-shell">
            <motion.div className="contact-top-line" animate={{ opacity: [0.35, 1, 0.35] }} transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }} />
            <motion.div className="contact-blob" animate={{ scale: [1, 1.16, 1], opacity: [0.35, 0.75, 0.35] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }} />

            <div className="contact-grid">
              {state.succeeded ? (
                <div className="contact-form-card">
                  <div className="contact-head">
                    <p className="contact-kicker">r2 development</p>
                    <h2>Mesajın Gönderildi</h2>
                    <p>
                      Talebin bize ulaştı. En kısa sürede sana dönüş yapacağız.
                    </p>
                  </div>

                  <div style={{ marginTop: '2rem' }}>
                    <ButtonLink href="#home" onClick={scrollToSection('home')}>
                      Ana Sayfaya Dön
                    </ButtonLink>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form-card">
                  <input type="hidden" name="_subject" value="r2 development iletişim formu" />
                  <input type="hidden" name="_captcha" value="false" />

                  <div className="contact-head">
                    <p className="contact-kicker">r2 development</p>
                    <h2>İletişime Geç</h2>
                    <p>
                      Projeni, istediğin sistemi veya fikrini gönder; sana en uygun dijital çözümü birlikte planlayalım.
                    </p>
                  </div>

                  <div className="form-two-col">
                    <label>
                      <span>Adınız</span>
                      <input type="text" name="name" required placeholder="Adınızı yazın" />
                    </label>

                    <label>
                      <span>E-posta</span>
                      <input type="email" name="email" required placeholder="E-posta adresiniz" />
                    </label>
                  </div>

                  <label className="textarea-label">
                    <span>Mesajınız</span>
                    <textarea rows={5} name="message" required placeholder="Projenizden kısaca bahsedin" />
                  </label>

                  <motion.button type="submit" whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.98 }} className="submit-button" disabled={state.submitting}>
                    {state.submitting ? 'GÖNDERİLİYOR' : 'GÖNDER'}
                    <ArrowRight className="h-4 w-4" />
                  </motion.button>
                </form>
              )}

              <div className="social-card">
                <div>
                  <p className="contact-kicker social-kicker">Sosyal iletişim</p>
                  <h3>Hızlı ulaşım için buradayız.</h3>
                  <p className="social-description">
                    Teklif almak, proje detaylarını konuşmak veya örnek çalışma istemek için Instagram ya da WhatsApp üzerinden ulaşabilirsin.
                  </p>
                </div>

                <div className="social-links">
                  <motion.a href={INSTAGRAM_URL} onClick={openExternalLink(INSTAGRAM_URL)} target="_blank" rel="noopener noreferrer" whileHover={{ x: 4, scale: 1.01 }} whileTap={{ scale: 0.98 }} className="social-link">
                    <span className="social-link-left">
                      <span className="social-icon-box">
                        <InstagramIcon className="icon-md icon-primary-light" />
                      </span>
                      Instagram
                    </span>
                    <ArrowRight className="icon-sm social-arrow" />
                  </motion.a>

                  <motion.a href={WHATSAPP_URL} onClick={openExternalLink(WHATSAPP_URL)} target="_blank" rel="noopener noreferrer" whileHover={{ x: 4, scale: 1.01 }} whileTap={{ scale: 0.98 }} className="social-link">
                    <span className="social-link-left">
                      <span className="social-icon-box">
                        <WhatsAppIcon className="icon-md icon-primary-light" />
                      </span>
                      WhatsApp
                    </span>
                    <ArrowRight className="icon-sm social-arrow" />
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">© 2026 r2 development.</div>
      </footer>
    </div>
  )
}
