import React from 'react'
import Image from 'next/image'
import { Phone } from 'lucide-react'
import { FaYoutube, FaLinkedin, FaTelegram, FaFacebook, FaInstagram } from "react-icons/fa"

const Footer = () => {
    const footerCard = [
        {
            img: '/pak.png',
            countryName: 'Pakistan',
            countryDesc: '(Global Delivery Center)',
            l1: 'Office 10, 3rd Floor, Al-Rehmat',
            l2: 'Plaza G11 Markaz, Islamabad,',
            l3: 'Pakistan',
            phone: '+92 (335) 5438999'
        },
        {
            img: '/us.png',
            countryName: 'United States',
            countryDesc: '(Regional Office)',
            l1: 'INTERACTIVE ROBUST SOLUTIONS LLC',
            l2: '5900 Balcones Drive STE 100',
            l3: 'Austin, TX, 78731, USA',
            phone: '+1 (737) 3326312'
        },
        {
            img: '/tur.png',
            countryName: 'Türkiye',
            countryDesc: '(Regional Office)',
            l1: 'Cumhuriyet, İncirli Dedee',
            l2: 'Cd. floor41 Şişli/İstanbul,',
            l3: 'Türkiye',
            phone: '+90 (531) 3193533'
        },

    ]

    const staffAugmentation = [
        'Real Estate Agents', 'Property Managers', 'Leasing Consultants',
        'Real Estate Analysts', 'Interior Designers', 'Construction Project Managers',
        'Digital Marketing Experts', 'Sales Executives', 'Legal & Compliance Experts',
        'Administrative Professionals'
    ]

    const itDevelopment = [
        'Property Sales', 'Property Rentals & Leasing', 'Property Management',
        'Real Estate Consulting', 'Investment Advisory', 'Construction & Development',
        'Interior Design Services', 'Legal & Documentation Services',
        'Mortgage & Financing Assistance', 'Facility Management'
    ]

    const industries = [
         'Luxury Villas & Estates',
        'Vacation & Short-term Rentals', 'Mixed-Use Developments', 'Retail Spaces',
        'Office Spaces', 'Land & Plots', 'Co-working Spaces',
        'Industrial Properties', 'Real Estate Startups'
    ]

    return (
        <footer className='w-full bg-dark  overflow-hidden'>
            <div className='max-w-7xl mx-auto w-full flex flex-col items-center px-6 md:px-10 lg:px-16 pt-16 md:pt-24'>

                <h1 className='text-off-white font-syne text-4xl md:text-6xl font-extrabold  mb-4 lg:text-6xl text-center leading-tight'>
                    Your Trusted <br /> Realestate Partner
                </h1>

                <button className='md:px-10 px-7 text-off-white font-syne font-medium text-base md:text-lg mt-10 py-3.5 bg-blue rounded-full shadow-[0_0_25px_6px_rgba(35,143,255,0.5)] hover:scale-105 transition-all duration-300 hover:shadow-[0_0_35px_10px_rgba(35,143,255,0.5)] cursor-pointer'>
                    Start Your process
                </button>

                {/* Offices */}
                <div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-14 gap-y-14 mt-20 md:mt-28'>
                    {footerCard.map((item, index) => (
                        <div key={index} className='flex flex-col gap-3 md:max-w-80'>
                            <div className='flex items-center gap-3'>
                                <Image src={item.img} alt={item.countryName} width={40} height={40} className='rounded-full object-cover' />
                                <div>
                                    <h3 className='text-off-white font-syne font-bold text-2xl leading-tight '>{item.countryName}</h3>
                                    <p className='text-off-white text-md font-syne mt-0.5 leading-tight '>{item.countryDesc}</p>
                                </div>
                            </div>

                            <p className='text-gray sm:text-lg md:text-sm leading-relaxed font-syne '>
                                {item.l1}<br />
                                {item.l2}<br />
                                {item.l3}
                            </p>

                            <span className='w-full h-px bg-gray/30'></span>

                            <div className='flex items-center gap-2'>
                                <Phone size={20} className='text-blue' />
                                <span className='text-off-white transition-colors text-lg font-medium hover:text-blue font-syne cursor-pointer'>{item.phone}</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Services */}
                <div className='w-full bg-dark1 flex flex-col justify-center pb-16 mt-20 md:mt-28 pt-12 border-t border-gray/15 px-10 rounded-xl'>
                    <div className='w-full grid sm:grid-cols-1 md:grid-cols-3 gap-12 md:gap-8   '>
                        <div className='flex flex-col gap-4'>
                            <h4 className='text-off-white font-syne font-bold text-xl'>Services</h4>
                            <div className='flex flex-col gap-2.5'>
                                {staffAugmentation.map((item, index) => (
                                    <span key={index} className='text-gray text-sm w-fit hover:text-blue transition-colors duration-200 cursor-pointer'>{item}</span>
                                ))}
                            </div>
                        </div>

                        <div className='flex flex-col gap-4'>
                            <h4 className='text-off-white font-syne font-bold text-xl'>Commercial properties</h4>
                            <div className='flex flex-col gap-2.5'>
                                {itDevelopment.map((item, index) => (
                                    <span key={index} className='text-gray text-sm w-fit hover:text-blue transition-colors duration-200 cursor-pointer'>{item}</span>
                                ))}
                            </div>
                        </div>

                        <div className='flex flex-col gap-4'>
                            <h4 className='text-off-white font-syne font-bold text-xl'>Residential properties</h4>
                            <div className='flex flex-col gap-2.5'>
                                {industries.map((item, index) => (
                                    <span key={index} className='text-gray text-sm w-fit hover:text-blue transition-colors duration-200 cursor-pointer'>{item}</span>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
                <div className='p-7 items-center gap-5 flex lg:flex-row w-full justify-between flex-col'>
                    <div className='text-2xl font-bold text-white'>
                        IR<span className='text-blue font-bold font-syne'>Property </span>
                    </div>
                    <div className='text-off-white/60 font-syne text-lg text-center '>

                        © Copyrights 2026 IR Property All rights reserved.
                    </div>
                    <ul className='flex gap-4 '>
                        <li className=''><a href=""><FaYoutube size={24} className="text-white hover:text-blue transition-colors hover:scale-105" /></a></li>
                        <li className=''><a href=""><FaInstagram size={24} className="text-white hover:text-blue transition-colors hover:scale-105" /></a></li>
                        <li className=''><a href=""><FaFacebook size={24} className="text-white hover:text-blue transition-colors hover:scale-105" /></a></li>
                        <li className=''><a href=""><FaLinkedin size={24} className="text-white hover:text-blue transition-colors hover:scale-105" /></a></li>
                        <li className=''><a href=""><FaTelegram size={24} className="text-white hover:text-blue transition-colors hover:scale-105" /></a></li>
                    </ul>
                </div>

            </div>
        </footer>
    )
}

export default Footer

// < div className = 'w-full pt-5 justify-between grid gap-12  md:gap-8 sm:grid-cols-1 md:grid-cols-3' >
//                     <div className=''>
//                         <h2 className='text-2xl font-syne font-bold text-off-white'>Sales</h2>
//                         <a href="" className='border border-off-white/50 py-2 px-3 mt-5 flex justify-center rounded-full text-off-white font-syne font-bold '>property@advisor.co</a>
//                     </div>
//                     <div className=''>
//                         <h2 className='text-2xl font-syne font-bold text-off-white'>For Consultation</h2>
//                         <a href="" className='border border-off-white/50 py-2 px-3 mt-5 flex justify-center rounded-full text-off-white font-syne font-bold '>hr@advisor.co</a>
//                     </div>
//                     <div className=''>
//                         <h2 className='text-2xl font-syne font-bold text-off-white'>Newsletter</h2>
//                         <div className='relative'>
//                             <input type="text" placeholder='Email Address' className='border w-full pr-18  border-off-white/50 py-2 px-3 mt-5 flex justify-center rounded-full text-off-white font-syne font-bold ' />
//                             <button className='absolute right-0 border border-blue text-off-white top-0 cursor-pointer rounded-full bg-blue p-2'>Submit</button>
//                         </div>
//                     </div>
//                 </div >