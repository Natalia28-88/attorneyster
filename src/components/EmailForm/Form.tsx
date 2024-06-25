import React from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';

import styles from './EmailForm.module.scss';
import { ErrorIcon } from '../../utils/icons';
import { ContactBackground } from '../../utils/images';
import { url } from 'inspector';

type dataItem = Record<string, string>;

const Form: React.FC = () => {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
      phoneNumber: '',
      subject: '',
      message: '',
    },
    mode: 'onBlur',
  });

  const onSubmit = (data: dataItem) => {
    const templateParams = {
      from_name: data.name,
      from_email: data.email,
      from_phoneNumber: data.phoneNumber,
      to_name: 'Peter Parker',
      subject: data.subject,
      message: data.message,
    };
    const serviceId = 'service_yxb60rx';
    const templateId = 'template_97954xn';
    const publicKey = 'w-pq8v1p8TxP21QGL';

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('Email sent successfully!', response);
        reset();
      })
      .catch((error) => {
        console.error('Error sending email:', error);
      });
  };
  return (
    <div style={{ background: '#161D27' }}>
      <div className={styles.wrapper}>
        <div
          className={styles.root}
          style={
            {
              '--contact-image': `url(${ContactBackground})`,
            } as React.CSSProperties
          }
        >
          <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            <div className={styles.form__row}>
              <div>
                <input
                  onFocus={(e) => e.target.select()}
                  autoComplete="off"
                  type="text"
                  {...register('name', {
                    required: '*Full Name is required field!',
                    minLength: {
                      value: 2,
                      message: 'Min 2 characters',
                    },
                    pattern: {
                      value: /^[A-Za-zА-Яа-яЁё]+$/i,
                      message: 'The word must not contain symbols or numbers',
                    },
                  })}
                  placeholder="Full Name*"
                />
                <div className={styles.error}>
                  {errors?.name && (
                    <span>
                      <img width={14} src={ErrorIcon} alt="error" />
                      {errors?.name?.message || 'Error'}
                    </span>
                  )}
                </div>
              </div>
              <div>
                <input
                  onFocus={(e) => e.target.select()}
                  autoComplete="off"
                  type="email"
                  {...register('email', {
                    required: '*Email Address is required field!',
                    pattern: {
                      value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                      message: 'Please enter your email address correctly',
                    },
                  })}
                  placeholder="Email Address*"
                />
                <div className={styles.error}>
                  {errors?.email && (
                    <span>
                      <img width={14} src={ErrorIcon} alt="error" />
                      {errors?.email?.message || 'Error'}
                    </span>
                  )}
                </div>
              </div>
            </div>

            <div className={styles.form__row}>
              <div>
                <input
                  autoComplete="off"
                  type="text"
                  {...register('phoneNumber', {
                    required: 'Phone Number is required field!',
                    pattern: {
                      value: /(7|8|9)\d{9}/,
                      message:
                        'It starts by either looking for 7 or 8 or 9, and then followed by 9 digits.',
                    },
                  })}
                  placeholder="Phone Number*"
                />
                <div className={styles.error}>
                  {errors?.phoneNumber && (
                    <span>
                      <img width={14} src={ErrorIcon} alt="error" />
                      {errors?.phoneNumber?.message || 'Error'}
                    </span>
                  )}
                </div>
              </div>
              <div>
                <input
                  autoComplete="off"
                  type="text"
                  {...register('subject')}
                  placeholder="Subject"
                />
              </div>
            </div>

            <textarea
              autoComplete="off"
              cols={30}
              rows={6}
              {...register('message')}
              placeholder="Your Message"
            />
            <div className="d-flex justify-center">
              <button type="submit" disabled={!isValid}>
                Get An Appointment
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

// const Form = () => {
//   const {
//     register,
//     formState: { errors, isValid },
//     handleSubmit,
//     reset,
//   } = useForm({
//     mode: 'onBlur',
//   });

//   const onSubmit = (data) => {
//     alert(JSON.stringify(data));
//     reset();
//   };

//   return (
//     <div className={styles.root}>
//       <h1>React Hook form</h1>
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <input
//           {...register('fullName', {
//             required: 'Full Name is required field!',
//             minLength: {
//               value: 4,
//               message: 'Минимум 4 символа',
//             },
//           })}
//           placeholder="Full Name*"
//         />
//         <div style={{ height: 40 }}>
//           {errors?.fullName && <p>{errors?.fullName?.message || 'Error'}</p>}
//         </div>
//         <input
//           type="number"
//           {...register('phoneNumber', {
//             required: 'Phone Number is required field!',
//             minLength: {
//               value: 11,
//               message: 'Минимум 11 символов',
//             },
//           })}
//           placeholder="Phone Number*"
//         />
//         <div style={{ height: 40 }}>
//           {errors?.phoneNumber && <p>{errors?.phoneNumber?.message || 'Error'}</p>}
//         </div>

//         <input type="submit" disabled={!isValid} />
//       </form>
//     </div>
//   );
// };

export default Form;
