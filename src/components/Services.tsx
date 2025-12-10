import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import businessStrategyImg from '../../public/business.jpg'
import webDevImg from '../../public/web-dev.png'
import uxUiImg from '../../public/UI-vs-UX.png'
import marketingImg from '../../public/marketing.jpg'


const Services = () => {
  const services = [
    { title: 'Business Strategy', image: 'from-blue-500/20 to-cyan-500/20', imgs: businessStrategyImg },
    { title: 'Web Development', image: 'from-purple-500/20 to-pink-500/20', imgs: webDevImg },
    { title: 'Marketing', image: 'from-orange-500/20 to-yellow-500/20', imgs: marketingImg },
    { title: 'UX Design', image: 'from-green-500/20 to-emerald-500/20', imgs: uxUiImg },
  ];

  // Gsap code
gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.utils.toArray(".serviceGsap").forEach((item, i) => {
      return gsap.fromTo(item as Element,
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          delay: i * 0.1, // small stagger
          scrollTrigger: {
            trigger: item as HTMLElement,
            start: "top 90%",
          }
        }
      );
    });
  });

  return (
    <section id="services" className="min-h-screen flex items-center justify-center py-20 px-8 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-blue-500/5 rounded-full blur-3xl top-1/4 right-1/4"></div>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="text-center mb-16 space-y-3">
          <p className="serviceGsap text-blue-400 text-sm font-medium tracking-wider uppercase">Services</p>
          <h2 className="serviceGsap text-4xl md:text-5xl font-bold">
            DESIGN <span className="text-blue-400">SERVICES </span>I AM PROVIDING
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="group serviceGsap relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-blue-500/20 transform transition-all duration-500 hover:-translate-y-4"
            >
              <div className={`aspect-square bg-gradient-to-br ${service.image} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-[#0a1628]/60 group-hover:bg-[#0a1628]/40 transition-colors duration-500">
                <img src={service.imgs} className="w-full h-full" alt="" />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 border-2 border-white/30 rounded-lg transform rotate-45 group-hover:rotate-90 group-hover:scale-125 transition-all duration-500"></div>
                </div>
              </div>

              <div className="p-6 text-center">
                <h3 className="text-lg font-bold group-hover:text-blue-400 transition-colors">
                  {service.title}
                </h3>
              </div>

              <div className="absolute inset-0 border-2 border-blue-500/0 group-hover:border-blue-500/50 rounded-2xl transition-all duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
