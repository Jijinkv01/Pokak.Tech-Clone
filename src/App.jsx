
import './App.css'
import Navbar from './Components/Navbar'
import Main from './Components/Main'
import WorkProcess from './Components/WorkProcess'
import BestSolution from './Components/BestSolution'
import Project from './Components/Project'
import SocialMedia from './Components/SocialMedia'
import Footer from './Components/Footer'
import FooterCopyright from './Components/FooterCopyright'

const App = () => {
  return (
    <div>
      <Navbar />
      <Main />
      <WorkProcess />
      <BestSolution />
      <Project />
      <SocialMedia />
      <Footer />
      <FooterCopyright />
    </div>
  )
}

export default App