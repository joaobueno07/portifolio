import { useState } from 'react';
import Menu from '../menu/Menu';
import contact from './Contact.module.css';

export default function Contact() {

    const [width] = useState(window.innerWidth);

    return (
        <div className={contact.container}>
            <Menu />
            {
                width > 1000 ? (
                    <div className={contact.containerContent}>
                        <div className={contact.content}>
                            <h2 className={contact.textTitle}>Vamos desenvolver uma aplicação juntos ?</h2>
                            <p className={contact.textSubtitle}>Fique a vontade para entrar em contato!</p>

                            <button className={contact.emailButton}>
                                <a style={{fontSize: '1.2rem', fontFamily: 'Poppins, sans-serif'}}
                                href="mailto:buenotjoao07@gmail.com?subject=Desenvolvimento de Projeto"> Enviar um e-mail </a>
                            </button>
                        </div>
                    </div> 
                ) : (
                    <div className={contact.containerContentMobile}>
                        <div className={contact.contentMobile}>
                            <h2 className={contact.textTitleMobile}>Vamos desenvolver uma aplicação juntos ?</h2>
                            <p className={contact.textSubtitleMobile}>Fique a vontade para entrar em contato!</p>

                            <button className={contact.emailButtonMobile}>
                                <a style={{fontSize: '1.2rem'}}
                                href="mailto:buenotjoao07@gmail.com?subject=Desenvolvimento de Projeto"> Enviar um e-mail </a>
                            </button>
                        </div>
                    </div>
                )
            }
        </div>
    );
}