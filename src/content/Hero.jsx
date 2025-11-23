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
        <div className="w-full max-w-6xl flex flex-col lg:flex-row items-stretch justify-between gap-10">
          <div className="w-full lg:w-1/2 flex flex-col items-center">
            <p className="text-tantxt font-instrument text-lg mb-4 text-center">
              <Typewriter
                options={{
                  strings: ['Tansi','Hello', 'Kwey'],
                  autoStart: true,
                  loop: true,
                  delay: 80,
                  deleteSpeed: 80,
                }}
              />
            </p>
  
            {/* Main card */}
            <div className="bg-lighttanback text-center rounded-3xl shadow-[0_18px_40px_rgba(0,0,0,0.18)] px-8 py-10 md:px-12 md:py-12 ml-6">
              <h1 className="text-greentxt font-instrument font-bold text-4xl md:text-5xl leading-tight mb-4">
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
              <div className="rounded-full border-[5px] bg-tanback shadow-[0_18px_40px_rgba(0,0,0,0.22)] p-5 mt-12">
                  <img src={Logo} alt="Indigenous in STEM Student Association logo" className="w-64 h-64 md:w-80 md:h-80 object-contain"/>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }