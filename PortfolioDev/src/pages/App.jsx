import { useState } from 'react'
import './App.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import CodeIcon from '@mui/icons-material/Code';
import DatasetIcon from '@mui/icons-material/Dataset';
import ComputerIcon from '@mui/icons-material/Computer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='portfolio-header'>
        <div>
          <h1>Kleyton Holanda</h1>
        </div>

        <div className='portfolio-nav'>
          <nav>
            <a href='#about'>Sobre</a>
            <a href='#projects'>Projetos</a>
            <a href="#skills">Skills</a>
            <a href='#contact'>Contato</a>
          </nav>
        </div>

        <div>
          <a href="#contact"><button className='btn-projects'>Entre em Contato</button></a>
        </div>
      </div>

      <section className='section-portfolio-banner'>
        <div>
          <div>
            <h1 className='portfolio-title'>Desenvolvedor</h1>
          </div>
          <div>
            <h1 className='portfolio-subtitle'>Web</h1>
          </div>
        </div>

        <div>
          <p className='portfolio-description'>Olá, meu nome é Kleyton Holanda, sou um desenvolvedor web apaixonado por criar soluções digitais inovadoras. Com experiência em front-end e back-end, estou sempre em busca de novos desafios para aprimorar minhas habilidades e contribuir para projetos impactantes.</p>
        </div>

        <div className='btns-section'>
          <div>
            <a href='#projects'><button className='btn-projects' >Ver Projetos</button></a>

          </div>

          <div>
            <a href="/Curriculo Kleyton Holanda.pdf" download="Curriculo Kleyton Holanda.pdf">
              <button className='btn-section-cv'>Download CV</button>
            </a>
          </div>
        </div>

        <div className='section-media'>
          <div>
            <a href='https://www.linkedin.com/in/kleytonholanda/' target='_blank'><LinkedInIcon /></a>
          </div>

          <div>
            <a href='https://github.com/Kehs4' target='_blank'><GitHubIcon /></a>
          </div>

          <div>
            <a href='https://www.instagram.com/kleytonholanda/' target='_blank'><InstagramIcon /></a>
          </div>

          <div>
            <a href='mailto:kleytonholanda1@hotmail.com' target='_blank'><EmailIcon /></a>
          </div>
        </div>
      </section>

      <section className='section-portfolio-about' id='about'>
        <div>
          <h2 className='about-title' id='#about'>Sobre Mim</h2>
        </div>

        <div>
          <p className='about-description'>Sou um desenvolvedor web dedicado, com habilidades em HTML, CSS, JavaScript e frameworks modernos como React e Node.js. Tenho experiência em criar sites responsivos e aplicações web eficientes. Estou sempre buscando aprender novas tecnologias e aprimorar minhas habilidades para entregar soluções de alta qualidade.</p>
        </div>
      </section>

      <section className='section-portfolio-projects' id='projects'>
        <div>
          <h2 className='projects-title' id='#projects'>Projetos</h2>
        </div>

        <div className='projects-cards'>
          <div className='card-project'>
            <img src="/Temperatura.png" alt="Project 1" className='img-temperatura'/>
            <h3 className='card-project-title'>Temperatura</h3>
            <p className='card-project-description'>Nesse projeto realizei uma página onde é possível visualizar dados meteorológicos em tempo real de cidades ao redor do mundo, integrado via API WeatherAPI, framework utilizado React.js</p>
            <a href='https://github.com/Kehs4/Temperatura' target="_blank" className='card-project-link'><GitHubIcon/> Código</a>
          </div>

          <div className='card-project'>
            <img src="/KLDigital.png" alt="Project 2" className='img-kldigital'/>
            <h3 className='card-project-title'>KL Digital</h3>
            <p className='card-project-description'>Projeto pessoal de uma página para uma empresa que presta serviços digitais, utilizado HTML e CSS.</p>
            <a href='https://github.com/Kehs4/kldigital' target="_blank" className='card-project-link'><GitHubIcon/> Código</a>
          </div>

          <div className='card-project'>
            
            <h3 className='card-project-title'>In progress..</h3>
            <p className='card-project-description'>WIP...</p>
            <a href='https://github.com/Kehs4/' className='card-project-link'><GitHubIcon/> Perfil</a>
          </div>
        </div>
      </section>

      <section className='section-portfolio-skills' id='skills'>
        <div>
          <h2 className='skills-title' id='#skills'>Minhas Experiências</h2>
        </div>

        <div>
          <p className='skills-description'>Tecnologias e áreas em que tenho experiência e conhecimento para entregar projetos de alta qualidade.</p>
        </div>

        <div className='box-skills-cards'>


          <div className='skills-card'>
            <div>
              <h1 className='skill-image'><CodeIcon /></h1>
            </div>

            <div>
              <h1 className='skills-card-title'>Frontend Development</h1>

              <div>
                <p className='skills-card-description'>Criação de interfaces modernas e responsivas com foco na experiência do usuário.</p>
              </div>
            </div>

            <div className='card-skill'>
              <div className='card-skill-line-one'>
                <div>
                  <p>React</p>
                </div>

                <div>
                  <p>Next.js</p>
                </div>

                <div>
                  <p>Angular</p>
                </div>
              </div>

              <div className='card-skill-line-two'>
                <div>
                  <p>JavaScript</p>
                </div>

                <div>
                  <p>CSS</p>
                </div>
              </div>

            </div>
          </div>

          <div className='skills-card'>
            <div>
              <h1 className='skill-image'><DatasetIcon /></h1>
            </div>

            <div>
              <h1 className='skills-card-title'>Backend Development</h1>

              <div>
                <p className='skills-card-description'>Desenvolvimento de APIs robustas e escaláveis para suportar aplicações web.</p>

              </div>
            </div>

            <div className='card-skill'>
              <div className='card-skill-line-one'>
                <div>
                  <p>Node.js</p>
                </div>

                <div>
                  <p>Express.js</p>
                </div>

                <div>
                  <p>Delphi</p>
                </div>
              </div>

              <div className='card-skill-line-two'>
                <div>
                  <p>PostgreSQL</p>
                </div>

                <div>
                  <p>MySQL</p>
                </div>
              </div>

            </div>
          </div>

          <div className='skills-card'>
            <div>
              <h1 className='skill-image'><ComputerIcon /></h1>
            </div>
            <div>
              <h1 className='skills-card-title'>Outras Habilidades</h1>

              <div>
                <p className='skills-card-description'>Conhecimentos adicionais que complementam minhas habilidades de desenvolvimento web.</p>
              </div>
            </div>

            <div className='card-skill'>
              <div className='card-skill-line-one'>
                <div>
                  <p>Git</p>
                </div>

                <div>
                  <p>Docker</p>
                </div>

                <div>
                  <p>Agile Methodologies</p>
                </div>
              </div>

              <div className='card-skill-line-two'>
                <div>
                  <p>UI/UX Design</p>
                </div>

                <div>
                  <p>Testing</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      <section className='section-portfolio-contact' id='contact'>
        <div>
          <h2 className='contact-title' id='#contact'>Contato</h2>
        </div>

        <div className='box-contact-form'>
          <div>
            <p className='contact-description'>Estou aberto a novas oportunidades e colaborações. Se você deseja entrar em contato comigo, por favor, envie um e-mail. </p>
          </div>

          <div className='box-contact'>
            <div>
              <h2 className='contact-info'>Informações de Contato</h2>

              <div className='info-contact'>

                <div>
                  <label htmlFor="info-email">E-mail</label>
                  <p id='info-email'>kleytonholanda1@hotmail.com</p>
                </div>

                <div>
                  <label htmlFor="info-phone">Telefone</label>
                  <p id='info-phone'>+55 (11) 95903-2466</p>
                </div>

                <div>
                  <label htmlFor="info-location">Localização</label>
                  <p id='info-location'>São Paulo, SP, Brasil</p>
                </div>
              </div>
            </div>

            <div className='line-contact'>
            </div>

            <div className='box-contact-form'>
              <form action="submit">
                <div style={{ display: 'flex', gap: '10px', width: '100%', textAlign: 'left' }}>
                  <div>
                    <label htmlFor="contact-name" style={{ color: 'white' }}>Nome</label>
                    <input type="text" placeholder='Seu nome' className='input-contact' />
                  </div>

                  <div>
                    <label htmlFor="contact-email" style={{ color: 'white' }}>Email</label>
                    <input type="email" placeholder='seu@email.com' className='input-contact' />
                  </div>
                </div>

                <div style={{ width: '100%', textAlign: 'left', marginBottom: '10px' }}>
                  <div>
                    <label htmlFor="contact-title" style={{ color: 'white' }}>Assunto</label>
                    <input type="text" placeholder='Título' className='input-contact' />
                  </div>

                  <div style={{ width: '100%', textAlign: 'left', marginTop: '10px' }}>
                    <label htmlFor="contact-message" style={{ color: 'white' }}>Mensagem</label>

                    <textarea placeholder='Sua mensagem...' className='textarea-contact' ></textarea>
                  </div>


                  <button type='submit' className='btn-projects' style={{ width: '100%', marginTop: '20px', padding: '15px' }}>Enviar Mensagem</button>
                </div>

              </form>
            </div>
          </div>


        </div>
      </section>

      <div className='portfolio-footer'>
        <div>
          <p>© 2025 Kleyton Holanda. Todos os direitos reservados.</p>
        </div>
      </div>

    </>
  )
}

export default App
