import { useAppDispatch, useAppSelector } from "../store/store"
import styles from "../css/PopupImg.module.css";
import { savePostImg } from "../store/post";
import { useEffect } from "react";

export const PopupImg = () => {
   const postImg = useAppSelector(state => state.posts.postImg)
   const dispatch = useAppDispatch()

   const closePopup = () => {
      dispatch(savePostImg({ id: 0, image: '', visibility: false }))
      // parentClosePopup()
   }

   useEffect(() => { }, [postImg.visibility])

   return (
      // {styles['post__img--wrapper']}
      <div id="popup-img" className={`${styles['popup']} ${postImg.visibility ? styles['open'] : ''}`}>
         <div className={styles['popup__body']}>
            <div className={styles['popup__content']}>
               <button className={styles['popup__close']} onClick={closePopup}>X</button>
               {/* <p className={styles['popup__text']}>{postImg.id}</p> */}
               {/* <p className={styles['popup__text']}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet, nihil explicabo, accusantium placeat magni ab
                  unde velit ullam inventore nesciunt aperiam omnis? Maxime velit, corrupti deleniti veniam eum enim
                  necessitatibus.
                  Impedit harum mollitia ipsam inventore quaerat aliquam. Quasi, totam. Quo nesciunt corporis nihil quasi nobis,
                  libero iure quos ullam placeat ea quisquam, eligendi, itaque dolorum maxime totam esse sit corrupti?
                  Numquam exercitationem laborum dolor! Natus, illum ut quibusdam est, labore quaerat blanditiis dolorem quas ea
                  reprehenderit harum sapiente? Dolores dolor ipsam aut repellendus aspernatur eum, incidunt accusamus doloribus
                  cum! Aliquam!</p> */}
               <div className={styles['popup__img--wrapper']}>
                  <img src={postImg.image} alt="No image" />
               </div>

            </div>
         </div>
      </div>
   )
}