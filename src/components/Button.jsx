const backgroundClass = {
    white: "bg-white hover:bg-gray-300",
    black: "bg-[#122729]",
    red: "bg-red-600 hover:bg-red-500",
    yellow: "bg-yellow-500 hover:bg-yellow-400",
    blue: "bg-blue-500 hover:bg-blue-400",
    green: "bg-[#26AEB7] hover:bg-[#44D9E3]"
}

const colorClass = {
    white: "text-white",
    orange: "text-orange-400"
}

const widthClass = {
    lg: "w-[10rem]",
    md: "w-[7rem]",
    sm: "w-[4rem]"
}
export default function Button({ background, width, color, onClick, children, type }) {
    const classes = `
    ${background ? backgroundClass[background] : ""}
    ${color ? colorClass[color] : ""}
    ${width ? widthClass[width] : ""}`;

    return (
        <div>
            <button className={`btn rounded-full ${classes}`} onClick={() => { onClick() }} type={type}>{children}</button>
        </div>
    );
}