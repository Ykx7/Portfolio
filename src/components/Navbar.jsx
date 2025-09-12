import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import { Link } from "react-router-dom"
import { SlSocialLinkedin } from "react-icons/sl";
import { SiHackerone } from "react-icons/si";
import { LuFacebook } from "react-icons/lu";
import { FiGithub } from "react-icons/fi";


const Navbar = () => {
  return (
    <nav className="">
      <div className="fixed w-full mx-auto flex items-center justify-between h-20 px-10 bg-white opacity-80">
        {/* Left: Logo / Brand */}
        <Link to='/'>
          <span className="text-2xl">Yahia Kh</span>
        </Link>
        {/* Center: Navigation */}
        <NavigationMenu>
          <NavigationMenuList className="flex gap-6">
            {/* Dropdown Menu */}



            {/* Other Links */}
            <NavigationMenuItem>
              <NavigationMenuLink
                href="#overview"
                className="px-3 py-2 rounded-md hover:bg-accent hover:text-accent-foreground transition text-lg"
              >
                Overview
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink
                href="#skills"
                className="px-3 py-2 rounded-md hover:bg-accent hover:text-accent-foreground transition text-lg"
              >
                Skills
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink
                href="#projects"
                className="px-3 py-2 rounded-md hover:bg-accent hover:text-accent-foreground transition text-lg"
              >
                Projects
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink
                href="#resume"
                className="px-3 py-2 rounded-md hover:bg-accent hover:text-accent-foreground transition text-lg"
              >
                Resume
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink
                href="#contact"
                className="px-3 py-2 rounded-md hover:bg-accent hover:text-accent-foreground transition text-lg"
              >
                Contact
              </NavigationMenuLink>
            </NavigationMenuItem>


          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex gap-4">
          
          <Link to='/cart'>
            <LuFacebook className="w-6 h-6" />
          </Link>

          <Link to='/shop'>
            <SlSocialLinkedin className="w-6 h-6"/>
          </Link>


          <Link to='https://github.com/Ykx7/'>
            <FiGithub className="w-6 h-6"/>
          </Link>


          <Link to='https://hackerone.com/idkwhoiamx999?type=user'>
            <SiHackerone className="w-6 h-6"/>
          </Link>





        </div>

      </div>
    </nav>
  )
}

export default Navbar