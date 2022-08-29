import { client, checkError } from "./client.js";

export async function SignupSupabase(email, password) {
  const response = await client.auth.signUp({ email, password });
  return response.user;
}

export async function setupProfile(username, avatar) {
  const response = await client.from("Profile").insert({ username, avatar });
  return checkError(response);
}

export async function uploadFile(name, file) {
  const response = await client.storage.from("avatars").upload(name, file);
  return checkError(response);
}

export async function getUser() {
  const user = client.auth.session();

  return user;
}

export async function signIn(email, password) {
  const response = await client.auth.signIn({ email, password });

  return response.user;
}

export async function createHindsight({ title, description, datetime, visibility, type}) {
  const response = await client
    .from('Posts').insert({ title, description, datetime, visibility, type})

    return checkError(response);
}
