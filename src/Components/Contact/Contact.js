import './Contact.css';
import '../../stylings/text.css';
import '../../stylings/colors.css';
import '../../stylings/buttons.css';

function Contact(){
  return(
    <div id="contact">
      <h1 className='robotoBold headerText'>Contact:</h1>
      <p className='robotoRegular subtitleText'>
        <b>Email: </b>georgejopson@gmail.com
      </p>
      <p className='robotoRegular subtitleText'>
        <b>LinkedIn: </b>
        <a className="contactLink wordWrap" href="https://www.linkedin.com/in/george-jopson-2763a4257/">https://www.linkedin.com/in/george-jopson-2763a4257/</a>
      </p>
      <p className='robotoRegular subtitleText'>
        <b>GitHub: </b>
        <a className="contactLink wordWrap" href="https://github.com/GeorgeJopson">
          https://github.com/GeorgeJopson
        </a>
      </p>
    </div>
  );
}

export default Contact;