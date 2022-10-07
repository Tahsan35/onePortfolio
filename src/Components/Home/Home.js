import React from 'react';
import myImage from '../../Assets/my-bg.png'
import { BsArrowRightShort } from "react-icons/bs";
import { Link } from "react-scroll";

const Home = () => {
    return (
        <div name="home" className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
            <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
                <div>
                    <h2 className='text-3xl sm:text-4xl text-red-300'>A full stack web developer</h2>
                    <p className='text-gray-500 py-4'>
                        This is Tahsan Shakil.I have experience
                        in web dev skill since 2021. And I've good at HTML5, CSS3, BOOTSTRAP,
                        TAILWIND,DEISY UI, JAVASCRIPT, ES6, REACT js, REDUX, SASS, NODE
                        JS,EXPRESS JS,FIREBASE, JWT, JSON, HEROKU, STRIPE, MONGODB, POSTMAN.
                    </p>
                    <div>
                        <Link
                            to="portfolio"
                            smooth
                            duration={500}
                            className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer hover:scale-105 duration-200'>Portfolio
                            <span className='group-hover:rotate-90 duration-300'><BsArrowRightShort size={25} />
                            </span>
                        </Link>
                    </div>
                </div>
                <div>
                    <img src={myImage} alt="my-profile" className='rounded-2xl mx-auto w-2/3 md:w-full' />
                </div>
            </div>
        </div>
    );
};

export default Home;