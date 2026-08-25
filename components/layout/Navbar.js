'use client'
import { useState, useRef, useEffect } from 'react'
import { Home, Menu, X } from "lucide-react";
import Button from '../ui/Button';
import NavOp from '../ui/NavOp';


import { HiOutlineHome } from 'react-icons/hi2';

const Navbar = () => {

    const [showNav, setShowNav] = useState(true);
    const [showNavColor, setShowNavColor] = useState(false);
    const [showSideBar, setShowSideBar] = useState(false);
    const lastScrollY = useRef(0);

    useEffect(() => {

        const handleNav = () => {
            let currentScrollY = window.scrollY;
            const threshold = window.innerHeight / 2;

            if (currentScrollY < lastScrollY.current) {
                setShowNav(true);
                if (currentScrollY !== 0 || currentScrollY > threshold) {
                    setShowNavColor(true)
                } else {
                    setShowNavColor(false)
                }
            }
            if (currentScrollY > lastScrollY.current) {
                setShowNav(false);
            }
            lastScrollY.current = currentScrollY;
        }

        window.addEventListener('scroll', handleNav);
        return (
            () => {
                window.removeEventListener('scroll', handleNav)
            }
        );
    }, []);

    return (
        <>
            <header className={`w-full flex justify-center fixed top-0 z-50 transition-translate duration-300 
                ${showNav ? 'translate-y-0' : '-translate-y-full'} 
                ${showNavColor ? 'bg-black/30 backdrop-blur-md ' : 'bg-transparent backdrop-blur-none'}
                }`}>
                <nav className="max-w-310 w-full min-h-18 sm:min-h-20  px-5 flex justify-between items-center relative">

                    {/* <span className="text-white bg-brand-navy relative flex justify-center shadow-[0_2px_4px_rgba(0,0,0,0.05),0_12px_24px_rgba(0,0,0,0.5)] items-center border rounded-full px-1">
                        <Home className="absolute text-brand-darkGold z-0 " size={45} />
                        <span className="sm:text-2xl text-xl relative z-10 font-syne font-bold">Restate</span>
                    </span> */}

                    <div className="flex items-center gap-2 text-white font-bold text-xl">
                        <div className="flex items-center justify-center w-8 h-8 rounded-lg border border-slate-700 bg-brand-darkGold">
                            <HiOutlineHome className="w-5 h-5 text-white" />
                        </div>
                        <span>EstateHub</span>
                    </div>

                    <div className='hidden mx-auto w-fit absolute inset-x-0  min-[851px]:flex items-center justify-center'>
                        <NavOp />
                    </div>

                    <div className='flex  items-center gap-2  text-brand-text'>
                        <Button content={'List Your Property'} colors={'text-brand-text hover:bg-transparent hover:[text-shadow:0_2px_4px_rgba(0,0,0,1.5)]  hover:border-brand-text bg-brand-darkGold border-brand-darkGold'} />
                        <Menu className='text-brand-text w-6 h-6 sm:w-8 sm:h-8 border-2 p-0.5 rounded cursor-pointer' onClick={() => setShowSideBar(true)} />
                    </div>

                </nav>
            </header>

            <div className={`fixed right-0 z-50 sm:w-100 w-full  duration-500 ease-in-out transition-transform bg-brand-accent/80 backdrop-blur-md inset-y-0 h-dvh ${showSideBar ? 'translate-x-0' : 'translate-x-full'}  p-3 `}>

                <button className='absolute right-3 top-3 rounded-full p-1 bg-black'>
                    <X size={30} className='text-brand-text' onClick={() => setShowSideBar(false)} />
                </button>

                <p className='text-brand-text/80 font-nunito mb-3 border-b border-brand-muted/30 pb-3 '>Buy land,<br /> they're not making it anymore.</p>
                <div className='min-[851px]:hidden flex mb-3'>
                    <NavOp />
                </div>
                <p className='text-brand-text/80 font-nunito mb-3 pt-3 text-center sm:border-none border-t  border-brand-muted/30 '>
                    &copy; All right are reserved
                </p>

            </div>

        </>
    )
}

export default Navbar
