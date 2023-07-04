import { useEffect } from "react";
import styles from "../css/User.module.css";
import { useAppDispatch, useAppSelector } from "../store/store";
import { getProfileThunk } from "../store/auth";

type Props = {
   // username?: string,
   menu?: boolean
}

export const User = ({ menu }: Props) => {

   const username = useAppSelector(state => state.auth.userUsername)
   const isAuthorized = useAppSelector(state => state.auth.isAuthorized)
   const accessTokenStore = useAppSelector(state => state.auth.accessToken)

   const dispatch = useAppDispatch()

   useEffect(() => {
      // console.log("🚀 ~ file: User.tsx:14 ~ User ~ username:", username)
      // console.log("🚀 ~ file: User.tsx:15 ~ User ~ isAuthorized:", isAuthorized)
      // console.log("🚀 ~ file: User.tsx:21 ~ useEffect ~ accessTokenStore:", accessTokenStore)
      if (!username) {
         dispatch(getProfileThunk())
      }
   }, [username])

   if (username) {
      const nameSurnameArr = username.split(' ');
      let userInitials
      if (nameSurnameArr.length > 1) {

         userInitials = (nameSurnameArr[0][0] + nameSurnameArr[1][0]).toUpperCase();
      }
      else
         userInitials = username[0].toUpperCase()

      return (
         <div className={menu ? `${styles.user} ${styles['menu-item']}` : styles.user}>
            <p className={styles['user__initials-block']}>{userInitials}</p>
            <p className={styles['user__username-block']}>{username}</p>
         </div>
      )
   }
   else
      return (
         <div className={menu ? `${styles['user__no-auth']} ${styles['menu-item']}` : styles['user__no-auth']}>
            <svg width="35px" height="35px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path fill-rule="evenodd" clip-rule="evenodd" d="M8 9C8 6.79086 9.79086 5 12 5C14.2091 5 16 6.79086 16 9C16 11.2091 14.2091 13 12 13C9.79086 13 8 11.2091 8 9ZM15.8243 13.6235C17.1533 12.523 18 10.8604 18 9C18 5.68629 15.3137 3 12 3C8.68629 3 6 5.68629 6 9C6 10.8604 6.84668 12.523 8.17572 13.6235C4.98421 14.7459 3 17.2474 3 20C3 20.5523 3.44772 21 4 21C4.55228 21 5 20.5523 5 20C5 17.7306 7.3553 15 12 15C16.6447 15 19 17.7306 19 20C19 20.5523 19.4477 21 20 21C20.5523 21 21 20.5523 21 20C21 17.2474 19.0158 14.7459 15.8243 13.6235Z" fill="#fff" />
            </svg>
         </div>
      )

}