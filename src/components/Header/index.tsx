import Logo from '@/assets/images/Logo.svg';
import IconUser from '@/assets/images/user.svg';
import IconAbout from '@/assets/images/about.svg';
import { Link } from '@tanstack/react-router';
import { ShoppingCart } from '../ShoppingCart';
import { MenuMobile } from '../MenuMobile';

export interface NavLink {
    name: string;
    href: string;
}

const navLinks: NavLink[] = [
    { name: 'Masculino', href: '/products' },
    { name: 'Feminino', href: '/products' },
    { name: 'Outlet', href: '/products' },
]

export const Header = () => {
    return (
        <div className="relative">
            <header className="fixed top-5 left-0 right-0 z-10 mx-10">
                <div className='bg-white text-black max-w-[1320] mx-auto flex justify-between items-center py-3 px-7 rounded-2xl mt-5'>
                    <Link to="/"><img src={Logo} alt="Logo Syntax Wear" className='w-32 md:w-36' /></Link>
                    <nav className='hidden lg:block'>
                        <ul className='flex gap-10'>
                            {navLinks.map((link) => (
                                <Link to={link.href} key={link.name}>
                                    {link.name}
                                </Link>
                            ))}
                        </ul>
                    </nav>
                    <nav>
                        <ul className='flex gap-4 md:gap-10 items-center'>
                            <li className='hidden lg:block'><Link to='/our-stores'>Nossas Lojas</Link></li>
                            <li className='hidden lg:block'><Link to='/about'>Sobre</Link></li>
                            <li className='lg:hidden'><MenuMobile  navLinks={navLinks}/></li>
                            <li className='hidden lg:block'><Link to="/sign-in"><img src={IconUser} alt="Logo de Usuário" /></Link></li>
                            <li className='hidden md:block'><a href="#"><img src={IconAbout} alt="Logo Sobre" /></a></li>
                            <li> {/* <a href="#"><img src={IconBag} alt="Logo de Compra" /></a> */}
                                <ShoppingCart />
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>

        </div>
    )
}