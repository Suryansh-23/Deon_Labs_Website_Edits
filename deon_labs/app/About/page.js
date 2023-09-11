import Achievments from "../_components/Achievments"
import Footer from "../_components/Footer"
import Hero from "../_components/Hero"
import Navbar from "../_components/Navbar"

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
      <Partner/>

      {/* Achievments */}
      <Achievments/>
      
      {/* Built By A Team From */}
      <Team/>

      {/* Partners */}
      <Partner/>
      {/* Our Vision */}
      {/* Footer Of the page  */}
      <Footer/>
    </main>
    
  )
}

export default page