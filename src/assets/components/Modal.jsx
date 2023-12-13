import React from "react"

import Maps from "./img/maps.svg"
import Whatsapp from "./img/whatsapp.svg"
import Telefone from "./img/telefone.svg"
import Relogio from "./img/relogio.svg"
import Arrow from './img/arrow.png'

export default function Modal({isOpen, setModalOpen}) {
    if (isOpen) {
        return (  
            <>  
                
                <div className="hidden-modal">
                    <button id="arrow-close" onClick={setModalOpen}><img className="arrow" src={Arrow} width={'40px'} alt="" /></button>
                    <ul className="hidden-modal-lista">
                        <li className="hidden-modal-lista-itens">
                            <a href="" className="hidden-modal-lista-itens-ancora">
                                <img className="hidden-modal-lista-itens-ancora-icon" src={Maps} alt="" />
                                <p className="hidden-modal-lista-itens-ancora-informacoes">Rua Frans de Castro Holzwarth, 57 - sala 105 <br />Jd. Pereira do Amparo - Jacareí - SP 12327-696</p>
                            </a>
                        </li>
                        <li className="hidden-modal-lista-itens">
                            <a href="" className="hidden-modal-lista-itens-ancora">
                                <img className="hidden-modal-lista-itens-ancora-icon" src={Whatsapp} alt="" />
                                <p className="hidden-modal-lista-itens-ancora-informacoes">(12) 98113-2013</p>
                            </a>
                        </li>
                        <li className="hidden-modal-lista-itens">
                            <a href="" className="hidden-modal-lista-itens-ancora">
                                <img className="hidden-modal-lista-itens-ancora-icon" src={Telefone} alt="" />
                                <p className="hidden-modal-lista-itens-ancora-informacoes">(12) 98113-2013</p>
                            </a>
                        </li>
                        <li className="hidden-modal-lista-itens">
                            <a href="" className="hidden-modal-lista-itens-ancora">
                                <img className="hidden-modal-lista-itens-ancora-icon" src={Relogio} alt="" />
                                <p className="hidden-modal-lista-itens-ancora-informacoes">Seg - Sex: 08:00 - 17:00</p>
                            </a>
                        </li>
                    </ul>
                </div>
            </>
        )
    }
    return null
}
