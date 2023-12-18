import Projeto from './img/projetos.jpg'

export default function Stn_projetos() {
    return(
        <>
        <article id='projetos' className='stn-projetos'>
            <div className='stn-projetos-container'>
                <h2 className="stn-projetos-container-subtitulo">CONSULTORIA E PROJETOS</h2>
                <p className="stn-projetos-container-descricao">
                    A NEXTVALE possui profissionais capacitados para prestar Serviço de Consultoria
                    e fazer <br /> Projetos para a Rede de dados de sua Empresa.
                </p>
            </div>
            <aside className='stn-projetos-lateral'><img className='stn-projetos-lateral-img' src={Projeto} alt="Projetos" /></aside>
        </article>
        </>
    )
}