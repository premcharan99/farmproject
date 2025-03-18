
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

type BlogPost = {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  author: string;
  date: string;
  category: string;
};

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Seasonal Eating: Why It Matters",
    excerpt: "Discover the benefits of eating with the seasons and how it can enhance your health and support local agriculture.",
    image: "https://images.unsplash.com/photo-1660277075459-c7cb4b50c58f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    author: "Emma Johnson",
    date: "June 12, 2023",
    category: "Seasonal Eating"
  },
  {
    id: 2,
    title: "Regenerative Farming Practices",
    excerpt: "Learn how our farmers are using regenerative agriculture to improve soil health and combat climate change.",
    image: "https://images.unsplash.com/photo-1632993600356-a3bd12263ee5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    author: "Michael Chen",
    date: "May 28, 2023",
    category: "Sustainable Farming"
  },
  {
    id: 3,
    title: "Summer Vegetable Recipes",
    excerpt: "Delicious recipes to make the most of your summer produce from cucumbers to tomatoes and more.",
    image: "https://images.unsplash.com/photo-1594288842552-91d31312dab6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    author: "Sarah Williams",
    date: "July 5, 2023",
    category: "Recipes"
  },
  {
    id: 4,
    title: "Benefits of Organic Dairy",
    excerpt: "Why choosing organic dairy products can be better for you, the cows, and the environment.",
    image: "https://images.unsplash.com/photo-1628088062854-d1870b4553da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    author: "David Peterson",
    date: "April 15, 2023",
    category: "Organic Farming"
  },
  {
    id: 5,
    title: "Farm to Table: The Journey of Your Food",
    excerpt: "Follow the path your food takes from our farm fields to your dinner table.",
    image: "https://images.unsplash.com/photo-1567954970774-58d6aa6c50dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    author: "Prem Charan",
    date: "March 30, 2023",
    category: "Farm Life"
  }
];

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const filteredPosts = searchQuery 
    ? blogPosts.filter(post => 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : blogPosts;
  
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Blog & Recipes | Farm Fresh</title>
        <meta name="description" content="Explore articles about sustainable farming, seasonal eating, and delicious recipes." />
      </Helmet>
      
      <Navbar />
      
      <main className="flex-grow pt-20">
        <div className="container-custom py-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-serif text-forest-800 mb-4">Blog & Recipes</h1>
            <p className="max-w-2xl mx-auto text-gray-600">
              Explore our collection of articles about seasonal eating, sustainable farming practices, and delicious farm-to-table recipes.
            </p>
          </div>
          
          {/* Search */}
          <div className="max-w-md mx-auto mb-12">
            <div className="relative">
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            </div>
          </div>
          
          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            <Button variant="outline" className="rounded-full">All</Button>
            <Button variant="outline" className="rounded-full">Recipes</Button>
            <Button variant="outline" className="rounded-full">Sustainable Farming</Button>
            <Button variant="outline" className="rounded-full">Seasonal Eating</Button>
            <Button variant="outline" className="rounded-full">Farm Life</Button>
          </div>
          
          {/* Blog posts */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <div key={post.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="text-sm text-forest-600 font-medium mb-2">{post.category}</div>
                  <h2 className="text-xl font-medium text-gray-900 mb-2">{post.title}</h2>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-500">
                      By {post.author} • {post.date}
                    </div>
                    <Button variant="link" className="text-forest-600 p-0">
                      Read More
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">No posts found matching your search.</p>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;
