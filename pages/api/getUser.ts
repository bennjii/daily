 
import { supabase } from '../../client';
import NextCors from 'nextjs-cors';

// Example of how to verify and get user data server-side.
const getUser = async (req, res) => {
  await NextCors(req, res, {
      // Options
      methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
      origin: '*',
      optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  });

  const token = req.headers.token;

  const { data: user, error } = await supabase.auth.api.getUser(token);

  if (error) return res.status(401).json({ error: error.message });
  else return res.status(200).json(user);
};

export default getUser;