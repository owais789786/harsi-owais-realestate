'use client'

import Image from "next/image";
import { FaRegCirclePlay } from "react-icons/fa6";
import { RiHome2Line } from "react-icons/ri";
import { RxPeople } from "react-icons/rx";
import { IoLocationOutline } from "react-icons/io5";
import { BsBuildings } from "react-icons/bs";
import { Award, Handshake, Heart, ShieldCheck, ArrowUpRight, Quote } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Button from "@/components/ui/Button";
import Testimonials from "@/components/sections/Testimonials";

const stats = [
  { value: "10+", label: "Years of Experience", icon: RiHome2Line },
  { value: "4,200+", label: "Happy Clients", icon: RxPeople },
  { value: "2,500+", label: "Properties Sold", icon: BsBuildings },
  { value: "25+", label: "Prime Locations", icon: IoLocationOutline },
];

const values = [
  { title: "Integrity", text: "We believe in honest communication and transparent advice.", icon: ShieldCheck },
  { title: "Commitment", text: "We are committed to providing the best service and support.", icon: Handshake },
  { title: "Excellence", text: "We strive for excellence in our work and aim to exceed expectations.", icon: Award },
  { title: "Client First", text: "Your goals and satisfaction are at the heart of our business.", icon: Heart },
];

const team = [
  { name: "John Smith", role: "Founder & CEO", image: "/hero1.jpg" },
  { name: "Sarah Johnson", role: "Head of Sales", image: "/hero3.jpg" },
  { name: "Michael Brown", role: "Property Consultant", image: "/hero.jpg" },
  { name: "Emily Davis", role: "Marketing Manager", image: "/hero1.jpg" },
];


const partners = ["Zillow", "REALTOR", "Trulia", "realtor.com", "Homes.com", "REDFIN", "Zillow", "REALTOR", "Trulia", "realtor.com", "Homes.com", "REDFIN","Zillow", "REALTOR", "Trulia", "realtor.com", "Homes.com", "REDFIN"];

const AboutUs = () => {
  return (
    <main className="font-nunito text-brand-accent">
      <section className="relative min-h-[520px] overflow-hidden bg-brand-accent pt-22">
        <Image src="/BgImage.avif" alt="Modern EstateHub property" fill priority className="object-cover object-center opacity-55" />
        <div className="absolute inset-0 bg-brand-navy/55" />
        <div className="relative z-10 m-auto flex min-h-[480px] w-full max-w-310 items-center px-5">
          <div className="flex w-full max-w-xl flex-col gap-4 py-16">
            <div className="flex items-center gap-3">
              <div className="w-[30px] h-[1px] bg-yellow-500 translate-y-[-50%]"></div>
              <p className="text-xs md:text-sm font-semibold text-yellow-500">
                ABOUT US
              </p>
            </div>
            <h1 className="text-4xl leading-tight md:text-6xl font-bold text-white">
              Building More Than Properties, We Build Relationships.
            </h1>
            <p className="max-w-lg text-base md:text-lg text-brand-text/85">
              At EstateHub, we believe a home is more than a place to live
              - it&apos;s where life happens. We&apos;re here to help you find spaces that
              inspires, comfort, and grow with you.
            </p>
            <Button content="Our Story" colors="hover:bg-transparent text-brand-text bg-brand-darkGold w-fit border-brand-darkGold hover:border-brand-text" />
          </div>
        </div>
      </section>

      <section className="m-auto flex w-full max-w-310 flex-col justify-center gap-10 px-5 py-16 lg:flex-row lg:justify-between">
        <div className="flex flex-col gap-3 w-full lg:w-lg">
          <p className="font-bold text-brand-darkGold">OUR STORY</p>
          <h2 className="text-3xl font-extrabold text-brand-accent sm:text-4xl">
            Passion for Properties. Commitment to People.
          </h2>
          <p>
            EstateHub was founded with a simple vision - to make real estate
            experiences better, easier, and more transparent. With years of
            industry expertise, we help clients navigate the property market
            with confidence and peace of mind.
          </p>
          <p>
            From finding your dream home to perfect investment, we&apos;re with you
            every step of the way
          </p>

          <div className="flex items-center gap-5">
            <span>Sign</span>
            <p className="flex flex-col">
              <span className="font-extrabold">John Smith</span>
              <span className="text-[14px]">Founder & CEO, EstateHub</span>
            </p>
          </div>
        </div>

        <div className="relative min-h-70 w-full flex-1 overflow-hidden rounded-2xl bg-brand-navy lg:min-h-90">
          <Image src="/hero1.jpg" alt="EstateHub living room" fill className="object-cover flex-1" />
          <div className="absolute inset-0 flex items-center justify-center bg-brand-accent/20">
            <span className="flex size-16 items-center justify-center rounded-full bg-white text-brand-darkGold shadow-lg">
              <FaRegCirclePlay className="text-3xl" />
            </span>
          </div>
        </div>
      </section>

      <section className="m-auto grid w-full max-w-310 grid-cols-2 gap-3 px-5 pb-16 lg:grid-cols-4">
        {stats.map(({ value, label, icon: Icon }) => (
          <div key={label} className="flex items-center gap-3 rounded-xl border border-brand-muted/40 bg-white p-4 shadow-sm">
            <div className="flex size-12 shrink-0 items-center justify-center bg-brand-gold/10 text-brand-darkGold"><Icon className="text-3xl" /></div>
            <p className="flex flex-col"><span className="text-2xl font-extrabold">{value}</span><span className="text-xs text-slate-500">{label}</span></p>
          </div>
        ))}
      </section>

      <section className="bg-brand-muted/20 px-5 py-16">
        <div className="m-auto max-w-310 text-center">
          <p className="font-bold text-brand-darkGold">OUR VALUES</p>
          <h2 className="mt-2 text-3xl font-extrabold text-brand-accent">Guided by Values, Driven by Trust</h2>
          <div className="mt-10 grid gap-8 text-left md:grid-cols-2 lg:grid-cols-4">
            {values.map(({ title, text, icon: Icon }) => (
              <article key={title} className="border-l-2 border-brand-gold pl-5">
                <Icon className="mb-4 text-brand-darkGold" size={30} />
                <h3 className="font-bold">{title}</h3><p className="mt-2 text-sm leading-relaxed text-slate-600">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="m-auto grid w-full max-w-310 gap-10 px-5 py-16 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="font-bold text-brand-darkGold">WHAT WE DO</p>
          <h2 className="mt-2 text-3xl font-extrabold text-brand-accent">Comprehensive Real Estate Solutions</h2>
          <p className="mt-4 leading-relaxed text-slate-600">We provide end-to-end real estate services tailored to meet your needs, whether you are buying, selling, renting, or investing.</p>
          <ul className="mt-6 space-y-3 text-sm text-slate-700">
            {['Property Buying & Selling', 'Rentals & Leasing', 'Property Management', 'Investment Consultation', 'Market Analysis & Valuation'].map((item) => <li key={item} className="flex items-center gap-2"><span className="size-2 rounded-full bg-brand-gold" />{item}</li>)}
          </ul>
          <div className="mt-7"><Button content="Explore Our Services" colors="bg-brand-navy text-white border-brand-navy hover:bg-transparent hover:text-brand-navy" /></div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="relative row-span-2 min-h-85 overflow-hidden rounded-xl"><Image src="/hero.jpg" alt="Modern house exterior" fill className="object-cover" /></div>
          <div className="relative min-h-41 overflow-hidden rounded-xl"><Image src="/hero3.jpg" alt="Luxury property" fill className="object-cover" /></div>
          <div className="relative min-h-41 overflow-hidden rounded-xl"><Image src="/hero1.jpg" alt="Apartment building" fill className="object-cover" /></div>
        </div>
      </section>

      <section className="bg-brand-muted/20 px-5 py-16">
        <div className="m-auto max-w-310 text-center">
          <p className="font-bold text-brand-darkGold">MEET OUR TEAM</p>
          <h2 className="mt-2 text-3xl font-extrabold text-brand-accent">The People Behind EstateHub</h2>
          <Swiper
            className="team-slider mt-10 !pb-12"
            modules={[Pagination]}
            pagination={{ clickable: true }}
            spaceBetween={18}
            slidesPerView={1}
            breakpoints={{ 640: { slidesPerView: 2 }, 1024: { slidesPerView: 4 } }}
          >
            {team.map((member, index) => (
              <SwiperSlide key={member.name}>
                <article className="group overflow-hidden rounded-xl bg-white text-left shadow-sm transition-transform duration-300 hover:-translate-y-1">
                  <div className="relative h-64 overflow-hidden bg-brand-navy">
                    <Image src={member.image} alt={member.name} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                    <span className="absolute bottom-3 right-3 flex size-9 items-center justify-center rounded-full bg-brand-darkGold text-white"><ArrowUpRight size={17} /></span>
                  </div>
                  <div className="border-t-2 border-brand-gold p-4"><h3 className="font-bold">{member.name}</h3><p className="text-sm text-slate-500">{member.role}</p></div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

   <Testimonials />   

      <section className="overflow-hidden border-y border-slate-200 bg-slate-50 py-8">
        <div className="m-auto max-w-310 px-5 text-center"><p className="font-bold text-brand-darkGold">OUR PARTNERS</p><h2 className="mt-2 text-2xl font-extrabold text-brand-accent">Trusted by Leading Brands</h2></div>
        <div className="partner-swiper mt-7">
          <Swiper
            modules={[Autoplay]}
            slidesPerView="auto"
            spaceBetween={48}
            loop={true}
            speed={4000}
            autoplay={{ delay: 1, disableOnInteraction: false }}
            allowTouchMove={false}
            className="linear-swiper"
          >
            {partners.map((brand) => (
              <SwiperSlide key={brand} style={{ width: 'auto' }}>
                <span className="text-xl font-bold text-brand-navy/60 whitespace-nowrap">
                  {brand}
                </span>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <section className="relative overflow-hidden bg-brand-accent px-5 py-16 text-white"><Image src="/BgImage.avif" alt="EstateHub property at dusk" fill className="object-cover opacity-25" /><div className="relative m-auto flex max-w-310 flex-col gap-6 md:flex-row md:items-center md:justify-between"><div><p className="font-bold text-brand-gold">START YOUR NEXT CHAPTER</p><h2 className="mt-2 max-w-lg text-3xl font-extrabold">Ready to Find Your Perfect Space?</h2><p className="mt-3 max-w-lg text-white/70">Let&apos;s work together to turn your real estate goals into reality.</p></div><Button content="Get in Touch" colors="bg-brand-darkGold text-white border-brand-darkGold hover:bg-transparent hover:border-white" /></div></section>
    </main>
  );
};

export default AboutUs;
