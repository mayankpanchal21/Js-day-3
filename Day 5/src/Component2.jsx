import { usercontxt } from "./App";
import { useContext } from "react"

const Component2 = () => {
    let user = useContext(usercontxt);

    return (
    <div>{user}</div>
  )
}

export default Component2;