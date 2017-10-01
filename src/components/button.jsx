const Button = ({ label, style }) => {
    return (
        <button className={'btn-sm btn btn-' + style}>
            {label}
        </button>
    )
}

export default Button