// src/components/PageWrapper.jsx
import { motion } from "framer-motion"

function PageWrapper({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}   // where animation starts
      animate={{ opacity: 1, y: 0 }}    // when component is mounted
      exit={{ opacity: 0, y: -10 }}     // when leaving page
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="transition-all duration-300"
    >
      {children}
    </motion.div>
  )
}

export default PageWrapper
