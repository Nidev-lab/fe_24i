import Login from './components/Login/Login';
import Register from './components/Register/Register';

function App() {
  return (
    <div className="App">
      <section className='row gx-0'>
        <div className='col-6'>
          <Register />
        </div>
        <div className='col-6'>
          <Login />
        </div>
      </section>
    </div>
  );
}

export default App;
