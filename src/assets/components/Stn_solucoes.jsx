import img from "./img/datacenter.jpg";

export default function Stn_solucoes() {
  return (
    <>
      <section className="stn-solucoes">
        <h2 className="stn-solucoes-title">SOLUÇÕES OFERECIDAS:</h2>
        <ul className="list-cards">
          <li className="list-cards-card">
            <img src={img} alt="" className="img" />
            <h3 className="titulo">Datacenter</h3>
            <p className="descricao">
              Montagem de infra-estrutura <br /> de alta complexidade.
            </p>
          </li>
        
        
          <li className="list-cards-card">
            <img src={img} alt="" className="img" />
            <h3 className="titulo">Datacenter</h3>
            <p className="descricao">
              Montagem de infra-estrutura <br /> de alta complexidade.
            </p>
          </li>
        
        
          <li className="list-cards-card">
            <img src={img} alt="" className="img" />
            <h3 className="titulo">Datacenter</h3>
            <p className="descricao">
              Montagem de infra-estrutura <br /> de alta complexidade.
            </p>
          </li>
        
        
          <li className="list-cards-card">
            <img src={img} alt="" className="img" />
            <h3 className="titulo">Datacenter</h3>
            <p className="descricao">
              Montagem de infra-estrutura <br /> de alta complexidade.
            </p>
          </li>
        
        
          <li className="list-cards-card par">
            <img src={img} alt="" className="img" />
            <h3 className="titulo">Datacenter</h3>
            <p className="descricao">
              Montagem de infra-estrutura <br /> de alta complexidade.
            </p>
          </li>
        
        

        </ul>
        
        <input type="button" className="btn" value="Entre em Contato Conosco" />
      </section>
    </>
  );
}
