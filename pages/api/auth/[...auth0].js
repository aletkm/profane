import { handleAuth, handleLogin } from '@auth0/nextjs-auth0';
import auth0 from '../../../utils/auth0';

export default auth0.handleAuth({
  async login(req, res) {
    try {
      await handleLogin(req, res, {
        authorizationParams: {
          audience: 'https://hasura.io/profane', // or AUTH0_AUDIENCE
          // Add the `offline_access` scope to also get a Refresh Token
          scope: 'openid profile email' // or AUTH0_SCOPE
        }
      });
    } catch (error) {
      res.status(error.status || 400).end(error.message);
    }
  }
});


