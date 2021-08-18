import { Fragment } from "react";
import "./App.css";
import Form from './Components/forms'

function App() {
  return (
    <Fragment>
      <header className="App-header">
        <div className="container">
          <div className="row">
            <div className="col-8">
              <img  className="img-fluid" alt="ok" src="./screens/TrianguloPitagoras.png" />
            </div>
            <div className="col-4 border mt-5">
              <Form

              />
            </div>
            <div className="row ustify-content-md-center mt-5">
              <div className="col-12 border bg-light colorAlter">
                <p>Resultado</p>
                <p className="resolucao"></p>
              </div>
            </div>
          </div>
        </div>
      </header>
    </Fragment>
  );
}

export default App;
