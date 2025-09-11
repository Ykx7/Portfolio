import TextType from "@/components/TextType"
import * as motion from "motion/react-client"

const Framer = () => {
  return (
    <div className="flex justify-center items-center h-screen">
        <motion.button
        whileHover={{scale: 1.2}}
        whileTap={{scale: 0.8}}
        className="save-button bg-blue-500 text-white font-bold py-2 px-4 rounded"
        onClick={() => null}
        
        >
        click me

        </motion.button>

        {/* ------------------------- */}

<motion.div
            style={box}
            animate={{ rotate: 360 }}
            transition={{ duration: 1 }}
        />

{/* ---------------------- */}

<motion.div
  animate={{
    scale: 2,
    transition: { duration: 2 }
  }}
/>


{/* -------------------------------- */}


<TextType
  className="text-4xl font-bold"
  text={["Text typing effect", "for your websites", "Happy coding!"]}
  typingSpeed={150}
  pauseDuration={1500}
  showCursor={true}
  cursorCharacter="|"
/>


















    </div>
  )
}


const box = {
    width: 100,
    height: 100,
    backgroundColor: "#ff0088",
    borderRadius: 5,
}


export default Framer