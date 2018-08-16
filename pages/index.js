
import fetch from 'isomorphic-unfetch';
import Layout from '../components/Layout';

class Index extends React.Component {
  constructor() {
    super()
    // inicia o estado do componente
    this.state = {
      query: '',
      movies: []
    }
    // Aplica o contexto `this` ao método fetchMovies() e handleOnChangeSearch
    this.fetchMovies = this.fetchMovies.bind(this)
    this.handleOnChangeSearch = this.handleOnChangeSearch.bind(this)
  }

  async fetchMovies() {
    const { query } = this.state

    const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=23c7c67208238adf1e93243d0180aab7&language=pt-br&query=${query}&page=1&include_adult=false`);
    const { results: movies } = await res.json()

    if (movies) {
      this.setState({ ...this.state, movies })
    }
  }

  handleOnChangeSearch(e) {
    e.preventDefault()

    const { value } = e.target

    this.setState({ ...this.state, query: value })
  }

  render() {
    const { movies } = this.state
  
    return (
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
            <input onChange={this.handleOnChangeSearch} type="text" className="form-control" placeholder="Procurar filme ..." aria-label="Procurar filme ..." aria-describedby="button-addon2" />
            <div className="input-group-append">
              <button onClick={() => this.fetchMovies()} className="btn btn-outline-secondary" type="button" id="button-addon2">Procurar</button>
            </div>
          </div>

          <div className="row">
            {movies.length && movies.map((movie) => (
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
        </main>
      </Layout>
    );
  }
}

export default Index;