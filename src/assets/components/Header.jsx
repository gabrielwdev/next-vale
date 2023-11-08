import Logo from "./img/nextvale-logo.jpg"
import Maps from "./img/maps.svg"
import Whatsapp from "./img/whatsapp.svg"
import Telefone from "./img/telefone.svg"
import Relogio from "./img/relogio.svg"

export default function Header() {


    return(
        <>
        <header>
            
                <img src={Logo} alt="Logo Next Vale" />
                <ul>
                    <li className="header-infomation">
                        <img src={Maps} alt="" />
                        <p>Rua Frans de Castro Holzwarth, 57 - sala 105Jd. Pereira do Amparo - Jacareí - SP 12327-696</p>
                    </li>
                    <li>
                        <img src={Whatsapp} alt="" />
                        <img src={Telefone} alt="" />
                        <p>(12) 98113-2013</p>
                    </li>
                    <li>
                        <img src={Relogio} alt="" />
                        <p></p>
                    </li>
                </ul>
        </header>
        </>
    )
}