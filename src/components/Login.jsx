import Navbar from "./Navbar";

const Login = () => {
  return (
    <>
      <Navbar />
      <main class="form-signin">
        <div className="container">
          <div className="row">
            <div className="col-4 mx-auto">
              <form>
                <div className="text-center">
                  <img
                    class="mb-4"
                    src="logo192.png"
                    alt=""
                    width="72"
                    height="57"
                  />
                  <h1 class="h3 mb-3 fw-normal">Please sign in</h1>
                </div>
                <div class="form-floating">
                  <input
                    type="email"
                    class="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                  />
                  <label for="floatingInput">Email address</label>
                </div>
                <div class="form-floating">
                  <input
                    type="password"
                    class="form-control"
                    id="floatingPassword"
                    placeholder="Password"
                  />
                  <label for="floatingPassword">Password</label>
                </div>

                <div class="checkbox mb-3">
                  <label>
                    <input type="checkbox" value="remember-me" /> Remember me
                  </label>
                </div>
                <button class="w-100 btn btn-lg btn-primary" type="submit">
                  Sign in
                </button>
                <p class="mt-5 mb-3 text-muted">&copy; 2017-2021</p>
              </form>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Login;
