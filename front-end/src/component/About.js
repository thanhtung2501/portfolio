
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

function About() {
  const [fileUrl, setFileUrl] = useState(null);

  const downloadResume = async () => {
    try {
      // Call the backend API to get the signed URL
      const response = await fetch('https://api.tungle.click/download');
      const data = await response.json();
      setFileUrl(data);

      // Create an anchor element to trigger the download
      const link = document.createElement('a');
      link.href = data;
      //link.download = 'filename.ext'; // Optional: specify a name for the downloaded file
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Error downloading file:', error);
    }
  };

  return (
    <section className="resume-section d-flex d-column" id="about">
      <div className="my-auto">
        <div className='subheading'>TUNG LE</div>
        <div className='subheading'>TECHNICAL ARCHITECT / SENIOR JAVA DEVELOPER</div>
        <div class="subheading mb-5">
          Alpharetta, GA 30004 ·&nbsp;
          <a class="email" href="mailto:tung.us.le@gmail.com">tung.us.le@gmail.com</a> ·&nbsp;641-233-9338 ·&nbsp;
          <a href="https://www.linkedin.com/in/tony-tung/" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a>&nbsp;&nbsp;
          <button className="btn btn-primary" type="button" onClick={downloadResume}>Download Resume</button>
        </div>

        <p class="mb-5 h5">
          Accomplished Technical Architect and Senior Java Developer with over 14 years of experience designing secure, scalable enterprise software solutions. Expertise in Java (Java 8, 11, 17), Spring Boot, Microservices, REST APIs, and cloud technologies such as AWS and PCF. Proven ability to deliver high-performance distributed systems and manage large-scale deployments in Agile environments. Skilled in system design, CI/CD pipelines, and mentoring cross-functional teams across various countries. Adept at troubleshooting production issues and improving software quality while maintaining a strong focus on collaboration and technical leadership.
        </p>
      </div>
    </section>
  );
};

export default About;