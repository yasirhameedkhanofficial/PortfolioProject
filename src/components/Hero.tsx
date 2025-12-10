import { ArrowRight, Facebook, Instagram, Linkedin } from 'lucide-react';
import ParticlesBackground from './ParticlesBackground';

const Hero = () => {
  return (
    <>
    <ParticlesBackground/>
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-8 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -top-48 -left-48 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl top-1/2 -right-48 animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-6 animate-fade-in">
          <p className="text-blue-400 text-sm font-medium tracking-wider uppercase">Shandana Wazir</p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            HAY! I'M SHANDANA
            <br />
            <span className="text-blue-400">I'M A FULL-STACK</span>
            <br />
            <span className="text-blue-400">DEVELOPER</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-lg leading-relaxed">
            I am Shandana Wazir, a dedicated Full-Stack Developer with strong expertise in modern web technologies and end-to-end application development. I specialize in building dynamic, scalable, and user-focused websites and web applications. With hands-on experience working at Quantum Web Innovation, I have developed and deployed high-quality digital solutions for diverse clients.
          </p>

          <div className="flex items-center space-x-4 pt-4">
            <button className="group bg-blue-500 text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-500/50 transform hover:-translate-y-1 transition-all flex items-center space-x-2">
              <span>GET IN TOUCH</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <div className="flex space-x-3">
              {[
                { Icon: Facebook, color: 'hover:bg-blue-600' },
                { Icon: Instagram, color: 'hover:bg-pink-600' },
                { Icon: Linkedin, color: 'hover:bg-blue-700' }
              ].map(({ Icon, color }, idx) => (
                <button
                  key={idx}
                  className={`w-10 h-10 rounded-full bg-blue-500/20 backdrop-blur-sm flex items-center justify-center ${color} hover:scale-110 transform transition-all`}
                >
                  <Icon className="w-4 h-4" />
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="relative animate-float">
          {/* Subtle background accents kept, but simplified for a cleaner composition */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-80 h-80 md:w-96 md:h-96 lg:w-[420px] lg:h-[420px] bg-gradient-to-br from-blue-500/6 to-cyan-500/6 rounded-2xl blur-3xl"></div>
          </div>

          <div className="relative w-full max-w-md mx-auto flex items-center justify-center px-4">
            {/* Image card */}
            <div className="relative rounded-full shadow-2xl overflow-hidden bg-gradient-to-br from-white/2 to-transparent border border-white/5">
              <div className="p-1 bg-gradient-to-r from-blue-500/10 to-cyan-500/10">
                <div className="bg-neutral-900 overflow-hidden w-72 h-72 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] rounded-full">
                  <img
                    src="/hero-image.jpg"
                    alt="Developer working on a laptop with neon UI graphics"
                    className="w-full h-full object-cover block"
                  />
                </div>
              </div>

              {/* Decorative accents (small, non-intrusive) */}
              <div className="absolute -left-6 -bottom-6 w-20 h-20 bg-cyan-500/20 rounded-full blur-xl" aria-hidden />
              <div className="absolute -right-6 -top-6 w-16 h-16 bg-blue-500/20 rounded-full blur-xl" aria-hidden />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 left-0 right-0">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex items-center justify-between overflow-hidden">
            <div className="flex items-center space-x-12 animate-scroll">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="flex items-center space-x-2 text-gray-400">
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <div className="w-1 h-1 bg-blue-400 rounded-full"></div>
                  </div>
                  <span className="text-sm font-medium whitespace-nowrap">LOGOIPSUM</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Hero;
