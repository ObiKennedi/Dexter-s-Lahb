import About from "./components/about/index.tsx"
import NavBar from "./components/header/index.tsx"
import Hero from "./components/hero-section/index.tsx"

function App() {
  return (
    <>
      <NavBar />
      <main>
        <Hero/>
        <About/>
      </main>
    </>
  )
}

export default App
