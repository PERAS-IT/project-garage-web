const backgroundClass = {
    white: "bg-white hover:bg-gray-300",
    black: "bg-[#122729]",
    red: "bg-red-600"
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
export default function Button({ background, width, color, onClick, children }) {
    const classes = `
    ${background ? backgroundClass[background] : ""}
    ${color ? colorClass[color] : ""}
    ${width ? widthClass[width] : ""}`;

    return (
        <div>
            <button className={`btn rounded-full ${classes}`}>{children}</button>
        </div>
    );
}