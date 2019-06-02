import React from 'react';

class ContactMain extends React.Component {
  
  render(){
    return (
      <main id="main" className="main">
        <section className="contact-information fadein">
          <div className="contact-information__container">
            <div className="contact-information__address">
              <h2 className="contact-information__title">Address</h2>
              <div className="contact-information__details">
                The Arsenal<br />
                Watertown, MA 02472
              </div>
            </div>
            <div className="contact-information__contact">
              <h2 className="contact-information__title">Contact</h2>
              <div className="contact-information__details">
                <a className="contact-information__link" href="tel:+1-978-502-1080">+1 ‪(857) 244-0009</a>
                <a className="contact-information__link" href="mailto:bossorello@mikalmorello.com" >bossorello@mikalmorello.com</a>
              </div>
            </div>
            <div className="contact-information__availability">
              <h2 className="contact-information__title">Work Availability</h2>
              <div className="contact-information__details">
                Limited
              </div>
            </div>
          </div>
        </section>
        <section className="map fadein">
          <div id="map"></div>
        </section>
      </main>
    )
  }
  
}

export default ContactMain;