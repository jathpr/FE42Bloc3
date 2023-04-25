import styles from "./css/User.module.css";

type Props = {
   username: string
}

export const User = ({ username }: Props) => {
   const nameSurnameArr = username.split(' ');
   const userInitials = (nameSurnameArr[0][0] + nameSurnameArr[1][0]).toUpperCase();
   return (
      <div className={styles.user}>
         <p className={styles['user__initials-block']}>{userInitials}</p>
         <p className={styles['user__username-block']}>{username}</p>
      </div>
   )
}