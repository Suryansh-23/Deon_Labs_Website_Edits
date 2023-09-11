"use client"
import Achievments from "../_components/Achievments"
import Footer from "../_components/Footer"
import Hero from "../_components/Hero"
import Navbar from "../_components/Navbar"
import AnimatedCursor from "react-animated-cursor";
import Partner from "../_components/Partner"
import Services from "../_components/Services"
import Team from "../_components/Team"

// All the components are available in the _components folder
//Made with love by Deon Labs

function page() {
  return (
    <main>
      <div id="cursor">
                <AnimatedCursor
                    innerSize={8}
                    outerSize={35}
                    innerScale={1}
                    outerScale={2}
                    outerAlpha={0}
                    hasBlendMode={true}
                    innerStyle={{
                        backgroundColor: "#fff",
                    }}
                    outerStyle={{
                        border: "3px solid #fff",
                    }}
                />
            </div>
      <Navbar/>
     
      {/* Hero Section */}
      <Hero/>

        {/*  By A Team From */}
        <Team/>

      {/* Achievments */}
      <Achievments/>
      
    
      {/* Partners */}
      <Partner/>
      {/* Our Vision */}
      {/* Footer Of the page  */}
      <Footer/>

      
    </main>
    
  )
}

export default page