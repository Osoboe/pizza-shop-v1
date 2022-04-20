import Head from 'next/head';
import Featured from '../components/Featured/Featured';
import ProductList from '../components/ProductList/ProductList';

export default function Home() {

  return (
    <div>
      <Head>
        <title>pizza-shop</title>
        <meta name ="decription" content="Опаснейшее опг" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured />
      <ProductList />
    </div>
  )
}
