import Dtech from './img/dtech.svg'
import Intelbras from './img/intelbrass.svg'
import Nexans from './img/nexans.svg'
import Fluke from './img/fluke.svg'
import Fcp from './img/fcp.svg'
import Furukawa from './img/furukawa.svg'


export default function Stn_certificados() {
    return(
        <>
        <section className="stn-certificates">
            <h2 className="stn-certificates-title">Certificados:</h2>
            <ul className="stn-certificates-list">
                {/* <li className="stn-certificates-list-item">
                    <img className='certificados' src={Dtech} alt="dTech" />
                </li> */}
                <li className="stn-certificates-list-item">
                    <img className='certificados' src={Intelbras} alt="intelbras" />
                </li>
                <li className="stn-certificates-list-item">
                    <img className='certificados' src={Nexans} alt="Nexans" />
                </li>
                <li className="stn-certificates-list-item">
                    <img className='certificados' src={Fluke} alt="Fluke" />
                </li>
                {/* <li className="stn-certificates-list-item">
                    <img className='certificados' src={Fcp} alt="FCP" />
                </li> */}
                <li className="stn-certificates-list-item">
                    <img className='certificados' src={Furukawa} alt="FCP" />
                </li>
            </ul>
        </section>
        </>
    )
}