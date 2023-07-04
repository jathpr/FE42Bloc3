import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { activateUser } from "../server/auth"

export const Activate = () => {

   const { uid, token } = useParams()

   useEffect(() => {
      uid && token && activateUser({
         uid: uid,
         token: token
      })
   }, [uid, token])

   return (
      <p>Activated!</p>
   )
}