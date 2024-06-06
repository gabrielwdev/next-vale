import Logo from "./img/logo.jpg"
import Maps from "./img/maps.svg"
import Whatsapp from "./img/whatsapp.svg"
import Telefone from "./img/telefone.svg"
import Relogio from "./img/relogio.svg"
import arrow from './img/arrow.png'

import Modal from './Modal.jsx'
import { useState } from "react"

export default function Header() {

    const [openModal, setOpenModal] = useState(false)

    return(
        <>
        <header>  
            <div className="superior">
                <img className="logo" src={Logo} alt="Logo Next Vale" />
                <ul className="superior-lista">
                    <li className="superior-lista-itens">
                        <a target="_blank" href="https://www.google.com/maps?ll=-23.30077,-45.968816&z=13&t=m&hl=pt-BR&gl=BR&mapclient=embed&cid=6339427328509434445" className="superior-lista-itens-ancora">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16">
                                <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10"/>
                                <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
                            </svg>
                            <p className="informacoes">Rua Frans de Castro Holzwarth, 57 - sala 105 <br />Jd. Pereira do Amparo - Jacareí - SP 12327-696</p>
                        </a>
                    </li>
                    <li className="superior-lista-itens">
                        <a target="_blank" href="https://wa.me/5512981132013" className="superior-lista-itens-ancora">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-whatsapp" viewBox="0 0 16 16">
                                <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
                            </svg>
                            <p className="informacoes">(12) 98113-2013</p>
                        </a>
                    </li>
                    <li className="superior-lista-itens telefone">
                        <a target="_blank" href="tel:+5512381132013" className="superior-lista-itens-ancora">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-telephone" viewBox="0 0 16 16">
                                <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                            </svg>
                            <p className="informacoes">(12) 3951-2013</p>
                        </a>
                    </li>
                    <li className="superior-lista-itens">
                        <a target="_blank" href="https://www.google.com/maps?ll=-23.30077,-45.968816&z=13&t=m&hl=pt-BR&gl=BR&mapclient=embed&cid=6339427328509434445" className="superior-lista-itens-ancora">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-clock" viewBox="0 0 16 16">
                                <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z"/>
                                <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0"/>
                            </svg>
                            <p className="informacoes">Seg - Sex: 08:00 - 17:00</p>
                        </a>
                    </li>
                </ul>
            </div>
            <nav  className="inferior">
                <ul className="inferior-list">
                    <li className="inferior-list-itens"><a className="inferior-list-itens-ancora" href="#solucoes">Inicio</a></li>
                    <li className="inferior-list-itens"><a className="inferior-list-itens-ancora" href="#sobre">Sobre</a></li>
                    <li className="inferior-list-itens"><a className="inferior-list-itens-ancora" href="#cabeamento">Cabeamento Metálico e Fibra Óptica</a></li>
                    <li className="inferior-list-itens"><a className="inferior-list-itens-ancora" href="#projetos">Consultoria e Projetos</a></li>
                    <li className="inferior-list-itens"><a className="inferior-list-itens-ancora" href="#contato">Contato</a></li>
                </ul>
                
                <div className="hidden">
                    <button id="arrow-open" onClick={() => setOpenModal(true)}><img src={arrow} width={'40px'} alt="" /></button>
                    
                    <Modal isOpen={openModal} setModalOpen={() => setOpenModal(!openModal)}/>
                    
                </div>
            </nav>
        </header>
        </>
    )
}