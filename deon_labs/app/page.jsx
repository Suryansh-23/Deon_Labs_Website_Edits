import Achievments from "./_components/Achievments";
import Footer from "./_components/Footer";
import Hero from "./_components/Hero";
import Navbar from "./_components/Navbar";
import Partner from "./_components/Partner";
import Services from "./_components/Services";
import Team from "./_components/Team";
import Callout from "./_components/UI/Callout";
import Service from "./_components/UI/Service";

// All the components are available in the _components folder
//Made with love by Deon Labs

function page() {
    return (
        <main>
            {/* Navbar */}
            <Navbar/>

            {/* Hero Section */}
            <div className="">
                <Hero />
            
            </div>

            {/* Our Partners  */}
            <Partner />

            {/* Built By A Team From */}
            {/* <Team/> */}

            <Services heading="What We Can Do For You?" desc="We contributed to building a revolutionary ecosystem for some of the leading"/>


            {/* Achievments */}
            <Achievments />

            {/* Footer Of the page  */}
            <Footer />
        </main>
    );
}

export default page;