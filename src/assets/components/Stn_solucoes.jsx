import Datacenter from "./img/datacenter.jpg";
import Cabeamento from "./img/cabeamento-estruturado.jpg";
import Rede from "./img/certificacao-de-rede.jpg";
import Cftv from "./img/cftv.jpg";
import Controle from "./img/controle-de-acesso.jpg";
import Fibra from "./img/fibra-optica.jpg";
import Telefonia from "./img/telefonia.jpg";
import Wireless from "./img/rede-wireless.jpg";

export default function Stn_solucoes() {
  return (
    <>
      <section id="solucoes" className="stn-solucoes">
        <h2 className="stn-solucoes-title">SOLUÇÕES OFERECIDAS:</h2>
        <ul className="list-cards">
          <li className="list-cards-card">
            <img src={Datacenter} alt="" className="img" />
            <h3 className="titulo">Datacenter</h3>
            <p className="descricao">
              Montagem de infra-estrutura <br /> de alta complexidade.
            </p>
          </li>

          <li className="list-cards-card par">
            <img src={Controle} alt="" className="img" />
            <h3 className="titulo">Controle de Acesso</h3>
            <p className="descricao">
              Maior segurança e integridade. <br /> Soluções biométricas, Magnéticas, <br /> RFID e leitura de Íris.
            </p>
          </li>

          <li className="list-cards-card">
            <img src={Wireless} alt="" className="img" />
            <h3 className="titulo">Rede Wireless 4G/5G</h3>
            <p className="descricao">
              Soluções indoor/outdoor e  <br /> Implantação de Wireless  <br /> (2.4Ghz/5Ghz).
            </p>
          </li>

          <li className="list-cards-card par">
            <img src={Fibra} alt="" className="img" />
            <h3 className="titulo">Fibra Óptica</h3>
            <p className="descricao">
              Soluções de cabeamento óptico <br /> de alto desempenho.
            </p>
          </li>

          <li className="list-cards-card">
            <img src={Cabeamento} alt="" className="img" />
            <h3 className="titulo">Cabeamento Estruturado</h3>
            <p className="descricao">
              Soluções metálicas de acordo <br /> com seu ambiente sendo ele <br /> Comercial, Industrial e Datacenters.
            </p>
          </li>
          <li className="list-cards-card par">
            <img src={Cftv} alt="" className="img" />
            <h3 className="titulo">CFTV</h3>
            <p className="descricao">
              Imagens em alta resolução <br /> com tecnologia IP ou VHD.
            </p>
          </li>
          <li className="list-cards-card">
            <img src={Telefonia} alt="" className="img" />
            <h3 className="titulo">Telefonia</h3>
            <p className="descricao">
            Rede Analógica ou IP.
            </p>
          </li>
          <li className="list-cards-card par">
            <img src={Rede} alt="" className="img" />
            <h3 className="titulo">Certificação de Rede</h3>
            <p className="descricao">
              Infra-Estrutura Metálica/Óptica
            </p>
          </li>
        </ul>

        <a href="https://wa.me/5512981132013"><input type="button" className="btn" value="Entre em Contato Conosco" /></a>
      </section>
    </>
  );
}
