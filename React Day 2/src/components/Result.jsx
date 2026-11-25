export function Result() {
  return (

      <div class="container text-center p-5 ">
        <div className="row">
          <div class="col-6 ">
            <h2>Go to gym</h2>
          </div>
          <div className="col-4 text-center">
            <p>25-11-2026</p>
          </div>
          <div className="col-2">
            <button type="button" class="btn-outline theme-danger">
              Delete
            </button>
          </div>
        </div>
      </div>
   
  );
}

export function Hello(){
    return (
        <h1>I am named export hello....</h1>
    )
}