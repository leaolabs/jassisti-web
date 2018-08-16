
import fetch from 'isomorphic-unfetch';
import Layout from '../components/Layout';

const Index = ({ movies }) => (
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

      <div className="input-group mb-3">
        <input type="text" className="form-control" placeholder="Procurar filme ..." aria-label="Procurar filme ..." aria-describedby="button-addon2" />
        <div className="input-group-append">
          <button className="btn btn-outline-secondary" type="button" id="button-addon2">Procurar</button>
        </div>
      </div>

      <div className="row">
        {movies.results.map((movie) => (
          <div className="col-3">
            <div className="card" styles={{ width: '18rem' }}>
              <img className="card-img-top" src={"http://image.tmdb.org/t/p/w185/" + movie.poster_path} alt={movie.title} />
              <div className="card-body">
                <h5 className="card-title">{movie.title}</h5>
                <p className="card-text">{movie.overview}</p>
              </div>
              <div className="card-body">
                <a href="#" className="btn btn-success">Jassisti ;)</a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="row">
        <div className="col-3">
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
        <div className="col-3">
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
        <div className="col-3">
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
        <div className="col-3">
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
        <div className="col-3">
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
        <div className="col-3">
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
        <div className="col-3">
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
        <div className="col-3">
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

Index.getInitialProps = async () => {
  const res = await fetch('https://api.themoviedb.org/3/search/movie?api_key=23c7c67208238adf1e93243d0180aab7&language=pt-br&query=jogos%20mortais&page=1&include_adult=false');
  const json = await res.json()

  return { movies: json }
}

export default Index;