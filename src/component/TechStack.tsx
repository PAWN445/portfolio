
function TechStack(){
    return(
        <>
    <div className="grid grid-cols-[380px_1fr] items-stretch justify-center mx-auto max-w-6xl m-10" id="tech-stack">
    
    <div className="flex flex-col justify-center px-0.5 gap-0">

          <h1
            className="font-black leading-none tracking-tight text-white mb-5"
            style={{ fontSize: '52px', fontFamily: 'Ubuntu, sans-serif', letterSpacing: '-0.01em' }}>
            Tools I use to build projects.
          </h1>

          <p className="text-sm mb-8 max-w-md leading-relaxed" style={{ color: 'rgba(232,240,237,0.55)' }}>
                This portfolio showcases a curated collection of production-ready web platforms, 
                high-performance mobile applications, and custom software systems built to solve real-world problems.
          </p>
        </div>
        <div className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl border border-white/8 max-w-s" style={{ background: 'rgba(255,255,255,0.05)' }}>
            <div className='grid grid-cols-3 gap-4' id="programming-languages">
                    <div className="inline-flex items-center gap-4 px-5 py-3.5 rounded-xl border border-white/8 max-w-s hover:scale-110 transition-transform" style={{ background: 'rgba(255,255,255,0.05)' }}>
                        <i className ="fab fa-html5 text-6xl text-orange-600 hover:scale-110 transition-transform"></i>
                        <h1 className='text-white font-bold'>HTML</h1>
                    </div>
                    <div className="inline-flex items-center gap-4 px-5 py-3.5 rounded-xl border border-white/8 max-w-s hover:scale-110 transition-transform" style={{ background: 'rgba(255,255,255,0.05)' }}>
                        <i className="fab fa-css3-alt text-6xl text-blue-500 hover:scale-110 transition-transform"></i>
                        <h1 className='text-white font-bold'>CSS</h1>
                    </div>
                    <div className="inline-flex items-center gap-4 px-5 py-3.5 rounded-xl border border-white/8 max-w-s hover:scale-110 transition-transform" style={{ background: 'rgba(255,255,255,0.05)' }}>
                        <i className="fab fa-js text-6xl text-yellow-400 hover:scale-110 transition-transform"></i>
                        <h1 className='text-white font-bold'>JAVACSRIPT</h1>
                    </div>
                    <div className="inline-flex items-center gap-4 px-5 py-3.5 rounded-xl border border-white/8 max-w-s hover:scale-110 transition-transform" style={{ background: 'rgba(255,255,255,0.05)' }}>
                        <i className="fab fa-php text-6xl text-indigo-400 hover:scale-110 transition-transform"></i>
                        <h1 className='text-white font-bold'>PHP</h1>
                    </div>
                    <div className="inline-flex items-center gap-4 px-5 py-3.5 rounded-xl border border-white/8 max-w-s hover:scale-110 transition-transform" style={{ background: 'rgba(255,255,255,0.05)' }}>
                        <i className="fas fa-database text-6xl text-blue-500 hover:scale-110 transition-transform"></i>
                        <h1 className='text-white font-bold'>MYSQL</h1>
                    </div>
                    <div className="inline-flex items-center gap-4 px-5 py-3.5 rounded-xl border border-white/8 max-w-s hover:scale-110 transition-transform" style={{ background: 'rgba(255,255,255,0.05)' }}>
                        <i className="fab fa-react text-6xl text-cyan-400 hover:scale-110 transition-transform"></i>
                        <h1 className='text-white font-bold'>REACT JS</h1>
                    </div>
                    <div className="inline-flex items-center gap-4 px-5 py-3.5 rounded-xl border border-white/8 max-w-s hover:scale-110 transition-transform" style={{ background: 'rgba(255,255,255,0.05)' }}>
                        <i className="fab fa-react text-6xl text-cyan-400 hover:scale-110 transition-transform"></i>
                        <h1 className='text-white font-bold'>REACT NATIVE</h1>
                    </div>
                    <div className="inline-flex items-center gap-4 px-5 py-3.5 rounded-xl border border-white/8 max-w-s hover:scale-110 transition-transform" style={{ background: 'rgba(255,255,255,0.05)' }}>
                        <i className="devicon-tailwindcss-original colored text-7xl hover:scale-110 transition-transform"></i>
                        <h1 className='text-white font-bold'>TAILWIND</h1>
                    </div>
                    <div className="inline-flex items-center gap-4 px-5 py-3.5 rounded-xl border border-white/8 max-w-s hover:scale-110 transition-transform" style={{ background: 'rgba(255,255,255,0.05)' }}>
                        <i className="devicon-flutter-plain colored text-7xl hover:scale-110 transition-transform"></i>
                        <h1 className='text-white font-bold'>FLUTTER</h1>
                    </div>
            </div>
        </div>
      </div>


        </>
    );
}

export default TechStack;