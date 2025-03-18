
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-center bg-cover"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80')" 
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-forest-900/70 to-forest-900/30" />
        </div>
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-2xl text-white">
          <span className="inline-block bg-harvest-400 text-forest-800 text-sm font-medium px-4 py-1.5 rounded-full mb-4 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Fresh from the farm
          </span>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-white mb-4 leading-tight animate-fade-up" style={{ animationDelay: '0.4s' }}>
            Taste the Freshness of Local Produce
          </h1>
          
          <p className="text-lg md:text-xl text-white/90 mb-8 animate-fade-up" style={{ animationDelay: '0.6s' }}>
            Direct from our fields to your table. Discover fresh, sustainable, and locally grown produce for a healthier you and a healthier planet.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: '0.8s' }}>
            <Link to="/products" className="btn-primary bg-forest-500 hover:bg-forest-600">
              Shop Now
              <ArrowRight className="h-5 w-5" />
            </Link>
            
            <Link to="/about" className="btn-outline border-white text-white hover:bg-white/10">
              Learn Our Story
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
};

export default Hero;
