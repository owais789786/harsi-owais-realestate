import ContactForm from './ContactForm'
import GetInTouch from './GetInTouch'
import MapFrame from './MapFrame'
import TrustIndicators from './TrustIndicator'
import PageHeader from '../ui/PageHeader'

const ContactUs = () => {
    return (
        <section className="font-nunito  bg-brand-muted">
            <div className="relative bg-[url(/BgImage.avif)] pt-20 bg-cover bg-center">
                <div className="absolute inset-0 bg-brand-dark/70"></div>
                <div className="relative m-auto w-full max-w-310">
                    <PageHeader
                        eyebrow="GET IN TOUCH"
                        title="Contact Us"
                        description="Have questions or need assistance? We're here to help you find the perfect property."
                    />
                </div>
            </div>

            <main className="m-auto w-full max-w-310  px-5 py-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <ContactForm />
                    <GetInTouch />
                    <MapFrame />
                </div>
            </main>

            <TrustIndicators />
        </section>
    )
}

export default ContactUs
