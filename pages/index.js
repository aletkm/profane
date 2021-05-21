import React from 'react';

import Hero from '../components/Hero';
import Content from '../components/Content';

import { useUser } from '@auth0/nextjs-auth0';

const Index = () => {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  if (user) {
    return(
      <>
        <Hero />
        <hr />
        <Content />
      </>
    );
  }
  return 
  <a href="/api/login">Login</a>;
};

export default Index