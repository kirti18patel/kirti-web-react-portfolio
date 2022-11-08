import React from 'react';
import resume from '../../assets/resume.docx';
function Footer() {
  return (
    <footer className="my-5">
        <h1><a href={resume} download="resume-KirtiPatel" className="download decoration-none-white"> <i className="fa fa-download" aria-hidden="true"></i><span className="tooltiptext text-center">Download my resume</span></a></h1>
        <div className="flex-center">
            <div className="social">
                <h3>Lets be internet BFF's</h3>
                <a href="https://linkedin.com/in/kirtipatel18" className="social-icons">
                    <i className="fa fa-linkedin"></i>
                </a>
                <a href="https://github.com/kirti18patel" className="social-icons">
                    <i className="fa fa-github"></i>
                </a>
            </div>
            <p className="footer">Designed and Developed by Kirti Patel &#169; 2021</p>
        </div>
        <div></div>
    </footer>
  );
}

export default Footer;