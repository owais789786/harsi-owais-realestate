'use client'

import { useState } from 'react'
import { User, Mail, Phone, FileText, PenLine, Send } from 'lucide-react'
import Card from '../ui/Card'
import FormField from '../ui/FormField'
import Button from '../ui/Button'

const ContactForm = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phoneNumber: '',
        subject: '',
        message: '',
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData)
    }

    return (
        <Card className="w-full p-6 flex flex-col gap-2">
            <h2 className="text-brand-navy text-xl font-nunito font-extrabold">
                Send Us a Message
            </h2>
            <p className="text-slate-500 text-sm font-nunito">
                Fill out the form below and our team will get back to you shortly.
            </p>

            <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm mt-3">
                <FormField
                    icon={User}
                    type="text"
                    name="fullName"
                    placeholder="Full Name"
                    value={formData.fullName}
                    onChange={handleChange}
                />
                <FormField
                    icon={Mail}
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                />
                <FormField
                    icon={Phone}
                    type="tel"
                    name="phoneNumber"
                    placeholder="Phone Number"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                />
                <FormField
                    icon={FileText}
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                />

                <div className="sm:col-span-2 flex items-start gap-3 border border-slate-200 focus-within:border-brand-navy bg-white p-3 rounded-xl h-28 transition-colors">
                    <PenLine size={18} className="text-slate-400 shrink-0 mt-0.5" />
                    <textarea
                        name="message"
                        placeholder="Message"
                        value={formData.message}
                        onChange={handleChange}
                        className="bg-transparent placeholder-slate-400 text-brand-navy outline-none w-full h-full resize-none font-nunito text-sm"
                    />
                </div>

                <Button content={'Send Message'} colors={'text-brand-text hover:text-brand-navy bg-brand-navy hover:[text-shadow:0_2px_4px_rgba(0,0,0,1.5)]  border-brand-navy hover:bg-transparent hover:border-brand-navy'} />
            </form>
        </Card>
    )
}

export default ContactForm
