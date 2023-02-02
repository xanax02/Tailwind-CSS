import requests from "@/utils/requests"
import Router from "next/router"

const Nav = () => {
  return (
    <nav className="relative">
        <div className="flex px-10 sm:px-20 text-2xl whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide">
            {Object.entries(requests).map(([key, {title, url}]) => {
                return (
                    <h2 
                        key={key} 
                        className="last:pr-24 cursor-pointer tranition duration-100 transform hover:scale-125 hover: text-white active:text-red-500" 
                        onClick={() => Router.push(`/?genre=${key}`)}
                    >
                            {title}
                    </h2>
                )
            })}
        </div>
        <div className="absolute top-0 right-0 bg-gradient-to-l from-[#06202A] h-10 w-1/12" />
    </nav>
  )
}

export default Nav

