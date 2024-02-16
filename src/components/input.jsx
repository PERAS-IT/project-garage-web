
const defaultClass = 'w-full focus:outline px-8 py-2 border rounded-full focus:ring-2'

export default function Input({ type = 'text', width, placeholder, value, onChange, name, error }) {
    const extendedClass = error
        ? 'border-red-500 focus:ring-red-300'
        : 'border-gray-300 focus:border-blue-500 focus:ring-blue-300'
    return (
        <div className="flex justify-between gap-5 items-center">
            <h1 className="text-white">{placeholder}</h1>
            <div style={{ width: `${width}rem` }}>
                <input
                    type={type}
                    className={`${defaultClass} ${extendedClass}`}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    name={name}>
                </input>

            </div>

        </div >
    )
}