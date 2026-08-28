    import { MapPin, Mail, Phone, Clock } from 'lucide-react'
    import Card from '../ui/Card'
    import IconFeature from '../ui/IconFeature'

    const GetInTouch = () => {
        return (
            <Card className="p-6 flex flex-col gap-5 md:col-span-2 lg:col-span-1">
                <h2 className="text-xl font-nunito font-extrabold text-brand-navy">
                    Get In Touch
                    <div className="w-[45px] h-[3px] bg-brand-gold mt-2"></div>
                </h2>

                <address className="not-italic flex flex-col gap-5">
                    <IconFeature icon={MapPin} title="Address">
                        <p>123 Real Estate Avenue,<br />Beverly Hills, CA 90210, USA</p>
                    </IconFeature>

                    <IconFeature icon={Mail} title="Email Us">
                        <a href="mailto:info@estatehub.com" className="hover:text-brand-navy transition-colors">
                            info@estatehub.com
                        </a>
                    </IconFeature>

                    <IconFeature icon={Phone} title="Call Us">
                        <a href="tel:+15551234567" className="hover:text-brand-navy transition-colors">
                            +1 (555) 123-4567
                        </a>
                    </IconFeature>

                    <IconFeature icon={Clock} title="Office Hours">
                        <p>Mon - Fri: 9:00 AM - 6:00 PM</p>
                        <p>Sat: 10:00 AM - 4:00 PM</p>
                    </IconFeature>
                </address>
            </Card>
        )
    }

    export default GetInTouch
