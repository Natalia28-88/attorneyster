// import React from 'react';
// import emailjs from '@emailjs/browser';

// import styles from './EmailForm.module.scss';

// const EmailForm = () => {
//   const [name, setName] = React.useState('');
//   const [email, setEmail] = React.useState('');
//   const [message, setMessage] = React.useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const serviceId = 'service_yxb60rx';
//     const templateId = 'template_97954xn';
//     const publicKey = 'w-pq8v1p8TxP21QGL';

//     const templateParams = {
//       from_name: name,
//       from_email: email,
//       to_name: 'Attorneyster',
//       message: message,
//     };

//     emailjs
//       .send(serviceId, templateId, templateParams, publicKey)
//       .then((response) => {
//         console.log('Email sent successfully!', response);
//         setName('');
//         setEmail('');
//         setMessage('');
//       })
//       .catch((error) => {
//         console.error('Error sending email:', error);
//       });
//   };

//   return (
//     <form onSubmit={handleSubmit} className={styles.emailForm}>
//       <input
//         type="text"
//         placeholder="Your Name"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//       />
//       <input
//         type="email"
//         placeholder="Your Email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       />
//       <textarea
//         cols="30"
//         rows="10"
//         value={message}
//         onChange={(e) => setMessage(e.target.value)}
//       ></textarea>
//       <button type="submit">Send Email</button>
//     </form>
//   );
// };

// export default EmailForm;
