export default function StnContato() {
  return (
    <footer>
      <div class="loja">
        <img src={Logo} alt="Logo Next Vale" />
        <p>
            Manutenção, ampliação e construção de infraestruturas
        </p>
      </div>
      <div class="canais">
        <h2>WHATSAPP</h2>
        <a
          target="_blank"
          href="https://wa.me/5512981132013"
          class="link numero"
        >
          (12) 98113-2013
        </a>
        <div class="link">
          <a
            target="_blank"
            href="https://www.figma.com/file/LD9R5ybejjSWguA1t5yfnW/PORTIF%C3%93LIO%3A-LP---SERVI%C3%87OS---%2302?type=design&node-id=222-2&mode=design&t=Z4PMk7LaSET9sNU2-0">
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
                Rua Frans de Castro Holzwarth, 57 - sala 105 <br />Jd. Pereira do Amparo - 
                Jacareí - SP 12327-696
            </address>
          </a>
        </div>
        <div class="link">
          <a target="_blank" href="mailto:contato@nextvale.com.br">
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
          <ul>
            <li class="rede-social">
              <a target="_blank" href={Redes}>
                <svg
                  xmlns={xmlns}
                  fill="currentColor"
                  class={className}
                  viewBox="0 0 16 16"
                >
                  <path d={path}></path>
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div class="maps">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3664.4131173545934!2d-45.971390824127!3d-23.300765352071114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cdcb27631390b1%3A0x57fa2b914b355a4d!2sAtalho%20Info%20-%20Consultoria%20e%20Solu%C3%A7%C3%B5es%20em%20Inform%C3%A1tica!5e0!3m2!1spt-BR!2sbr!4v1699447878192!5m2!1spt-BR!2sbr"></iframe>
      </div>
    </footer>
  );
}