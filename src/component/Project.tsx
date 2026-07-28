import project1 from "../assets/suntastic-web.png";

function Project (){
    return(
        <>
        <div className="flex flex-col items-center">
            <h1 className="font-black leading-none tracking-tight text-white mb-5"
            style={{ fontSize: '52px', fontFamily: 'Ubuntu, sans-serif', letterSpacing: '-0.01em' }}>My Projects</h1>
            <p className="text-sm mb-8 max-w-md leading-relaxed" style={{ color: 'rgba(232,240,237,0.55)' }}>Practical Systems Build</p>

            <div className="flex flex-row items-center justify-around flex-wrap h-full mx-auto">
                <div className="bg-gray-800 m-2 rounded-lg shadow-md w-100 h-110 transition duration-300 ease-in-out transform hover:scale-105">
                    <img src={project1} alt="Project 1" className="w-full h-60 object-cover mb-2 rounded" />
                    <h3 className="text-lg font-semibold m-4">Suntastic Solar Corp</h3>
                    <p className="text-gray-300 m-4">Solar Company Portfolio Business</p>
                    <div className="flex flex-row mt-2 gap-4 m-4">
                        <ul>HTML</ul>
                        <ul>TAILWIND CSS</ul>
                        <ul>REACT</ul>
                    </div>
                    <div className="flex flex-row mt-2 gap-4 m-4">
                        <a href="https://suntasticsolarcorp.netlify.app/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-300">View Details</a>
                    </div>
                </div>

                <div className="bg-gray-800 m-2 rounded-lg shadow-md w-100 h-110 transition duration-300 ease-in-out transform hover:scale-105">
                    <img src={project1} alt="Project 1" className="w-full h-60 object-cover mb-2 rounded" />
                    <h3 className="text-lg font-semibold m-4">Suntastic Solar Corp</h3>
                    <p className="text-gray-300 m-4">Solar Company Portfolio Business</p>
                    <div className="flex flex-row mt-2 gap-4 m-4">
                        <ul>HTML</ul>
                        <ul>TAILWIND CSS</ul>
                        <ul>REACT</ul>
                    </div>
                    <div className="flex flex-row mt-2 gap-4 m-4">
                        <a href="#" className="text-blue-500 hover:text-blue-300">View Details</a>
                    </div>
                </div>
                
                <div className="bg-gray-800 m-2 rounded-lg shadow-md w-100 h-110 transition duration-300 ease-in-out transform hover:scale-105">
                    <img src={project1} alt="Project 1" className="w-full h-60 object-cover mb-2 rounded" />
                    <h3 className="text-lg font-semibold m-4">Suntastic Solar Corp</h3>
                    <p className="text-gray-300 m-4">Solar Company Portfolio Business</p>
                    <div className="flex flex-row mt-2 gap-4 m-4">
                        <ul>HTML</ul>
                        <ul>TAILWIND CSS</ul>
                        <ul>REACT</ul>
                    </div>
                    <div className="flex flex-row mt-2 gap-4 m-4">
                        <a href="#" className="text-blue-500 hover:text-blue-300">View Details</a>
                    </div>
                </div>

                <div className="bg-gray-800 m-2 rounded-lg shadow-md w-100 h-110 transition duration-300 ease-in-out transform hover:scale-105">
                    <img src={project1} alt="Project 1" className="w-full h-60 object-cover mb-2 rounded" />
                    <h3 className="text-lg font-semibold m-4">Suntastic Solar Corp</h3>
                    <p className="text-gray-300 m-4">Solar Company Portfolio Business</p>
                    <div className="flex flex-row mt-2 gap-4 m-4">
                        <ul>HTML</ul>
                        <ul>TAILWIND CSS</ul>
                        <ul>REACT</ul>
                    </div>
                    <div className="flex flex-row gap-4 m-4">
                        <a href="#" className="text-blue-500 hover:text-blue-300">View Details</a>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Project;