function Heading(){
    let obj = {
        color:'blue',
        background:'yellow'
    }
    console.log(obj.color)
    return(
        <>
            <h1 style={{color:obj.color}}>Diet Institute of Engineering & Technology, Meerut.</h1>
        </>
    )
}

export default Heading;