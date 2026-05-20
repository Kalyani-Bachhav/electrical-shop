import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import {
  BadgeCheck,
  Cable,
  Clock,
  Droplet,
  Factory,
  Fan,
  Home,
  Mail,
  MapPin,
  MessageCircle,
  Moon,
  PhoneCall,
  Plug,
  ShieldCheck,
  Star,
  Sun,
  User,
  Wrench,
  Zap,
} from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

const WHATSAPP_NUMBER = '+91 9309801506'
const PHONE_NUMBER = '+91 9860631843'

const heroStats = [
  { label: 'Years Experience', value: '12+' },
  { label: 'Motors Repaired', value: '4,800+' },
  { label: 'Quick Turnaround', value: 'Same-Day' },
]

const services = [
  {
    title: 'Motor Winding',
    description: 'Precision rewinding with high-grade copper and safety checks.',
    icon: Zap,
  },
  {
    title: 'Fan Repair',
    description: 'Balancing, capacitor replacement, and motor servicing.',
    icon: Fan,
  },
  {
    title: 'Water Pump Repair',
    description: 'Leak fixes, impeller service, and pressure restoration.',
    icon: Droplet,
  },
  {
    title: 'Submersible Pump Repair',
    description: 'Deepwell servicing with insulation and performance tests.',
    icon: Plug,
  },
  {
    title: 'Cooler Repair',
    description: 'Motor overhaul, airflow tuning, and electrical checks.',
    icon: Wrench,
  },
  {
    title: 'Electrical Maintenance',
    description: 'Preventive checks, safety audits, and fast fixes.',
    icon: ShieldCheck,
  },
  {
    title: 'House Wiring',
    description: 'New wiring, upgrades, and switchboard servicing.',
    icon: Home,
  },
  {
    title: 'Industrial Motor Repair',
    description: 'Heavy-duty motor diagnosis and rewinding services.',
    icon: Factory,
  },
  {
    title: 'Single & Three Phase Motor Repair',
    description: 'Complete overhauls with testing and calibration.',
    icon: Cable,
  },
]

const galleryItems = [
  { title: 'Motor Repair Photos', tag: 'Motor' },
  { title: 'Fan Repair Photos', tag: 'Fan' },
  { title: 'Water Pump Repair Photos', tag: 'Pump' },
  { title: 'Shop Photos', tag: 'Shop' },
  { title: 'Wiring Work Photos', tag: 'Wiring' },
  { title: 'Industrial Motor Repair', tag: 'Industrial' },
]

const reviews = [
  {
    name: 'Rohit Patil',
    text: 'Very good motor winding service and fast repair work. Highly recommended.',
  },
  {
    name: 'Neha Deshmukh',
    text: 'My water pump was repaired quickly and runs smoothly now.',
  },
  {
    name: 'Ashok Kulkarni',
    text: 'Reliable and honest shop. Fixed my cooler motor the same day.',
  },
  {
    name: 'Sandeep Joshi',
    text: 'Professional technicians with good pricing and quality work.',
  },
  {
    name: 'Anita Rane',
    text: 'Great service for house wiring and switchboard upgrade.',
  },
  {
    name: 'Prakash More',
    text: 'Industrial motor repair was handled perfectly with testing.',
  },
]

const contactDetails = [
  { label: 'Owner Name', value: 'Owner Name', icon: User },
  { label: 'Mobile Number', value: PHONE_NUMBER, icon: PhoneCall },
  { label: 'WhatsApp Number', value: WHATSAPP_NUMBER, icon: MessageCircle },
  { label: 'Alternate Contact', value: '+91 XXXXX XXXXX', icon: PhoneCall },
  { label: 'Shop Address', value: 'Your Shop Address', icon: MapPin },
  { label: 'Email Address', value: 'youremail@example.com', icon: Mail },
  { label: 'Business Timing', value: 'Mon - Sun: 9:00 AM - 8:30 PM', icon: Clock },
]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(false)
  const whatsappMessage = useMemo(
    () =>
      encodeURIComponent(
        'Hello Kailas Electrical Shop, I need electrical repair service.'
      ),
    []
  )

  return (
    <div className={`${darkMode ? 'dark bg-slate-900 text-white' : 'bg-brand-mist text-slate-900'}`}>
      <header className={`sticky top-0 z-50 border-b ${darkMode ? 'border-slate-700 bg-slate-800/80' : 'border-white/70 bg-white/80'} backdrop-blur`}>
        <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 sm:px-10">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-blue text-white shadow-glow">
              <Zap className="h-6 w-6" />
            </div>
            <div>
              <p className="text-lg font-semibold text-brand-midnight">
                Kailas Electrical Shop
              </p>
              <p className="text-xs text-slate-500">
                Electrical Repair & Motor Winding
              </p>
            </div>
          </div>
          <div className="hidden items-center gap-6 text-sm font-medium text-slate-700 lg:flex">
            {[
              'Home',
              'Services',
              'About',
              'Gallery',
              'Reviews',
              'Contact',
            ].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="transition hover:text-brand-blue"
              >
                {item}
              </a>
            ))}
          </div>
          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={`tel:${PHONE_NUMBER.replace(/\s+/g, '')}`}
              className="rounded-full border border-brand-blue/20 px-4 py-2 text-sm font-semibold text-brand-blue transition hover:border-brand-blue/40"
            >
              Call Now
            </a>
            <a
              href={`https://wa.me/91XXXXXXXXXX?text=${whatsappMessage}`}
              className="rounded-full bg-brand-green px-4 py-2 text-sm font-semibold text-white shadow-lg"
            >
              WhatsApp
            </a>
            <button
              type="button"
              onClick={() => setDarkMode(!darkMode)}
              className={`rounded-lg p-2 transition ${darkMode ? 'bg-slate-700 text-yellow-400 hover:bg-slate-600' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
          </div>
          <div className="flex items-center gap-2 lg:hidden">
            <button
              type="button"
              onClick={() => setDarkMode(!darkMode)}
              className={`rounded-lg p-2 transition ${darkMode ? 'bg-slate-700 text-yellow-400 hover:bg-slate-600' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <button
              type="button"
              className="rounded-lg border border-slate-200 p-2 text-slate-700 lg:hidden"
              onClick={() => setMenuOpen((open) => !open)}
              aria-label="Toggle menu"
            >
              <span className="block h-0.5 w-6 bg-slate-700"></span>
              <span className="mt-1.5 block h-0.5 w-6 bg-slate-700"></span>
            </button>
          </div>
        </nav>
        {menuOpen ? (
          <div className={`border-t ${darkMode ? 'border-slate-700 bg-slate-800/95' : 'border-white/60 bg-white/95'} px-6 py-4 text-sm ${darkMode ? 'text-slate-200' : 'text-slate-700'} lg:hidden`}>
            <div className="flex flex-col gap-3">
              {[
                'Home',
                'Services',
                'About',
                'Gallery',
                'Reviews',
                'Contact',
              ].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setMenuOpen(false)}
                  className="transition hover:text-brand-blue"
                >
                  {item}
                </a>
              ))}
              <div className="flex gap-3 pt-3">
                <a
                  href={`tel:${PHONE_NUMBER.replace(/\s+/g, '')}`}
                  className="flex-1 rounded-full border border-brand-blue/20 px-4 py-2 text-center font-semibold text-brand-blue"
                >
                  Call Now
                </a>
                <a
                  href={`https://wa.me/91XXXXXXXXXX?text=${whatsappMessage}`}
                  className="flex-1 rounded-full bg-brand-green px-4 py-2 text-center font-semibold text-white"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        ) : null}
      </header>

      <main>
        <section id="home" className="section-padding relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-6 top-10 h-40 w-40 rounded-full bg-brand-yellow/40 blur-3xl" />
            <div className="absolute right-0 top-16 h-48 w-48 rounded-full bg-brand-red/30 blur-3xl" />
            <div className="absolute bottom-0 left-1/3 h-56 w-56 rounded-full bg-brand-blue/20 blur-3xl" />
          </div>
          <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-2">
            <motion.div initial="hidden" animate="visible" variants={fadeUp}>
              <div className="inline-flex items-center gap-2 rounded-full bg-brand-blue/10 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-brand-blue">
                <BadgeCheck className="h-4 w-4" />
                Trusted Local Electrical Experts
              </div>
              <h1 className="mt-6 text-4xl font-semibold text-brand-midnight sm:text-5xl">
                Kailas Electrical Shop
              </h1>
              <p className="mt-4 text-lg text-slate-600">
                All Types of Electrical Repairing & Motor Winding Services
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={`tel:${PHONE_NUMBER.replace(/\s+/g, '')}`}
                  className="flex items-center gap-2 rounded-full bg-brand-red px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5"
                >
                  <PhoneCall className="h-4 w-4" />
                  Call Now
                </a>
                <a
                  href={`https://wa.me/91XXXXXXXXXX?text=${whatsappMessage}`}
                  className="flex items-center gap-2 rounded-full border border-brand-blue/30 bg-white px-6 py-3 text-sm font-semibold text-brand-blue transition hover:-translate-y-0.5"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp Inquiry
                </a>
              </div>
              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {heroStats.map((stat) => (
                  <div key={stat.label} className="soft-card px-4 py-5">
                    <p className="text-2xl font-semibold text-brand-midnight">
                      {stat.value}
                    </p>
                    <p className="text-xs uppercase tracking-wide text-slate-500">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="relative"
            >
              <div className="soft-card relative overflow-hidden p-6">
                <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-brand-yellow/50 blur-2xl" />
                <div className="flex items-center gap-4 rounded-2xl border border-white/70 bg-white/80 p-5 shadow">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-brand-blue text-white">
                    <Zap className="h-7 w-7" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-brand-midnight">
                      Emergency Electrical Support
                    </p>
                    <p className="text-xs text-slate-500">
                      Fast response for urgent repairs
                    </p>
                  </div>
                </div>
                <div className="mt-6 grid gap-4">
                  <div className="rounded-2xl border border-brand-blue/10 bg-gradient-to-br from-brand-blue/5 via-white to-brand-yellow/10 p-5">
                    <p className="text-xs uppercase tracking-wide text-brand-blue">
                      Service Guarantee
                    </p>
                    <p className="mt-2 text-lg font-semibold text-brand-midnight">
                      Quality Work, Honest Pricing
                    </p>
                    <p className="mt-1 text-sm text-slate-600">
                      Certified technicians with safety-first approach.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-brand-red/10 bg-gradient-to-br from-brand-red/5 via-white to-brand-yellow/10 p-5">
                    <p className="text-xs uppercase tracking-wide text-brand-red">
                      Service Coverage
                    </p>
                    <p className="mt-2 text-lg font-semibold text-brand-midnight">
                      Home, Commercial & Industrial
                    </p>
                    <p className="mt-1 text-sm text-slate-600">
                      Single phase and three phase motor specialists.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="services" className="section-padding">
          <div className="mx-auto w-full max-w-6xl">
            <motion.div initial="hidden" whileInView="visible" variants={fadeUp} viewport={{ once: true }}>
              <h2 className="section-title">Our Electrical Services</h2>
              <p className="section-subtitle">
                Professional repair solutions tailored for homes, shops, and industries.
              </p>
            </motion.div>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => {
                const Icon = service.icon
                return (
                  <motion.div
                    key={service.title}
                    className="soft-card group flex h-full flex-col p-6 transition hover:-translate-y-1"
                    initial="hidden"
                    whileInView="visible"
                    variants={fadeUp}
                    viewport={{ once: true }}
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-5 text-lg font-semibold text-brand-midnight">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-sm text-slate-600">
                      {service.description}
                    </p>
                    <div className="mt-4 rounded-xl bg-gradient-to-r from-brand-blue/10 via-white to-brand-yellow/10 px-4 py-3 text-xs text-slate-500">
                      Repair image placeholder
                    </div>
                    <a
                      href={`tel:${PHONE_NUMBER.replace(/\s+/g, '')}`}
                      className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-brand-blue px-4 py-2 text-sm font-semibold text-white transition group-hover:bg-brand-red"
                    >
                      Contact Now
                      <Zap className="h-4 w-4" />
                    </a>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        <section id="about" className="section-padding">
          <div className="mx-auto grid w-full max-w-6xl gap-10 lg:grid-cols-2">
            <motion.div initial="hidden" whileInView="visible" variants={fadeUp} viewport={{ once: true }}>
              <h2 className="section-title">About Us</h2>
              <p className="section-subtitle">
                Kailas Electrical Shop provides trusted electrical repairing and motor winding services with quality work and customer satisfaction. We repair all types of motors, fans, pumps, coolers, and electrical items with affordable pricing and fast service.
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="soft-card p-5">
                  <p className="text-sm font-semibold text-brand-midnight">
                    Experience Badge
                  </p>
                  <p className="mt-1 text-xs text-slate-500">12+ years of expertise</p>
                </div>
                <div className="soft-card p-5">
                  <p className="text-sm font-semibold text-brand-midnight">
                    Trusted Service
                  </p>
                  <p className="mt-1 text-xs text-slate-500">Warranty-backed repairs</p>
                </div>
              </div>
              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                {[
                  { label: 'Skilled Technicians', value: '6+' },
                  { label: 'Happy Customers', value: '1,200+' },
                  { label: 'Service Areas', value: '15+' },
                ].map((item) => (
                  <div key={item.label} className="soft-card px-4 py-5 text-center">
                    <p className="text-xl font-semibold text-brand-midnight">
                      {item.value}
                    </p>
                    <p className="text-xs uppercase tracking-wide text-slate-500">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" variants={fadeUp} viewport={{ once: true }}>
              <div className="soft-card h-full p-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-red/10 text-brand-red">
                    <ShieldCheck className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-brand-midnight">
                      Safety-First Repairs
                    </p>
                    <p className="text-xs text-slate-500">
                      Testing, insulation checks, and load balancing.
                    </p>
                  </div>
                </div>
                <div className="mt-6 grid gap-4">
                  {[1, 2, 3].map((index) => (
                    <div
                      key={index}
                      className="rounded-2xl border border-brand-blue/10 bg-white/80 p-4"
                    >
                      <p className="text-sm font-semibold text-brand-midnight">
                        Skilled Technician {index}
                      </p>
                      <p className="text-xs text-slate-500">
                        Motor rewinding, testing, and diagnostics specialist.
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="gallery" className="section-padding">
          <div className="mx-auto w-full max-w-6xl">
            <motion.div initial="hidden" whileInView="visible" variants={fadeUp} viewport={{ once: true }}>
              <h2 className="section-title">Repair Gallery</h2>
              <p className="section-subtitle">
                Replace these placeholders with real repair photos and shop visuals.
              </p>
            </motion.div>
            <div className="mt-10 columns-1 gap-6 space-y-6 sm:columns-2 lg:columns-3">
              {galleryItems.map((item, index) => (
                <motion.div
                  key={item.title}
                  className="soft-card break-inside-avoid p-5"
                  initial="hidden"
                  whileInView="visible"
                  variants={fadeUp}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center justify-between text-xs font-semibold text-slate-500">
                    <span>{item.tag}</span>
                    <span>0{index + 1}</span>
                  </div>
                  <div className="mt-4 flex h-40 items-center justify-center rounded-xl border border-dashed border-brand-blue/30 bg-gradient-to-br from-brand-blue/10 via-white to-brand-yellow/10 text-sm text-slate-500">
                    Photo placeholder
                  </div>
                  <p className="mt-3 text-sm font-semibold text-brand-midnight">
                    {item.title}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="reviews" className="section-padding">
          <div className="mx-auto w-full max-w-6xl">
            <motion.div initial="hidden" whileInView="visible" variants={fadeUp} viewport={{ once: true }}>
              <h2 className="section-title">Customer Reviews</h2>
              <p className="section-subtitle">
                Real feedback from satisfied customers across the city.
              </p>
            </motion.div>
            <div className="mt-10">
              <Swiper
                modules={[Pagination, Autoplay]}
                spaceBetween={20}
                slidesPerView={1}
                autoplay={{ delay: 3500, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                breakpoints={{ 640: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
              >
                {reviews.map((review) => (
                  <SwiperSlide key={review.name}>
                    <div className="soft-card h-full p-6">
                      <div className="flex items-center gap-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-yellow/30 text-brand-blue">
                          <User className="h-6 w-6" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-brand-midnight">
                            {review.name}
                          </p>
                          <div className="flex gap-1 text-brand-yellow">
                            {[...Array(5)].map((_, index) => (
                              <Star key={index} className="h-3 w-3 fill-current" />
                            ))}
                          </div>
                        </div>
                      </div>
                      <p className="mt-4 text-sm text-slate-600">{review.text}</p>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </section>

        <section id="contact" className="section-padding">
          <div className="mx-auto w-full max-w-6xl">
            <motion.div initial="hidden" whileInView="visible" variants={fadeUp} viewport={{ once: true }}>
              <h2 className="section-title">Contact & Inquiry</h2>
              <p className="section-subtitle">
                Share your repair requirement and get a quick response.
              </p>
            </motion.div>
            <div className="mt-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="grid gap-4 sm:grid-cols-2">
                {contactDetails.map((item) => {
                  const Icon = item.icon
                  return (
                    <div key={item.label} className="soft-card flex items-start gap-3 p-5">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-blue/10 text-brand-blue">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-wide text-slate-500">
                          {item.label}
                        </p>
                        <p className="text-sm font-semibold text-brand-midnight">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  )
                })}
              </div>
              <div className="soft-card p-6">
                <h3 className="text-lg font-semibold text-brand-midnight">
                  Customer Inquiry Form
                </h3>
                <form className="mt-6 grid gap-4">
                  <input
                    className="rounded-xl border border-slate-200 px-4 py-3 text-sm"
                    placeholder="Full Name"
                    type="text"
                  />
                  <input
                    className="rounded-xl border border-slate-200 px-4 py-3 text-sm"
                    placeholder="Mobile Number"
                    type="tel"
                  />
                  <input
                    className="rounded-xl border border-slate-200 px-4 py-3 text-sm"
                    placeholder="Service Required"
                    type="text"
                  />
                  <textarea
                    className="min-h-[120px] rounded-xl border border-slate-200 px-4 py-3 text-sm"
                    placeholder="Describe the issue"
                  ></textarea>
                  <button
                    type="button"
                    className="rounded-full bg-brand-blue px-6 py-3 text-sm font-semibold text-white"
                  >
                    Submit Inquiry
                  </button>
                </form>
                <div className="mt-6 rounded-2xl border border-dashed border-brand-blue/30 bg-gradient-to-r from-brand-blue/5 via-white to-brand-yellow/10 px-4 py-6 text-center text-sm text-slate-500">
                  Google Maps Placeholder
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/70 bg-white/90">
        <div className="section-padding mx-auto w-full max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-3">
            <div>
              <p className="text-lg font-semibold text-brand-midnight">
                Kailas Electrical Shop
              </p>
              <p className="mt-2 text-sm text-slate-600">
                Professional electrical repair and motor winding services with trusted local support.
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold text-brand-midnight">Contact</p>
              <p className="mt-2 text-sm text-slate-600">{PHONE_NUMBER}</p>
              <p className="text-sm text-slate-600">{WHATSAPP_NUMBER}</p>
              <p className="text-sm text-slate-600">Your Shop Address</p>
            </div>
            <div>
              <p className="text-sm font-semibold text-brand-midnight">Social</p>
              <div className="mt-3 flex gap-3">
                {['Facebook', 'Instagram', 'YouTube'].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-slate-200 px-4 py-2 text-xs text-slate-500"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <p className="mt-8 text-xs text-slate-500">
            Copyright {new Date().getFullYear()} Kailas Electrical Shop. All rights reserved.
          </p>
        </div>
      </footer>

      <a
        href={`https://wa.me/91XXXXXXXXXX?text=${whatsappMessage}`}
        className="fixed bottom-24 right-6 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500 text-white shadow-lg transition hover:scale-105"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
      <a
        href={`tel:${PHONE_NUMBER.replace(/\s+/g, '')}`}
        className="fixed bottom-8 right-6 flex h-12 w-12 items-center justify-center rounded-full bg-brand-red text-white shadow-lg transition hover:scale-105"
        aria-label="Call Kailas Electrical Shop"
      >
        <PhoneCall className="h-6 w-6" />
      </a>
    </div>
  )
}

export default App
