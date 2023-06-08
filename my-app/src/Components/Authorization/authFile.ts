const DOMAIN = "https://studapi.teachmeskills.by";
const USERS = "/auth/users/";
const ACTIVATEURL = "/auth/users/activation/";
const AUTHURL = "/auth/jwt/create/";

export type UserProps = {
    username: string | null,
    password: string | null,
    email: string | null,
}

export type ActivateProps = {
    uid: string,
    token: string
}

export type LoginUserProps = {
    email: string,
    password: string
}

export type Token = {
    access: string,
    refresh: string
}

export const regUser = async (user: UserProps) => {
    const url = new URL(DOMAIN + USERS);
    const response = await fetch(url,
        {
            method: "Post",
            body: JSON.stringify(user),
            headers: { "Content-Type": "application/json" },

        });
    const result = await response.json();
    return result;
};

export const activateUser = async (user: ActivateProps) => {
    const url = new URL(DOMAIN + ACTIVATEURL);
    console.log(url)
    const response = await fetch(url,
        {
            method: "Post",
            body: JSON.stringify(user),
            headers: { "Content-Type": "application/json" },

        });
    const result = await response.json();
    return console.log(result);
}
export const checkUsers = async (user: LoginUserProps) => {
    const url = new URL(DOMAIN + AUTHURL);
    const response = await fetch(url,
        {
            method: "Post",
            body: JSON.stringify(user),
            headers: { "Content-Type": "application/json" },

        });

    const result = await response.json();
    return result
}

export const saveTokens = ({ access, refresh }: Token) => {
    localStorage.setItem("access", access)
    localStorage.setItem("refresh", refresh)
}
