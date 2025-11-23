import '../index.css';
import '../App.css'; 
import Typewriter from 'typewriter-effect';
import Logo from '../assets/issalogo.png';

export default function Hero() {
    return (
      <section
        id="top"
        className="bg-offwhite min-h-[80vh] flex items-center justify-center px-6 py-12"
      >
        <div className="w-full max-w-6xl flex flex-col lg:flex-row items-center justify-between gap-10">
          {/* Left side: greeting + card */}
          <div className="w-full lg:w-1/2 flex flex-col items-start">
            {/* Small greeting text */}
            <p className="text-tantxt font-instrument text-lg mb-4">
              <Typewriter
                options={{
                  strings: ['Tansi / Hello / Kwey / …'],
                  autoStart: true,
                  loop: true,
                  delay: 60,
                  deleteSpeed: 30,
                }}
              />
            </p>
  
            {/* Main card */}
            <div className="bg-lighttanback rounded-3xl shadow-[0_18px_40px_rgba(0,0,0,0.18)] px-8 py-8 md:px-10 md:py-10">
              <h1 className="text-greentxt font-instrument font-bold text-3xl md:text-4xl leading-tight mb-4">
                Indigenous in STEM Student Association (ISSA)
              </h1>
              <p className="text-greentxt font-inria text-base md:text-lg leading-relaxed">
                ISSA aims to provide support and community for Indigenous STEM
                students culturally and academically.
              </p>
            </div>
          </div>
  
          {/* Right side: turtle logo */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative">
              <div className="rounded-full bg-offwhite shadow-[0_18px_40px_rgba(0,0,0,0.22)] p-3">
                <div className="rounded-full border-[10px] border-black overflow-hidden">
                  <img
                    src={Logo}
                    alt="Indigenous in STEM Student Association logo"
                    className="w-64 h-64 md:w-80 md:h-80 object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }