import styles from './GameInfo.module.css'


import Icon from '../icon/Icon'
import Button from '../button/Button'


function GameInfo ({currentPlayer,winner,onReset}){

  const ShouldEnableButton = () => {
    if(winner !==0) return true


  }

return(

  <div className={styles.gameInfo}>
   {
    winner === 0 &&
    <>
    <h4>proximo a jogar</h4>

      {
        currentPlayer === 1 &&  <Icon iconName="circle"/>
      }
      {
        currentPlayer === -1 &&  <Icon iconName="x"/>
      }

    </>
   }

   {
    winner !== 0 &&
    <>
    <h4>fim de jogo! campeão:</h4>
     {
      winner === 1 && <Icon iconName="circle"/>
      
     }
     {
      winner === -1 && <Icon iconName="x"/>

     }


    </>
   }
   <Button
    onClick={onReset}
    disabled={!ShouldEnableButton()}
   >
    Reiniciar
   </Button>





      
    </div>

)

}

export default GameInfo