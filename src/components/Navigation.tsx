import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-scroll";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  let name = ["S","H","A","N","D","A","N","A"];
  const navItems = [
    { id: "home", label: "HOME" },
    { id: "about", label: "ABOUT ME" },
    { id: "projects", label: "PROJECTS" },
    { id: "services", label: "SERVICES" },
    { id: "contact", label: "CONTACT" }
  ];

  // Gsap code 
  
  let navGsap = gsap.timeline();
  let mobileMenuGsap = gsap.timeline();
  useGSAP(()=>{
      navGsap.fromTo(
        ".mainName span",
        { x: 150, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.5, delay: 0.5, stagger: 0.1 }
      );
      
      navGsap.from(".navItem li", {
        y: -50,
        opacity: 0,
        duration: 0.5,
        stagger: 0.2,

      })

      
      
    })
    
    function openMobileMenu(){
      mobileMenuGsap.fromTo(".slideMenu",{
        x: 265,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.2,
      }
    )
      mobileMenuGsap.fromTo(".moblieMenuItem",
      {
        y: 70,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.2,
      }
    )
    }

    function closeMobileMenu(){
       mobileMenuGsap.fromTo(".moblieMenuItem",
        {
          y: 0,
          opacity: 1,
        },
        {
          y: -70,
          opacity: 0,
          duration: 0.5,
          stagger: 0.1,
      }
    )
      mobileMenuGsap.fromTo(".slideMenu",{
        x: 0,
      },
      {
        x: 265,
        duration: 0.5,
        stagger: 0.2,
      }
    )
    }
    

  return (
    <>
      {/* TOP NAV */}
      <nav className="fixed top-0 w-full bg-blue-500/10 backdrop-blur-sm flex justify-between items-center px-4 py-3 z-50">
        <div className="mainName scale-150 ml-6 cursor-default text-white font-bold tracking-widest text-xl">
            {
              name.map((char, index) => 
              <span key={index} className="inline-block hover:text-cyan-400 hover:scale-110 transition-all duration-300">{char}</span>

              )
            }
        </div>

        {/* DESKTOP MENU */}
        <ul className="navItem hidden md:flex gap-10 text-white font-semibold">
          {navItems.map((item) => (
            <li key={item.id} >
              <Link
                to={item.id}
                smooth={true}
                duration={600}
                offset={-80}
                spy={true}
                activeClass="text-cyan-400 drop-shadow-[0_0_6px_rgba(34,211,238,0.8)]"
                className="cursor-pointer hover:text-cyan-400 transition duration-300"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* MOBILE MENU BUTTON */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(true)}>
          <Menu className="w-7 h-7" onClick={openMobileMenu} />
        </button>
      </nav>

      {/* DARK OVERLAY */}
      <div
        onClick={() => {
          setIsOpen(false)
          closeMobileMenu()
        }
        }
        className={`fixed inset-0 bg-black/60 transition-opacity duration-500 z-40 
        ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
      />

      {/* SLIDE-FROM-RIGHT DRAWER */}
      <div
        className={`
          slideMenu
          fixed top-0 right-0 h-full w-64 bg-blue-600/80 backdrop-blur-xl z-50 p-6 
          flex flex-col gap-6 translate-x-full transition-transform duration-500 ease-in-out
        `}
      >
        {/* CLOSE BUTTON */}
        <button onClick={() => {
          setIsOpen(false)
          closeMobileMenu()
        }} className="self-end text-white">
          <X className="w-7 h-7" />
        </button>

        {/* MOBILE MENU ITEMS */}
        {navItems.map((item, index) => (
          <Link
            key={item.id}
            to={item.id}
            smooth={true}
            duration={600}
            offset={-80}
            spy={true}
            activeClass="text-cyan-400 drop-shadow-[0_0_6px_rgba(34,211,238,0.8)]"
            onClick={() => {
              setIsOpen(false)
              closeMobileMenu()
            }}
            className="moblieMenuItem text-lg flex justify-center font-semibold cursor-pointer text-white hover:text-cyan-300 transition duration-300"
            style={{ transitionDelay: `${index * 0.05}s` }}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </>
  );
};

export default NavBar;
