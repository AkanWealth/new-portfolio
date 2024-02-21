import React, { Dispatch } from 'react';
import { FiMail, FiLinkedin, FiGithub } from 'react-icons/fi';
import { useForm, ValidationError } from '@formspree/react';

interface ContactFormProps {
  showSuccessModal: boolean;
  setShowSuccessModal: Dispatch<React.SetStateAction<boolean>>;
}

const ContactForm: React.FC<ContactFormProps> = ({ showSuccessModal, setShowSuccessModal }) => {
  const [state, handleSubmit] = useForm('mvoeajkq');

  if (state.succeeded && !showSuccessModal) {
    setShowSuccessModal(showSuccessModal);
    console.log("successful")
  }

  return (
    <section id="contact" className="bg-gray-100 py-8">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
        <p className="text-lg">
          Feel free to reach out to me via email or connect with me on LinkedIn
          and GitHub.
        </p>
        <ul className="mt-4">
          <li className="flex items-center mb-2">
            <FiMail className="w-6 h-6 mr-2 text-gray-600" />
            <a
              href="mailto:akan.asanga@gmail.com"
              className="text-gray-600 hover:text-gray-900"
            >
              akan.asanga@gmail.com
            </a>
          </li>
          <li className="flex items-center mb-2">
            <FiLinkedin className="w-6 h-6 mr-2 text-gray-600" />
            <a
              href="https://www.linkedin.com/in/akaninyene-asanga-895508151/"
              className="text-gray-600 hover:text-gray-900"
            >
              Akaninyene (Akanwealth) Asanga
            </a>
          </li>
          <li className="flex items-center">
            <FiGithub className="w-6 h-6 mr-2 text-gray-600" />
            <a
              href="https://github.com/AkanWealth"
              className="text-gray-600 hover:text-gray-900"
            >
              AkanWealth
            </a>
          </li>
        </ul>
        <h3 className="text-lg font-semibold mt-6 mb-2">Send me a message:</h3>
        <form className="max-w-lg" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="border-2 border-gray-200 rounded-md p-2 w-full"
              // required
            />
            <ValidationError prefix="name" field="name" errors={state.errors} />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="border-2 border-gray-200 rounded-md p-2 w-full"
              // required
            />
            <ValidationError
              prefix="email"
              field="email"
              errors={state.errors}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Message:
            </label>
            <textarea
              id="message"
              name="message"
              className="border-2 border-gray-200 rounded-md p-2 w-full h-32"
            ></textarea>
            <ValidationError
              prefix="message"
              field="message"
              errors={state.errors}
            />
          </div>
          <button
            type="submit"
            disabled={state.submitting}
            className="bg-gray-800 text-white py-2 px-4 rounded-md hover:bg-gray-600"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

const Contact: React.FC<ContactFormProps> = ({ showSuccessModal, setShowSuccessModal }) => {
  return <ContactForm showSuccessModal={showSuccessModal} setShowSuccessModal={setShowSuccessModal} />;
};


export default Contact;
