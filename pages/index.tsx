import Head from 'next/head'
import dayjs from 'dayjs'
import Header from '../components/Header'
import Card from '../components/Cards'
const Home = ({ folder_with_links, me, site_info, target }: any) => {
  console.log('cardData', me)
  return (
    <div className=''>
      <Head>
        <title>{site_info.name}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header siteInfo={site_info} />
      <main className='bg-gray-200 h-screen p-5'>
        <Card data={folder_with_links} />
      </main>

    </div>
  )
}

export default Home
export async function getStaticProps() {
  const cardData = await fetch(`https://xydh.fun/api/v1/allsiteandlinks/yancy?_t=${dayjs().valueOf()}`).then(
    (res) => res.json()
  )
  console.log('done')
  if (cardData.code === 0) {
    return {
      props: {
        folder_with_links: cardData?.data.folder_with_links,
        me: cardData?.data.me,
        site_info: cardData?.data.site_info,
        target: cardData?.data.target,
      },
    }
  } else {
    console.log('err', cardData.msg)
  }

}
