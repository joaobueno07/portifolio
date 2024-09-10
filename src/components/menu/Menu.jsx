import { useState } from 'react';
import menu from './Menu.module.css';



export default function Menu() {

    const [width] = useState(window.innerWidth);
    const [menuHamburger, setMenuHamburger] = useState("src/assets/menu-hamburger.svg");
    const [isActive, setActive] = useState(false);

    const handleMenuIcon = () => {
        if (menuHamburger === "src/assets/menu-hamburger.svg") {
            setMenuHamburger("src/assets/menu-close.svg");
            setActive(true);
        } else {
            setMenuHamburger("src/assets/menu-hamburger.svg");
            setActive(false);
        }
    }

    return (
        <div className={menu.container}>
            {
                width > 1000 ?
                (<ul className={menu.categories}>
                    <li>
                        <a href='/'>Home</a>
                    </li>

                    <li>
                        <a href='/sobre'>Quem sou eu ?</a>
                    </li>

                    <li>
                        <a href="/projetos">Projetos</a>
                    </li>

                    <li>
                        <a href="/contato">Contato</a>
                    </li>

                    <li>
                        <a href="https://www.linkedin.com/in/jo%C3%A3o-bueno-7b0799261/">Linkedin</a>
                    </li>

                    <li>
                        <a href="https://www.github.com/joaobueno07">Github</a>
                    </li>
                </ul>
                ) : (
                    <div className={menu.containerMobile}>
                        <div className={menu.mobileIcons}>
                            <img id='profile' src="/photo_profile.png" width={70} 
                            style={{border: "2px solid #000", borderRadius: "50%",}}/>

                            <img src={menuHamburger} width={50} onClick={handleMenuIcon}/>
                        </div>

                        {
                            isActive ? (
                                <div className={menu.categoriesMobile}>
                                    <ul>
                                        <li>
                                            <a href="/">Home</a>
                                        </li>
                                        <li>
                                            <a href="/sobre">Quem sou eu?</a>
                                        </li>

                                        <li>
                                            <a href="/projetos">Projetos</a>
                                        </li>

                                        <li>
                                            <a href="/contato">Contato</a>
                                        </li>

                                        <li>
                                            <a href="https://www.linkedin.com/in/jo%C3%A3o-bueno-7b0799261/">Linkedin</a>
                                        </li>

                                        <li>
                                            <a href="https://www.github.com/joaobueno07">Github</a>
                                        </li>
                                    </ul>
                                </div>
                            ) : (
                                <div className={menu.categoriesNone}>
                                    <ul>
                                        <li>
                                            <a href="/">Home</a>
                                        </li>
                                        <li>
                                            <a href="/sobre">Quem sou eu?</a>
                                        </li>

                                        <li>
                                            <a href="/projetos">Projetos</a>
                                        </li>

                                        <li>
                                            <a href="/contato">Contato</a>
                                        </li>

                                        <li>
                                            <a href="https://www.linkedin.com/in/jo%C3%A3o-bueno-7b0799261/">Linkedin</a>
                                        </li>

                                        <li>
                                            <a href="https://www.github.com/joaobueno07">Github</a>
                                        </li>
                                    </ul>
                                </div>
                            )
                        }
                    </div>
                )
            }
        </div>
    );
}