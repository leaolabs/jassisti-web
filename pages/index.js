import Layout from '../components/Layout';

const Index = (props) => (
  <Layout>
    <main role="main" className="container">

      <div className="jumbotron">
        <h1>Jassisti</h1>
        <p className="lead">Salve os filmes que você ja assistiu! Todo apaixonado por filmes deve ter esse catalogo! É para a vida!</p>
        <a className="btn btn-lg btn-primary" href="../../components/navbar/" role="button">Comece agora &raquo;</a>
      </div>

      <div className="alert alert-danger" role="alert">
        Aplicação em desenvolvimento :)
      </div>

      <div className="row">
        <div className="col">
          <div className="card" styles={{ width: '18rem' }}>
            <img className="card-img-top" src="http://image.tmdb.org/t/p/w185//nBNZadXqJSdt05SHLqgT0HuC5Gm.jpg" />
            <div className="card-body">
              <h5 className="card-title">Interestelar</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            <div className="card-body">
              <a href="#" className="btn btn-success">Jassisti ;)</a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card" styles={{ width: '18rem' }}>
            <img className="card-img-top" src="http://image.tmdb.org/t/p/w185//vFUI5obFtx4IdhP6k8Om5ezHTrk.jpg" alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Titanic</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            <div className="card-body">
              <a href="#" className="btn btn-success">Jassisti ;)</a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card" styles={{ width: '18rem' }}>
            <img className="card-img-top" src="http://image.tmdb.org/t/p/w185//4D5GG79FBiAlD6UoKbq93rsAPIJ.jpg" alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">13º Destrito</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            <div className="card-body">
              <a href="#" className="btn btn-success">Jassisti ;)</a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card" styles={{ width: '18rem' }}>
            <img className="card-img-top" src="http://image.tmdb.org/t/p/w185//aAPISLXtd7gQgaQFFjsS8IeCFHq.jpg" alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Operação Cupido</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            <div className="card-body">
              <a href="#" className="btn btn-success">Jassisti ;)</a>
            </div>
          </div>
        </div>

        <div className="w-100" style={{ paddingTop: '15px' }}></div>
        
        <div className="col">
          <div className="card" styles={{ width: '18rem' }}>
            <img className="card-img-top" src="http://image.tmdb.org/t/p/w185//nBNZadXqJSdt05SHLqgT0HuC5Gm.jpg" />
            <div className="card-body">
              <h5 className="card-title">Interestelar</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            <div className="card-body">
              <a href="#" className="btn btn-success">Jassisti ;)</a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card" styles={{ width: '18rem' }}>
            <img className="card-img-top" src="http://image.tmdb.org/t/p/w185//vFUI5obFtx4IdhP6k8Om5ezHTrk.jpg" alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Titanic</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            <div className="card-body">
              <a href="#" className="btn btn-success">Jassisti ;)</a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card" styles={{ width: '18rem' }}>
            <img className="card-img-top" src="http://image.tmdb.org/t/p/w185//4D5GG79FBiAlD6UoKbq93rsAPIJ.jpg" alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">13º Destrito</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            <div className="card-body">
              <a href="#" className="btn btn-success">Jassisti ;)</a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card" styles={{ width: '18rem' }}>
            <img className="card-img-top" src="http://image.tmdb.org/t/p/w185//aAPISLXtd7gQgaQFFjsS8IeCFHq.jpg" alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Operação Cupido</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            <div className="card-body">
              <a href="#" className="btn btn-success">Jassisti ;)</a>
            </div>
          </div>
        </div>
      </div>
    </main>
  </Layout>
);

export default Index;