import Logo from '../../../public/logo.jpeg';
import Image from 'next/image';
export default function Navbar(){
    return (
      
      <header
      className="fixed inset-x-0 z-40 top-0 bg-white text-black h-[96px] py-5 lg:py-6 border-t-2 border-b-2 border-black">
      <div className="container px-4 lg:px-8 mx-auto flex justify-between items-center">
        <div className="text-3xl font-extrabold">Brutalist</div>
        <button data-toggle="#target-nav"
          className="[&.show_.btn-open]:!hidden [&.show_.btn-close]:!block w-12 h-12 flex items-center justify-center border-2 border-black rounded lg:hidden shadow-[2px_2px_0_0_#000000]">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
            className="btn-open block bi bi-list" viewBox="0 0 16 16">
            <path fill-rule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
            className="btn-close hidden bi bi-x-lg" viewBox="0 0 16 16">
            <path
              d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
          </svg>
        </button>
  
        <div id="target-nav"
          className="uppercase max-lg:fixed max-lg:w-72 max-lg:inset-y-0 max-lg:left-0 max-lg:[&.show]:translate-x-0 max-lg:bg-white max-lg:border-r-2 max-lg:border-black max-lg:z-50 max-lg:-translate-x-full transform duration-300">
          <nav className="max-lg:flex max-lg:flex-col max-lg:h-full max-lg:overflow-auto lg:space-x-4">
            <a href="#"
              className="active max-lg:py-3 max-lg:px-4 max-lg:border-b max-lg:border-black hover:text-[#00a6a2] [&.active]:text-[#00a6a2]">Home</a>
            <a href="#"
              className="max-lg:py-3 max-lg:px-4 max-lg:border-b max-lg:border-black hover:text-[#00a6a2] [&.active]:text-[#00a6a2]">About</a>
            <a href="#"
              className="max-lg:py-3 max-lg:px-4 max-lg:border-b max-lg:border-black hover:text-[#00a6a2] [&.active]:text-[#00a6a2]">Works</a>
            <a href="#"
              className="max-lg:py-3 max-lg:px-4 max-lg:border-b max-lg:border-black hover:text-[#00a6a2] [&.active]:text-[#00a6a2]">Blogs</a>
            <a href="#"
              className="max-lg:py-3 max-lg:px-4 max-lg:border-b max-lg:border-black hover:text-[#00a6a2] [&.active]:text-[#00a6a2]">Contact</a>
          </nav>
        </div>
  
        <button data-toggle="#target-nav"
          className="max-lg:fixed max-lg:bg-black max-lg:[&.show]:inset-0 max-lg:opacity-0 max-lg:[&.show]:opacity-70 transform duration-300 lg:hidden"></button>
      </div>
    </header>
  
    
    )
}