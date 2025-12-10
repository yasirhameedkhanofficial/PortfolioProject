import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ArrowRight } from 'lucide-react';
import { useRef } from 'react';
import { ScrollTrigger } from "gsap/ScrollTrigger";



const About = () => {
  const stats = [
    { number: '15+', label: 'Google Review' },
    { number: '1+', label: 'Years Experience' },
    { number: '25+', label: 'Awards Winning' }
  ];
  let imgref = useRef(null);
  
  // Gsap code 
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(()=>{
    gsap.fromTo(imgref.current, {
      x: -600,
      opacity: 0,
    },{
      x: 0,
      opacity: 1,
      duration: 1,
      delay: 0.3,
      scrollTrigger:{
        trigger: imgref.current,
        scroller: document.body,
        start: "top 80%",
      }

    }
    
  )
  gsap.utils.toArray(".aboutItemGsap").forEach((item, i) => {
    return gsap.fromTo(item as Element,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        delay: i * 0.1, // small stagger
        scrollTrigger: {
          trigger: item as HTMLElement,
          start: "top 90%",
        }
      }
    );
  });

}, []);

  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20 px-8 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-blue-500/5 rounded-full blur-3xl top-1/4 left-1/4"></div>
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div className="relative group">
          <div className="absolute -top-12 -left-12 w-48 h-48 border-2 border-cyan-500/30 rounded-full animate-spin-slow"></div>
          <div className="absolute -bottom-12 -right-12 w-48 h-48 border-2 border-blue-500/30 rounded-full animate-spin-reverse"></div>

          <div ref={imgref} className="opacity-0 relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-6 shadow-2xl shadow-blue-500/10 transform transition-all duration-500 hover:scale-[1.02] hover:shadow-blue-500/20">
            {/* Image Container */    }
            <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-neutral-900">
              <img
                src="/hero-image.jpg"
                alt="Portrait of developer working on a laptop"
                className="w-full h-full object-cover block"
              />
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="space-y-3">
            <p className="aboutItemGsap text-blue-400 text-sm font-medium tracking-wider uppercase">About Us</p>
            <h2 className="aboutItemGsap text-4xl md:text-5xl font-bold leading-tight">
              I AM AVAILABLE FOR{' '}
              <span className="aboutItemGsap text-blue-400">FULL-STACK WEB DEVELOPMENT</span>{' '}
              <span className="aboutItemGsap text-white">PROJECT</span>
            </h2>
          </div>
          <div className='aboutItemGsap'>As a full-stack developer, I focus on crafting elegant interfaces and robust backend systems. I enjoy developing meaningful digital experiences that not only look beautiful but also perform flawlessly.
              I help brands and businesses build powerful digital identities through modern full-stack development. Whether it’s a responsive website, a dashboard, or a full web application, I transform ideas into clean, fast, and scalable solutions.
          </div>
          <p className="text-gray-400 leading-relaxed">
            </p>

          <div className="grid grid-cols-3 gap-6 py-6">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="aboutItemGsap group space-y-1 transform transition-all hover:-translate-y-2"
              >
                <div className="text-3xl font-bold text-white group-hover:text-blue-400 transition-colors">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>

          <button className="aboutItemGsap group bg-blue-500 text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-500/50 transform hover:-translate-y-1 transition-all flex items-center space-x-2">
            <span>GET IN TOUCH</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
