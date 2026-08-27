function Button({ content, colors }) {
    return (
        <button className={`px-3 py-2 border-2 ${colors} text-md sm:text-md  rounded  transition-all font-syne`}>
            {content}
        </button>
    )
}

export default Button