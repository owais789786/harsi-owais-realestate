import { ShieldCheck, Home, Headphones, Lock } from 'lucide-react'
import IconFeature from '../ui/IconFeature'

const features = [
    {
        icon: ShieldCheck,
        title: 'Trusted by Thousands',
        description: 'Over 4,200+ happy clients and counting.',
    },
    {
        icon: Home,
        title: 'Wide Range of Properties',
        description: 'Find properties that match your lifestyle and budget.',
    },
    {
        icon: Headphones,
        title: '24/7 Support',
        description: 'Our team is always here to help you anytime.',
    },
    {
        icon: Lock,
        title: 'Safe & Secure',
        description: 'Your information is protected with top security.',
    },
]

const TrustIndicators = () => {
    return (
        <section className="w-full py-10">
            <div className="max-w-310 mx-auto px-5">
                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:divide-x divide-brand-navy/20">
                    {features.map((feature, index) => (
                        <li key={index} className="lg:px-4 lg:first:pl-0 lg:last:pr-0">
                            <IconFeature icon={feature.icon} title={feature.title} size="sm">
                                <p className=''>{feature.description}</p>
                            </IconFeature>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default TrustIndicators
