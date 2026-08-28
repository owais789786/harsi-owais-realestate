const Card = ({ children, className = '' }) => {
    return (
        <div className={`rounded-2xl bg-white shadow-sm border w-full border-slate-100 ${className}`}>
            {children}
        </div>
    )
}

export default Card
