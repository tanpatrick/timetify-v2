const Button = ({ label, style, onClick }) => {
    return (
        <button className={'btn-sm btn btn-' + style} onClick={onClick}>
            {label}
        </button>
    )
}

export default Button