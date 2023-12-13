import Cabo1 from './img/cabos-1.jpg'

export default function Stn_cabeamento() {
    return(
        <>
        <article className='stn-cabeamento'>
            <h2 className='stn-cabeamento-title'>CABEAMENTO METÁLICO E FIBRA ÓPTICA</h2>
            <p className='stn-cabeamento-description'>
                Implantação de Cabeamento Estruturado Certificado Metálico e Óptico de maneira 
                eficiente dentro das normas técnicas, com profissionais QUALIFICADOS e 
                CERTIFICADOS. Mão de Obra especializada. Atuamos com soluções em DATACENTERS, 
                Soluções Industriais, Comerciais e na Área de Saúde. A NEXTVALE possui 
                equipamentos para Certificação de Redes e também para FUSÃO em Fibra Óptica.
            </p>
            <div>
                <ul className='stn-cabeamento-list'>
                    <li className='stn-cabeamento-list-item'><img className='stn-cabeamento-list-item-img' src={Cabo1} alt="" /></li>
                    <li className='stn-cabeamento-list-item'><img className='stn-cabeamento-list-item-img' src={Cabo1} alt="" /></li>
                    <li className='stn-cabeamento-list-item'><img className='stn-cabeamento-list-item-img' src={Cabo1} alt="" /></li>
                    <li className='stn-cabeamento-list-item'><img className='stn-cabeamento-list-item-img' src={Cabo1} alt="" /></li>
                </ul>
            </div>
        </article>
        </>
    )
}