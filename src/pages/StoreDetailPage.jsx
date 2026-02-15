import { useParams } from 'react-router-dom'

function StoreDetailPage() {
  const { id } = useParams()

  return (
    <section aria-label="Store detail">
      <h1 className="text-xl font-bold text-tgtg-text p-4">
        Store Detail Page
      </h1>
      <p className="text-tgtg-text-secondary px-4">Store ID: {id}</p>
    </section>
  )
}

export default StoreDetailPage
