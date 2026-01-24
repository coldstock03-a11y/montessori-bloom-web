import { motion } from "framer-motion";

const FormLoadingOverlay = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, type: "spring" }}
        className="bg-card rounded-3xl p-12 shadow-2xl flex flex-col items-center gap-6 max-w-md mx-4"
      >
        {/* Arcoíris animado */}
        <div className="relative w-40 h-24">
          {/* Arcos del arcoíris */}
          {[
            { color: "bg-red-300", delay: 0 },
            { color: "bg-orange-300", delay: 0.1 },
            { color: "bg-yellow-300", delay: 0.2 },
            { color: "bg-green-300", delay: 0.3 },
            { color: "bg-blue-300", delay: 0.4 },
            { color: "bg-purple-300", delay: 0.5 },
          ].map((arc, index) => (
            <motion.div
              key={index}
              className={`absolute bottom-0 left-1/2 -translate-x-1/2 ${arc.color} rounded-t-full`}
              style={{
                width: `${160 - index * 20}px`,
                height: `${80 - index * 10}px`,
              }}
              initial={{ scaleY: 0, opacity: 0 }}
              animate={{ scaleY: 1, opacity: 0.8 }}
              transition={{
                duration: 0.5,
                delay: arc.delay,
                repeat: Infinity,
                repeatType: "reverse",
                repeatDelay: 1,
              }}
            />
          ))}
          
          {/* Centro blanco del arcoíris */}
          <motion.div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-card rounded-t-full"
            style={{ width: "40px", height: "20px" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          />
        </div>

        {/* Nubes flotantes */}
        <div className="flex justify-between w-full px-4">
          <motion.div
            className="text-4xl"
            animate={{ 
              y: [0, -8, 0],
              rotate: [-5, 5, -5]
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            ☁️
          </motion.div>
          <motion.div
            className="text-5xl"
            animate={{ 
              y: [0, -10, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 1.5, 
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.3
            }}
          >
            🌈
          </motion.div>
          <motion.div
            className="text-4xl"
            animate={{ 
              y: [0, -8, 0],
              rotate: [5, -5, 5]
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }}
          >
            ☁️
          </motion.div>
        </div>

        {/* Texto de carga */}
        <motion.p
          className="font-quicksand font-bold text-xl text-foreground text-center"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          Sending your message...
        </motion.p>

        {/* Puntos animados */}
        <div className="flex gap-2">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-3 h-3 rounded-full bg-sky-pastel"
              animate={{
                y: [0, -10, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 0.6,
                repeat: Infinity,
                delay: i * 0.15,
              }}
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default FormLoadingOverlay;
