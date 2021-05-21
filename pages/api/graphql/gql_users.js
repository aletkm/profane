import { getAccessToken, withApiAuthRequired } from '@auth0/nextjs-auth0';
import { useRouter } from 'next/router'

export default withApiAuthRequired(async function users(req, res) {

try {
  const { accessToken } = await getAccessToken(req, res, {
    scopes: ['openid']
  });
  const response = await fetch('https://profane.hasura.app/api/rest/get_allusers', 
    {
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  });
  const users = await response.json();
  res.status(200).json(users);

} catch (error) {
    console.error(error);
    res.status(error.status || 500).json({
      code: error.code,
      error: error.message
    });
  }
});