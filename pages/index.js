import { HeroBanner, Product, FooterBanner } from '../components'
import { client } from '../lib/client'

const Home = ({products, bannerData}) => {
  return (
    <>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]} />

      <div className="products-heading">
        <h2 className="">Best Selling Products</h2>
        <p className="">Synthesizers for all types of players</p>
      </div>

      <div className="products-container">
        {products?.map((product) => <Product key={product._id} product={product} />)}
      </div>

      <FooterBanner footerBanner={bannerData && bannerData[0]} />
    </>
  )
}

export default Home

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]'
  const products = await client.fetch(query)

  const bannerQuery = '*[_type == "banner"]'
  const bannerData = await client.fetch(bannerQuery)

  return {
    props: {
      products,
      bannerData
    }
  }
}
