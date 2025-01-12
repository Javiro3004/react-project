import './button.css'

interface props {
    label : string
    parentMethod : () => void
}

export const Button = ({label,parentMethod}:props) => {
    return (
        <button className='custom-button' onClick={parentMethod}>
            {label}
        </button>
    )
}