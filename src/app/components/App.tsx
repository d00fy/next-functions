import Header from './Header'

const App = ({ children }: { children?: any }) => (
  <main>
    <Header />
    {children}
    <p>app tsxこんぽ</p>
  </main>
)

export default App
