import content from './Content.module.css';
import { useState } from 'react';

export default function Content() {

    const [width] = useState(window.innerWidth);

    return (
        <div className={content.containerMobile}>
            { width > 1000 ? (
                    <div className={content.infoDesk}>
                        <h3 className={content.center} style={{fontSize: '8rem'}}>
                            Olá, me chamo João Carlos
                        </h3>

                        <div className={content.textDesk}>
                            <p className={content.center} style={{fontSize: '1.3rem'}}>
                                Sou desenvolvedor capaz de criar aplicações e sistemas completos 
                                para você e seu negócio.
                            </p>
                        </div>

                        <div className={content.buttonDeskContainer}>
                            <a href='/projetos' className={content.button}>
                                <p style={{fontSize: '1.3rem'}}> 
                                    Veja meus projetos
                                </p>
                            </a>
                        </div>
                    </div>
            ) : (
                <div className={content.infoMobile}>
                    <h3 className={content.centerMobile} style={{fontSize: '4rem'}}>
                        Olá, me chamo João Carlos
                    </h3>

                    <div className={content.text}>
                        <div className={content.textContainer}>
                            <p className={content.centerMobile}>
                                Sou desenvolvedor capaz de criar aplicações e sistemas completos 
                                para você e seu negócio.
                            </p>
                        </div>
                    </div>

                    <div className={content.buttonMobileContainer}>
                        <a href='/projetos' className={content.buttonMobile}>
                            <p> 
                                Veja meus projetos
                            </p>
                        </a>
                    </div>
                </div>
            )}
        </div>
    );
}