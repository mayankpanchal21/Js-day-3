let Image = ()=>{
    let obj = {
        name:"mayank",
        branch:"btech",
        year:"2027",
        image:"https://plus.unsplash.com/premium_photo-1713296255442-e9338f42aad8?q=80&w=722&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
    }

    return(
        <>
        <img src={obj.image} width={100} alt="" srcset="" />
        <h1>Student Details</h1>
        <ul>
            <li>{obj.name}</li>
            <li>{obj.branch}</li>
            <li>{obj.year}</li>
        </ul>
        </>
    )
}

export default Image;