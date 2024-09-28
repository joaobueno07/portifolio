import Menu from '../menu/Menu';
import about from './About.module.css';
import { useState } from 'react';

export default function About() {

    const [width] = useState(window.innerWidth);

    return (
        <div>
            <Menu />
            { width > 1000 ? (
                    <div className={about.container}>
                        <div className={about.containerInfo}>
                            <h2 style={{fontSize: '4rem'}}>Quem sou eu?</h2>

                            <p className={about.center}>
                                Atualmente, sou estudante de Análise e Desenvolvimento de Sistemas.
                                Tenho 27 anos e estudo programação há 4 anos.
                            </p>
                        </div>

                        <div className={about.containerInfo}>
                            <h2 style={{fontSize: '4rem'}}>O que eu faço ?</h2>
                            
                            <p className={about.center}>
                                Criação de  websites e aplicações para o seu negócio,
                                como também API, sistemas completos para internet(front-end e back-end),
                                além de outros tipos de software.
                            </p>
                        </div>

                        <div className={about.containerInfo}>
                            <h2 style={{fontSize: '4rem'}}>Tecnologias</h2>
                            
                            <p className={about.center}>
                                Atualmente, trabalho com C# .NET (ASP.NET Core e EF Core) 
                                e tecnologias JavaScript (Node.js, React.js/Next.js) 
                            </p>
                        </div>

                        <div className={about.containerInfo}>
                            <h2 style={{fontSize: '4rem'}}>Curiosidades</h2>
                            
                            <p className={about.center}>
                               Possuo experiência na área de Marketing Digital, mexendo com Facebook Ads,
                               Google Ads, Google Analytics e Google Tag Manager, como também em plataformas de E-Commerce
                            </p>
                        </div>
                    </div>

                ) : ( 

                <div className={about.containerMobile}>
                    <div className={about.containerInfoMobile}>
                        <h3 style={{fontSize: '2rem'}}>Quem sou eu?</h3>

                        <p className={about.centerMobile}>
                            Atualmente, sou estudante de Análise e Desenvolvimento de Sistemas.
                            Tenho 27 anos e estudo programação há 4 anos.
                        </p>
                    </div>

                    <div className={about.containerInfoMobile}>
                        <h3 style={{fontSize: '2rem'}}>O que eu faço ?</h3>
                        
                        <p className={about.centerMobile}>
                            Atualmente, sou estudante de Análise e Desenvolvimento de Sistemas.
                            Tenho 27 anos e estudo programação há 4 anos.
                        </p>
                    </div>

                    <div className={about.containerInfoMobile}>
                        <h3 style={{fontSize: '2rem'}}>Tecnologias</h3>
                        
                        <p className={about.centerMobile}>
                            Atualmente, sou estudante de Análise e Desenvolvimento de Sistemas.
                            Tenho 27 anos e estudo programação há 4 anos.
                        </p>
                    </div>

                    <div className={about.containerInfoMobile}>
                        <h3 style={{fontSize: '2rem'}}>Curiosidades</h3>
                        
                        <p className={about.centerMobile}>
                            Atualmente, sou estudante de Análise e Desenvolvimento de Sistemas.
                            Tenho 27 anos e estudo programação há 4 anos.
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
}