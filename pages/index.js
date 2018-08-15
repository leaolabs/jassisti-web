import Layout from '../components/Layout';

const Index = (props) => (
  <Layout>
    <main role="main" className="container">
      <div className="jumbotron">
        <h1>Jassisti</h1>
        <p className="lead">Salve os filmes que você ja assistiu! Todo apaixonado por filmes deve ter esse catalogo! É para a vida!</p>
        <a className="btn btn-lg btn-primary" href="../../components/navbar/" role="button">Comece agora &raquo;</a>
      </div>
    </main>
  </Layout>
);

export default Index;