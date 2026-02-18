import Logo from '@/assets/images/Logo.svg';
import IconUser from '@/assets/images/user.svg';
import IconAbout from '@/assets/images/about.svg';
import IconBag from '@/assets/images/bag.svg';


export const Header = () => {
    return (
        <div className="relative">
            <header className="fixed top-0 left-0 right-0 z-10 mx-10 bg-accent">
                <div className='bg-white max-w-[1320] mx-auto flex justify-between items-center py-5 px-7 rounded-2xl mt-5'>
                    <img src={Logo} alt="Logo Syntax Wear" className='w-32 md:w-36'/>
                    <nav className='hidden md:block'>
                        <ul className='flex gap-10'>
                            <li><a href="#">Masculino</a></li>
                            <li><a href="#">Feminino</a></li>
                            <li><a href="#">Outlet</a></li>
                        </ul>
                    </nav>
                    <nav>
                        <ul className='flex gap-4 md:gap-10'>
                            <li className='hidden md:block'><a href="#">Nossas Lojas</a></li>
                            <li className='hidden md:block'><a href="#">Sobre</a></li>
                            <li><a href="#"><img src={IconUser} alt="Logo usuário" /></a></li>
                            <li><a href="#"><img src={IconAbout} alt="Logo Sobre" /></a></li>
                            <li><a href="#"><img src={IconBag} alt="Logo de Compra" /></a></li>
                        </ul>
                    </nav>
                </div>
            </header>

        </div>
    )
}