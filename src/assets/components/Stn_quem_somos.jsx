import img from './img/quem-somos.jpg'


export default function Stn_quem_somos() {
  return (
    <>
      <article id='sobre' className='stn-sobre'>
        <div className='stn-sobre-container'>
          <h2 className="stn-sobre-container-subtitulo">Quem Somos</h2>
          <p className="stn-sobre-container-descricao">
            Atalho Info – uma empresa especializada em cabeamento
            estruturado metálico e fibra óptica. uma empresa séria, com
            profissionais qualificados e certificados, atuando a mais de 20 anos
            no segmento de TI. (Infraestrutura e Certificações de Rede,
            Datacenters, Cabo par-metálico, Fibra-Óptica e Sistemas de Segurança
            Eletrônica CFTV) Presente no Mercado desde 2004.
          </p>
        </div>
        <aside className='stn-sobre-aside'>
          <img className='stn-sobre-aside-img' src={img} alt="Foto Infraestrutura de TI" />
        </aside>
      </article>
    </>
  );
}
