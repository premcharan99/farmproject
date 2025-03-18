import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { toast } from 'sonner';
import { User, Settings, ShoppingBag, Heart, LogOut, Clock, MapPin, ShieldCheck } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Link } from 'react-router-dom';

const profileFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().optional(),
});

const addressFormSchema = z.object({
  address: z.string().min(5, { message: "Address must be at least 5 characters." }),
  city: z.string().min(2, { message: "City is required." }),
  state: z.string().min(2, { message: "State is required." }),
  pincode: z.string().min(6, { message: "Valid pincode is required." }),
});

const Account = () => {
  const [activeTab, setActiveTab] = useState("profile");
  const [userData, setUserData] = useState<{ name: string; email: string } | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();
  
  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    
    if (!isLoggedIn) {
      toast.error("Please login to access your account");
      navigate('/login');
      return;
    }
    
    const storedUserData = localStorage.getItem('userData');
    if (storedUserData) {
      setUserData(JSON.parse(storedUserData));
    }
    
    setIsAdmin(localStorage.getItem('isAdmin') === 'true');
  }, [navigate]);
  
  const profileForm = useForm<z.infer<typeof profileFormSchema>>({
    resolver: zodResolver(profileFormSchema),
    defaultValues: {
      name: userData?.name || "",
      email: userData?.email || "",
      phone: "9030701759",
    },
  });

  useEffect(() => {
    if (userData) {
      profileForm.reset({
        name: userData.name,
        email: userData.email,
        phone: profileForm.getValues().phone,
      });
    }
  }, [userData, profileForm]);

  const addressForm = useForm<z.infer<typeof addressFormSchema>>({
    resolver: zodResolver(addressFormSchema),
    defaultValues: {
      address: "123 Main Street",
      city: "Hyderabad",
      state: "Telangana",
      pincode: "500001",
    },
  });

  const onProfileSubmit = (data: z.infer<typeof profileFormSchema>) => {
    const updatedUserData = { ...userData, name: data.name, email: data.email };
    localStorage.setItem('userData', JSON.stringify(updatedUserData));
    setUserData(updatedUserData);
    toast.success("Profile updated successfully");
  };

  const onAddressSubmit = (data: z.infer<typeof addressFormSchema>) => {
    toast.success("Address updated successfully");
    console.log(data);
  };

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('isAdmin');
    localStorage.removeItem('userData');
    toast.success("Logged out successfully");
    navigate('/login');
    window.dispatchEvent(new Event('storage'));
  };

  if (!userData) {
    return null;
  }

  const orderHistory = [
    {
      id: 'ORD-1234',
      date: 'August 12, 2023',
      total: '₹1,299',
      status: 'Delivered',
      items: [
        { name: 'Organic Tomatoes', quantity: 2, price: '₹199' },
        { name: 'Fresh Carrots', quantity: 1, price: '₹99' },
      ]
    },
    {
      id: 'ORD-1235',
      date: 'July 28, 2023',
      total: '₹2,450',
      status: 'Delivered',
      items: [
        { name: 'Organic Apples', quantity: 3, price: '₹350' },
        { name: 'Fresh Milk', quantity: 2, price: '₹120' },
      ]
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>My Account | Farm Fresh</title>
        <meta name="description" content="Manage your Farm Fresh account" />
      </Helmet>
      
      <Navbar />
      
      <main className="flex-grow pt-24 pb-12">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-1/4">
              <Card>
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <Avatar className="h-16 w-16">
                    <AvatarImage src="/placeholder.svg" alt="Profile" />
                    <AvatarFallback className="bg-forest-200 text-forest-700 text-xl">
                      {userData.name.substring(0, 2).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle>{userData.name}</CardTitle>
                    <p className="text-gray-500 text-sm">
                      {isAdmin ? 'Admin Account' : 'Member since August 2023'}
                    </p>
                  </div>
                </CardHeader>
                <CardContent>
                  <nav className="space-y-1 mt-4">
                    <Button
                      variant="ghost"
                      className={`w-full justify-start ${activeTab === "profile" ? "bg-forest-50 text-forest-700" : ""}`}
                      onClick={() => setActiveTab("profile")}
                    >
                      <User className="mr-2 h-5 w-5" />
                      My Profile
                    </Button>
                    
                    {isAdmin && (
                      <Button
                        variant="ghost"
                        className={`w-full justify-start ${activeTab === "admin" ? "bg-forest-50 text-forest-700" : ""}`}
                        onClick={() => setActiveTab("admin")}
                      >
                        <ShieldCheck className="mr-2 h-5 w-5" />
                        Admin Panel
                      </Button>
                    )}
                    
                    <Button
                      variant="ghost"
                      className={`w-full justify-start ${activeTab === "orders" ? "bg-forest-50 text-forest-700" : ""}`}
                      onClick={() => setActiveTab("orders")}
                    >
                      <ShoppingBag className="mr-2 h-5 w-5" />
                      Order History
                    </Button>
                    <Button
                      variant="ghost"
                      className={`w-full justify-start ${activeTab === "addresses" ? "bg-forest-50 text-forest-700" : ""}`}
                      onClick={() => setActiveTab("addresses")}
                    >
                      <MapPin className="mr-2 h-5 w-5" />
                      Addresses
                    </Button>
                    <Button
                      variant="ghost"
                      className={`w-full justify-start ${activeTab === "wishlist" ? "bg-forest-50 text-forest-700" : ""}`}
                      onClick={() => setActiveTab("wishlist")}
                    >
                      <Heart className="mr-2 h-5 w-5" />
                      Wishlist
                    </Button>
                    <Button
                      variant="ghost"
                      className={`w-full justify-start ${activeTab === "settings" ? "bg-forest-50 text-forest-700" : ""}`}
                      onClick={() => setActiveTab("settings")}
                    >
                      <Settings className="mr-2 h-5 w-5" />
                      Account Settings
                    </Button>
                    <Separator className="my-2" />
                    <Button
                      variant="ghost"
                      className="w-full justify-start text-red-500 hover:text-red-700 hover:bg-red-50"
                      onClick={handleLogout}
                    >
                      <LogOut className="mr-2 h-5 w-5" />
                      Logout
                    </Button>
                  </nav>
                </CardContent>
              </Card>
              
              <Card className="mt-6">
                <CardHeader>
                  <CardTitle className="text-base">Need Help?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4">
                    Our customer support team is available to assist you.
                  </p>
                  <Link to="/contact">
                    <Button variant="outline" className="w-full">Contact Support</Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
            
            <div className="w-full md:w-3/4">
              <Card>
                <CardHeader>
                  <CardTitle>
                    {activeTab === "profile" && "My Profile"}
                    {activeTab === "admin" && "Admin Panel"}
                    {activeTab === "orders" && "Order History"}
                    {activeTab === "addresses" && "Manage Addresses"}
                    {activeTab === "wishlist" && "My Wishlist"}
                    {activeTab === "settings" && "Account Settings"}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {activeTab === "profile" && (
                    <Form {...profileForm}>
                      <form onSubmit={profileForm.handleSubmit(onProfileSubmit)} className="space-y-6">
                        <FormField
                          control={profileForm.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Full Name</FormLabel>
                              <FormControl>
                                <Input {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={profileForm.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email</FormLabel>
                              <FormControl>
                                <Input {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={profileForm.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Phone Number</FormLabel>
                              <FormControl>
                                <Input {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <Button type="submit" className="bg-forest-600 hover:bg-forest-700">
                          Save Changes
                        </Button>
                      </form>
                    </Form>
                  )}
                  
                  {activeTab === "admin" && (
                    <div className="space-y-6">
                      <h3 className="text-lg font-medium">Admin Dashboard</h3>
                      <p className="text-sm text-gray-600 mb-4">
                        Manage your products, orders, and customers.
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Card>
                          <CardHeader>
                            <CardTitle className="text-base">Products</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <Button variant="outline" className="w-full">Manage Products</Button>
                          </CardContent>
                        </Card>
                        <Card>
                          <CardHeader>
                            <CardTitle className="text-base">Orders</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <Button variant="outline" className="w-full">View All Orders</Button>
                          </CardContent>
                        </Card>
                        <Card>
                          <CardHeader>
                            <CardTitle className="text-base">Users</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <Button variant="outline" className="w-full">Manage Users</Button>
                          </CardContent>
                        </Card>
                        <Card>
                          <CardHeader>
                            <CardTitle className="text-base">Statistics</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <Button variant="outline" className="w-full">View Analytics</Button>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  )}
                  
                  {activeTab === "orders" && (
                    <div className="space-y-6">
                      {orderHistory.map((order) => (
                        <div key={order.id} className="border rounded-lg p-4">
                          <div className="flex flex-wrap justify-between items-center mb-4">
                            <div>
                              <h3 className="font-medium">Order #{order.id}</h3>
                              <div className="flex items-center text-sm text-gray-500 mt-1">
                                <Clock className="h-4 w-4 mr-1" />
                                {order.date}
                              </div>
                            </div>
                            <div className="mt-2 sm:mt-0">
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                {order.status}
                              </span>
                              <div className="text-right mt-1 font-medium">{order.total}</div>
                            </div>
                          </div>
                          <Separator />
                          <div className="mt-4">
                            <h4 className="text-sm font-medium mb-2">Items</h4>
                            <ul className="divide-y">
                              {order.items.map((item, index) => (
                                <li key={index} className="py-2 flex justify-between">
                                  <span>
                                    {item.name} x {item.quantity}
                                  </span>
                                  <span className="font-medium">{item.price}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="mt-4">
                            <Button variant="outline" size="sm">View Order Details</Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                  
                  {activeTab === "addresses" && (
                    <Form {...addressForm}>
                      <form onSubmit={addressForm.handleSubmit(onAddressSubmit)} className="space-y-6">
                        <FormField
                          control={addressForm.control}
                          name="address"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Street Address</FormLabel>
                              <FormControl>
                                <Input {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                          <FormField
                            control={addressForm.control}
                            name="city"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>City</FormLabel>
                                <FormControl>
                                  <Input {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={addressForm.control}
                            name="state"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>State</FormLabel>
                                <FormControl>
                                  <Input {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                        <FormField
                          control={addressForm.control}
                          name="pincode"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Pincode</FormLabel>
                              <FormControl>
                                <Input {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <Button type="submit" className="bg-forest-600 hover:bg-forest-700">
                          Save Address
                        </Button>
                      </form>
                    </Form>
                  )}
                  
                  {activeTab === "wishlist" && (
                    <div className="text-center py-8">
                      <Heart className="h-12 w-12 mx-auto text-gray-300" />
                      <h3 className="mt-4 text-lg font-medium">Your wishlist is empty</h3>
                      <p className="mt-2 text-gray-500">
                        Browse our products and add items to your wishlist
                      </p>
                      <Button className="mt-6 bg-forest-600 hover:bg-forest-700">
                        <Link to="/products">Explore Products</Link>
                      </Button>
                    </div>
                  )}
                  
                  {activeTab === "settings" && (
                    <div className="space-y-8">
                      <div>
                        <h3 className="text-lg font-medium mb-4">Communication Preferences</h3>
                        <div className="space-y-4">
                          <div className="flex items-center">
                            <input
                              type="checkbox"
                              id="marketing"
                              defaultChecked
                              className="h-4 w-4 rounded border-gray-300 text-forest-600 focus:ring-forest-500"
                            />
                            <label htmlFor="marketing" className="ml-3 text-sm text-gray-700">
                              Receive marketing emails about new products and offers
                            </label>
                          </div>
                          <div className="flex items-center">
                            <input
                              type="checkbox"
                              id="order-updates"
                              defaultChecked
                              className="h-4 w-4 rounded border-gray-300 text-forest-600 focus:ring-forest-500"
                            />
                            <label htmlFor="order-updates" className="ml-3 text-sm text-gray-700">
                              Receive order status updates via email
                            </label>
                          </div>
                        </div>
                      </div>
                      
                      <Separator />
                      
                      <div>
                        <h3 className="text-lg font-medium mb-4">Password</h3>
                        <Button variant="outline">Change Password</Button>
                      </div>
                      
                      <Separator />
                      
                      <div>
                        <h3 className="text-lg font-medium text-red-600 mb-4">Delete Account</h3>
                        <p className="text-gray-500 text-sm mb-4">
                          Once you delete your account, there is no going back. Please be certain.
                        </p>
                        <Button variant="destructive">Delete Account</Button>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Account;
