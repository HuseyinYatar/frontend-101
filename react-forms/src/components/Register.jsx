export default function Register() {
  function handleSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    console.log(data.get("email"));
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="header">
        <h1>Login</h1>
        <p>Please enter your login and password!</p>
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input type="email" className="form-control" id="email" name="email" />
      </div>
      <div className="row">
        <div className="col-6">
          <div className="mb-4">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
            />
          </div>
        </div>
        <div className="col-6">
          <div className="mb-4">
            <label htmlFor="password" className="form-label">
              re-Password
            </label>
            <input
              type="password"
              className="form-control"
              id="repassword"
              name="repassword"
            />
          </div>
        </div>
      </div>
      <div className="mb-3">
        <button className="btn btn-outline-warning me-2">Submit</button>
        <button className="btn btn-outline-light">Reset</button>
      </div>
    </form>
  );
}
