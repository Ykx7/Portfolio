import Navbar from "@/components/Navbar"
import img from "../../assets/images/img5.jpg"
import TextType from "@/components/TextType"
import * as motion from "motion/react-client"
import PageWrapper from "@/components/PageWrapper"


const Home = () => {
  return (
    <PageWrapper>
    <div>
      
      <nav>
        <Navbar />
      </nav>


      <div>

        <section id="overview" className="h-screen flex items-center justify-between px-64">
          <div className="flex flex-col gap-2">
          <span className="text-4xl">Hi Im Yahia Khidour</span>
          <TextType
  className="text-4xl font-bold"
  text={["Frontend Developer", "Security Researcher"]}
  typingSpeed={150}
  pauseDuration={1500}
  showCursor={true}
  cursorCharacter="|"
/>

<p className="text-ellipsis max-w-xl">
  Frontend Developer & Penetration Tester — passionate about creating modern, 
  responsive applications while securing them with best practices. With 
  hands-on experience in bug hunting at hackerone I bring 
  both development skills and a security-first mindset to every project.
</p>

          </div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.5 }}
>
            <img src={img} className="w-72 h-72 border-2 border-gray-400 rounded-full object-cover shadow-2xl shadow-black" alt="" />
          </motion.div>
        </section>
        <section id="skills" className="h-screen">
          About
        </section>
        <section id="projects" className="h-screen">
          ssss
        </section>
        <section id="experience" className="h-screen">
          cccc
        </section>
        <section id="contact" className="h-screen">
          Contact
        </section>

      </div>

    </div>
    </PageWrapper>
  )
}

export default Home