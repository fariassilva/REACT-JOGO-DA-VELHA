import styles from './Header.module.css'

import Title from '../title/Title'
import Subtitle from '../subtitle/Subtitle'
import Icon from '../icon/Icon'

function Header (){


  return(

    <div className={styles.header}>
      <Title>jogo da velha</Title>
      <Subtitle>criado por Alessandro farias</Subtitle>
      <div className={styles.iconContnet}>
        <Icon iconName="github"  link="https://github.com/fariassilva"/>
      </div>
    </div>


  )



}
export default Header