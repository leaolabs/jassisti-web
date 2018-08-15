import Head from 'next/head';

const Layout = (props) => (
  <div>
    <Head>
      <title>Jassisti - Filmes</title>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossOrigin="anonymous" />
      <meta name="description" content="Site para anotar os filmes que ja foram assistidos" />
      <meta name="author" content="Leao Labs" />
    </Head>
    <div className="container">
      {props.children}
    </div>
  </div>
);

export default Layout;