import React from 'react';
import '../assets/styles/components/ContactForm.css'
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
  const [state, handleSubmit] = useForm("xdoyerqp");
  if (state.succeeded) {
      return <p className="succeeded-message">Estaré en contacto contigo en las proximas 48 horas.</p>;
  }
  return (
      <form className="contact-form" onSubmit={handleSubmit}>
        <label htmlFor="name">
          Nombre
        </label>
        <input
          id="name"
          type="name" 
          name="name"
        />
        <ValidationError 
          prefix="Name" 
          field="name"
          errors={state.errors}
        />
        <label htmlFor="email">
          Correo electronico
        </label>
        <input
          id="email"
          type="email" 
          name="email"
        />
        <ValidationError 
          prefix="Email" 
          field="email"
          errors={state.errors}
        />
        
        <button className="success-button" type="submit" disabled={state.submitting}>
          Enviar
        </button>
    </form>
  );
}


export default ContactForm
