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
                                Atualmente, sou estudante de Análise e Desenvolvimento de Sistemas.
                                Tenho 27 anos e estudo programação há 4 anos.
                            </p>
                        </div>

                        <div className={about.containerInfo}>
                            <h2 style={{fontSize: '4rem'}}>Tecnologias</h2>
                            
                            <p className={about.center}>
                                Atualmente, sou estudante de Análise e Desenvolvimento de Sistemas.
                                Tenho 27 anos e estudo programação há 4 anos.
                            </p>
                        </div>

                        <div className={about.containerInfo}>
                            <h2 style={{fontSize: '4rem'}}>Curiosidades</h2>
                            
                            <p className={about.center}>
                                Atualmente, sou estudante de Análise e Desenvolvimento de Sistemas.
                                Tenho 27 anos e estudo programação há 4 anos.
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