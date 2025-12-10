import { Mail, MapPin, Phone, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import { useState } from 'react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';


const Contact = () => {
  const contactInfo = [
    { Icon: Mail, label: 'Email', value: 'shandanawazir4@gmail.com', href: 'mailto:shandanawazir4@gmail.com' },
    { Icon: Phone, label: 'Phone', value: '+92 335-4502823', href: 'tel:+13354502823' },
    { Icon: MapPin, label: 'Location', value: 'KPK Peshawar, PAK', href: '#' }
  ];

  const socialLinks = [
    { Icon: Facebook, href: '#', color: 'hover:bg-blue-600' },
    { Icon: Instagram, href: '#', color: 'hover:bg-pink-600' },
    { Icon: Linkedin, href: '#', color: 'hover:bg-blue-700' },
    { Icon: Twitter, href: '#', color: 'hover:bg-blue-400' }
  ];

  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [subject,setSubject] = useState('');
  const [textAera,setTextAera] = useState('');

  

  function clearInput(){
    setName('')
    setEmail('')
    setSubject('')
    setTextAera('')
  }

  async function handleSubmit(e:any){
    e.preventDefault()
    const from = e.target as HTMLFormElement
    const formData = new FormData(from);

    const response = await fetch("https://formsubmit.co/ajax/shandanawazir4@gmail.com",{
      method:"POST",
      body:formData
    }
  )
  const result = await response.json();
  if(result.success){
    alert("Message sent successfully")
    clearInput();
  }else{
    alert("Failed to send message")
  }
  }

  // Gsap code
  gsap.registerPlugin(ScrollTrigger);
  
  useGSAP(()=>{
    gsap.utils.toArray(".contactGsap").forEach((item,i)=>{
      return gsap.fromTo(item as Element,{
        y:50,
        opacity:0,
      },{
        y:0,
        opacity:1,
        duration:0.8,
        delay: i*0.1,
        scrollTrigger:{
          trigger: item as HTMLElement,
          start: 'top 100%',
        }
      }
    )
    })

    gsap.utils.toArray(".contactGsapLeft").forEach((item,i)=>{
      return gsap.fromTo(item as Element,{
        x:200,
        opacity:0,
      },{
        x:0,
        opacity:1,
        duration:0.8,
        delay: i*0.1,
        scrollTrigger:{
          trigger: item as HTMLElement,
          start: 'top 100%',
        }
      }
    )
    })

    gsap.utils.toArray(".contactGsapRight").forEach((item,i)=>{
      return gsap.fromTo(item as Element,{
        x:-200,
        opacity:0,
      },{
        x:0,
        opacity:1,
        duration:0.8,
        delay: i*0.1,
        scrollTrigger:{
          trigger: item as HTMLElement,
          start: 'top 100%',
        }
      }
    )
    })

  })



  return (
    <footer id="contact" className="relative py-20 px-8 border-t border-white/10">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-blue-500/5 rounded-full blur-3xl -bottom-48 -left-48"></div>
        <div className="absolute w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl -top-48 -right-48"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 space-y-3">
          <p className="contactGsap text-blue-400 text-sm font-medium tracking-wider uppercase">Get in Touch</p>
          <h2 className="contactGsap text-4xl md:text-5xl font-bold">
            LET'S <span className="text-blue-400">CONNECT</span>
          </h2>
          <p className="contactGsap text-gray-400 max-w-2xl mx-auto mt-4">
            Have a project in mind? I'd love to hear from you. Feel free to reach out using any of the methods below.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {contactInfo.map(({ Icon, label, value, href }, idx) => (
            <a
              key={idx}
              href={href}
              className="contactGsap group backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 hover:shadow-2xl hover:shadow-blue-500/20 transform transition-all duration-500 hover:-translate-y-2 hover:border-blue-500/50"
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center group-hover:bg-blue-500/40 transition-colors flex-shrink-0">
                  <Icon className="w-6 h-6 text-blue-400 group-hover:text-blue-300 transition-colors" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-400 mb-1">{label}</p>
                  <p className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">
                    {value}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-12 mb-16 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500">
          <div className="max-w-2xl mx-auto">
            <h3 className="contactGsap text-2xl font-bold mb-6 text-center">Send Me a Message</h3>
            <form className="space-y-4" onSubmit={(e)=>{
              handleSubmit(e);
            }}>
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name='name'
                  value={name}
                  placeholder="Your Name"
                  required
                  className="contactGsapRight w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all"
                  onChange={(e)=>{
                  setName(e.target.value)
  }}    
/>
                <input
                  type="email"
                  name='email'
                  value={email}
                  required
                  placeholder="Your Email"
                  className="contactGsapLeft w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all"
                  onChange={(e)=>{
                    setEmail(e.target.value)
                  }}
/>
              </div>
              <input
                type="text"
                name='subject'
                value={subject}
                required
                placeholder="Subject"
                className="contactGsapRight w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all"
                onChange={(e)=>{
                  setSubject(e.target.value)
                }}
              />
              <textarea
                value={textAera}
                required
                name='message'
                placeholder="Your Message"
                rows={5}
                className="contactGsapLeft w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all resize-none"
                onChange={(e)=>{
                  setTextAera(e.target.value)
                }}
              ></textarea>
              <button
                type="submit"
                className="contactGsapRight w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-500/50 transform hover:-translate-y-1 transition-all"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        <div className="contactGsap border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <div className="group cursor-pointer transform transition-transform hover:scale-105">
                <img
                  src="/Black and Gold Classy Personal Logo.jpg"
                  alt="Shandana Wazir Logo"
                  className="h-16 w-auto"
                />
              </div>
              <p className="text-gray-400 text-sm mt-3">Full-Stack Developer & Designer</p>
            </div>

            <div className="flex items-center space-x-4">
              {socialLinks.map(({ Icon, href, color }, idx) => (
                <a
                  key={idx}
                  href={href}
                  className={`w-10 h-10 rounded-full bg-blue-500/20 backdrop-blur-sm flex items-center justify-center ${color} hover:scale-110 transform transition-all`}
                >
                  <Icon className="w-5 h-5 text-blue-400" />
                </a>
              ))}
            </div>
          </div>

          <div className="contactGsap mt-8 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
            <p>&copy; 2024 Shandana Wazir. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-blue-400 transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
