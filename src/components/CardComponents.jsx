const backgroundClass = {
    white: "bg-white hover:bg-gray-100",
    black: "bg-[#122729]"
}

const colorClass = {
    white: "text-white"
}


export default function CardComponent({ img, bg, color, width, height, title, children }) {
    const classes = `
        ${bg ? backgroundClass[bg] : ""}
        ${color ? colorClass[color] : ""}
    `;

    return (
        <div className={`shadow-[0_0_15px_rgb(0,0,0,0.6)] rounded-[4rem] p-7 flex flex-col gap-4 justify-center items-center ${classes}`}
            style={{ minWidth: `${width}rem`, maxHeight: `${height}rem` }}>
            {children}
        </div>
    )
}