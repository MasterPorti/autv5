import React from 'react';
import { CardWrapper } from './card-wrappe';

export function LoginForm() {
  return (
    <CardWrapper
      headerLabel="Welcome back"
      backButtonHref="/auth/register"
      backButtonLabel="Don't have an account?"
      showSocial
    >
      Login Form
    </CardWrapper>
  );
}
