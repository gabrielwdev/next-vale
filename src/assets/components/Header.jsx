import Logo from "./img/nextvale-logo.jpg"
import Maps from "./img/maps.svg"
import Whatsapp from "./img/whatsapp.svg"
import Telefone from "./img/telefone.svg"
import Relogio from "./img/relogio.svg"

export default function Header() {

    return(
        <>
        <header className="header">  
            <div className="header-superior">
                <img className="logo" src={Logo} alt="Logo Next Vale" />
                <ul className="header-superior-lista">
                    <li className="header-superior-lista-itens">
                        <a href="" className="header-superior-lista-itens-ancora">
                            <img className="icon" src={Maps} alt="" />
                            <p className="informacoes">Rua Frans de Castro Holzwarth, 57 - sala 105 <br />Jd. Pereira do Amparo - Jacareí - SP 12327-696</p>
                        </a>
                    </li>
                    <li className="header-superior-lista-itens">
                        <a href="" className="header-superior-lista-itens-ancora">
                            <img className="icon" src={Whatsapp} alt="" />
                            <p className="informacoes">(12) 98113-2013</p>
                        </a>
                    </li>
                    <li className="header-superior-lista-itens">
                        <a href="" className="header-superior-lista-itens-ancora">
                            <img className="icon" src={Telefone} alt="" />
                            <p className="informacoes">(12) 98113-2013</p>
                        </a>
                    </li>
                    <li className="header-superior-lista-itens">
                        <a href="" className="header-superior-lista-itens-ancora">
                            <img className="icon" src={Relogio} alt="" />
                            <p className="informacoes">Seg - Sex: 08:00 - 17:00</p>
                        </a>
                    </li>
                </ul>
            </div>
            <nav  className="header-inferior">
                <ul className="header-inferior-list">
                    <li className="header-inferior-list-itens"><a className="header-inferior-list-itens-ancora" href="">Inicio</a></li>
                    <li className="header-inferior-list-itens"><a className="header-inferior-list-itens-ancora" href="">Sobre</a></li>
                    <li className="header-inferior-list-itens"><a className="header-inferior-list-itens-ancora" href="">Cabeamento Metálico e Fibra Óptica</a></li>
                    <li className="header-inferior-list-itens"><a className="header-inferior-list-itens-ancora" href="">Consultoria e Projetos</a></li>
                    <li className="header-inferior-list-itens"><a className="header-inferior-list-itens-ancora" href="">Contato</a></li>
                </ul>
            </nav>
        </header>
        </>
    )
}