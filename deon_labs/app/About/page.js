import Achievments from "../_components/Achievments"
import Footer from "../_components/Footer"
import Hero from "../_components/Hero"
import Partner from "../_components/Partner"
import Services from "../_components/Services"
import Team from "../_components/Team"

// All the components are available in the _components folder
//Made with love by Deon Labs

function page() {
  return (
    <main>
      
      <Navbar/>
     
      {/* Hero Section */}
      <Hero/>

      {/* Our Partners  */}
      <Team/>
     
      {/* Achievments */}
      <Services/>
      
      {/* Built By A Team From */}
      <Partner/>

      {/* Footer Of the page  */}
      <Footer/>
    </main>
    
  )
}

export default page