// import React from 'react';
// import axios from 'axios';

// const EmailRestAPI = () => {
//   const [name, setName] = React.useState('');
//   const [email, setEmail] = React.useState('');
//   const [message, setMessage] = React.useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const serviceId = 'service_yxb60rx';
//     const templateId = 'template_97954xn';
//     const publicKey = 'w-pq8v1p8TxP21QGL';

//     const data = {
//       service_id: serviceId,
//       template_id: templateId,
//       user_id: publicKey,
//       template_params: {
//         from_name: name,
//         from_email: email,
//         to_name: 'Web Wizard',
//         message: message,
//       },
//     };
//     try {
//       const res = await axios.post('https://api.emailjs.com/api/v1.0/email/send', data);
//       console.log(res.data);
//       setName('');
//       setEmail('');
//       setMessage('');
//     } catch (error) {
//       console.error(error);
//     }
//   };
//   return (
//     <div>
//       <form onSubmit={handleSubmit} className="emailForm">
//         <input
//           type="text"
//           placeholder="Your Name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
//         <input
//           type="email"
//           placeholder="Your Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <textarea
//           cols="30"
//           rows="10"
//           value={message}
//           onChange={(e) => setMessage(e.target.value)}
//         ></textarea>
//         <button type="submit">Send Email</button>
//       </form>
//     </div>
//   );
// };

// export default EmailRestAPI;
