'use client'

import { useState } from 'react'
import Image from 'next/image'
import Button from '../ui/Button'
import { MapPin, Building2, DollarSign, BedDouble, Search, Key, Home, ChevronDown } from 'lucide-react'

const Hero = () => {

    const [activeTab, setActiveTab] = useState('rent');
    const [location, setLocation] = useState('');
    const [propertyType, setPropertyType] = useState('');
    const [priceRange, setPriceRange] = useState('');
    const [bedrooms, setBedrooms] = useState('');
    const [keywords, setKeywords] = useState('');

    const handleSearch = () => {
        console.log({ activeTab, location, propertyType, priceRange, bedrooms, keywords })
    }

    return (
        <section className='min-h-screen relative bg-black flex justify-center pt-22 pb-10 items-center '>
            <Image
                src={'/hero3.jpg'}
                alt='Image'
                fill
                priority
                quality={100}
                className='object-cover absolute inset-0 object-top'
            />
            <div className='max-w-310 relative z-10 mt-2 w-full flex flex-col gap-5 items-start  p-4'>
                <p className='text-brand-text text-shadow-2xs  font-nunito flex items-center gap-2'>
                    <span className='flex w-15 border-b border-brand-text [text-shadow:0_2px_4px_rgba(0,0,0,1.5)]'></span>
                    Find Your Perfect Space
                </p>
                <p className='text-6xl text-brand-accent font-nunito font-bold '>
                    Find a Place You'll<br /> Love to Live
                </p>
                <p className='text-brand-text font-nunito [text-shadow:0_2px_4px_rgba(0,0,0,1.5)] hidden sm:flex'>Discover luxury homes, appartments and commercials <br /> properties for rent sale in prime locations</p>
                <Button content={'Explore Properties'} colors={'text-brand-text bg-brand-navy border-brand-navy hover:bg-transparent hover:border-brand-text'} />

                <div className='w-full max-w-310 mx-auto bg-brand-navy/30 backdrop-blur-md border border-white/10 rounded-2xl p-4 md:p-6'>

                    {/* Tabs */}
                    <div className='flex gap-2 mb-4 border-b border-white/10 pb-4'>
                        <button
                            onClick={() => setActiveTab('rent')}
                            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-nunito transition-all ${activeTab === 'rent' ? 'bg-brand-navy text-white' : 'text-white/70 hover:text-white'
                                }`}
                        >
                            <Key size={16} />
                            For Rent
                        </button>
                        <button
                            onClick={() => setActiveTab('sale')}
                            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-nunito transition-all ${activeTab === 'sale' ? 'bg-brand-navy text-white' : 'text-white/70 hover:text-white'
                                }`}
                        >
                            <Home size={16} />
                            For Sale
                        </button>
                    </div>

                    {/* Fields */}
                    <div className='grid grid-cols-2 md:grid-cols-6 gap-4 items-end'>

                        <div className='flex flex-col gap-1.5 col-span-1'>
                            <label className='text-xs uppercase tracking-wide text-white/60 font-nunito'>Location</label>
                            <div className='flex items-center gap-2 border border-white/20 rounded-lg px-3 py-2'>
                                <MapPin size={16} className='text-white/60 shrink-0' />
                                <input
                                    type='text'
                                    value={location}
                                    onChange={(e) => setLocation(e.target.value)}
                                    placeholder='Enter location'
                                    className='bg-transparent text-sm text-white placeholder-white/50 outline-none w-full font-nunito'
                                />
                            </div>
                        </div>

                        <div className='flex flex-col gap-1.5 col-span-1'>
                            <label className='text-xs uppercase tracking-wide text-white/60 font-nunito'>Property Type</label>
                            <div className='flex items-center justify-between gap-2 border border-white/20 rounded-lg px-3 py-2 relative'>
                                <Building2 size={16} className='text-white/60 shrink-0' />
                                <select
                                    value={propertyType}
                                    onChange={(e) => setPropertyType(e.target.value)}
                                    className='bg-transparent text-sm text-white outline-none w-full font-nunito appearance-none cursor-pointer [&>option]:text-black'
                                >
                                    <option value=''>Select type</option>
                                    <option value='apartment'>Apartment</option>
                                    <option value='house'>House</option>
                                    <option value='villa'>Villa</option>
                                    <option value='commercial'>Commercial</option>
                                    <option value='plot'>Plot</option>
                                </select>
                                <ChevronDown size={14} className='text-white/60 shrink-0 pointer-events-none' />
                            </div>
                        </div>

                        <div className='flex flex-col gap-1.5 col-span-2 md:col-span-1'>
                            <label className='text-xs uppercase tracking-wide text-white/60 font-nunito'>Price Range</label>
                            <div className='flex items-center justify-between gap-2 border border-white/20 rounded-lg px-3 py-2 relative'>
                                <DollarSign size={16} className='text-white/60 shrink-0' />
                                <select
                                    value={priceRange}
                                    onChange={(e) => setPriceRange(e.target.value)}
                                    className='bg-transparent text-sm text-white outline-none w-full font-nunito appearance-none cursor-pointer [&>option]:text-black'
                                >
                                    <option value=''>Min - Max</option>
                                    <option value='0-50000'>$0 - $50,000</option>
                                    <option value='50000-100000'>$50,000 - $100,000</option>
                                    <option value='100000-250000'>$100,000 - $250,000</option>
                                    <option value='250000-500000'>$250,000 - $500,000</option>
                                    <option value='500000+'>$500,000+</option>
                                </select>
                                <ChevronDown size={14} className='text-white/60 shrink-0 pointer-events-none' />
                            </div>
                        </div>

                        <div className='flex flex-col gap-1.5 col-span-1'>
                            <label className='text-xs uppercase tracking-wide text-white/60 font-nunito'>Bedrooms</label>
                            <div className='flex items-center justify-between gap-2 border border-white/20 rounded-lg px-3 py-2 relative'>
                                <BedDouble size={16} className='text-white/60 shrink-0' />
                                <select
                                    value={bedrooms}
                                    onChange={(e) => setBedrooms(e.target.value)}
                                    className='bg-transparent text-sm text-white outline-none w-full font-nunito appearance-none cursor-pointer [&>option]:text-black'
                                >
                                    <option value=''>Any</option>
                                    <option value='1'>1</option>
                                    <option value='2'>2</option>
                                    <option value='3'>3</option>
                                    <option value='4'>4</option>
                                    <option value='5+'>5+</option>
                                </select>
                                <ChevronDown size={14} className='text-white/60 shrink-0 pointer-events-none' />
                            </div>
                        </div>

                        <div className='flex flex-col gap-1.5 col-span-1'>
                            <label className='text-xs uppercase tracking-wide text-white/60 font-nunito'>Keywords</label>
                            <div className='flex items-center gap-2 border border-white/20 rounded-lg px-3 py-2'>
                                <Search size={16} className='text-white/60 shrink-0' />
                                <input
                                    type='text'
                                    value={keywords}
                                    onChange={(e) => setKeywords(e.target.value)}
                                    placeholder='Search keywords'
                                    className='bg-transparent text-sm text-white placeholder-white/50 outline-none w-full font-nunito'
                                />
                            </div>
                        </div>

                        <button
                            onClick={handleSearch}
                            className='col-span-2 md:col-span-1 flex items-center justify-center gap-2 bg-brand-navy hover:bg-brand-navy/80 text-white px-4 py-2.5 rounded-lg text-sm font-nunito transition-all whitespace-nowrap'
                        >
                            Search Properties
                            <Search size={16} />
                        </button>

                    </div>
                </div>

            </div>
        </section>
    )
}

export default Hero
