import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  Facebook,
  Star,
  Quote,
  MessageCircleHeart
} from "lucide-react";
import rainbowClouds from "@/assets/rainbow-clouds.png";
import imagen1 from "@/assets/imagen1.jpg";
import emailjs from "emailjs-com";
import FormLoadingOverlay from "@/components/FormLoadingOverlay";
import FormSuccessOverlay from "@/components/FormSuccessOverlay";


const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
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
    setIsLoading(true);

    emailjs
      .send(
        "service_3fxc7y9",
        "template_wpxrjqa",
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        "FsqDsO1tntwVC3nxI"
      )
      .then(() => {
        // Mostrar loading por 2.5 segundos antes del mensaje de éxito
        setTimeout(() => {
          setIsLoading(false);
          setShowSuccess(true);
          setFormData({ name: "", email: "", message: "" });
        }, 2500);
      })
      .catch((error) => {
        console.error("Error al enviar:", error);
        setIsLoading(false);
        alert("There was an error sending your message. Please try again.");
      });
  };

  const handleCloseSuccess = () => {
    setShowSuccess(false);
  };


  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 }
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 }
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  };

  const rotateIn = {
    hidden: { opacity: 0, rotate: -10, scale: 0.9 },
    visible: { opacity: 1, rotate: 0, scale: 1 }
  };

  return (
    <>
      {/* Overlays de loading y éxito */}
      <AnimatePresence>
        {isLoading && <FormLoadingOverlay />}
        {showSuccess && <FormSuccessOverlay onClose={handleCloseSuccess} />}
      </AnimatePresence>

      <div className="min-h-screen bg-background">
      {/* Header con menú fijo */}
      <header className="fixed top-0 left-0 right-0 bg-sky-pastel backdrop-blur-sm shadow-sm z-50 border-b border-primary/20">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
              whileHover={{ scale: 1.05 }}
              className="font-quicksand font-bold text-xl md:text-2xl text-foreground cursor-pointer"
            >
              Home DayCare
            </motion.div>

            {/* Menú desktop */}
            <div className="hidden md:flex items-center gap-6">
              <button
                onClick={() => scrollToSection("inicio")}
                className="text-foreground hover:text-rose-400 transition-colors font-nunito font-medium"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("nuestro-hogar")}
                className="text-foreground hover:text-rose-400 transition-colors font-nunito font-medium"
              >
                Where We Grow
              </button>
              <button
                onClick={() => scrollToSection("como-funciona")}
                className="text-foreground hover:text-rose-400 transition-colors font-nunito font-medium"
              >
                How We Bloom
              </button>
              <button
                onClick={() => scrollToSection("por-que-elegirnos")}
                className="text-foreground hover:text-rose-400 transition-colors font-nunito font-medium"
              >
                About us
              </button>
              <button
                onClick={() => scrollToSection("contacto")}
                className="text-foreground hover:text-rose-400 transition-colors font-nunito font-medium"
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
              className="md:hidden text-secundary"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Menú móvil */}
          {isMenuOpen && (
            <motion.div
              initial={{opacity: 0, y: -20 }}
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
        <motion.div 
          className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none"
          animate={{ 
            y: [0, -10, 0],
            rotate: [0, 1, 0, -1, 0] 
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        >
          <img
            src={rainbowClouds}
            alt=""
            className="w-full max-w-4xl h-auto object-contain"
          />
        </motion.div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.h1 
              className="font-quicksand font-bold text-4xl md:text-6xl lg:text-7xl text-cyan-500 mb-6"
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1, delay: 0.2, type: "spring", stiffness: 80 }}
            >
              Home DayCare
            </motion.h1>
            <motion.p 
              className="font-nunito text-xl md:text-2xl lg:text-3xl text-foreground/80 mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              Casa Montessori Manrique 
            </motion.p>
            <motion.p 
              className="font-nunito text-xl md:text-2xl lg:text-3xl text-foreground/80 mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              Licensed daycare in Newmarket, Ontario
            </motion.p>
            <motion.p 
              className="font-nunito text-xl md:text-2xl lg:text-3xl text-foreground/80 mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              A home filled with love, learning, and creativity
            </motion.p>
            <motion.div 
              className="flex items-center justify-center gap-2 text-foreground/70 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <MapPin className="text-salmon-pastel" size={24} />
              </motion.div>
              <span className="font-nunito text-lg md:text-xl">
                Newmarket, Ontario, Canadá
              </span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              whileHover={{ scale: 1.05, rotate: [0, -2, 2, 0] }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                onClick={() => scrollToSection("agendar-cita")}
                size="lg"
                className="bg-sky-pastel hover:bg-sky-pastel/90 text-foreground rounded-full px-8 py-6 text-lg shadow-2xl hover:shadow-salmon-pastel/50 transition-all"
              >
                Schedule an appointment
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Where We Grow */}
      <section id="nuestro-hogar" className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInLeft}
              transition={{ duration: 0.8 }}
            >
              <motion.h2 
                className="font-quicksand font-bold text-3xl md:text-4xl lg:text-5xl text-cyan-500 mb-6"
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Where We Grow
              </motion.h2>
              <motion.p 
                className="font-nunito text-lg md:text-xl text-foreground/80 leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                At Casa Montessori Manrique, we open the doors of our home to provide a warm, safe, and loving space. Here, curiosity flourishes and diversity is celebrated. Every corner is designed to make children feel at home.
              </motion.p>
            </motion.div>
            <motion.div 
              className="rounded-3xl overflow-hidden shadow-2xl"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={scaleIn}
              transition={{ duration: 0.8, delay: 0.2 }}
              whileHover={{ scale: 1.05, rotate: 2 }}
            >
              {/* Esta imagen se importará desde imagenes/imagen1.jpg */}
              {/* El usuario agregará la imagen después */}
              <motion.div 
                className="aspect-video bg-gradient-to-br from-sky-pastel/40 to-salmon-pastel/40 flex items-center justify-center"
                animate={{ 
                  backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"]
                }}
                transition={{ 
                  duration: 10, 
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                <img 
                  src={imagen1} 
                  alt="Imagen 1"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How We Bloom */}
      <section id="como-funciona" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={scaleIn}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.h2 
              className="font-quicksand font-bold text-3xl md:text-4xl lg:text-5xl text-cyan-500 mb-4"
              whileHover={{ scale: 1.05 }}
            >
              How We Bloom
            </motion.h2>
            <motion.p 
              className="font-nunito text-lg text-foreground/70 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Our daily activities nurture every aspect of your child's development
            </motion.p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Heart,
                title: "Play and Learn",
                description: "Children learn through play. We encourage imagination with artistic activities, music and reading."
              },
              {
                icon: Trees,
                title: "Nature",
                description: "We love getting outdoors and connecting with nature."
              },
              {
                icon: Calendar,
                title: "Special dates",
                description: "At Casa Montessori Manrique, we value birthdays and cultural celebrations as moments to cultivate respect, gratitude, and a sense of belonging."
              },
              {
                icon: Sparkles,
                title: "Habits",
                description: "We promote healthy routines, respect, order and responsibility from a young age."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={rotateIn}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.15,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  scale: 1.08, 
                  rotate: [0, -3, 3, 0],
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                className="bg-card rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all cursor-pointer"
              >
                <motion.div 
                  className="bg-sky-pastel/20 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto"
                  whileHover={{ 
                    scale: 1.2, 
                    rotate: 360,
                    backgroundColor: "hsl(var(--salmon-pastel) / 0.3)"
                  }}
                  transition={{ duration: 0.6 }}
                >
                  <item.icon className="text-sky-pastel" size={32} />
                </motion.div>
                <motion.h3 
                  className="font-quicksand font-bold text-xl md:text-2xl text-cyan-500 mb-4 text-center"
                  whileHover={{ scale: 1.05 }}
                >
                  {item.title}
                </motion.h3>
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
            <motion.h2 
              className="font-quicksand font-bold text-3xl md:text-4xl lg:text-5xl text-cyan-500 mb-8 text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              About us
            </motion.h2>
            <motion.div 
              className="bg-card rounded-3xl p-8 md:p-12 shadow-2xl"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              whileHover={{ scale: 1.02, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
            >
              <motion.p 
                className="font-nunito text-lg md:text-xl text-foreground/80 leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 1 }}
              >
                We are a daycare where every child receives love, patience, and personalized attention. We are licensed under the Canada Wide Feed Reduction Program and follow the Montessori approach to promote autonomy, respect, and a joy for learning.
              </motion.p>
            </motion.div>
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
            variants={scaleIn}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.h2 
              className="font-quicksand font-bold text-3xl md:text-4xl lg:text-5xl text-cyan-500 mb-4"
              whileHover={{ scale: 1.1, rotate: [0, 2, -2, 0] }}
              transition={{ duration: 0.5 }}
            >
              Let's connect!
            </motion.h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={scaleIn}
              transition={{ duration: 0.6 }}
              whileHover={{ 
                scale: 1.1, 
                rotate: 5,
                boxShadow: "0 20px 40px rgba(0,0,0,0.2)"
              }}
              onClick={() => window.open("https://maps.app.goo.gl/prd7P4Uis43pD2JK9", "_blank")}
              className="bg-secondary rounded-2xl p-6 text-center shadow-lg cursor-pointer"
            >
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <MapPin className="text-salmon-pastel mx-auto mb-4" size={40} />
              </motion.div>
              <h3 className="font-quicksand font-bold text-lg text-cyan-500 mb-2">
                Location
              </h3>
              <p className="font-nunito text-foreground/70">
                Newmarket, Ontario
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={scaleIn}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ 
                scale: 1.1, 
                rotate: -5,
                boxShadow: "0 20px 40px rgba(0,0,0,0.2)"
              }}
              className="bg-secondary rounded-2xl p-6 text-center shadow-lg cursor-pointer"
            >
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <Phone className="text-salmon-pastel mx-auto mb-4" size={40} />
              </motion.div>
              <h3 className="font-quicksand font-bold text-lg text-cyan-500 mb-2">
                Phone
              </h3>
              <p className="font-nunito text-foreground/70">
                +1 (647) 887-6594
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={scaleIn}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ 
                scale: 1.1, 
                rotate: 5,
                boxShadow: "0 20px 40px rgba(0,0,0,0.2)"
              }}
              className="bg-secondary rounded-2xl p-6 text-center shadow-lg cursor-pointer"
            >
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <Mail className="text-salmon-pastel mx-auto mb-4" size={40} />
              </motion.div>
              <h3 className="font-quicksand font-bold text-lg text-cyan-500 mb-2">
                Email
              </h3>
              <p className="font-nunito text-foreground/70">
                johannamanrique@hotmail.com
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={scaleIn}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ 
                scale: 1.1, 
                rotate: -5,
                boxShadow: "0 20px 40px rgba(0,0,0,0.2)"
              }}
              className="bg-secondary rounded-2xl p-6 text-center shadow-lg cursor-pointer"
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <Clock className="text-salmon-pastel mx-auto mb-4" size={40} />
              </motion.div>
              <h3 className="font-quicksand font-bold text-lg text-cyan-500 mb-2">
                Schedule
              </h3>
              <p className="font-nunito text-foreground/70">
                Monday - Friday<br />7:00 AM - 5:00 PM
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What Families Say - Google Reviews */}
      <section id="reviews" className="py-20 bg-secondary/30 relative overflow-hidden">
        {/* Decorative background elements */}
        <motion.div 
          className="absolute top-10 left-10 opacity-20"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <Star className="text-salmon-pastel" size={60} />
        </motion.div>
        <motion.div 
          className="absolute bottom-10 right-10 opacity-20"
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        >
          <Star className="text-sky-pastel" size={80} />
        </motion.div>
        <motion.div 
          className="absolute top-1/2 right-20 opacity-10"
          animate={{ y: [0, -20, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <Quote className="text-salmon-pastel" size={100} />
        </motion.div>
        <motion.div 
          className="absolute top-20 left-1/4 opacity-10"
          animate={{ y: [0, 15, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <MessageCircleHeart className="text-sky-pastel" size={70} />
        </motion.div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={scaleIn}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            {/* Animated stars above title */}
            <motion.div 
              className="flex justify-center gap-2 mb-4"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{ 
                    scale: [1, 1.3, 1],
                    rotate: [0, 15, -15, 0]
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity, 
                    delay: i * 0.2,
                    ease: "easeInOut"
                  }}
                >
                  <Star 
                    className="text-yellow-400 fill-yellow-400" 
                    size={28} 
                  />
                </motion.div>
              ))}
            </motion.div>

            <motion.h2 
              className="font-quicksand font-bold text-3xl md:text-4xl lg:text-5xl text-cyan-500 mb-4"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              What Families Say
            </motion.h2>
            <motion.p 
              className="font-nunito text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Real stories from our wonderful families 💕
            </motion.p>
          </motion.div>

          {/* Elfsight Google Reviews Widget */}
          <motion.div 
            className="max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              className="bg-card/50 backdrop-blur-sm rounded-3xl p-6 md:p-8 shadow-xl"
              whileHover={{ 
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)"
              }}
              transition={{ duration: 0.3 }}
            >
              <div
                className="elfsight-app-913151e1-d9ef-4fe8-bb34-f7639cfd0eba"
                data-elfsight-app-lazy
              ></div>
            </motion.div>
          </motion.div>

          {/* Call to action below reviews */}
          <motion.div 
            className="text-center mt-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <motion.p 
              className="font-nunito text-foreground/60 text-sm md:text-base"
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              ⭐ Join our happy families today! ⭐
            </motion.p>
          </motion.div>
        </div>
      </section>


      {/* Schedule Appointment Form */}
      <section id="agendar-cita" className="py-20 ">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={scaleIn}
            transition={{ duration: 0.8 }}
            className="max-w-2xl mx-auto"
          >
            <motion.h2 
              className="font-quicksand font-bold text-3xl md:text-4xl lg:text-5xl text-cyan-500 mb-8 text-center"
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              whileHover={{ scale: 1.05 }}
            >
              Schedule an appointment
            </motion.h2>
            <motion.form
              onSubmit={handleSubmit}
              className="bg-card rounded-3xl p-8 md:p-12 shadow-2xl space-y-6"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              whileHover={{ boxShadow: "0 30px 60px -15px rgba(0,0,0,0.3)" }}
            >
              <div>
                <label
                  htmlFor="name"
                  className="block font-quicksand font-semibold text-foreground mb-2"
                >
                  Name
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
                  placeholder="Your full name"
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
                  placeholder="youremail@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block font-quicksand font-semibold text-foreground mb-2"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full border-primary/30 focus:border-primary rounded-xl min-h-[150px]"
                  placeholder="Tell us about your family and your needs..."
                />
              </div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  type="submit"
                  className="w-full bg-sky-pastel hover:bg-sky-pastel/90 text-foreground rounded-full py-6 text-lg shadow-lg hover:shadow-xl transition-all"
                >
                  Send message
                </Button>
              </motion.div>
            </motion.form>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-sky-pastel text-foreground py-12">
        <div className="container mx-auto px-4">
          <motion.div 
            className="flex flex-col md:flex-row justify-between items-center gap-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="text-center md:text-left"
              whileHover={{ x: 5 }}
            >
              <p className="font-nunito text-lg font-semibold">
                © 2026 Casa Montessori Manrique
              </p>
              <p className="font-nunito text-sm opacity-80 mt-1">
                Licensed daycare in Newmarket, Ontario
              </p>
            </motion.div>
            {/*Cambiar los links de instagram y facebook de Johana */}
            <div className="flex gap-6">
              <motion.a
                href="https://www.instagram.com/casamontessori2024?igsh=MXJ4Y3JrYjQ3bGpyNQ%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-all"
                aria-label="Instagram"
                whileHover={{ 
                  scale: 1.3, 
                  rotate: 360,
                  color: "hsl(var(--salmon-pastel))"
                }}
                transition={{ duration: 0.5 }}
              >
                <Instagram size={28} />
              </motion.a>
              <motion.a
                href="https://www.facebook.com/profile.php?id=61562247833857&mibextid=JRoKGi&utm_source=ig&utm_medium=social&utm_content=link_in_bio"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-all"
                aria-label="Facebook"
                whileHover={{ 
                  scale: 1.3, 
                  rotate: -360,
                  color: "hsl(var(--salmon-pastel))"
                }}
                transition={{ duration: 0.5 }}
              >
                <Facebook size={28} />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </footer>
    </div>
    </>
  );
};

export default Index;
