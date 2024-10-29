
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

function About() {

  return (
    <section className="resume-section d-flex d-column" id="about">
      <div className="my-auto">
        <div className='subheading'>TUNG LE</div>
        <div className='subheading'>TECHNICAL ARCHITECT / SENIOR JAVA DEVELOPER</div>
        <div class="subheading mb-5">
          Alpharetta, GA 30004 ·&nbsp;
          <a class="email" href="mailto:tung.us.le@gmail.com">tung.us.le@gmail.com</a> ·&nbsp;641-233-9338 ·&nbsp;
          <a href="https://www.linkedin.com/in/tony-tung/" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a>
        </div>

        <p class="mb-5 h5">
          With over 14 years of Java expertise, I've been a pivotal member of elite technical teams, specializing in crafting secure enterprise software within high-pressure, deadline-driven environments. My hands-on capabilities span a wide array of technologies, encompassing technical architecture, system design, software development, OOP, Core Java (Java 8, 11, 17), Spring Boot, Spring MVC, Hibernate, JPA, Microservices, REST APIs, Multi-Threading, Kafka, PCF, AWS, Angular 15, React, ExtJS, Liferay, NodeJS, Typescript, Bootstrap, CSS, HTML, JSON, XML, jQuery, SQL, NoSQL databases, among others.
        </p>
        <p class="mb-5 h5">
          My reputation lies in being an approachable team player with a consistent record of successfully collaborating across diverse cross-functional and technical teams. I'm equally effective at self-managing during independent projects and making valuable contributions as part of a highly productive team. Additionally, I possess deep expertise in system design, and solution architecture, a comprehensive understanding of CICD principles, and a strong problem-solving, production support and analytical thinking aptitude.
        </p>
      </div>
    </section>
  );
};

export default About;