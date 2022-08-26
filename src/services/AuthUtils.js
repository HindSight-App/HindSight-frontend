import { client, checkError } from './client.js';

export async function SignupSupabase(email, password){
  const response = await client.auth.signUp({ email, password });
  return response.user;
}

export async function setupProfile(username) {
  const response = await client
    .from('Profile')
    .insert({ username });
  return checkError(response);
}

export async function uploadFile(file) {
  const response = await client.storage
    .from('avatars')
    .upload(file);
  return checkError(response);
}