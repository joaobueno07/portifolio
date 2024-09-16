import Menu from '../menu/Menu';
import project from './Projects.module.css';
import { useState } from 'react';


export default function Projects() {
    const [width] = useState(window.innerWidth);

    return (
        <div className={project.container}>
            <Menu/>
            { width > 1000 ? (
                <div className={project.content}>
                    <div className={project.containerContent}>
                        <img width={80} style={{padding: '2% 2%'}}
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg"/>

                        <div className={project.text}>
                            <h1 className={project.title}>Projetos Back-End com C#</h1>
                        </div>

                    </div>

                    <div className={project.containerContent}>
                        <img width={80} style={{padding: '2% 2%'}}
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg"/>

                        <div>
                            <h1 className={project.title}>Projetos Back-End com Node.js</h1>
                        </div>
                    </div>
                
                    <div className={project.containerContent}>
                        <img width={80} style={{padding: '2% 2%'}}
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"/>

                        <div>
                            <h1 className={project.title}>Projetos Front-End com React</h1>
                        </div>
                    </div>
                </div>
                ) : (
                <div className={project.containerMobile}>
                    <div className={project.containerMobileContent}>
                        <img width={80} style={{padding: '2% 2%'}}
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg"/>

                        <div>
                            <h1 className={project.titleMobile}>Projetos Back-End com C#</h1>

                            <ul>
                                <li className={project.colorWhite}>API de E-commerce</li>
                                <li className={project.colorWhite}>Sistema de Estacionamento</li>
                                <li className={project.colorWhite}>ERP de gestão de estoque</li>
                            </ul>
                        </div>

                    </div>

                    <div className={project.containerMobileContent}>
                        <img width={80} style={{padding: '2% 2%'}}
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg"/>

                        <div>
                            <h1 className={project.titleMobile}>Projetos Back-End com Node.js</h1>
                            <ul>
                                <li className={project.colorWhite}>API de E-commerce</li>
                                <li className={project.colorWhite}>Sistema de Estacionamento</li>
                                <li className={project.colorWhite}>ERP de gestão de estoque</li>
                            </ul>
                        </div>
                    </div>
                
                    <div className={project.containerMobileContent}>
                        <img width={80} style={{padding: '2% 2%'}}
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"/>

                        <div>
                            <h1 className={project.titleMobile}>Projetos Front-End com React</h1>
                            <ul>
                                <li className={project.colorWhite}>Este Portifólio</li>
                            </ul>
                        </div>
                    </div>
                </div>
                )
            }
        </div>
    );
}