import { Token } from "../store/auth";

const DOMAIN = "https://studapi.teachmeskills.by";
const USERS = "/auth/users/";
const ACTIVATE_USER = "/auth/users/activation/";
const CHECK_USER = "/auth/jwt/create/";
const PROFILE = "/auth/users/me/";
const REFRESH = "/auth/jwt/refresh/";

export type UserForReg = {
   email: string,
   password: string,
   username: string
}

export type ActivationKeys = {
   uid: string,
   token: string
}

export type CheckUser = {
   email: string;
   password: string
};

export type UserProfile = {
   username: string,
   id: number,
   email: string
}

export const regUser = async (user: UserForReg) => {
   const url = new URL(DOMAIN + USERS);
   const response = await fetch(url,
      {
         method: 'POST',
         body: JSON.stringify(user),
         headers: { "Content-Type": "application/json" }
      });
   const result = await response.json();
   return result;
}

export const activateUser = async (activationKeys: ActivationKeys) => {
   const url = new URL(DOMAIN + ACTIVATE_USER);
   const response = await fetch(url,
      {
         method: 'POST',
         body: JSON.stringify(activationKeys),
         headers: { "Content-Type": "application/json" }
      });
   const result = await response.json();
   return result;
}

export const checkUser = async (user: CheckUser) => {
   const url = new URL(DOMAIN + CHECK_USER);
   const response = await fetch(url,
      {
         method: 'POST',
         body: JSON.stringify(user),
         headers: { "Content-Type": "application/json" }
      });
   const result = await response.json();
   return result;
}

export const saveTokens = (tokens: Token) => {
   if (tokens.access && tokens.refresh) {
      localStorage.setItem('accessToken', tokens.access)
      localStorage.setItem('refreshToken', tokens.refresh)
   }
}

export const getProfile = async () => {
   // export const getProfile = async (accessTokenStore: string) => {

   // let accessToken
   // console.log("🚀 ~ file: auth.ts:79 ~ getProfile ~ accessTokenStore:", accessTokenStore)
   // if (accessTokenStore) {
   //    accessToken = accessTokenStore
   // }
   // else
   //    accessToken = localStorage.getItem('accessToken')

   const accessToken = localStorage.getItem('accessToken')
   const response = await fetch(DOMAIN + PROFILE, {
      headers: {
         'Authorization': `Bearer ${accessToken}`
      }
   })
   const user: UserProfile = await response.json()
   // console.log("🚀 ~ file: auth.ts:84 ~ getProfile ~ user:", user)
   return user
}