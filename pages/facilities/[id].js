import { useRouter } from 'next/router'
import Layout from '../../components/layout'

export default function Bookings() {
  const router = useRouter()
  const { id } = router.query

  return (
    <Layout backPath="/">
      <h1>Facilities {id} page</h1>
    </Layout>
  )
}
