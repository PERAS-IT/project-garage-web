
import carWallpaper from '../assets/Car-wallpaper.png'

export default function Title({ textTitle }) {
    return (
        <div className="bg-[#091D1F]">
            <div className='flex flex-col text-center justify-center py-[0.5rem]'>
                <h1 className='text-white text-[5rem]'>{textTitle}</h1>
                <img src={carWallpaper} alt="car-wall-paper" className='-mb-[6rem] py-4 px-10' />
            </div>
        </div>
    )
}