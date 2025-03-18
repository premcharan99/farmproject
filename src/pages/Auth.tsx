
import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Mail, Lock, Eye, EyeOff, ArrowRight, User } from 'lucide-react';
import { toast } from 'sonner';

const Auth = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isLogin, setIsLogin] = useState(location.pathname === '/login');
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  
  useEffect(() => {
    // Update form type based on the URL
    setIsLogin(location.pathname === '/login');
  }, [location.pathname]);

  // Check if user is already logged in
  useEffect(() => {
    if (localStorage.getItem('isLoggedIn') === 'true') {
      navigate('/account');
    }
  }, [navigate]);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!email || !password || (!isLogin && !name)) {
      toast.error('Please fill in all required fields');
      return;
    }

    // Special admin login
    if (isLogin && email === 'prem' && password === 'prem') {
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('isAdmin', 'true');
      localStorage.setItem('userData', JSON.stringify({
        name: 'Prem Admin',
        email: 'prem@admin.com'
      }));
      toast.success('Successfully logged in as Admin');
      navigate('/account');
      // Trigger storage event for other tabs
      window.dispatchEvent(new Event('storage'));
      return;
    }
    
    if (isLogin) {
      // Mock login functionality
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('isAdmin', 'false');
      localStorage.setItem('userData', JSON.stringify({
        name: 'User',
        email: email
      }));
      toast.success('Successfully logged in');
      navigate('/account');
      // Trigger storage event for other tabs
      window.dispatchEvent(new Event('storage'));
    } else {
      // Mock signup functionality
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('isAdmin', 'false');
      localStorage.setItem('userData', JSON.stringify({
        name: name,
        email: email
      }));
      toast.success('Account created successfully');
      navigate('/account');
      // Trigger storage event for other tabs
      window.dispatchEvent(new Event('storage'));
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>{isLogin ? 'Login' : 'Sign Up'} | Farm Fresh</title>
        <meta name="description" content={isLogin ? 'Login to your Farm Fresh account' : 'Create a new Farm Fresh account'} />
      </Helmet>
      
      <Navbar />
      
      <main className="flex-grow pt-20">
        <div className="container-custom py-12">
          <div className="max-w-md mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-2xl font-serif text-forest-800 mb-2">
                {isLogin ? 'Welcome Back' : 'Create Your Account'}
              </h1>
              <p className="text-gray-600">
                {isLogin 
                  ? 'Sign in to access your Farm Fresh account' 
                  : 'Join Farm Fresh for fresh produce delivered to your door'}
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <form onSubmit={handleSubmit}>
                {!isLogin && (
                  <div className="mb-4">
                    <Label htmlFor="name" className="mb-2 block">Full Name</Label>
                    <div className="relative">
                      <Input
                        id="name"
                        type="text"
                        placeholder="Enter your full name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="pl-10"
                      />
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <User className="h-5 w-5 text-gray-400" />
                      </div>
                    </div>
                  </div>
                )}
                
                <div className="mb-4">
                  <Label htmlFor="email" className="mb-2 block">Email Address</Label>
                  <div className="relative">
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="pl-10"
                    />
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-gray-400" />
                    </div>
                  </div>
                </div>
                
                <div className="mb-6">
                  <Label htmlFor="password" className="mb-2 block">Password</Label>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="pl-10"
                    />
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Lock className="h-5 w-5 text-gray-400" />
                    </div>
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    >
                      {showPassword ? (
                        <EyeOff className="h-5 w-5 text-gray-400" />
                      ) : (
                        <Eye className="h-5 w-5 text-gray-400" />
                      )}
                    </button>
                  </div>
                </div>
                
                {isLogin && (
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center">
                      <Checkbox id="remember" />
                      <label htmlFor="remember" className="ml-2 text-sm text-gray-600">
                        Remember me
                      </label>
                    </div>
                    <Link to="/forgot-password" className="text-sm text-forest-600 hover:text-forest-700">
                      Forgot Password?
                    </Link>
                  </div>
                )}
                
                <Button 
                  type="submit" 
                  className="w-full bg-forest-600 hover:bg-forest-700 text-white"
                >
                  {isLogin ? 'Sign In' : 'Create Account'}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
              
              <div className="mt-6 text-center">
                <p className="text-gray-600 text-sm">
                  {isLogin ? "Don't have an account?" : "Already have an account?"}
                  <button
                    onClick={() => setIsLogin(!isLogin)}
                    className="ml-1 text-forest-600 hover:text-forest-700 font-medium"
                  >
                    {isLogin ? 'Sign Up' : 'Sign In'}
                  </button>
                </p>
              </div>
              
              <div className="mt-6">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-200"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-gray-500">Or continue with</span>
                  </div>
                </div>
                
                <div className="mt-6 grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    className="py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                  >
                    Google
                  </button>
                  <button
                    type="button"
                    className="py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                  >
                    Facebook
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Auth;
