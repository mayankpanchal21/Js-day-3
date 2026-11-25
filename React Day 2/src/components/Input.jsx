export default function Input(){
    return(
        <>
         <div class="container text-center">
        <div className="row">
          <div class="col-6 ">
            <input placeholder="Add your task here......" type="text" name="" id="" />
          </div>
          <div className="col-4">
            <input type="date" name="" id="" />
          </div>
          <div className="col-2 ">
            <button type="button" class="theme-primary btn-solid btn-styled">
              Add
            </button>
          </div>
        </div>
      </div>
        </>
    )
}

