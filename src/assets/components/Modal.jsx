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
                            <a target="_blank" href="https://www.google.com/maps/place/Atalho+Info+-+Consultoria+e+Solu%C3%A7%C3%B5es+em+Inform%C3%A1tica/@-23.30077,-45.968816,13z/data=!4m6!3m5!1s0x94cdcb27631390b1:0x57fa2b914b355a4d!8m2!3d-23.3007703!4d-45.9688159!16s%2Fg%2F11j2p4ykj1?hl=pt-BR&entry=ttu" className="hidden-modal-lista-itens-ancora">
                                <img className="hidden-modal-lista-itens-ancora-icon" src={Maps} alt="" />
                                <p className="hidden-modal-lista-itens-ancora-informacoes">Rua Frans de Castro Holzwarth, 57 - sala 105 <br />Jd. Pereira do Amparo - Jacareí - SP 12327-696</p>
                            </a>
                        </li>
                        <li className="hidden-modal-lista-itens">
                            <a target="_blank" href="https://wa.me/5512981132013" className="hidden-modal-lista-itens-ancora">
                                <img className="hidden-modal-lista-itens-ancora-icon" src={Whatsapp} alt="" />
                                <p className="hidden-modal-lista-itens-ancora-informacoes">(12) 98113-2013</p>
                            </a>
                        </li>
                        <li className="hidden-modal-lista-itens">
                            <a target="_blank" href="tel:+5512381132013" className="hidden-modal-lista-itens-ancora">
                                <img className="hidden-modal-lista-itens-ancora-icon" src={Telefone} alt="" />
                                <p className="hidden-modal-lista-itens-ancora-informacoes">(12) 98113-2013</p>
                            </a>
                        </li>
                        <li className="hidden-modal-lista-itens">
                            <a target="_blank" href="https://www.google.com/maps/place/Atalho+Info+-+Consultoria+e+Solu%C3%A7%C3%B5es+em+Inform%C3%A1tica/@-23.30077,-45.968816,13z/data=!4m6!3m5!1s0x94cdcb27631390b1:0x57fa2b914b355a4d!8m2!3d-23.3007703!4d-45.9688159!16s%2Fg%2F11j2p4ykj1?hl=pt-BR&entry=ttu" className="hidden-modal-lista-itens-ancora">
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
