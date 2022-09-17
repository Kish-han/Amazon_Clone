import Head from "next/head";
import Banner from "../../components/Banner";
import Header from "../../components/Header";
import ProductFeed from "../../components/ProductFeed";

export default function Home({ products }) {
  
  return (
    <div className="bg-gray-100" >
      <Head>
        <title>Amazon 2.0</title>
        <link rel="icon" href="https://s.clipartkey.com/mpngs/s/147-1478713_amazon-logo-png-amazon-logo.png" />
      </Head>
      {/* Header */}
      <Header />

      <main className="max-w-screen-xl mx-auto">
        {/* Banner */}
        <Banner />
        {/* ProductFeed */}
        <ProductFeed products={products} />
      </main>
    </div>
  );
}


export async function getServerSideProps() {
  const products = await fetch("https://fakestoreapi.com/products")
    .then(
      (res) => res.json()
  );
  
  return {
    props: {
      products,
    }
  }
}