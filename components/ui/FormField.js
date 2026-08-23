const FormField = ({ icon: Icon, className = '', ...props }) => {
    return (
        <div className={`flex items-center gap-3 border border-slate-200 focus-within:border-brand-navy bg-white p-3 rounded-xl transition-colors ${className}`}>
            <Icon size={18} className="text-slate-400 shrink-0" />
            <input
                className="bg-transparent placeholder-slate-400 text-brand-navy outline-none w-full font-nunito text-sm"
                {...props}
            />
        </div>
    )
}

export default FormField
