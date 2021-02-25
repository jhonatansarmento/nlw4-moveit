import styles from '../styles/components/Profile.module.css'

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src="https://web.whatsapp.com/pp?e=https%3A%2F%2Fpps.whatsapp.net%2Fv%2Ft61.24694-24%2F55994673_593574074450987_2626253775723036672_n.jpg%3Foh%3Dceee7ce1bd798cd0239a35b1b53dcd50%26oe%3D603A7B4A&t=l&u=559291870568%40c.us&i=1540662747&n=VBO1UBVP6xtpNYu8y3i9fvXhwtowtOYaaOEiI2Uyob4%3D" alt="Perfil" />
      <div>
        <strong>Jhonatan Sarmento</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level 1
        </p>
      </div>
    </div>
  )
}