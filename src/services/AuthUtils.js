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

export async function getProfile() {
  const { user } = await getUser();
  const response = await client
    .from("Profile")
    .select("*")
    .match({ user_id: user.id })
    .single();

  return checkError(response);
}

export async function getProfileById(user_id) {
  const response = await client
  .from("Profile")
  .select("*")
  .match({ user_id })
  .single();

return checkError(response);
}

export async function signIn(email, password) {
  const response = await client.auth.signIn({ email, password });

  return response.user;
}

export async function createHindsight({
  title,
  description,
  datetime,
  visibility,
  type,
}) {
  const response = await client
    .from("Posts")
    .insert({ title, description, datetime, visibility, type });

  return checkError(response);
}

export async function getPostsById(user_id) {
  const response = await client
    .from('Posts')
    .select('*')
    .match({user_id});
    
  return checkError(response);
}

export async function deleteById(id) {
  const response = await client
    .from('Posts')
    .delete()
    .match({ id: id });

  return checkError(response)
}

export async function getPosts(){
  const response = await client
    .from('Posts')
    .select('*')
    .match({ visibility: true })

    return checkError(response)
}

export async function addKarma(user_id, newKarma){
  const response = await client
    .from('Profile')
    .update({karma: newKarma})
    .match({ user_id})
    
    return checkError(response)
}