import { Routes, Route } from 'react-router-dom'
import AppLayout from './components/layout/AppLayout'
import DiscoverPage from './pages/DiscoverPage'
import StoreDetailPage from './pages/StoreDetailPage'

function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<DiscoverPage />} />
        <Route path="/store/:id" element={<StoreDetailPage />} />
      </Route>
    </Routes>
  )
}

export default App
