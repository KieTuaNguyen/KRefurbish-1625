import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <React.Fragment>
      <div className="container border-top">
        <footer className="py-5">
          <div className="row">
            <div className="col-6 col-md-2 mb-3">
              <h5>Technology</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">NodeJS</li>
                <li className="nav-item mb-2">ReactJS</li>
                <li className="nav-item mb-2">MongoDB</li>
              </ul>
            </div>

            <div className="col-6 col-md-2 mb-3">

            </div>

            <div className="col-6 col-md-2 mb-3">
              <h5>Platform</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">Heroku</li>
                <li className="nav-item mb-2">Bootstrap</li>
                <li className="nav-item mb-2">MUI</li>
              </ul>
            </div>

            <div className="col-md-5 offset-md-1 mb-3">
              <h5>KRefurbish</h5>
              <p>The introduction of KRefurbish to investigate the impact of digital endpoint devices on the environment and identify ways to reduce environmental damages caused by their production, use, and disposal.</p>
              <div className="d-flex flex-column flex-sm-row w-100 gap-2">
              </div>
            </div>
          </div>

        </footer>


        <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <div class="col-md-4 d-flex align-items-center">
            <span class="mb-3 mb-md-0 text-muted">© 2022, by Kiet Tuan Nguyen</span>
          </div>

          <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li className="ms-3">
              <a className="text-muted" href="https://www.facebook.com/the.kietuanguyen/">
                <FacebookIcon />
              </a>
              <a className="text-muted" href="https://www.linkedin.com/in/the-kietuanguyen/">
                <LinkedInIcon />
              </a>
              <a className="text-muted" href="https://github.com/KieTuaNguyen">
                <GitHubIcon />
              </a>
              <a className="text-muted" href="https://mail.google.com/mail/u/1/?fs=1&to=kietntgdd210002@fpt.edu.vn&tf=cm">
                <EmailIcon />
              </a>
            </li>
          </ul>
        </footer>

      </div>
    </React.Fragment>
  );
};

export default Footer;
