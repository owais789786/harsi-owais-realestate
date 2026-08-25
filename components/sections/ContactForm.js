"use client";

import { useForm } from "react-hook-form";
import { User, Mail, Phone, FileText, PenLine, Send } from "lucide-react";
import Card from "../ui/Card";
import FormField from "../ui/FormField";

// Validation Regex Patterns
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const PHONE_REGEX = /^\+?[0-9\s\-]{7,15}$/;
import Button from '../ui/Button'

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      fullName: "",
      email: "",
      phoneNumber: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (formData) => {
    console.log("Form Submitted Successfully:", formData);
  };    

  return (
    <Card className="w-full p-6 flex flex-col gap-2">
      <h2 className="text-brand-navy text-xl font-nunito font-extrabold">
        Send Us a Message
      </h2>
      <p className="text-slate-500 text-sm font-nunito">
        Fill out the form below and our team will get back to you shortly.
      </p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm mt-3"
      >
        {/* Full Name */}
        <FormField
          icon={User}
          type="text"
          placeholder="Full Name"
          error={errors.fullName}
          {...register("fullName", {
            required: "Full name is required",
            minLength: {
              value: 2,
              message: "Name must be at least 2 characters",
            },
          })}
        />

        {/* Email */}
        <FormField
          icon={Mail}
          type="email"
          placeholder="Email Address"
          error={errors.email}
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: EMAIL_REGEX,
              message: "Enter a valid email address",
            },
          })}
        />

        {/* Phone Number */}
        <FormField
          icon={Phone}
          type="tel"
          placeholder="Phone Number"
          error={errors.phoneNumber}
          {...register("phoneNumber", {
            required: "Phone number is required",
            pattern: {
              value: PHONE_REGEX,
              message: "Enter a valid phone number",
            },
          })}
        />

        {/* Subject */}
        <FormField
          icon={FileText}
          type="text"
          placeholder="Subject"
          error={errors.subject}
          {...register("subject", {
            required: "Subject is required",
            minLength: {
              value: 3,
              message: "Subject must be at least 3 characters",
            },
          })}
        />

        {/* Message Textarea */}
        <div className="sm:col-span-2 flex flex-col gap-1">
          <div
            className={`flex items-start gap-3 border bg-white p-3 rounded-xl h-28 transition-colors ${
              errors.message
                ? "border-red-500 animate-shake"
                : "border-slate-200 focus-within:border-brand-navy"
            }`}
          >
            <PenLine size={18} className="text-slate-400 shrink-0 mt-0.5" />
            <textarea
              placeholder="Message"
              className="bg-transparent placeholder-slate-400 text-brand-navy outline-none w-full h-full resize-none font-nunito text-sm"
              {...register("message", {
                required: "Message is required",
                minLength: {
                  value: 10,
                  message: "Message must be at least 10 characters",
                },
              })}
            />
          </div>
          {errors.message && (
            <span className="text-xs text-red-500 ml-1">
              {errors.message.message}
            </span>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="sm:col-span-2 bg-brand-navy hover:bg-brand-dark disabled:opacity-50 text-white font-nunito font-semibold flex items-center justify-center gap-2 w-full sm:w-fit sm:px-8 py-2.5 rounded-xl transition-colors mt-2"
        >
          <Send size={16} />    
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </form>
    </Card>
  );
};

export default ContactForm;