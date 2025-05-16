import Mail from '../assets/mail.svg'
import Linkedin from '../assets/Vector.svg'
import Github from '../assets/github.svg'

const Contact: React.FC = () => {
  return (
    <section className="contact" id="contact">
      <p><a href="mailto:sofia.cronstrom@gmail.com"><img src={Mail} alt="A red envelope icon"/></a></p>
      <p><a href="https://linkedin.com/in/sofia-cronstrom" target="_blank" rel="noopener noreferrer"><img src={Linkedin} alt="The linkedin icon" /> </a></p>
      <p><a href="https://github.com/SofiaCronstrom" target="_blank" rel="noopener noreferrer"><img src={Github} alt="The Github icon" /> </a></p>
    </section>
  )
}

export default Contact