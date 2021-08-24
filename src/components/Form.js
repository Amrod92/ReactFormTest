import React, { useState } from 'react';
import Modal from 'react-modal';
import Button from 'react-bootstrap/Button';
import { useForm } from 'react-hook-form';
import success from '../img/success.png';
import './Form.css';

function Form() {
  const {
    register,
    handleSubmit,
    // Read the formState before render to submit the form state
    formState: { errors }
  } = useForm();

  // This contains the data: fullName, email, notes
  const dataSubmit = data => {
    console.log(data);
    if (data) {
      setModalIsOpen(true);
    }
  };

  // Hooks to count the words and characters from the note element
  const [words, setWords] = useState(0);
  const [characters, setCharacters] = useState(0);

  // Hook to change the state of the modal once the user submit the form
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div>
      <div>
        <form action='POST' onSubmit={handleSubmit(dataSubmit)}>
          <label htmlFor='fullName'>Full Name:</label>
          <input
            type='text'
            placeholder='Full name'
            onKeyDown={e => {
              if (e.code === 'Enter' || e.code === 'NumpadEnter') {
                {
                  /* this.handleSubmit(dataSubmit); */
                }
              }
            }}
            {...register('fullName', {
              required: true,
              pattern: /^[a-z ,.'-]+$/i
            })}
          />
          {errors.fullName && <p> ⚠️Full name is not valid</p>}
          {errors?.fullName?.type === 'pattern' && (
            <p> 🔤 Alphabetical characters only</p>
          )}
          <label htmlFor='email'>Email:</label>
          <input
            type='email'
            placeholder='Email'
            onKeyDown={e => {
              if (e.code === 'Enter' || e.code === 'NumpadEnter') {
                {
                  /* this.handleSubmit(dataSubmit); */
                }
              }
            }}
            {...register('email', {
              required: true,
              pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
            })}
          />
          {errors.email && <p> ⚠️ Email is not valid</p>}
          {errors?.email?.type === 'pattern' && (
            <p> 📧 Please check that you inserted a valid email format</p>
          )}
          <label htmlFor='notes'>Notes:</label>
          <textarea
            style={{ width: '100%', height: '200px' }}
            placeholder='Notes'
            {...register('notes', { required: true, minLength: 20 })}
            onChange={e => {
              {
                /* Split the code when there's a space between words */
              }
              let text = e.target.value.split(' ').length;
              let textChar = e.target.value.length;
              setWords(text);
              setCharacters(textChar);
              {
                /* The above code return 1 word count so overcome this issue the code check the length is equal to 0 and set to 0 the state */
              }
              if (e.target.value.length === 0) {
                setWords(0);
              }
            }}
          ></textarea>
          <p className='word-count'>
            Word count: {words} - Characters count: {characters}
          </p>
          {errors.notes && (
            <p>📝 Please enter enough characters. Minimum length is: 20.</p>
          )}
          <Button
            onClick={handleSubmit(dataSubmit)}
            variant='outline-warning'
            className='submit-button'
          >
            Submit
          </Button>{' '}
        </form>
      </div>
      <div className='modal-success'>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={() => setModalIsOpen(false)}
          className='modal-container'
          ariaHideApp={false}
        >
          <h2>Thank you to submit the form!</h2>
          <img
            alt=''
            src={success}
            style={{
              justifyContent: 'center',
              alignContent: 'center'
            }}
          />
          <p style={{ color: 'black' }}>
            Click outside the box, escpate button, or the following button{' '}
            {'  '}
            <Button onClick={() => setModalIsOpen(false)} variant='danger'>
              Exit
            </Button>
          </p>
        </Modal>
      </div>
    </div>
  );
}

export default Form;
