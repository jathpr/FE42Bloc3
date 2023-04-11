users.reduce((acc,user)=>{
    if (user.age>18) return {older18: acc.older18+1, older30: ++acc.older30, older40: acc.older40+1}
    if (user.age>30) return {...acc, older18: acc.older18+1, older30: ++acc.older30}
    if (user.age>40) return {...acc, older40: acc.older40+1}
}ц)