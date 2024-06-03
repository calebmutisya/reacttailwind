import './App.css';

function App() {
  return (
    <div>
      <nav className='w80 centerhorizontally h-20 bgpink mauto spacebetween'>
        <div className='h64 centerhorizontally bgwhite'>
          Logo
        </div>
        <div className='flex'>
          <ul className='flex'>
            <li className='p-x10 bggrey h64 centerhorizontally'>Home</li>
            <li className='p-x10 bggrey h64 centerhorizontally'>Properties</li>
            <li className='p-x10 bggrey h64 centerhorizontally'>Why Us</li>
            <li className='p-x10 bggrey h64 centerhorizontally'>About Us</li>
          </ul>
        </div>
        <div className='flex'>
          <button className='navbutton h64 centerhorizontally m-x20'>Sign Up</button>
          <button className='navbutton h64 centerhorizontally m-x20'>Login</button>
        </div>
      </nav>
    </div>
  );
}

export default App;
