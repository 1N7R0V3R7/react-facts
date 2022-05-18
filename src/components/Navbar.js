import React from 'react'
import ReactLogo from '../images/react-icon-small.png'
export default function Navbar(props) {
    return (
        <nav className='p-8 bg-white dark:bg-[#21222a] border border-b-gray-400 dark:border-0'>
            <div className="max-w-4xl mx-auto flex justify-between items-center">
                <div className="flex items-center">
                    <img src={ReactLogo} alt="" className="w-8 h-8 mr-2" />
                    <div className='text-[#61dafb] font-bold text-xl'>ReactFacts</div>
                </div>
                <div className='text-[#2b283a] dark:text-[#deebf8] font-semibold text-base flex flex-col'>
                    <p className="">
                        React Course - Project 1
                    </p>
                    <div className="flex items-center gap-2 mx-auto mt-2">
                        <p className="dark:text-gray-500">Light</p>
                        <div className="grid grid-cols-2 bg-[#21222a] dark:bg-white rounded-full w-fit p-0.5 cursor-pointer" onClick={props.toggleDarkMode}>
                            <div className="h-4 w-4 rounded-full bg-white dark:translate-x-full duration-500 dark:bg-[#21222a]">

                            </div>
                        </div>
                        <p className="text-gray-300 dark:text-white">Dark</p>
                    </div>
                </div>
            </div>
        </nav>
    )
}
