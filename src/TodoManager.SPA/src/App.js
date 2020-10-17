import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h6>Welcome to the to do Manager</h6>
        <br/>
        <button>Click to add new elemets</button>
        <div>
          <Navbar style={{backgroundImage:'linear-gradient(RGBA(182,82,80), RGBA(115,71,108))',height:'8em'}} expand="lg" >
            <Navbar.Brand >
              <Link to='/'>
                <p className="menu__logo navbar-brand " style={{fontSize:'2.5em',marginLeft:'2em',fontWeight:'bold',color:'white'}}>Destino</p>
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav"  >
              <Nav className="ml-auto"  >
                <Nav.Link>
                  <Link className=" nav-link "  to="/Login" style={{color:'white',fontSize:'1.2em'}}>
                    Log in
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link className=" nav-link "  to="/SignUp" style={{color:'white',fontSize:'1.2em'}}>
                    Register
                  </Link>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
        <div>

          <Container className='mt-5 mb-3 ' style={{width:'40em',height:'36em',backgroundColor:"White",borderRadius:'20px'}}>
            <form noValidate onSubmit={this.onSubmit}>
              <br/>
              <div className=" ">
                <img src={login1} alt="Logo" style={{height:"150px",marginLeft:"30%"}}/>;
              </div>

              <div className="form-group">
                <label>Email</label>
                <input type="text" className="form-control" placeholder="Email"
                       onChange={this.onChange}
                       value={this.state.email}
                       error={errors.email}
                       id="email"
                       type="email"
                       className={classnames("", {
                         invalid: errors.email || errors.emailnotfound
                       })}
                />
                <span className="red-text">
                                {errors.email}
                  {errors.emailnotfound}
                            </span>
              </div>


              <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" placeholder="Enter password"
                       onChange={this.onChange}
                       value={this.state.password}
                       error={errors.password}
                       id="password"
                       type="password"
                       className={classnames("", {
                         invalid: errors.password || errors.passwordincorrect
                       })}
                />
                <span className="red-text">
                                  {errors.password}
                  {errors.passwordincorrect}
                            </span>
              </div>
              <br/><br/>

              <button type="submit" className="btn btn-primary btn-block">Log In</button>
              <p className="forgot-password text-right">
                Haven't Registered <a href="/Signup">Register?</a>
              </p>
            </form>

          </Container>

        </div>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
