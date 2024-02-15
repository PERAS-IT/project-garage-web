import { Link } from 'react-router-dom'
import logo from '../assets/LOGO-1.png'
import Button from '../components/Button'

export default function Header({ children }) {
    return (
        <div className=" bg-[#091D1F] ">
            <header className="flex justify-between mx-auto max-w-[1440] px-[4rem] py-3 items-center text-white">
                <div ><img src={logo} alt="logo" /></div>
                {children}
            </header>
        </div>
    )
}