import { useEffect, useState } from 'react';
import { FaSearch, FaBell } from 'react-icons/fa';
import HoverDropdown from './HoverDropdown';
import SearchInput from './inputs/SearchInput';

export default function Header() {
    const [isOpaque, setIsOpaque] = useState(false);

    useEffect(() => {
        const isScrolled = () => {
            if (window.scrollY > 0) setIsOpaque(true);
            else setIsOpaque(false);
        };

        window.addEventListener('scroll', isScrolled);

        return () => window.removeEventListener('scroll', isScrolled);
    });

    return (
        <header
            className={`fixed top-0 left-0 w-screen select-none transition-colors duration-300 ${
                isOpaque ? 'bg-neutral-900' : 'bg-transparent'
            }`}
        >
            <div className="container mx-auto px-4 py-5 flex items-center">
                <a href="/">
                    <img
                        src="https://rb.gy/ulxxee"
                        width={100}
                        height={100}
                        alt="Netlfix"
                        title="Netflix"
                        className="object-contain mr-10 w-20 md:w-24"
                    />
                </a>

                <nav>
                    <HoverDropdown
                        button={
                            <span className="text-neutral-50 text-xs cursor-pointer md:hidden">
                                Navegar {'\u25BC'}
                            </span>
                        }
                    >
                        <ul className="bg-neutral-900/90 border-t-2 border-t-neutral-200 w-max text-center text-sm">
                            <li className="hover:bg-white/10">
                                <a href="/" className="navlink-dropdown">
                                    Início
                                </a>
                            </li>
                            <li className="hover:bg-white/10">
                                <a href="/" className="navlink-dropdown">
                                    Séries
                                </a>
                            </li>
                            <li className="hover:bg-white/10">
                                <a href="/" className="navlink-dropdown">
                                    Filmes
                                </a>
                            </li>
                            <li className="hover:bg-white/10">
                                <a href="/" className="navlink-dropdown">
                                    Bombando
                                </a>
                            </li>
                            <li className="hover:bg-white/10">
                                <a href="/" className="navlink-dropdown">
                                    Minha lista
                                </a>
                            </li>
                            <li className="hover:bg-white/10">
                                <a href="/" className="navlink-dropdown">
                                    Idioma e legendas
                                </a>
                            </li>
                        </ul>
                    </HoverDropdown>

                    <ul className="hidden space-x-4 md:flex">
                        <li>
                            <a href="/" className="navlink active">
                                Início
                            </a>
                        </li>
                        <li>
                            <a href="/" className="navlink">
                                Séries
                            </a>
                        </li>
                        <li>
                            <a href="/" className="navlink">
                                Filmes
                            </a>
                        </li>
                        <li>
                            <a href="/" className="navlink">
                                Bombando
                            </a>
                        </li>
                        <li>
                            <a href="/" className="navlink">
                                Minha lista
                            </a>
                        </li>
                        <li>
                            <a href="/" className="navlink">
                                Idioma e legendas
                            </a>
                        </li>
                    </ul>
                </nav>

                <div className="ml-auto text-neutral-200 space-x-6 flex items-center">
                    <SearchInput icon={<FaSearch />} />
                    <a href="/" className="navlink hidden lg:inline">
                        Infantil
                    </a>
                    <FaBell className="text-lg cursor-pointer" />

                    <div className="flex space-x-2 items-center cursor-pointer">
                        <img
                            src="https://rb.gy/g1pwyx"
                            alt=""
                            className="rounded"
                        />
                        <span className="text-xs">{'\u25BC'}</span>
                    </div>
                </div>
            </div>
        </header>
    );
}
