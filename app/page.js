import Hero from '@/components/sections/Hero';
import PropertiesForSale from '@/components/sections/PropertiesForSale';
import BlogSection from '@/components/sections/BlogSection';
import { NewsLetter } from '@/components/sections/NewsLetter';

export default function Page() {
  return (
    <div>
      <Hero />
      <PropertiesForSale />
      <BlogSection />
      <NewsLetter />
    </div>
  )
}
