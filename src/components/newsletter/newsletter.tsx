import React, { useState } from 'react';
import addToMailchimp from 'gatsby-plugin-mailchimp';
import Input from '../input/input';
import Button from '../button/button';
import {
  NewsletterWrapper,
  NewsletterTitle,
  InputWrapper,
  NewsletterInputWrapper,
  ErrorMessage,
  SuccessMessage,
} from './newsletter.style';

type NewsletterProps = {};

const Newsletter: React.FunctionComponent<NewsletterProps> = ({ ...props }) => {
  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');
  const handleChange = (e: any) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    addToMailchimp(email) // listFields are optional if you are only capturing the email address.
      .then(({ msg, result }: any) => {
        if (result !== 'success') {
          throw msg;
        }
        setSuccess(msg);
        setError('');
        setEmail('');
      })
      .catch((err: any) => {
        setError(err);
        setSuccess('');
        setEmail('');
      });
  };
  return (
    <NewsletterWrapper {...props}>
      <NewsletterTitle>
        Subscribe to our newsletter and <br /> stay updated.
      </NewsletterTitle>

      <NewsletterInputWrapper onSubmit={handleSubmit}>
        {success ? (
          <SuccessMessage>{success} 🙂</SuccessMessage>
        ) : (
          <InputWrapper>
            <Input
              type="email"
              name="email"
              placeholder="Write your email here"
              onChange={handleChange}
              value={email}
              required
            />
            <Button title="Subscribe" type="submit" />
          </InputWrapper>
        )}

        {error && (
          <ErrorMessage
            dangerouslySetInnerHTML={{ __html: `<span>*</span>${error}` }}
          />
        )}
      </NewsletterInputWrapper>
    </NewsletterWrapper>
  );
};

export default Newsletter;
