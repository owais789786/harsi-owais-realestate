function Button({ content, colors }) {
    return (
        <button className={`px-3 py-1 border-2 ${colors}  rounded  transition-all font-syne`}>
            {content}
        </button>
    )
}

export default Button