import { ArrowRight } from 'lucide-react';
import constructionImg from '../../public/Construction.png'
import goldShopImg from '../../public/gold shop.png'
import QuantumWebImg from '../../public/quantum web.png'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(ScrollTrigger);




const Projects = () => {
  const projects = [
    { title: 'Construction Web', subtitle: 'Strong Builds, Stronger Futures', color: 'from-purple-500/20 to-pink-500/20', imgSrc: constructionImg, projectLink: "https://jhagraconstruction.com"},
    { title: 'Jewellery Web', subtitle: 'Designed to shine', color: 'from-blue-500/20 to-cyan-500/20', imgSrc: goldShopImg, projectLink: "https://ammadgoldcollection.com"},
    { title: 'Quantum Web', subtitle: 'Future Start with Quantum', color: 'from-orange-500/20 to-yellow-500/20', imgSrc: QuantumWebImg, projectLink: "https://quantumwebinnovation.com"}
  ];

  // Gsap code

  useGSAP(()=>{
  gsap.utils.toArray(".projectGsap").forEach((item, i) => {
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
    <section id="projects" className="min-h-screen flex items-center justify-center py-20 px-8 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl bottom-0 right-1/4"></div>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="text-center mb-16 space-y-3">
          <p className="projectGsap text-blue-400 text-sm font-medium tracking-wider uppercase">My Work</p>
          <h2 className="projectGsap text-4xl md:text-5xl font-bold">RECENT PROJECT</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="projectGsap group relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl overflow-hidden shadow-xl shadow-blue-500/5 hover:shadow-blue-500/20 transform transition-all duration-500 hover:-translate-y-4"
            >
              <div className={`aspect-[4/3] bg-gradient-to-br ${project.color} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-[#0a1628]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                <img className='h-full w-full' src={project.imgSrc} alt="" />

                  {/* <div className="w-32 h-32 border-2 border-white/20 rounded-lg transform rotate-45">
                <img src={project.imgSrc} alt="" />

                  </div> */}
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-bold mb-1 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-400">{project.subtitle}</p>
                </div>

                <button className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-500/50 transform group-hover:scale-110 transition-all">
                    <a href={project.projectLink} target="_blank" rel="noopener noreferrer">
                  <ArrowRight className="w-5 h-5 text-white" />

                    </a>
                </button>
              </div>

              <div className="absolute inset-0 border-2 border-blue-500/0 group-hover:border-blue-500/50 rounded-2xl transition-all duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12 space-x-2">
          <button className="w-3 h-3 rounded-full bg-blue-500"></button>
          <button className="w-3 h-3 rounded-full bg-white/20 hover:bg-white/40 transition-colors"></button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
