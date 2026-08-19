"use client";

import {
    Heart,
    MapPin,
    BedDouble,
    Bath,
    Move,
    Building2,
    ArrowRight,
    Home,
} from "lucide-react";

const properties = [
    {
        id: 1,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR7NZWLHasb65jJhf83_wNA6KavD8ecc1IRKD9qbrKmA&s",
        status: "For Sale",
        price: "PKR 38,000,000",
        location: "DHA Phase 6, Lahore",
        title: "Modern 5 Bedroom House",
        beds: 5,
        baths: 5,
        area: "10 Marla",
        builtUpArea: "5,500 Sq Ft",
    },
    {
        id: 2,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ-e0ZnJxmMh9mesVSby8UgxCuB1fyRjxS77Uw3vn_iA&s",
        status: "For Sale",
        price: "PKR 24,500,000",
        location: "Bahria Town, Islamabad",
        title: "Luxury 1 Kanal House",
        beds: 6,
        baths: 6,
        area: "1 Kanal",
        builtUpArea: "7,200 Sq Ft",
    },
    {
        id: 3,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBFBH7hCzoDBvSnPe2pdNfPFtXwU8-ZipYzoCSRmqqOA&s=10",
        status: "For Sale",
        price: "PKR 15,800,000",
        location: "Emaar Canyon Views, Islamabad",
        title: "3 Bedroom Apartment",
        beds: 3,
        baths: 3,
        area: "1,850 Sq Ft",
        builtUpArea: "1,850 Sq Ft",
    },
];

export default function PropertiesForSale() {
    return (
        <section className="bg-dark py-20 px-6 md:px-12">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-14">
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <span className="h-px w-10 bg-blue/40" />
                        <span className="flex items-center gap-2 text-blue text-sm font-semibold tracking-wide uppercase">
                            <Home size={16} /> Premium Properties
                        </span>
                        <span className="h-px w-10 bg-blue/40" />
                    </div>
                    <h2 className="font-syne text-4xl md:text-6xl font-extrabold text-off-white mb-4">
                        Properties For Sale
                    </h2>
                    <p className="text-gray max-w-xl mx-auto">
                        Explore our handpicked properties for sale and find the perfect
                        space to call your own. Quality homes. Great locations. Better
                        living.
                    </p>
                </div>

                {/* Cards */}
                <div className="flex justify-center @container">
                    <div className="grid grid-cols-1 @max-[1000px]:max-w-150 w-full @min-[1000px]:grid-cols-3  gap-8">
                        {properties.map((p) => (
                            <div
                                key={p.id}
                                className="bg-dark1 rounded-2xl max-w-150 w-full overflow-hidden border border-white/5 hover:border-blue/40 transition-colors"
                            >
                                {/* Image */}
                                <div className="relative h-64">
                                    <img
                                        src={p.image}
                                        alt={p.title}
                                        className="w-full h-full object-cover"
                                    />
                                    <span className="absolute top-4 left-4 bg-blue text-off-white text-xs font-semibold px-3 py-1.5 rounded-full">
                                        {p.status}
                                    </span>
                                    <button className="absolute top-4 right-4 bg-dark/70 backdrop-blur-sm p-2 rounded-full hover:bg-blue transition-colors">
                                        <Heart size={16} className="text-off-white" />
                                    </button>
                                    <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-dark to-transparent" />
                                    <span className="absolute bottom-4 left-4 font-syne text-off-white font-bold text-lg">
                                        {p.price}
                                    </span>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <div className="flex items-center gap-1.5 text-blue text-sm mb-2">
                                        <MapPin size={14} />
                                        {p.location}
                                    </div>
                                    <h3 className="font-syne text-xl font-bold text-off-white mb-4">
                                        {p.title}
                                    </h3>

                                    <div className="flex items-center gap-5 text-gray text-sm pb-5 border-b border-white/10">
                                        <span className="flex items-center gap-1.5">
                                            <BedDouble size={16} /> {p.beds} Beds
                                        </span>
                                        <span className="flex items-center gap-1.5">
                                            <Bath size={16} /> {p.baths} Baths
                                        </span>
                                        <span className="flex items-center gap-1.5">
                                            <Move size={16} /> {p.area}
                                        </span>
                                    </div>

                                    <div className="flex items-center justify-between pt-5">
                                        <div className="flex items-center gap-2">
                                            <span className="bg-dark p-2 rounded-lg text-blue">
                                                <Building2 size={16} />
                                            </span>
                                            <div>
                                                <p className="text-gray text-xs">Built-up Area</p>
                                                <p className="text-off-white text-sm font-semibold">
                                                    {p.builtUpArea}
                                                </p>
                                            </div>
                                        </div>
                                        <a
                                            href="#"
                                            className="flex items-center gap-1 text-blue text-sm font-semibold hover:gap-2 transition-all"
                                        >
                                            View Details <ArrowRight size={14} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <div className="flex justify-center mt-14">
                    <a
                        href="#"
                        className="flex items-center gap-2 bg-blue text-off-white font-semibold px-8 py-4 rounded-full shadow-[0_0_25px_rgba(35,143,255,0.4)] hover:shadow-[0_0_35px_rgba(35,143,255,0.6)] transition-shadow"
                    >
                        View All Properties <ArrowRight size={18} />
                    </a>
                </div>
            </div>
        </section>
    );
}