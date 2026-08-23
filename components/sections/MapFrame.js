import Card from '../ui/Card'

const MapFrame = () => {
    return (
        <Card className="p-2 relative overflow-hidden h-full min-h-[280px]">
            <iframe
                title="IR Property Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26442.271960249566!2d-118.41165242784533!3d34.07362038755088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bc04d6d147ab%3A0xd6c7c379fd081ed1!2sBeverly%20Hills%2C%20CA%2090210!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                className="w-full h-full min-h-[280px] rounded-xl border-0"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            />
        </Card>
    )
}

export default MapFrame
