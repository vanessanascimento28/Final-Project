import "../../blocks/About.css";
import FotoViagem from "../../images/FotoViagem.jpg";

function About() {
  return (
    <section className="about">
      <img
        src={FotoViagem}
        alt="Mulher com roupa de caminhada e um chapéu olhando a linda paisagem de um canion"
        className="about__image"
      />
      <p className="about__text">
        Este projeto foi desenvolvido por Vanessa Nascimento, aluna da Turma 17
        da escola Tripleten, como parte do projeto final do curso de Web
        Developer. A escolha da API de países reflete sua paixão por viagens e
        pela descoberta de novas culturas. Atualmente vivendo no Brasil, Vanessa
        sonha em conhecer o continente africano em sua próxima aventura.
        <br />
        <br />
        <strong>Até logo! 👋</strong>
      </p>
    </section>
  );
}

export default About;
