import React from 'react';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import emailjs from 'emailjs-com';

function Contact() {
    const { register, handleSubmit, reset, formState: { errors }, trigger } = useForm();
    const [disabled, setDisabled] = useState(false);
    const [alertInfo, setAlertInfo] = useState({
      display: false,
      message: '',
      type: '',
    });
  
    const toggleAlert = (message, type) => {
      setAlertInfo({ display: true, message, type });
  
      setTimeout(() => {
        setAlertInfo({ display: false, message: '', type: '' });
      }, 5000);
    };
  
    const onSubmit = async (data) => {
      const { name, email, subject, message } = data;
      try {
        setDisabled(true);
  
        const templateParams = {
          name,
          email,
          subject,
          message,
        };
  
        await emailjs.send(
          process.env.REACT_APP_SERVICE_ID,
          process.env.REACT_APP_TEMPLATE_ID,
          templateParams,
          process.env.REACT_APP_PUBLIC_KEY
        );
  
        toggleAlert('Form submission was successful!', 'success');
      } catch (e) {
        console.error(e);
        toggleAlert('Uh oh. Something went wrong.', 'danger');
      } finally {
        setDisabled(false);
        reset();
      }
    };
  
    return (
      <div className='contact-class ContactForm'>
        <div className='container'>
          <div className='row'>
            <div className='col-12 text-center'>
              <div className='contactForm'>
                <form id='contact-form' noValidate onSubmit={handleSubmit(onSubmit)}>
                  <div className='row formRow'>
                    <div className="mb-4">
                      <h1 className="contact-me">Contact Me!</h1>
                    </div>
                    <div className='col-6'>
                      <input
                        type='text'
                        name='name'
                        // Added conditional class for error handling
                        className={`form-control formInput ${errors.name ? 'is-invalid' : ''}`}
                        placeholder='Name'
                        // Added custom error message for required validation
                        {...register('name', { required: 'Name is required' })}
                        onBlur={() => trigger('name')} // Trigger validation onBlur
                      />
                      {/* Added this conditional rendering for error message display */}
                      {errors.name && <div className="invalid-feedback">{errors.name.message}</div>}
                    </div>
                    <div className='col-6'>
                      <input
                        type='email'
                        name='email'
                        // Added conditional class for error handling
                        className={`form-control formInput ${errors.email ? 'is-invalid' : ''}`}
                        placeholder='Email address'
                        // Added custom error message and pattern validation for email
                        {...register('email', {
                          required: 'Email is required',
                          pattern: {
                            value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                            message: 'Enter a valid email address',
                          },
                        })}
                        onBlur={() => trigger('email')} // Trigger validation onBlur
                      />
                      {/* Added this conditional rendering for error message display */}
                      {errors.email && <div className="invalid-feedback">{errors.email.message}</div>}
                    </div>
                  </div>
                  <div className='row formRow'>
                    <div className='col'>
                      <textarea
                        rows={3}
                        name='message'
                        // Added conditional class for error handling
                        className={`form-control formInput contact-spacing ${errors.message ? 'is-invalid' : ''}`}
                        placeholder='Type Your Message Here'
                        // Added custom error message for required validation
                        {...register('message', { required: 'Message is required' })}
                        onBlur={() => trigger('message')} // Trigger validation onBlur
                      />
                      {/* Added this conditional rendering for error message display */}
                      {errors.message && <div className="invalid-feedback">{errors.message.message}</div>}
                    </div>
                  </div>
                  <button className='btn submit btn-light' type='submit' disabled={disabled}>
                    Submit
                  </button>
                </form>
                {alertInfo.display && (
                  <div
                    className={`alert alert-${alertInfo.type} alert-dismissible mt-5`}
                    role='alert'
                  >
                    {alertInfo.message}
                    <button
                      type='button'
                      className='btn-close'
                      data-bs-dismiss='alert'
                      aria-label='Close'
                      onClick={() =>
                        setAlertInfo({ display: false, message: '', type: '' })
                      }
                    ></button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Contact;
  