import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section-header text-center mb-5">
          <h2 className="heading-gradient">Get In Touch</h2>
          <div className="underline"></div>
        </div>

        <div className="contact-container">
          <div className="contact-info glass-card">
            <h3>Contact Information</h3>
            <p className="text-secondary mb-4">
              I’m always open to discussing new opportunities, collaborations, and meaningful software projects.
            </p>
            
            <div className="contact-methods">
              <div className="method-item">
                <div className="method-icon">
                  <Mail className="text-accent" size={20} />
                </div>
                <div>
                  <h4>Email</h4>
                  <p className="text-tertiary">arorakanav34@gmail.com</p>
                </div>
              </div>

              <div className="method-item">
                <div className="method-icon">
                  <Phone className="text-accent" size={20} />
                </div>
                <div>
                  <h4>Phone</h4>
                  <p className="text-tertiary">+91 9596172305</p>
                </div>
              </div>

              <div className="method-item">
                <div className="method-icon">
                  <MapPin className="text-accent" size={20} />
                </div>
                <div>
                  <h4>Location</h4>
                  <p className="text-tertiary">Udhampur, Jammu & Kashmir</p>
                </div>
              </div>
            </div>
          </div>

          <form className="contact-form glass-card" onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <label>Name</label>
              <input type="text" placeholder="Your Name" className="glass-input" />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="Your Email" className="glass-input" />
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea placeholder="Your Message" rows="5" className="glass-input"></textarea>
            </div>
            <button type="submit" className="btn btn-primary w-full">
              Send Message <Send size={18} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
