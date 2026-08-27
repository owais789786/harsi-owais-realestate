'use client'
import { useState } from 'react'
import { HiOutlineMapPin, HiHeart, HiOutlineHeart, HiArrowRight } from 'react-icons/hi2'
import { PiBedBold, PiBathtubBold, PiRulerBold, PiBuildingsBold } from 'react-icons/pi'
import Button from "../ui/Button"


const variants = {
    sale: {
        sectionBg: 'bg-brand-dark',
        cardBg: 'bg-brand-navy',
        heading: 'text-white',
        muted: 'text-brand-muted',
    },
    rent: {
        sectionBg: 'bg-brand-text',      // light bg
        cardBg: 'bg-white',
        heading: 'text-brand-dark',      // dark text on light bg
        muted: 'text-brand-navy/70',
    },
}

const PropertyCard = ({ property, tagLabel, priceSuffix }) => {
    const [liked, setLiked] = useState(false)

    return (
        <div className="bg-brand-navy border border-white/10 rounded-xl overflow-hidden hover:border-brand-gold/40 transition-colors">
            <div className="relative h-64 w-full">
                <img src={property.image} alt={property.title} className="w-full h-full object-cover" />

                <span className="absolute top-3 left-3 bg-brand-darkGold text-white text-xs font-syne px-3 py-1 rounded-full">
                    {tagLabel}
                </span>

                <button
                    onClick={() => setLiked(!liked)}
                    className="absolute top-3 right-3 w-9 h-9 flex items-center justify-center rounded-full bg-black/40 backdrop-blur-sm hover:bg-black/60 transition-colors"
                >
                    {liked ? (
                        <HiHeart className="text-brand-gold" size={18} />
                    ) : (
                        <HiOutlineHeart className="text-white" size={18} />
                    )}
                </button>

                <span className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-sm text-white font-syne px-3 py-1.5 rounded-md">
                    {property.price}{priceSuffix}
                </span>
            </div>

            <div className="p-5">
                <div className="flex items-center gap-1.5 text-brand-muted text-sm mb-2">
                    <HiOutlineMapPin className="text-brand-gold" size={16} />
                    {property.location}
                </div>

                <h3 className="text-white font-nunito  text-xl font-bold mb-4">
                    {property.title}
                </h3>

                <div className="flex items-center gap-4 text-brand-muted text-sm border-b border-white/10 pb-4 mb-4">
                    <span className="flex items-center gap-1.5">
                        <PiBedBold size={16} /> {property.beds} Beds
                    </span>
                    <span className="flex items-center gap-1.5">
                        <PiBathtubBold size={16} /> {property.baths} Baths
                    </span>
                    <span className="flex items-center gap-1.5">
                        <PiRulerBold size={16} /> {property.size}
                    </span>
                </div>

                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <span className="w-9 h-9 flex items-center justify-center rounded-md bg-brand-gold/10 text-brand-gold">
                            <PiBuildingsBold size={18} />
                        </span>
                        <div>
                            <p className="text-brand-muted text-xs">Built-up Area</p>
                            <p className="text-white text-sm font-semibold">{property.builtUp}</p>
                        </div>
                    </div>

                    <button className="flex items-center gap-1 text-brand-gold font-semibold text-sm hover:gap-2 transition-all">
                        View Details <HiArrowRight size={16} />
                    </button>
                </div>
            </div>
        </div>
    )
}

const PropertiesSection = ({
    variant = 'sale',
    badgeText = 'Premium Properties',
    heading = 'Properties For Sale',
    description = '...',
    tagLabel = 'For Sale',
    priceSuffix = '',
    ctaText = 'View All Properties',
    properties = [],
}) => {
    const theme = variants[variant]

    return (
        <section className={`${theme.sectionBg} py-20 px-5`}>
            <div className="max-w-310 mx-auto">
                <div className="text-center mb-12">
                    <p className="text-brand-gold font-nunito font-bold text-sm tracking-wider uppercase mb-2">
                        {badgeText}
                    </p>
                    <h2 className={`${theme.heading} font-nunito font-bold text-3xl sm:text-4xl mb-4`}>
                        {heading}
                    </h2>
                    <p className={`${theme.muted} max-w-xl mx-auto`}>
                        {description}
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {properties.map((property) => (
                        <PropertyCard
                            key={property.id}
                            property={property}
                            tagLabel={tagLabel}
                            priceSuffix={priceSuffix}
                            theme={theme}
                        />
                    ))}
                </div>

                <div className="flex justify-center pt-10"><Button content={ctaText} colors={variant == 'sale' ? 'bg-brand-darkGold text-brand-text border-brand-darkGold hover:text-brand-gold hover:bg-transparent' : 'bg-brand-navy text-brand-text border-brand-navy hover:bg-transparent hover:text-brand-navy'} /></div>
            </div>
        </section>
    )
}

export default PropertiesSection