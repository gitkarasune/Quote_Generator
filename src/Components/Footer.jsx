import React from 'react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-between items-center">
                    <div className="w-full md:w-1/2 mb-6 md:mb-0">
                        <h3 className="text-xl font-bold mb-2">Quotes</h3>
                        <p className="text-gray-400">Stay ahead of the game with our handpicked quotes and wisdom.</p>
                    </div>
                    <div className="w-full md:w-1/2">
                        <h4 className="text-lg font-semibold mb-2">Let's Stay Connected</h4>
                        <div className="flex space-x-4">
                            <a href="https://github.com/gitkarasune" className="text-white hover:text-blue-300 text-lg transition duration-300">
                                <FaGithub/>
                            </a>
                            <a href="https://www.linkedin.com/in/sune-kara-9b3822287" className="text-white hover:text-blue-300 text-lg transition duration-300">
                                <FaLinkedinIn/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer