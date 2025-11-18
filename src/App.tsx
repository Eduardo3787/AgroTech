import { Header } from './components/header'
import { Layout } from './components/layout'
import { Footer } from './components/footer'
import { Home } from './page'

export function App() {
  return (
    <div className="flex flex-col items-center w-full">
      <Header />
      <Layout>
        <Home />
      </Layout>
      <Footer />
    </div>
  )
}
