
import "./App.css";

function App() {
  return (
    <div className="resume">
      <header className="header">
        <a className="logo" href="#home">MY RESUME</a>

        <nav>
          <a href="#about">Обо мне</a>
          <a href="#skills">Навыки</a>
          <a href="#projects">Проекты</a>
          <a href="#contact">Контакты</a>
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <div>
            <p className="label">МОЁ ПОРТФОЛИО</p>
            <h1>Привет, я<br />
              <span>Мирбек Артыков</span>
            </h1>
            <h2>Начинающий разработчик</h2>

            <p className="intro">
              Я студент INAI, изучаю программирование
              и информационные технологии. Создаю
              учебные проекты и развиваюсь в IT.
            </p>

            <a className="button" href="#projects">
              Смотреть проекты ↓
            </a>
          </div>

          <div className="profile">
            <div className="avatar">MA</div>
            <h3>Мирбек Артыков</h3>
            <p>Студент · Начинающий разработчик</p>
            <span className="available">
              ● Открыт к новым возможностям
            </span>
          </div>
        </section>

        <section className="section" id="about">
          <p className="label">01 / ЗНАКОМСТВО</p>
          <h2>Обо мне</h2>
          <p>
            Я учусь в INAI и изучаю информационные
            технологии. Мне интересно создавать сайты,
            разрабатывать программы и решать задачи
            с помощью кода. Хочу получить практический
            опыт и стать профессиональным разработчиком.
          </p>
        </section>

        <section className="section" id="skills">
          <p className="label">02 / ТЕХНОЛОГИИ</p>
          <h2>Мои навыки</h2>

          <div className="skills">
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>React</span>
            <span>Python</span>
            <span>Git</span>
            <span>GitHub</span>
          </div>

          <p className="hint">
            Оставь только те технологии, которые ты
            действительно изучал.
          </p>
        </section>

        <section className="section" id="projects">
          <p className="label">03 / МОИ РАБОТЫ</p>
          <h2>Учебные проекты</h2>

          <div className="projects">
            <article className="project">
              <span className="number">01</span>
              <h3>Система общежития</h3>
              <p>
                Учебный веб-проект для обработки заявок
                на заселение в общежитие.
              </p>
              <span className="tag">Web development</span>
            </article>

            <article className="project">
              <span className="number">02</span>
              <h3>PDF-чатбот</h3>
              <p>
                Проект чат-бота, который отвечает
                на вопросы по PDF-документам.
              </p>
              <span className="tag">Python · AI</span>
            </article>

            <article className="project">
              <span className="number">03</span>
              <h3>Моё резюме</h3>
              <p>
                Персональный сайт-портфолио,
                созданный во время изучения React.
              </p>
              <span className="tag">React · CSS</span>
            </article>
          </div>
        </section>

        <section className="section" id="contact">
          <p className="label">04 / КОНТАКТЫ</p>
          <h2>Давайте знакомиться!</h2>
          <p>
            Я открыт к стажировкам, обучению
            и интересным проектам.
          </p>
          <a
            className="button"
            href="mailto:your-email@example.com"
          >
            Написать мне
          </a>
          <p className="hint">
            Позже укажем твой настоящий адрес электронной почты.
          </p>
        </section>
      </main>

      <footer>
        © 2026 Мирбек Артыков · Создано на React
      </footer>
    </div>
  );
}

export default App;