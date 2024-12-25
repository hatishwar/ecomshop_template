// React EcommerceShop Template
// Install dependencies: react, react-dom, react-router-dom, bootstrap, react-icons

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const PreNavBar = () => (
  <div className="pre-nav bg-dark text-white py-2 text-center">
    <marquee>Welcome to EcommerceShop! Get the best deals today!</marquee>
  </div>
);

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container">
      <Link className="navbar-brand" to="/">EcommerceShop</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasMenu" aria-controls="offcanvasMenu">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
        </ul>
      </div>
    </div>
  </nav>
);

const Carousel = () => (
  <div id="mainCarousel" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src="https://images.pexels.com/photos/6169033/pexels-photo-6169033.jpeg?" className="d-block w-100" alt="..." />
        <div className="carousel-caption d-none d-md-block">
          <h5>First Slide</h5>
          <p>Welcome to the best online shop!</p>
        </div>
      </div>
      <div className="carousel-item">
        <img src="https://images.pexels.com/photos/12935077/pexels-photo-12935077.jpeg?" className="d-block w-100" alt="..." />
        <div className="carousel-caption d-none d-md-block">
          <h5>Second Slide</h5>
          <p>Exclusive offers on top brands!</p>
        </div>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#mainCarousel" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#mainCarousel" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
    </button>
  </div>
);

const Productcard = () => (
  <div className="container py-5">
    <h2 className="text-center mb-4">Our Products</h2>
    <div className="row g-4">
      {/* Card 1 */}
      <div className="col-md-3">
        <div className="card h-100">
          <img
            src="https://images.pexels.com/photos/6170172/pexels-photo-6170172.jpeg?"
            className="card-img-top"
            alt="Product 1"
          />
          <div className="card-body text-center">
            <h5 className="card-title">Product 1</h5>
            <p className="card-text">A brief description of Product 1.</p>
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>

      {/* Card 2 */}
      <div className="col-md-3">
        <div className="card h-100">
          <img
            src="https://images.pexels.com/photos/374016/pexels-photo-374016.jpeg?"
            className="card-img-top"
            alt="Product 2"
          />
          <div className="card-body text-center">
            <h5 className="card-title">Product 2</h5>
            <p className="card-text">A brief description of Product 2.</p>
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>

      {/* Card 3 */}
      <div className="col-md-3">
        <div className="card h-100">
          <img
            src="https://images.pexels.com/photos/6930257/pexels-photo-6930257.jpeg?"
            className="card-img-top"
            alt="Product 3"
          />
          <div className="card-body text-center">
            <h5 className="card-title">Product 3</h5>
            <p className="card-text">A brief description of Product 3.</p>
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>

      {/* Card 4 */}
      <div className="col-md-3">
        <div className="card h-100">
          <img
            src="https://images.pexels.com/photos/7181192/pexels-photo-7181192.jpeg?"
            className="card-img-top"
            alt="Product 4"
          />
          <div className="card-body text-center">
            <h5 className="card-title">Product 4</h5>
            <p className="card-text">A brief description of Product 4.</p>
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  </div>
);




const Separator = () => (
  <div
    className="separator-image my-5"
    style={{
      backgroundImage: "url('https://images.pexels.com/photos/8353793/pexels-photo-8353793.jpeg?')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "30vh", // Use viewport height for responsiveness
      width: "100%", // Ensure it spans the entire width
      position: "relative",
      backgroundAttachment: "fixed"
    }}
  >
    <div
      className="separator-overlay"
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        fontSize: "1.5rem",
        fontWeight: "bold",
      }}
    >
    </div>
  </div>
);



const FooterNav = () => (
  <footer className="bg-light py-4">
    <div className="container">
      <div className="row">
        <div className="col-md-3">About Us</div>
        <div className="col-md-3">Customer Service</div>
        <div className="col-md-3">Policies</div>
        <div className="col-md-3">Contact</div>
      </div>
    </div>
  </footer>
);

const Footer = () => (
  <footer className="bg-dark text-white py-3 text-center">
    <p>&copy; 2024 EcommerceShop. All rights reserved.</p>
  </footer>
);

const HomePage = () => (
  <>
    <Carousel />
    <Productcard />
    <Separator />
    <FooterNav />
  </>
);

const AboutPage = () => (
  <div className="container py-5">
    <h2 className="text-center mb-4">About EcommerceShop</h2>
    <p className="text-muted text-center mb-4">
      Welcome to EcommerceShop, your trusted marketplace for high-quality products. We pride ourselves on offering the best deals, exclusive collections, and exceptional customer service.
    </p>
    <div className="row">
      <div className="col-md-6">
        <h4>Our Mission</h4>
        <p>
          At EcommerceShop, our mission is to simplify online shopping and provide a seamless experience for our customers. We aim to bring you a wide variety of products at unbeatable prices.
        </p>
      </div>
      <div className="col-md-6">
        <h4>Why Choose Us?</h4>
        <ul>
          <li>Wide range of products</li>
          <li>Secure payment options</li>
          <li>Fast and reliable delivery</li>
          <li>Dedicated customer support</li>
        </ul>
      </div>
    </div>
    <div className="text-center mt-4">
      <img src="https://images.pexels.com/photos/7552326/pexels-photo-7552326.jpeg?" alt="About Us" className="img-fluid rounded" />
    </div>
  </div>
);

const ContactPage = () => (
  <div className="container py-5">
    <h2 className="text-center mb-4">Contact Us</h2>
    <p className="text-muted text-center mb-4">
      Have questions? We'd love to hear from you! Reach out to us using the form below or the contact details provided.
    </p>
    <div className="row">
      {/* Contact Form */}
      <div className="col-md-6">
        <h4>Send Us a Message</h4>
        <form>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" className="form-control" id="name" placeholder="Enter your name" required />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" className="form-control" id="email" placeholder="Enter your email" required />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea className="form-control" id="message" rows="4" placeholder="Your message..." required></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>

      {/* Contact Details */}
      <div className="col-md-6">
        <h4>Contact Details</h4>
        <ul className="list-unstyled">
          <li><strong>Address:</strong> 123 Ecommerce Street, Shopville, USA</li>
          <li><strong>Phone:</strong> <a href="tel:+1234567890">+1 (234) 567-890</a></li>
          <li><strong>Email:</strong> <a href="mailto:support@ecommerceshop.com">support@ecommerceshop.com</a></li>
          <li><strong>Hours:</strong> Mon-Fri: 9:00 AM - 6:00 PM</li>
        </ul>
        <div className="mt-4">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434509433!2d-122.42067958467749!3d37.77492977975962!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064f56d6d7f%3A0x5b8fceeabc602749!2sEcommerce+Shop!5e0!3m2!1sen!2sus!4v1634748356498!5m2!1sen!2sus"
            width="100%"
            height="250"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="EcommerceShop Location"
          ></iframe>
        </div>
      </div>
    </div>
  </div>
);


const App = () => (
  <Router>
    <PreNavBar />
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
    <Footer />
  </Router>
);

export default App;

