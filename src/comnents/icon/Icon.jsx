function Icon ({iconName,saze,link}){

  return(

   <a href={link} target="_blank"> 
    <img src={`/icons/${iconName}.svg`} width={saze}/>
   </a> 
  )
}
Icon.defaultProps = {

  saze : '30px'

}

export default Icon