const PageHeader = ({ eyebrow, title, description }) => {
    return (
        <div className="w-full max-w-lg py-16 sm:py-20 px-5">
            <div className="flex items-center gap-3">
                <div className="w-7.5 h-px bg-brand-gold"></div>
                <p className="text-xs md:text-sm font-semibold text-brand-gold font-nunito tracking-wide">
                    {eyebrow}
                </p>
            </div>
            <h1 className="text-[clamp(35px,10.00px+7.81vw,60px)] text-brand-text font-nunito font-extrabold">
                {title}
            </h1>
            {description && (
                <p className="text-base md:text-md text-brand-text  font-nunito">
                    {description}
                </p>
            )}
        </div>
    )
}

export default PageHeader
