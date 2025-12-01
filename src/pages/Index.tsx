import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Heart, 
  Trees, 
  Calendar, 
  Sparkles,
  Menu,
  X,
  Instagram,
  Facebook
} from "lucide-react";
import rainbowClouds from "@/assets/rainbow-clouds.png";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form handling logic would go here
    console.log("Form submitted:", formData);
    alert("¡Gracias por tu mensaje! Te contactaremos pronto.");
    setFormData({ name: "", email: "", message: "" });
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header con menú fijo */}
      <header className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-sm shadow-sm z-50 border-b border-primary/20">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="font-quicksand font-bold text-xl md:text-2xl text-primary"
            >
              Casa Montessori Manrique
            </motion.div>

            {/* Menú desktop */}
            <div className="hidden md:flex items-center gap-6">
              <button
                onClick={() => scrollToSection("inicio")}
                className="text-foreground hover:text-primary transition-colors font-nunito font-medium"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("nuestro-hogar")}
                className="text-foreground hover:text-primary transition-colors font-nunito font-medium"
              >
                Where We Grow
              </button>
              <button
                onClick={() => scrollToSection("como-funciona")}
                className="text-foreground hover:text-primary transition-colors font-nunito font-medium"
              >
                How We Bloom
              </button>
              <button
                onClick={() => scrollToSection("por-que-elegirnos")}
                className="text-foreground hover:text-primary transition-colors font-nunito font-medium"
              >
                About us
              </button>
              <button
                onClick={() => scrollToSection("contacto")}
                className="text-foreground hover:text-primary transition-colors font-nunito font-medium"
              >
                Let's Connect!
              </button>
              <Button
                onClick={() => scrollToSection("agendar-cita")}
                className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6 shadow-lg hover:shadow-xl transition-all"
              >
                Schedule an appointment
              </Button>
            </div>

            {/* Botón hamburguesa móvil */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-primary"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Menú móvil */}
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="md:hidden mt-4 pb-4 space-y-3"
            >
              <button
                onClick={() => scrollToSection("inicio")}
                className="block w-full text-left px-4 py-2 text-foreground hover:bg-secondary rounded-lg transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("nuestro-hogar")}
                className="block w-full text-left px-4 py-2 text-foreground hover:bg-secondary rounded-lg transition-colors"
              >
                Where We Grow
              </button>
              <button
                onClick={() => scrollToSection("como-funciona")}
                className="block w-full text-left px-4 py-2 text-foreground hover:bg-secondary rounded-lg transition-colors"
              >
                How We Bloom
              </button>
              <button
                onClick={() => scrollToSection("por-que-elegirnos")}
                className="block w-full text-left px-4 py-2 text-foreground hover:bg-secondary rounded-lg transition-colors"
              >
                About us
              </button>
              <button
                onClick={() => scrollToSection("contacto")}
                className="block w-full text-left px-4 py-2 text-foreground hover:bg-secondary rounded-lg transition-colors"
              >
                Let's Connect!
              </button>
              <Button
                onClick={() => scrollToSection("agendar-cita")}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-full"
              >
                Schedule an appointment
              </Button>
            </motion.div>
          )}
        </nav>
      </header>

      {/* Hero Section con Arcoíris */}
      <section
        id="inicio"
        className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
      >
        {/* Arcoíris de fondo */}
        <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
          <img
            src={rainbowClouds}
            alt=""
            className="w-full max-w-4xl h-auto object-contain"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="font-quicksand font-bold text-4xl md:text-6xl lg:text-7xl text-primary mb-6">
              Casa Montessori Manrique
            </h1>
            <p className="font-nunito text-xl md:text-2xl lg:text-3xl text-foreground/80 mb-6">
              A home filled with love, learning, and creativity
            </p>
            <div className="flex items-center justify-center gap-2 text-foreground/70 mb-8">
              <MapPin className="text-primary" size={24} />
              <span className="font-nunito text-lg md:text-xl">
                Newmarket, Ontario, Canadá
              </span>
            </div>
            <Button
              onClick={() => scrollToSection("agendar-cita")}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-6 text-lg shadow-2xl hover:shadow-primary/50 hover:scale-105 transition-all"
            >
              Schedule an appointment
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Where We Grow */}
      <section id="nuestro-hogar" className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="font-quicksand font-bold text-3xl md:text-4xl lg:text-5xl text-primary mb-6">
                Where We Grow
              </h2>
              <p className="font-nunito text-lg md:text-xl text-foreground/80 leading-relaxed">
                At Casa Montessori Manrique, we open the doors of our home to provide a warm, safe, and loving space where children can explore, play, and grow with confidence. Our Montessori approach respects each child's natural curiosity and development, creating an environment where learning happens joyfully and naturally every day.
              </p>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              {/* Esta imagen se importará desde imagenes/imagen1.jpg */}
              {/* El usuario agregará la imagen después */}
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <p className="font-nunito text-muted-foreground">
                  [Importar: imagenes/imagen1.jpg]
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How We Bloom */}
      <section id="como-funciona" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-quicksand font-bold text-3xl md:text-4xl lg:text-5xl text-primary mb-4">
              How We Bloom
            </h2>
            <p className="font-nunito text-lg text-foreground/70 max-w-2xl mx-auto">
              Our daily activities nurture every aspect of your child's development
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Heart,
                title: "Play and Learn",
                description: "Hands-on activities that spark imagination and build skills through joyful discovery"
              },
              {
                icon: Trees,
                title: "Nature",
                description: "Outdoor exploration connecting children with the natural world around them"
              },
              {
                icon: Calendar,
                title: "Special dates",
                description: "Celebrating traditions and creating meaningful memories together"
              },
              {
                icon: Sparkles,
                title: "Habits",
                description: "Building independence, responsibility, and positive daily routines"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-card rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2"
              >
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                  <item.icon className="text-primary" size={32} />
                </div>
                <h3 className="font-quicksand font-bold text-xl md:text-2xl text-primary mb-4 text-center">
                  {item.title}
                </h3>
                <p className="font-nunito text-foreground/70 text-center leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="por-que-elegirnos" className="py-20 bg-accent/10">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="font-quicksand font-bold text-3xl md:text-4xl lg:text-5xl text-primary mb-8 text-center">
              About us
            </h2>
            <div className="bg-card rounded-3xl p-8 md:p-12 shadow-2xl">
              <p className="font-nunito text-lg md:text-xl text-foreground/80 leading-relaxed">
                We are a daycare where every child receives love, patience, and personalized attention in a home-like environment. Our licensed Montessori approach celebrates each child's unique journey, fostering independence, creativity, and a genuine love for learning. With small group sizes and experienced, caring educators, we create a nurturing space where children feel valued, safe, and excited to explore the world around them.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Info */}
      <section id="contacto" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-quicksand font-bold text-3xl md:text-4xl lg:text-5xl text-primary mb-4">
              Let's connect!
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
              className="bg-secondary rounded-2xl p-6 text-center shadow-lg"
            >
              <MapPin className="text-primary mx-auto mb-4" size={40} />
              <h3 className="font-quicksand font-bold text-lg text-primary mb-2">
                Ubicación
              </h3>
              <p className="font-nunito text-foreground/70">
                Newmarket, Ontario
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-secondary rounded-2xl p-6 text-center shadow-lg"
            >
              <Phone className="text-primary mx-auto mb-4" size={40} />
              <h3 className="font-quicksand font-bold text-lg text-primary mb-2">
                Teléfono
              </h3>
              <p className="font-nunito text-foreground/70">
                (123) 456-7890
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-secondary rounded-2xl p-6 text-center shadow-lg"
            >
              <Mail className="text-primary mx-auto mb-4" size={40} />
              <h3 className="font-quicksand font-bold text-lg text-primary mb-2">
                Email
              </h3>
              <p className="font-nunito text-foreground/70">
                info@casamontessori.com
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-secondary rounded-2xl p-6 text-center shadow-lg"
            >
              <Clock className="text-primary mx-auto mb-4" size={40} />
              <h3 className="font-quicksand font-bold text-lg text-primary mb-2">
                Horario
              </h3>
              <p className="font-nunito text-foreground/70">
                Lunes - Viernes<br />7:00 AM - 6:00 PM
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Schedule Appointment Form */}
      <section id="agendar-cita" className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.8 }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="font-quicksand font-bold text-3xl md:text-4xl lg:text-5xl text-primary mb-8 text-center">
              Schedule an appointment
            </h2>
            <form
              onSubmit={handleSubmit}
              className="bg-card rounded-3xl p-8 md:p-12 shadow-2xl space-y-6"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block font-quicksand font-semibold text-foreground mb-2"
                >
                  Nombre
                </label>
                <Input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full border-primary/30 focus:border-primary rounded-xl"
                  placeholder="Tu nombre completo"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block font-quicksand font-semibold text-foreground mb-2"
                >
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full border-primary/30 focus:border-primary rounded-xl"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block font-quicksand font-semibold text-foreground mb-2"
                >
                  Mensaje
                </label>
                <Textarea
                  id="message"
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full border-primary/30 focus:border-primary rounded-xl min-h-[150px]"
                  placeholder="Cuéntanos sobre tu familia y tus necesidades..."
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-full py-6 text-lg shadow-lg hover:shadow-xl transition-all hover:scale-105"
              >
                Send message
              </Button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <p className="font-nunito text-lg">
                © 2025 Casa Montessori Manrique
              </p>
              <p className="font-nunito text-sm opacity-80 mt-1">
                Licensed daycare in Newmarket, Ontario
              </p>
            </div>
            <div className="flex gap-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform"
                aria-label="Instagram"
              >
                <Instagram size={28} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform"
                aria-label="Facebook"
              >
                <Facebook size={28} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
