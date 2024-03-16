import { Header } from "./components/Header"
import { useHashNavigation } from "./hooks/useHashNavigation"
import { Contact } from "./pages/Contact"
import { Home } from "./pages/Home"
import { NotFound } from "./pages/NotFound"
import { Single } from "./pages/Single"

function App() {

  const { page } = useHashNavigation()
  const pageContent = getPageContent(page)

  return <>
  <Header page={page}/>
    {pageContent}
  </>

}

function getPageContent(page) {
  if (page === 'home') {
    return <Home />
  }
  if (page === 'contact') {
    return <Contact />
  }
  if (page === 'post') {
    return <Single />
  }

  return <NotFound page={page} />
}

export default App
