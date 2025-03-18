
import { useState } from 'react';
import { Send, Check } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <section className="py-16 bg-forest-50 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-forest-100 opacity-50"></div>
      <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-harvest-100 opacity-50"></div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif text-forest-800 mb-4">
            Join Our Farm Fresh Community
          </h2>
          
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for seasonal recipes, farming updates, and exclusive offers on fresh produce delivered directly to your inbox.
          </p>
          
          {isSubmitted ? (
            <div className="bg-green-50 border border-green-100 text-green-700 rounded-lg p-4 flex items-center justify-center space-x-2 animate-fade-up">
              <Check className="h-5 w-5 text-green-500" />
              <p>Thanks for subscribing! Check your email for a special welcome offer.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row shadow-sm">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  required
                  className="flex-grow px-4 py-3 rounded-t-lg sm:rounded-l-lg sm:rounded-r-none border border-gray-200 focus:outline-none focus:ring-2 focus:ring-forest-300"
                />
                <button
                  type="submit"
                  disabled={isLoading}
                  className="btn-primary rounded-b-lg sm:rounded-r-lg sm:rounded-l-none px-6 py-3 disabled:opacity-70"
                >
                  {isLoading ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing
                    </span>
                  ) : (
                    <span className="flex items-center">
                      Subscribe
                      <Send className="ml-2 h-4 w-4" />
                    </span>
                  )}
                </button>
              </div>
              <p className="text-sm text-gray-500 mt-3">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </form>
          )}
          
          <div className="flex flex-wrap justify-center gap-8 mt-12">
            <div className="flex flex-col items-center">
              <div className="bg-white p-3 rounded-full shadow-sm mb-3">
                <img src="https://cdn-icons-png.flaticon.com/512/3347/3347957.png" alt="Organic" className="h-8 w-8" />
              </div>
              <p className="text-sm font-medium text-forest-700">Certified Organic</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="bg-white p-3 rounded-full shadow-sm mb-3">
                <img src="https://cdn-icons-png.flaticon.com/512/2454/2454297.png" alt="Local" className="h-8 w-8" />
              </div>
              <p className="text-sm font-medium text-forest-700">Locally Grown</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="bg-white p-3 rounded-full shadow-sm mb-3">
                <img src="https://cdn-icons-png.flaticon.com/512/7618/7618073.png" alt="Sustainable" className="h-8 w-8" />
              </div>
              <p className="text-sm font-medium text-forest-700">Sustainable Farming</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="bg-white p-3 rounded-full shadow-sm mb-3">
                <img src="https://cdn-icons-png.flaticon.com/512/6774/6774898.png" alt="Seasonal" className="h-8 w-8" />
              </div>
              <p className="text-sm font-medium text-forest-700">Seasonal Harvest</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
