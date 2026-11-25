function Food(props){
     let item = props.food
    return(
        <>
         <ul class="list-group">
        {item.map(i=><li key={i} class="list-group-item">{i}</li>)}
      </ul>
        </>
    )
}

export default Food;