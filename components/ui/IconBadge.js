const sizeMap = {
    sm: { box: 'w-10 h-10', icon: 16 },
    md: { box: 'w-11 h-11', icon: 18 },
    lg: { box: 'w-12 h-12', icon: 20 },
}

const IconBadge = ({ icon: Icon, size = 'md', className = '' }) => {
    const { box, icon } = sizeMap[size]
    return (
        <div className={`flex items-center justify-center ${box} rounded-full bg-brand-navy text-brand-text shrink-0 ${className}`}>
            <Icon size={icon} />
        </div>
    )
}

export default IconBadge
