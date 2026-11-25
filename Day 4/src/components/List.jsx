import Item from './Item'

const List = ({food ,Add, onclick}) => {
  return (
   <ul className="list-group ">
    {food.map((item)=><Item key={item} Add={Add} onclick={onclick} item={item} />)}
</ul>
  )
}

export default List