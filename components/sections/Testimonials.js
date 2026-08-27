'use client'

import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { Quote } from 'lucide-react'
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Testimonials = () => {

    const testimonials = [
        { quote: "EstateHub made finding our first home feel simple, clear, and genuinely personal.", name: "Amanda Lee", role: "Home Buyer" },
        { quote: "The team understood exactly what we needed and found an investment that made sense.", name: "James Carter", role: "Property Investor" },
        { quote: "From the first viewing to closing day, every detail was handled with care.", name: "Sophia Martinez", role: "Home Seller" },
    ];

    return (
        <section className="bg-brand-accent px-5 py-16 text-white">
            <div className="m-auto max-w-310">
                <p className="font-bold text-brand-gold">TESTIMONIALS</p>
                <h2 className="mt-2 max-w-md text-3xl font-extrabold">What Our Clients Say About Us</h2>
                <Swiper
                    className="testimonial-slider mt-8 !pb-12"
                    modules={[Autoplay, Pagination]}
                    autoplay={{ delay: 4200, disableOnInteraction: false }}
                    pagination={{ clickable: true }}
                    spaceBetween={18}
                    slidesPerView={1}
                    breakpoints={{ 768: { slidesPerView: 2 }, 1100: { slidesPerView: 3 } }}
                >
                    {testimonials.map((item) => (
                        <SwiperSlide key={item.name}>
                            <article className="h-full rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                                <Quote className="mb-5 text-brand-gold" size={26} />
                                <p className="min-h-20 text-sm leading-relaxed text-white/80">{item.quote}</p>
                                <div className="mt-6 flex items-center gap-3 border-t border-white/10 pt-4"><span className="flex size-9 items-center justify-center rounded-full bg-brand-darkGold font-bold text-white">{item.name.charAt(0)}</span><p><span className="block font-bold">{item.name}</span><span className="text-xs text-white/50">{item.role}</span></p></div>
                            </article>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}

export default Testimonials
