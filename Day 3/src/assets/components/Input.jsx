import "bootstrap/dist/css/bootstrap.min.css";
const Input = () => {
    let text = "new data"
    let inputdata = (e)=>{
        console.log(e.target.value);
        text = e.target.value
    };
  return (
    <div class="form-field">
      <label for="fieldText" class="form-label">
        Email address
      </label>
      <input
        type="email"
        class="form-control w-10"
        id="fieldText"
        placeholder="name@example.com"
        onChange={inputdata}
      />
      <button type="button" class="btn w-5">Add</button>
      <h1>{text}</h1>
    </div>
  );
};

export default Input;
