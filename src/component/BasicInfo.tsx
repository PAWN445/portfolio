import hahaImage from '../assets/hahaha.png'
import { Link } from 'react-router-dom'
function BasicInfo(){
    return(
        <>
      <div className="grid grid-cols-[380px_1fr] items-stretch justify-center mx-auto max-w-6xl m-10" id="basic-info">
        <div className="min-h-full">
          <img
            src={hahaImage}
            alt="Arnold Manalo"
            loading='lazy'
            className="w-full h-full object-cover object-top rounded-xl"
          />
        </div>


        <div className="flex flex-col justify-center py-12 px-12 gap-0">
          <h1
            className="font-black leading-none tracking-tight text-white mb-5"
            style={{ fontSize: '52px', fontFamily: 'Raleway, sans-serif', letterSpacing: '-0.03em', color: '#C0392B' }}>
            Hi, I'm<br />Arnold Manalo
          </h1>
          <p className="text-semibold font-medium mb-3 leading-relaxed text-white" >
          I’m a Mobile Developer & Full Stack Engineer who turns complex business ideas into high-performing digital products. I build modern web & mobile apps, 
          and practical software systems with clean, intuitive user interfaces.From conceptualizing scalable logic to launching responsive frontend designs, 
          and these days I focus on generative AI.
          </p>

          <p className="text-sm mb-8 max-w-md leading-relaxed" style={{ color: 'rgba(232,240,237,0.55)' }}>
                This portfolio showcases a curated collection of production-ready web platforms, 
                high-performance mobile applications, and custom software systems built to solve real-world problems.
          </p>


          <div className="flex flex-wrap gap-3 mb-7">
          <Link className="flex items-center gap-2 px-5 py-2.5 text-sm rounded-full border border-white/20 text-white" to="/contact">Contact Me</Link>
            <button className="flex items-center gap-2 px-5 py-2.5 text-sm rounded-full border border-white/20 text-white">
              View Resume
            </button>
            <Link className="flex items-center gap-2 px-5 py-2.5 text-sm rounded-full border border-white/20 text-white" to="/aboutme">About Me</Link>

            <Link className="flex items-center gap-2 px-5 py-2.5 text-sm rounded-full border border-white/20 text-white" to="/certifications">Certifications</Link>
          </div>
        </div>
      </div>
      </>
    );
} 

export default BasicInfo;