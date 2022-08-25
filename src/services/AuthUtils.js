import { client, checkError } from './client.js';

export async function Signup(email, password){
  const response = await client.auth.signUp({ email, password });
  return response.user;
}

export async function setupProfile(username, avatar) {
  const response = await client
    .from('profile')
    .insert({ username, avatar });
  return checkError(response);
}