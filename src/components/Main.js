import React from 'react'
import BackgroundReactLogo from '../images/react-icon-large.png'
import Navbar from './Navbar'
export default function Main() {

    const backgroundStyle = {
        backgroundImage: `url(${BackgroundReactLogo})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'right 25%',
    }
    return (
        <main className="bg-white dark:bg-[#282d35] text-[#2b283a] dark:text-white h-screen px-8 pt-12">
            <div className="max-w-4xl mx-auto" style={backgroundStyle}>
                <h1 className="font-bold text-4xl">
                    Fun facts about React
                </h1>
                <ul className="list-disc my-12 ml-8 list-inside marker:text-[#61dafb] marker:text-2xl">
                    <li className="my-4">
                        Was first released in 2013
                    </li>
                    <li className="my-4">
                        Was originally created by Jordan Walke
                    </li>
                    <li className="my-4">
                        Has well over 100k stars on Github
                    </li>
                    <li className="my-4">
                        Is maintained by Facebook
                    </li>
                    <li className="my-4">
                        Powers thousands of enterprise apps, including mobile apps
                    </li>
                </ul>
            </div>
        </main>
    )
}
