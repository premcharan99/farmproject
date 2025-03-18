
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { MapPin, Mail, Phone, Instagram, Facebook, Twitter } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>About Us | Farm Fresh</title>
        <meta name="description" content="Learn about Farm Fresh and our mission to provide sustainable, locally grown produce." />
      </Helmet>
      
      <Navbar />
      
      <main className="flex-grow pt-20">
        {/* Hero section */}
        <div className="bg-forest-50 py-16">
          <div className="container-custom">
            <div className="text-center mb-8">
              <span className="inline-block bg-forest-100 text-forest-700 text-sm font-medium px-3 py-1 rounded-full mb-4">
                Our Story
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif text-forest-800 mb-6">
                About Farm Fresh
              </h1>
              <p className="max-w-3xl mx-auto text-gray-600 text-lg">
                We're on a mission to transform how food gets from the farm to your table, 
                making it more sustainable, ethical, and delicious along the way.
              </p>
            </div>
          </div>
        </div>
        
        {/* Our mission */}
        <div className="container-custom py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                alt="Farmers working in field" 
                className="rounded-lg shadow-md w-full h-auto"
              />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-serif text-forest-800 mb-4">Our Mission</h2>
              <p className="text-gray-600 mb-4">
                At Farm Fresh, we believe in establishing a direct connection between farmers and consumers, 
                cutting out unnecessary middlemen. This approach ensures farmers receive fair compensation for 
                their hard work, while customers enjoy the freshest, healthiest produce at reasonable prices.
              </p>
              <p className="text-gray-600">
                We work exclusively with farmers who practice sustainable and regenerative agriculture. 
                These methods prioritize soil health, biodiversity, and ecosystem balance, resulting in 
                nutrient-rich food while protecting our environment for future generations.
              </p>
            </div>
          </div>
        </div>
        
        {/* Team section */}
        <div className="bg-white py-16">
          <div className="container-custom">
            <div className="text-center mb-12">
              <span className="inline-block bg-forest-100 text-forest-700 text-sm font-medium px-3 py-1 rounded-full mb-4">
                The Team
              </span>
              <h2 className="text-2xl md:text-3xl font-serif text-forest-800 mb-4">Meet Our Team</h2>
              <p className="max-w-2xl mx-auto text-gray-600">
                The passionate individuals behind Farm Fresh working to bring you the finest quality produce while supporting sustainable agriculture.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow text-center p-6">
                <img 
                  src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80" 
                  alt="Prem Charan" 
                  className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-medium text-gray-900 mb-1">Prem Charan</h3>
                <p className="text-forest-600 font-medium mb-3">Founder & CEO</p>
                <p className="text-gray-600 mb-4 text-sm">
                  With a background in sustainable agriculture and a passion for connecting farmers with consumers,
                  Prem founded Farm Fresh to transform how we think about our food system.
                </p>
                <div className="flex justify-center space-x-3">
                  <a href="#" className="text-gray-400 hover:text-forest-600 transition-colors">
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-forest-600 transition-colors">
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-forest-600 transition-colors">
                    <Mail className="h-5 w-5" />
                  </a>
                </div>
              </div>
              
              <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow text-center p-6">
                <img 
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80" 
                  alt="Emily Wilson" 
                  className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-medium text-gray-900 mb-1">Emily Wilson</h3>
                <p className="text-forest-600 font-medium mb-3">Head of Operations</p>
                <p className="text-gray-600 mb-4 text-sm">
                  Emily ensures that all Farm Fresh operations run smoothly, from farmer relationships to logistics and delivery. Her attention to detail keeps us growing.
                </p>
                <div className="flex justify-center space-x-3">
                  <a href="#" className="text-gray-400 hover:text-forest-600 transition-colors">
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-forest-600 transition-colors">
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-forest-600 transition-colors">
                    <Mail className="h-5 w-5" />
                  </a>
                </div>
              </div>
              
              <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow text-center p-6">
                <img 
                  src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80" 
                  alt="David Kim" 
                  className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-medium text-gray-900 mb-1">David Kim</h3>
                <p className="text-forest-600 font-medium mb-3">Chief Sustainability Officer</p>
                <p className="text-gray-600 mb-4 text-sm">
                  David works directly with our partner farmers to implement and maintain sustainable farming practices that benefit both the environment and our customers.
                </p>
                <div className="flex justify-center space-x-3">
                  <a href="#" className="text-gray-400 hover:text-forest-600 transition-colors">
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-forest-600 transition-colors">
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-forest-600 transition-colors">
                    <Mail className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Contact section */}
        <div className="container-custom py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl md:text-3xl font-serif text-forest-800 mb-6">Get In Touch</h2>
              <p className="text-gray-600 mb-8">
                Have questions about our products, services, or just want to say hello? We'd love to hear from you!
                Reach out using any of the methods below, or visit us at our farm store.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-forest-600 mt-1 mr-3" />
                  <div>
                    <h3 className="font-medium">Our Location</h3>
                    <p className="text-gray-600">123 Farm Road, Rural County, CA 95123</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="h-5 w-5 text-forest-600 mt-1 mr-3" />
                  <div>
                    <h3 className="font-medium">Email Us</h3>
                    <p className="text-gray-600">hello@farmfresh.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="h-5 w-5 text-forest-600 mt-1 mr-3" />
                  <div>
                    <h3 className="font-medium">Call Us</h3>
                    <p className="text-gray-600">(555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="h-5 w-5 flex justify-center text-forest-600 mt-1 mr-3">
                    <span className="font-bold">@</span>
                  </div>
                  <div>
                    <h3 className="font-medium">Social Media</h3>
                    <div className="flex space-x-3 mt-2">
                      <a href="#" className="text-gray-400 hover:text-forest-600 transition-colors">
                        <Instagram className="h-5 w-5" />
                      </a>
                      <a href="#" className="text-gray-400 hover:text-forest-600 transition-colors">
                        <Facebook className="h-5 w-5" />
                      </a>
                      <a href="#" className="text-gray-400 hover:text-forest-600 transition-colors">
                        <Twitter className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <img 
                src="https://images.unsplash.com/photo-1557800636-894a64c1696f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                alt="Farm Fresh store" 
                className="rounded-lg shadow-md w-full h-auto"
              />
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
