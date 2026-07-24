const whatsappNumber = "5562982365624";
const defaultMessage = encodeURIComponent(
  "Olá! Vim do seu site e queria mais informações sobre os vídeos.",
);

const whatsAppLink = (message?: string) =>
  `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    message ?? "Olá! Vim do seu site e queria mais informações sobre os vídeos.",
  )}`;

const services = [
  {
    number: "01",
    title: "Movimentos naturais",
    text: "Piscadas, respiração, movimento de orelhas, pelos, cauda e expressões sutis para dar vida à imagem.",
    tag: "Ideal para pets e pessoas",
  },
  {
    number: "02",
    title: "Ações cinematográficas",
    text: "Latidos, saltos, entradas de cena, câmera em movimento e ações criadas de acordo com a sua ideia.",
    tag: "Mais impacto e emoção",
  },
  {
    number: "03",
    title: "Produtos em destaque",
    text: "Transforme fotos de produtos em anúncios com luz, profundidade, reflexos e movimento profissional.",
    tag: "Perfeito para vendas",
  },
  {
    number: "04",
    title: "Conteúdo para redes",
    text: "Vídeos preparados para Reels, Stories, TikTok, anúncios, feed e WhatsApp, no formato que você precisa.",
    tag: "Pronto para publicar",
  },
  {
    number: "05",
    title: "Fotos antigas com vida",
    text: "Movimentos leves e respeitosos para transformar uma lembrança especial em uma cena emocionante.",
    tag: "Memórias e homenagens",
  },
  {
    number: "06",
    title: "Direção criativa",
    text: "Ainda não sabe como animar sua foto? Nós analisamos a imagem e sugerimos os movimentos que mais combinam.",
    tag: "Você não precisa criar o roteiro",
  },
];

const plans = [
  {
    name: "Pacote Teste",
    eyebrow: "Para experimentar",
    videos: "2 vídeos",
    price: "39,90",
    description: "Uma forma simples e barata de conhecer o resultado antes de pedir um pacote maior.",
    features: [
      "2 vídeos de até 5 segundos",
      "1 imagem enviada por você",
      "Formato vertical (Reels/Stories)",
      "Movimentos simples e naturais",
      "Entrega em até 3 dias úteis",
    ],
    note: "Sem rodada de alteração",
    popular: false,
  },
  {
    name: "Pacote Essencial",
    eyebrow: "Para começar",
    videos: "3 vídeos",
    price: "99,90",
    description: "Para quem quer testar diferentes movimentos e começar a publicar conteúdo com frequência.",
    features: [
      "3 vídeos de até 6 segundos",
      "Até 2 imagens diferentes",
      "1 formato à sua escolha",
      "Movimentos personalizados",
      "1 rodada de ajustes",
      "Entrega em até 4 dias úteis",
    ],
    note: "Bom para pets e perfis pessoais",
    popular: false,
  },
  {
    name: "Pacote Criador",
    eyebrow: "Mais escolhido",
    videos: "5 vídeos",
    price: "179,90",
    description: "O equilíbrio ideal para criar uma sequência de posts, anúncios ou apresentações de produtos.",
    features: [
      "5 vídeos de até 8 segundos",
      "Até 4 imagens diferentes",
      "2 formatos à sua escolha",
      "Movimentos e câmera cinematográfica",
      "2 rodadas de ajustes",
      "Entrega em até 5 dias úteis",
    ],
    note: "Melhor custo-benefício",
    popular: true,
  },
  {
    name: "Pacote Impacto",
    eyebrow: "Para vender mais",
    videos: "10 vídeos",
    price: "299,90",
    description: "Um pacote completo para campanhas, lançamentos e um mês inteiro de conteúdo visual.",
    features: [
      "10 vídeos de até 10 segundos",
      "Até 8 imagens diferentes",
      "Vertical, quadrado e horizontal",
      "Direção criativa personalizada",
      "2 rodadas de ajustes",
      "Prioridade na produção",
      "Entrega em até 7 dias úteis",
    ],
    note: "Ideal para marcas e negócios",
    popular: false,
  },
];

const extras = [
  ["Roteiro de movimento", "A partir de R$ 15"],
  ["Formato adicional", "R$ 10 por vídeo"],
  ["Legenda para publicação", "A partir de R$ 20"],
  ["Vídeo extra no pacote", "A partir de R$ 30"],
  ["Entrega expressa", "Consultar disponibilidade"],
  ["Projeto personalizado", "Orçamento sob medida"],
];

const faqs = [
  [
    "Que tipo de imagem eu posso enviar?",
    "Fotos de pets, pessoas, produtos, ambientes, ilustrações e artes digitais. Quanto melhor a nitidez e a iluminação da imagem, melhor tende a ficar o vídeo.",
  ],
  [
    "Eu preciso saber qual movimento pedir?",
    "Não. Você pode explicar sua ideia ou simplesmente enviar a imagem. Nós analisamos e sugerimos movimentos que fiquem naturais e valorizem o conteúdo.",
  ],
  [
    "O resultado fica exatamente como eu imaginei?",
    "A criação usa inteligência artificial e pode apresentar pequenas variações. Antes da produção, alinhamos a ideia e usamos as rodadas de ajustes incluídas no pacote para chegar ao melhor resultado possível.",
  ],
  [
    "Em qual formato eu recebo os vídeos?",
    "Os arquivos são entregues em MP4, prontos para celular e redes sociais. Dependendo do pacote, você pode escolher vertical 9:16, quadrado 1:1 ou horizontal 16:9.",
  ],
  [
    "Como faço o pagamento?",
    "Depois de conversarmos no WhatsApp e confirmarmos o pedido, você recebe as opções de pagamento e as instruções para enviar suas imagens.",
  ],
  [
    "Posso pedir mais de 10 vídeos?",
    "Sim. Para quantidades maiores, campanhas ou trabalhos recorrentes, preparamos um orçamento personalizado com condições especiais.",
  ],
];

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m5 12 4 4L19 6" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <path d="M16 3.2A12.6 12.6 0 0 0 5.1 22.1L3.4 28.4l6.5-1.7A12.6 12.6 0 1 0 16 3.2Z" />
      <path d="M12.2 9.7c-.3-.8-.7-.8-1.1-.8h-.9c-.3 0-.8.1-1.2.6-.4.5-1.6 1.6-1.6 3.9s1.7 4.5 1.9 4.8c.2.3 3.3 5.1 8.1 6.9 4 1.5 4.8 1.2 5.7 1.1.9-.1 2.8-1.2 3.2-2.3.4-1.1.4-2 .3-2.2-.1-.2-.4-.3-.9-.6l-3.3-1.5c-.4-.2-.8-.3-1.1.3-.3.5-1.2 1.5-1.5 1.8-.3.3-.6.4-1 .1-.5-.2-2-.7-3.8-2.3a14.3 14.3 0 0 1-2.6-3.2c-.3-.5 0-.7.2-1l.8-.9c.2-.3.3-.5.5-.8.1-.3.1-.6 0-.9l-1.7-4Z" />
    </svg>
  );
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <div className="shell header-inner">
          <a className="brand" href="#inicio" aria-label="CineMotion Studio - início">
            <span className="brand-mark">
              <span />
            </span>
            <span>
              <strong>CineMotion</strong>
              <small>STUDIO</small>
            </span>
          </a>

          <nav className="desktop-nav" aria-label="Navegação principal">
            <a href="#servicos">Serviços</a>
            <a href="#como-funciona">Como funciona</a>
            <a href="#pacotes">Pacotes</a>
            <a href="#duvidas">Dúvidas</a>
          </nav>

          <a
            className="header-cta"
            href={`https://wa.me/${whatsappNumber}?text=${defaultMessage}`}
            target="_blank"
            rel="noreferrer"
          >
            Falar no WhatsApp
            <ArrowIcon />
          </a>
        </div>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-glow glow-one" />
        <div className="hero-glow glow-two" />
        <div className="shell hero-grid">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="live-dot" />
              Transformamos fotos em experiências
            </div>
            <h1>
              Sua imagem.
              <br />
              <span>Agora em movimento.</span>
            </h1>
            <p className="hero-lead">
              Você envia uma foto. Nós transformamos em um vídeo vivo, expressivo
              e cinematográfico — pronto para emocionar, chamar atenção e vender.
            </p>
            <div className="hero-actions">
              <a
                className="button button-primary"
                href={whatsAppLink()}
                target="_blank"
                rel="noreferrer"
              >
                Quero animar minha imagem
                <ArrowIcon />
              </a>
              <a className="button button-secondary" href="#como-funciona">
                Veja como funciona
              </a>
            </div>
            <div className="hero-meta">
              <div>
                <strong>MP4</strong>
                <span>Pronto para publicar</span>
              </div>
              <div>
                <strong>3–7 dias</strong>
                <span>Entrega ágil</span>
              </div>
              <div>
                <strong>100% online</strong>
                <span>Atendimento fácil</span>
              </div>
            </div>
          </div>

          <div className="hero-visual" aria-label="Demonstração de foto transformada em vídeo">
            <div className="visual-grid" />
            <div className="video-card video-card-back">
              <div className="card-label">
                <span>ANTES</span>
                Foto estática
              </div>
              <div className="pet-scene muted-scene">
                <div className="scene-moon" />
                <span className="pet-emoji" role="img" aria-label="Cachorro">
                  🐕
                </span>
              </div>
            </div>
            <div className="video-card video-card-front">
              <div className="card-topline">
                <div className="card-label">
                  <span>DEPOIS</span>
                  Cena cinematográfica
                </div>
                <div className="quality-badge">HD</div>
              </div>
              <div className="pet-scene">
                <div className="scene-moon" />
                <div className="motion-line line-one" />
                <div className="motion-line line-two" />
                <div className="motion-line line-three" />
                <span className="pet-emoji animated-pet" role="img" aria-label="Cachorro em movimento">
                  🐕
                </span>
                <div className="play-button">
                  <span />
                </div>
              </div>
              <div className="video-timeline">
                <span className="pause">Ⅱ</span>
                <div className="track">
                  <span />
                  <i />
                </div>
                <span>00:06</span>
              </div>
            </div>
            <div className="floating-note note-top">
              <span>✦</span>
              Movimento natural
            </div>
            <div className="floating-note note-bottom">
              <span>↗</span>
              Pronto para Reels
            </div>
          </div>
        </div>

        <div className="shell category-strip">
          <p>UMA FOTO PODE VIRAR</p>
          <div>
            <span>Pet com vida</span>
            <i />
            <span>Anúncio de produto</span>
            <i />
            <span>Memória emocionante</span>
            <i />
            <span>Conteúdo para redes</span>
          </div>
        </div>
      </section>

      <section className="section services-section" id="servicos">
        <div className="shell">
          <div className="section-heading split-heading">
            <div>
              <span className="kicker">O QUE NÓS CRIAMOS</span>
              <h2>Da imagem parada para uma cena que chama atenção.</h2>
            </div>
            <p>
              Cada animação é pensada de acordo com a foto, a intenção do vídeo e
              a rede social onde ele será publicado.
            </p>
          </div>
          <div className="service-grid">
            {services.map((service) => (
              <article className="service-card" key={service.number}>
                <div className="service-number">{service.number}</div>
                <div className="service-icon">
                  <span />
                  <i />
                </div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <span className="service-tag">{service.tag}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section process-section" id="como-funciona">
        <div className="shell process-shell">
          <div className="process-copy">
            <span className="kicker">SIMPLES DO INÍCIO AO FIM</span>
            <h2>Você manda a foto. A gente faz ela ganhar vida.</h2>
            <p>
              Todo o atendimento acontece pelo WhatsApp, sem formulários
              complicados e sem você precisar entender de edição.
            </p>
            <a
              className="text-link"
              href={whatsAppLink()}
              target="_blank"
              rel="noreferrer"
            >
              Começar meu projeto
              <ArrowIcon />
            </a>
          </div>

          <ol className="process-list">
            <li>
              <span>01</span>
              <div>
                <h3>Escolha seu pacote</h3>
                <p>Veja a quantidade de vídeos e escolha a opção ideal.</p>
              </div>
            </li>
            <li>
              <span>02</span>
              <div>
                <h3>Envie suas imagens</h3>
                <p>Mande as fotos em boa qualidade pelo WhatsApp.</p>
              </div>
            </li>
            <li>
              <span>03</span>
              <div>
                <h3>Conte a sua ideia</h3>
                <p>Explique o movimento desejado ou deixe a criação conosco.</p>
              </div>
            </li>
            <li>
              <span>04</span>
              <div>
                <h3>Receba e publique</h3>
                <p>Aprove o resultado e receba os vídeos em MP4.</p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      <section className="section packages-section" id="pacotes">
        <div className="package-glow" />
        <div className="shell">
          <div className="section-heading centered-heading">
            <span className="kicker">PACOTES DE LANÇAMENTO</span>
            <h2>Comece com 2 vídeos ou crie uma campanha completa.</h2>
            <p>
              Escolha seu pacote e fale diretamente conosco. Os valores abaixo
              são promocionais e podem variar em projetos especiais.
            </p>
          </div>
          <div className="plans-grid">
            {plans.map((plan) => (
              <article
                className={`plan-card ${plan.popular ? "popular" : ""}`}
                key={plan.name}
              >
                {plan.popular && <div className="popular-ribbon">MAIS ESCOLHIDO</div>}
                <div className="plan-top">
                  <span>{plan.eyebrow}</span>
                  <h3>{plan.name}</h3>
                  <strong>{plan.videos}</strong>
                  <p>{plan.description}</p>
                </div>
                <div className="price">
                  <span>R$</span>
                  <b>{plan.price}</b>
                  <small>por pacote</small>
                </div>
                <ul>
                  {plan.features.map((feature) => (
                    <li key={feature}>
                      <CheckIcon />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="plan-note">{plan.note}</div>
                <a
                  className={`button ${plan.popular ? "button-primary" : "button-outline"}`}
                  href={whatsAppLink(
                    `Olá! Vim do seu site e queria mais informações sobre o ${plan.name} de ${plan.videos}.`,
                  )}
                  target="_blank"
                  rel="noreferrer"
                >
                  Escolher este pacote
                  <ArrowIcon />
                </a>
              </article>
            ))}
          </div>
          <p className="price-disclaimer">
            * A produção começa após confirmação do pagamento e envio de todas as
            imagens. Prazos contam em dias úteis.
          </p>
        </div>
      </section>

      <section className="section extras-section">
        <div className="shell extras-shell">
          <div className="extras-heading">
            <span className="kicker">PERSONALIZE SEU PEDIDO</span>
            <h2>Serviços extras</h2>
            <p>Adicione apenas o que fizer sentido para o seu projeto.</p>
          </div>
          <div className="extras-list">
            {extras.map(([name, price]) => (
              <div className="extra-row" key={name}>
                <span>{name}</span>
                <strong>{price}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section audience-section">
        <div className="shell audience-shell">
          <div className="audience-card">
            <span className="kicker">FEITO PARA CHAMAR ATENÇÃO</span>
            <h2>Um serviço. Muitas possibilidades.</h2>
            <div className="audience-pills">
              <span>🐾 Perfis de pets</span>
              <span>◈ Lojas online</span>
              <span>● Criadores de conteúdo</span>
              <span>✦ Restaurantes</span>
              <span>◆ Marcas e negócios</span>
              <span>♡ Presentes e homenagens</span>
            </div>
          </div>
          <div className="quote-card">
            <div className="quote-mark">“</div>
            <blockquote>
              Uma boa imagem faz a pessoa parar. Uma imagem em movimento faz ela
              querer assistir até o final.
            </blockquote>
            <p>CineMotion Studio</p>
          </div>
        </div>
      </section>

      <section className="section faq-section" id="duvidas">
        <div className="shell faq-shell">
          <div className="faq-heading">
            <span className="kicker">DÚVIDAS FREQUENTES</span>
            <h2>Antes de enviar sua imagem</h2>
            <p>
              Ainda ficou com alguma dúvida? Fale conosco no WhatsApp e conte o
              que você gostaria de criar.
            </p>
            <a
              className="button button-secondary"
              href={whatsAppLink()}
              target="_blank"
              rel="noreferrer"
            >
              Tirar uma dúvida
              <ArrowIcon />
            </a>
          </div>
          <div className="faq-list">
            {faqs.map(([question, answer], index) => (
              <details key={question}>
                <summary>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  {question}
                  <i />
                </summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="final-cta">
        <div className="cta-orb orb-one" />
        <div className="cta-orb orb-two" />
        <div className="shell final-cta-inner">
          <span className="kicker">SUA IDEIA PODE SE MOVER</span>
          <h2>Tem uma foto especial?</h2>
          <p>Envie agora e descubra como ela pode ganhar vida.</p>
          <a
            className="button button-whatsapp"
            href={whatsAppLink()}
            target="_blank"
            rel="noreferrer"
          >
            <WhatsAppIcon />
            Conversar no WhatsApp
            <ArrowIcon />
          </a>
          <small>Resposta pelo WhatsApp • Atendimento 100% online</small>
        </div>
      </section>

      <footer>
        <div className="shell footer-top">
          <a className="brand footer-brand" href="#inicio">
            <span className="brand-mark">
              <span />
            </span>
            <span>
              <strong>CineMotion</strong>
              <small>STUDIO</small>
            </span>
          </a>
          <p>Transformamos imagens estáticas em vídeos que emocionam e vendem.</p>
          <div className="footer-links">
            <a href="#servicos">Serviços</a>
            <a href="#pacotes">Pacotes</a>
            <a href="#duvidas">Dúvidas</a>
            <a href={whatsAppLink()} target="_blank" rel="noreferrer">
              WhatsApp
            </a>
          </div>
        </div>
        <div className="shell footer-bottom">
          <span>© 2026 CineMotion Studio. Todos os direitos reservados.</span>
          <span>Imagens com vida. Histórias em movimento.</span>
        </div>
      </footer>

      <a
        className="floating-whatsapp"
        href={whatsAppLink()}
        target="_blank"
        rel="noreferrer"
        aria-label="Falar no WhatsApp"
      >
        <WhatsAppIcon />
        <span>Fale conosco</span>
      </a>
    </main>
  );
}
