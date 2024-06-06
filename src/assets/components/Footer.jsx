import Logo from "./img/logo.jpg";
import Arrow from "./img/arrow-up.svg";

export default function Footer() {
  return (
    <footer id="contato">
      <div>
        <div className="info">
          <img className="info-img" src={Logo} alt="Logo Atalho Info" />
          <p className="info-description">
            Soluções em Cabeamento Estruturado e Infra-Estrutura em TI
          </p>
        </div>
        <div className="canais">
          <a
            target="_blank"
            href="https://wa.me/5512981132013"
            className="canais-link"
          >
            <h2 className="canais-link-title">WHATSAPP</h2>
            <div className="canais-link-container">
              <svg
                className="whatsapp"
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                fill="currentColor"
                class="bi bi-whatsapp"
                viewBox="0 0 16 16"
              >
                <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
              </svg>
              <span> &nbsp; (12) 98113-2013 </span>
            </div>
            <a target="_blank" href="https://wa.me/5512981132013"></a>
          </a>
          <div className="canais-container">
            <a
              className="canais-container-link"
              target="_blank"
              href="https://www.google.com/maps?ll=-23.30077,-45.968816&z=13&t=m&hl=pt-BR&gl=BR&mapclient=embed&cid=6339427328509434445"
            >
              <i>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-geo-alt-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"></path>
                </svg>
              </i>
              <address>
                Rua Frans de Castro Holzwarth, 57 - sala 105 <br />
                Jd. Pereira do Amparo - Jacareí - SP 12327-696
              </address>
            </a>
          </div>
          <div className="canais-container">
            <a
              className="canais-container-link"
              target="_blank"
              href="mailto:contato@nextvale.com.br"
            >
              <i>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-envelope-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"></path>
                </svg>
              </i>
              contato@nextvale.com.br
            </a>
          </div>
        </div>
        <div class="maps">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14657.651957312313!2d-45.968816!3d-23.300770000000004!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cdcb27631390b1%3A0x57fa2b914b355a4d!2sAtalho%20Info%20-%20Consultoria%20e%20Solu%C3%A7%C3%B5es%20em%20Inform%C3%A1tica!5e0!3m2!1spt-BR!2sbr!4v1702910621072!5m2!1spt-BR!2sbr"
            width="400"
            height="220"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div className="direitos-reservados">
        <p>2023 © Todos os direitos reservados. Atalho Info</p>
        <div>
          <p>Voltar para o topo</p>{" "}
          <a href="#">
            <img src={Arrow} alt="" />
          </a>
        </div>
      </div>
    </footer>
  );
}
