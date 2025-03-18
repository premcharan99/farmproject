
import { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

type TestimonialType = {
  id: number;
  name: string;
  location: string;
  image: string;
  rating: number;
  text: string;
};

const testimonials: TestimonialType[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    location: "Los Angeles, CA",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    rating: 5,
    text: "The freshness and flavor of the produce from Farm Fresh is incomparable to anything I've found at supermarkets. My family can taste the difference in every meal. Their weekly subscription box has transformed how we eat!"
  },
  {
    id: 2,
    name: "Michael Chen",
    location: "Seattle, WA",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    rating: 5,
    text: "As a chef, I'm extremely particular about my ingredients. Farm Fresh delivers the quality and consistency I need for my restaurant. Their commitment to organic farming practices aligns perfectly with our values."
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    location: "Denver, CO",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    rating: 4,
    text: "I've been a loyal customer for over two years. Not only is their produce exceptional, but their customer service is outstanding. When there was an issue with my delivery, they resolved it immediately and added extra items as an apology."
  },
  {
    id: 4,
    name: "James Wilson",
    location: "Austin, TX",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    rating: 5,
    text: "Since switching to Farm Fresh, my children have actually started enjoying vegetables! Knowing exactly where our food comes from and how it's grown brings peace of mind as a parent."
  }
];

const Testimonials = () => {
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      scroll(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < testimonials.length - 1) {
      setCurrentIndex(currentIndex + 1);
      scroll(currentIndex + 1);
    }
  };

  const scroll = (index: number) => {
    testimonialsRef.current?.scrollTo({
      left: index * (testimonialsRef.current.offsetWidth || 0),
      behavior: 'smooth'
    });
  };

  return (
    <section className="section-padding bg-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-forest-50 rounded-full opacity-70 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-leaf-50 rounded-full opacity-70 translate-x-1/3 translate-y-1/3"></div>
      
      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block bg-leaf-100 text-forest-700 text-sm font-medium px-3 py-1 rounded-full mb-4">
            Customer Stories
          </span>
          <h2 className="text-3xl md:text-4xl font-serif text-forest-800">What Our Customers Say</h2>
        </div>

        <div className="relative">
          {/* Navigation Buttons */}
          <div className="absolute top-1/2 left-0 transform -translate-y-1/2 z-20 flex items-center justify-between w-full px-4">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className={`p-2 rounded-full shadow-md ${
                currentIndex === 0
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-white text-forest-700 hover:text-forest-500'
              } transition-colors`}
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            
            <button
              onClick={handleNext}
              disabled={currentIndex === testimonials.length - 1}
              className={`p-2 rounded-full shadow-md ${
                currentIndex === testimonials.length - 1
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-white text-forest-700 hover:text-forest-500'
              } transition-colors`}
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>

          {/* Testimonials slider */}
          <div 
            ref={testimonialsRef}
            className="flex overflow-x-hidden snap-x scroll-smooth"
          >
            {testimonials.map((testimonial) => (
              <div 
                key={testimonial.id}
                className="min-w-full snap-center px-4"
              >
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 md:p-8 max-w-3xl mx-auto">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/3 flex flex-col items-center md:items-start">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="w-24 h-24 rounded-full object-cover mb-4"
                      />
                      <h3 className="text-lg font-semibold text-forest-800">{testimonial.name}</h3>
                      <p className="text-gray-500 text-sm">{testimonial.location}</p>
                      <div className="flex items-center mt-2">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < testimonial.rating ? 'text-harvest-400 fill-harvest-400' : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    
                    <div className="md:w-2/3">
                      <blockquote className="text-gray-700 italic">
                        "{testimonial.text}"
                      </blockquote>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setCurrentIndex(i);
                scroll(i);
              }}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                i === currentIndex ? 'w-8 bg-forest-500' : 'w-2.5 bg-gray-300'
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
