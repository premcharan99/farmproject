
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const FarmStory = () => {
  return (
    <section className="section-padding bg-leaf-50 overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Collage */}
          <div className="relative order-2 lg:order-1 animate-fade-in">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                  alt="Farmer in the field"
                  className="rounded-lg shadow-lg w-full h-56 object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1589923188900-85dae523342b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                  alt="Fresh vegetables"
                  className="rounded-lg shadow-lg w-full h-40 object-cover"
                />
              </div>
              <div className="space-y-4 pt-8">
                <img
                  src="https://images.unsplash.com/photo-1592878040004-a71dc16fa6c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                  alt="Farm landscape"
                  className="rounded-lg shadow-lg w-full h-48 object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1574943320219-855736e8c8db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                  alt="Farmers harvesting"
                  className="rounded-lg shadow-lg w-full h-48 object-cover"
                />
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -left-6 h-24 w-24 rounded-full bg-harvest-400 -z-10"></div>
            <div className="absolute -top-6 -right-6 h-16 w-16 rounded-full bg-forest-300 -z-10"></div>
          </div>
          
          {/* Story Content */}
          <div className="order-1 lg:order-2">
            <span className="inline-block bg-forest-100 text-forest-700 text-sm font-medium px-3 py-1 rounded-full mb-4 animate-fade-up" style={{ animationDelay: '0.2s' }}>
              Our Story
            </span>
            
            <h2 className="text-3xl md:text-4xl font-serif text-forest-800 mb-6 leading-tight animate-fade-up" style={{ animationDelay: '0.4s' }}>
              From Our Family Farm <br className="hidden md:block" />to Your Table
            </h2>
            
            <div className="space-y-4 text-gray-700 animate-fade-up" style={{ animationDelay: '0.6s' }}>
              <p>
                For three generations, our family has been cultivating the rich soils of Harvest Valley. What began as a small plot of land in 1952 has grown into a thriving 200-acre sustainable farm, but our commitment to quality and environmental stewardship remains unchanged.
              </p>
              
              <p>
                We believe in farming practices that not only produce the most flavorful vegetables and fruits but also preserve and enhance the land for future generations. Our fields are nurtured using organic methods, crop rotation, and natural pest management techniques.
              </p>
              
              <p>
                When you purchase from Farm Fresh, you're not just buying produce – you're supporting a tradition of excellence and sustainability. You're choosing food grown with care by people who are passionate about what they do.
              </p>
            </div>
            
            <div className="mt-8 animate-fade-up" style={{ animationDelay: '0.8s' }}>
              <Link to="/about" className="btn-primary">
                Learn More About Our Farm
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FarmStory;
