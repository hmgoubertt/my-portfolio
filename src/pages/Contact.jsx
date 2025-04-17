function Contact() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Contact Me</h1>
      <p>Have a question or want to work together?</p>
      <form>
        <div style={{ marginBottom: '1rem' }}>
          <label>Name:</label><br />
          <input type="text" placeholder="Your name" style={{ width: '100%', padding: '0.5rem' }} />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label>Email:</label><br />
          <input type="email" placeholder="Your email" style={{ width: '100%', padding: '0.5rem' }} />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label>Message:</label><br />
          <textarea placeholder="Your message" style={{ width: '100%', padding: '0.5rem' }} rows="5"></textarea>
        </div>
        <button type="submit" style={{ padding: '0.5rem 1rem' }}>Send</button>
      </form>
      <p style={{ marginTop: '2rem' }}>
        Or reach me on:
        <br />
        í³§ email@example.com
        <br />
        í°¦ <a href="https://twitter.com/" target="_blank">Twitter</a>
        <br />
        í²¼ <a href="https://linkedin.com/" target="_blank">LinkedIn</a>
      </p>
    </div>
  );
}

export default Contact;
