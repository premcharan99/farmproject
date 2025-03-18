
import { Instagram, Facebook, Globe } from "lucide-react";

interface Farmer {
  id: number;
  name: string;
  title: string;
  image: string;
  bio: string;
  specialties: string[];
  location: string;
  certifications: string[];
  socialMedia: {
    instagram?: string;
    facebook?: string;
    website?: string;
  };
}

const farmers: Farmer[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    title: "Head Farmer",
    image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    bio: "With over 15 years of experience in sustainable farming, Sarah leads our team with a passion for organic growing methods and soil health. She specializes in heirloom vegetables and has developed several unique varieties exclusive to our farm.",
    specialties: ["Heirloom Tomatoes", "Leafy Greens", "Root Vegetables"],
    location: "North Field",
    certifications: ["Certified Organic", "Regenerative Agriculture"],
    socialMedia: {
      instagram: "https://instagram.com/farmer_sarah",
      facebook: "https://facebook.com/sarahjfarm",
      website: "https://sarahjohnson.com"
    }
  },
  {
    id: 2,
    name: "Miguel Rodriguez",
    title: "Orchard Manager",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    bio: "Miguel grew up on his family's apple orchard in California before joining our team. His expertise in fruit tree care and harvesting techniques ensures our orchard produces the sweetest, juiciest fruits year after year.",
    specialties: ["Stone Fruits", "Apples", "Berries"],
    location: "East Orchard",
    certifications: ["IPM Certified", "Sustainable Water Use"],
    socialMedia: {
      instagram: "https://instagram.com/miguel_orchard",
      facebook: "https://facebook.com/miguelr"
    }
  },
  {
    id: 3,
    name: "Amara Wilson",
    title: "Greenhouse Specialist",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=761&q=80",
    bio: "Amara brings scientific precision to our greenhouse operations. With a degree in Horticulture, she manages our seed starting and year-round growing operations, allowing us to offer fresh produce even in winter months.",
    specialties: ["Microgreens", "Herbs", "Exotic Vegetables"],
    location: "Greenhouse Complex",
    certifications: ["Hydroponic Growing", "Energy Efficient Practices"],
    socialMedia: {
      instagram: "https://instagram.com/greens_amara",
      website: "https://amarawilson.net"
    }
  },
  {
    id: 4,
    name: "James Thompson",
    title: "Livestock Manager",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    bio: "James oversees our ethically-raised livestock with a focus on animal welfare and rotational grazing practices. His dedication to humane treatment and natural feeding results in healthier animals and more nutritious products.",
    specialties: ["Free-Range Poultry", "Grass-Fed Beef", "Heritage Pork"],
    location: "West Pastures",
    certifications: ["Animal Welfare Approved", "Grass-Fed Certified"],
    socialMedia: {
      facebook: "https://facebook.com/jthompson_farm",
      website: "https://ethicalmeats.org"
    }
  }
];

const FarmerProfiles = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
      {farmers.map((farmer) => (
        <div key={farmer.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
          <div className="grid md:grid-cols-5 gap-6">
            <div className="md:col-span-2">
              <img 
                src={farmer.image} 
                alt={farmer.name} 
                className="w-full h-full object-cover object-center"
                style={{ aspectRatio: "1/1" }}
              />
            </div>
            <div className="p-6 md:col-span-3">
              <h2 className="text-2xl font-serif text-forest-800 mb-1">{farmer.name}</h2>
              <p className="text-forest-600 font-medium mb-3">{farmer.title}</p>
              
              <p className="text-gray-600 mb-4">{farmer.bio}</p>
              
              <div className="mb-4">
                <h3 className="text-sm uppercase text-gray-500 font-medium mb-2">Specialties</h3>
                <div className="flex flex-wrap gap-2">
                  {farmer.specialties.map((specialty) => (
                    <span 
                      key={specialty} 
                      className="bg-leaf-100 text-forest-600 text-sm px-3 py-1 rounded-full"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="mb-4">
                <h3 className="text-sm uppercase text-gray-500 font-medium mb-2">Certifications</h3>
                <div className="flex flex-wrap gap-2">
                  {farmer.certifications.map((certification) => (
                    <span 
                      key={certification} 
                      className="bg-harvest-100 text-earth-700 text-sm px-3 py-1 rounded-full"
                    >
                      {certification}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex space-x-3 mt-5">
                {farmer.socialMedia.instagram && (
                  <a 
                    href={farmer.socialMedia.instagram} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-forest-500 transition-colors"
                  >
                    <Instagram size={20} />
                  </a>
                )}
                {farmer.socialMedia.facebook && (
                  <a 
                    href={farmer.socialMedia.facebook} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-forest-500 transition-colors"
                  >
                    <Facebook size={20} />
                  </a>
                )}
                {farmer.socialMedia.website && (
                  <a 
                    href={farmer.socialMedia.website} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-forest-500 transition-colors"
                  >
                    <Globe size={20} />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FarmerProfiles;
