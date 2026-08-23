import IconBadge from './IconBadge'

const IconFeature = ({ icon, title, size = 'md', children }) => {
    return (
        <div className="flex items-start gap-4">
            <IconBadge icon={icon} size={size} />
            <div>
                <h3 className="text-base font-semibold text-brand-navy font-nunito leading-none">
                    {title}
                </h3>
                <div className="text-sm font-normal text-slate-500 font-nunito mt-1.5 space-y-0.5">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default IconFeature
