import { useState } from 'react';
import styles from './ContactStyles.module.css';

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('');

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = 'Name is required.';
    if (!form.email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(form.email)) {
      newErrors.email = 'Invalid email address.';
    }
    if (!form.message.trim()) newErrors.message = 'Message is required.';
    return newErrors;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: undefined });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus('Sending...');

    try {
      const res = await fetch('https://formspree.io/f/xjkozvln', {
        method: 'POST',
        body: JSON.stringify(form),
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      });

      if (res.ok) {
        setStatus(' Message sent successfully! ✅');
        setForm({ name: '', email: '', message: '' }); // clear form
      } else {
        setStatus('❌ Something went wrong. Please try again.');
      }
    } catch (err) {
      setStatus('❌ Network error. Please try again.');
    }
  };

  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">Contact</h1>
      <p style={{ marginBottom: '60px', opacity: '0.8' }}>You can find my phone number in my CV or you can leave me a message down here</p>
      <form onSubmit={handleSubmit} noValidate>
        <div className="formGroup">
          <label htmlFor="name" hidden>
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            required
            value={form.name}
            onChange={handleChange}
          />
          {errors.name && <span className={styles.error}>{errors.name}</span>}
        </div>

        <div className="formGroup">
          <label htmlFor="email" hidden>
            Email
          </label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Email"
            required
            value={form.email}
            onChange={handleChange}
          />
          {errors.email && <span className={styles.error}>{errors.email}</span>}
        </div>

        <div className="formGroup">
          <label htmlFor="message" hidden>
            Message
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="Message"
            required
            value={form.message}
            onChange={handleChange}
          ></textarea>
          {errors.message && <span className={styles.error}>{errors.message}</span>}
        </div>

        <input className="hover btn" type="submit" value="Submit" />
      </form>
      {status && <p style={{ marginTop: '10px' }}>{status}</p>}
    </section>
  );
}

export default Contact;
