
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FarmerProfiles from "@/components/farmers/FarmerProfiles";
import { Helmet } from "react-helmet-async";

const Farmers = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Our Farmers | Farm Fresh</title>
        <meta name="description" content="Meet the dedicated farmers behind Farm Fresh's quality produce." />
      </Helmet>
      <Navbar />
      <main className="flex-grow pt-20">
        <div className="container-custom py-12">
          <div className="text-center mb-12">
            <span className="inline-block bg-forest-100 text-forest-700 text-sm font-medium px-3 py-1 rounded-full mb-4">
              Meet Our Team
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif text-forest-800 mb-6">
              The Farmers Behind Your Food
            </h1>
            <p className="max-w-2xl mx-auto text-gray-600">
              Get to know the passionate individuals who wake up at dawn to cultivate the fresh, 
              sustainable produce that makes its way to your table.
            </p>
          </div>
          
          <FarmerProfiles />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Farmers;
