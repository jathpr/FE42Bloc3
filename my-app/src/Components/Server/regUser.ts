const DOMAIN = "https://studapi.teachmeskills.by";
const USERS = "/auth/users/";
const ACTTIVATEURL = '/auth/users/activation/'
export { }

export type User = {
    username: string,
    password: string,
    email: string
}
export type ActivateProps = {
    uid: string,
    token: string
}

export const regUser = async (user: User) => {
    const url = new URL(DOMAIN + USERS);
    const response = await fetch(url, {
        method: 'POST', 
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(user),
    });
    const result: User = await response.json();
    return result;
};

export const activateUser = async (user: ActivateProps) => {
    const url = new URL(DOMAIN + ACTTIVATEURL);
    const response = await fetch(url, {
        method: 'POST', 
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(user),
    });
    const result: User = await response.json();
    return result;
}