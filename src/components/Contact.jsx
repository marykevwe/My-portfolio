
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

export default function Contact() {
  return (
    <section id="contact" className="py-16 px-4 text-center">
      <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
      <p>Reach out or connect with me!</p>
      <div className="flex justify-center gap-6 mt-6 text-2xl">
        <a href="mailto:you@example.com"><FaEnvelope /></a>
        <a href="#"><FaGithub /></a>
        <a href="#"><FaLinkedin /></a>
        <a href="#"><FaTwitter /></a>
      </div>
    </section>
  );
}
