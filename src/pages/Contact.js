import '../css/pageStyles/Contact.css';

function Contact() {
  return (
    <main className="contact-main">
        <section className="contact-landing-splash">
          <div className="contact-splash-title">
            <h1>Inquires?</h1>
          </div>
          <div className="contact-splash-contact-info">
          <div className="contact-card">
              <h2>Business</h2>
              <a href="mailto:business@enf.com">business@enf.com</a>
            </div>
            <div className="contact-card">
              <h2>Contact</h2>
              <a href="mailto:questions@enf.com">questions@enf.com</a>
            </div>
          </div>
        </section>
    </main>
  );
}



export default Contact;
