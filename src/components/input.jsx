
const defaultClass = 'w-full focus:outline px-14 py-4 border rounded-full focus:ring-2'

export default function Input({ type = 'text', placeholder, value, onChange, name, errorMessage }) {
    const extendedClass = errorMessage
        ? 'border-red-500 focus:ring-red-300'
        : 'border-gray-300 focus:border-blue-500 focus:ring-blue-300'
    return (
        <div className="flex justify-between gap-4 items-center">
            <h1 className="text-white">{placeholder}</h1>
            <div className="w-20rem">
                <input
                    type={type}
                    className={`${defaultClass} ${extendedClass}`}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    name={name}>
                </input>
            </div>
            {errorMessage ? (
                <small className="text-red-400">{errorMessage}</small>
            ) : null}
        </div>
    )
}