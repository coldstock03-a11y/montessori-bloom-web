import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FormSuccessOverlayProps {
  onClose: () => void;
}

const FormSuccessOverlay = ({ onClose }: FormSuccessOverlayProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center"
    >
      <motion.div
        initial={{ scale: 0.5, opacity: 0, rotate: -10 }}
        animate={{ scale: 1, opacity: 1, rotate: 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
        className="bg-card rounded-3xl p-12 shadow-2xl flex flex-col items-center gap-6 max-w-md mx-4 text-center"
      >
        {/* Icono de éxito con animación */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
        >
          <motion.div
            animate={{ 
              rotate: [0, 10, -10, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity,
              repeatDelay: 1
            }}
            className="bg-green-100 rounded-full p-4"
          >
            <CheckCircle className="w-16 h-16 text-green-500" />
          </motion.div>
        </motion.div>

        {/* Decoraciones flotantes */}
        <div className="flex gap-4">
          <motion.span
            className="text-3xl"
            animate={{ y: [0, -5, 0], rotate: [-10, 10, -10] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            🎉
          </motion.span>
          <motion.span
            className="text-3xl"
            animate={{ y: [0, -8, 0], scale: [1, 1.2, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
          >
            ⭐
          </motion.span>
          <motion.span
            className="text-3xl"
            animate={{ y: [0, -5, 0], rotate: [10, -10, 10] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
          >
            🌟
          </motion.span>
        </div>

        {/* Mensaje de éxito */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <h3 className="font-quicksand font-bold text-2xl text-foreground mb-2">
            Message Sent Successfully!
          </h3>
          <p className="font-nunito text-foreground/70">
            Thank you for reaching out! We'll contact you soon. 💝
          </p>
        </motion.div>

        {/* Arcoíris pequeño */}
        <motion.div
          className="text-4xl"
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [-5, 5, -5]
          }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          🌈
        </motion.div>

        {/* Botón de cerrar */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <Button
            onClick={onClose}
            className="bg-sky-pastel hover:bg-sky-pastel/90 text-foreground rounded-full px-8 py-3 font-quicksand font-bold shadow-lg hover:shadow-xl transition-all"
          >
            Got it! ✨
          </Button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default FormSuccessOverlay;
