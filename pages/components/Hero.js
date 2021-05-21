
import React from 'react'
import Logo from './Logo'

import { useUser } from '@auth0/nextjs-auth0'


const Hero = () => {

const { user, error, isLoading } = useUser();

if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  if (user) {
    return (
      <div > 
        Welcome {user.nickname}! <a href="/api/auth/logout">Logout</a>

  <div className="hero my-5 text-center" data-testid="hero">
  <Logo testId="hero-logo" />
  <h1 className="mb-4" data-testid="hero-title">
    Profane Account Management
  </h1>
  
  </div>
  
      </div>
      
    );
  }
    return (
      <div className='content-home'>
        
        <a href="/api/auth/login">Login</a>
                
      </div>
    )

}
  


export default Hero;
