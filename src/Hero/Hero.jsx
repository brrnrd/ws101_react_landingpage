import './Hero.css';

const Hero = () => {
  return (
    <section id="hero">
      <div className="title">
        <h1>Welcome to AZS</h1>
        <p>Your journey into the world of Web Development starts here.</p>
        <button onClick={() => window.location.href='#contact'}>Get in Touch</button>
      </div>
    </section>
  );
};

export default Hero;
