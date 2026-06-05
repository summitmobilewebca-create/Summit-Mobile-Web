import Image from "next/image";
import Hero from "./Presets/Hero/Hero";
import ServiceGrid from "./Presets/Service Grid/ServiceGrid";
import ContactForm from "./Presets/ContactForm/ContactForm";
import SplitSection from "./Presets/SplitSection/SplitSection";

export default function Home() {
  return (
    <>
      <Hero 
        title="Most of your customers find you on a phone. Does your website close them?"
        subtitle="We build ultra-fast, mobile-first websites for Canadian trades and service businesses. Get a high-performance site built to load instantly and turn clicks into scheduled jobs."
        backgroundImage="/building.webp" // Add a nice local trade or clean background image later
      />  
        
      <SplitSection 
        tagline="Built for Speed & SEO"
        title="Outrun your competitors on Google and mobile screens"
        description="Most local business sites are built on bloated platforms that take forever to load on a smartphone, costing you leads. At Summit Mobile Web, we engineer lean, custom-coded sites with built-in On-Page Local SEO foundations. No monthly fees—just blistering mobile speeds and clean code that Google loves."
        imageUrl="/phone.webp" // Consider swapping this out for a graphic of a phone mock-up later
        imageAlt="Mobile responsive website preview"
        buttonText="View Live Demo"
        buttonLink="#demo" // Link to your master demo section/page
      />

      {/* About Section: Introducing you, the driven developer */}
      <SplitSection 
        tagline="Our Story"
        title="Driven to build. Focused on your bottom line."
        description="I am a dedicated Canadian web developer dedicating my summer to a singular mission: building the fastest, highest-converting mobile websites for local service businesses. When you work with Summit Mobile Web, you aren't paying for agency overhead—you are partnering directly with a motivated developer hungry to deliver real, measurable value to your business."
        imageUrl="/building.webp" // Put a professional, friendly shot of yourself here to build massive trust!
        imageAlt="Summit Mobile Web Founder"
        buttonText="Get a Free Mockup"
        buttonLink="#contact"
        reverse={true} // If your SplitSection component supports a reverse prop to alternate layout sides
      />
      <div id="service">
        <ServiceGrid />
      </div>
      
      <div id="contact" className="my-12">
        <ContactForm />
      </div>
    </>
  );
}