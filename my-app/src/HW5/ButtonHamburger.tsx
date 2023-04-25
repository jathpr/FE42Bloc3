import styles from "./css/ButtonHamburger.module.css";

type Props = {
   collapsed?: boolean,
   handleClick: () => void
}

export const ButtonHamburger = ({ collapsed, handleClick }: Props) => {
   if (!collapsed) {
      return <button onClick={handleClick}><div className={styles['menu-svg--wrapper']}><svg  version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
         viewBox="0 0 41.756 41.756"
      >
         <g>
            <path d="M27.948,20.878L40.291,8.536c1.953-1.953,1.953-5.119,0-7.071c-1.951-1.952-5.119-1.952-7.07,0L20.878,13.809L8.535,1.465
     c-1.951-1.952-5.119-1.952-7.07,0c-1.953,1.953-1.953,5.119,0,7.071l12.342,12.342L1.465,33.22c-1.953,1.953-1.953,5.119,0,7.071
     C2.44,41.268,3.721,41.755,5,41.755c1.278,0,2.56-0.487,3.535-1.464l12.343-12.342l12.343,12.343
     c0.976,0.977,2.256,1.464,3.535,1.464s2.56-0.487,3.535-1.464c1.953-1.953,1.953-5.119,0-7.071L27.948,20.878z"/>
         </g>
      </svg></div></button>
   }

   return <button onClick={handleClick}><div className={styles['menu-svg--wrapper']}><svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" version="1.1" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5">
      <path d="m2.75 12.25h10.5m-10.5-4h10.5m-10.5-4h10.5" />
   </svg></div></button>
}