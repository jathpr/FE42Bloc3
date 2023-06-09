const DOMAIN = "https://studapi.teachmeskills.by";
const USERS = "/auth/users";

type User = {
    login: string,
    password: string,
    email: string
}

export const regUser = async (user: User) => {
    const url = new URL(DOMAIN + USERS);
    const response = await fetch(url, {
        method: 'POST', 
        body: JSON.stringify(user),
        headers: {'Content-Type': 'application/json'}
    });
    const result = await response.json();
    return result;
};