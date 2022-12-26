import styles from './GameInfo.module.css'


import Icon from '../icon/Icon'
import Button from '../button/Button'


function GameInfo ({currentPlayer,winner,onReset,isDraw}){

  const ShouldEnableButton = () => winner !== 0 || isDraw 
  
  

return(

  <div className={styles.gameInfo}>
   {
    !isDraw && winner === 0 &&
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
    !isDraw && winner !== 0 &&
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
   {
    isDraw && <h4>empate!</h4>
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