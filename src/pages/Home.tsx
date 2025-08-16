import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Gift, Truck, Shield, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ProductCard from '@/components/ProductCard';
import { featuredProducts } from '@/data/products';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Promotional Banner */}
      <div className="promo-banner">
        <div className={`fade-in ${isVisible ? 'visible' : ''}`}>
          🚚 Free Shipping in India on Orders Above ₹999! 🎁
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-hero text-primary-foreground py-20 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <div className={`fade-in ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '200ms' }}>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Turn Your Memories Into<br />
              <span className="text-accent">Beautiful Gifts</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 max-w-3xl mx-auto">
              Personalize mugs, t-shirts, frames & more with your photos. 
              Premium quality printing with fast delivery across India.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/shop">
                <Button size="lg" className="btn-gold text-lg px-8 py-4">
                  Shop Now
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Learn More
              </Button>
            </div>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-accent/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-accent/10 rounded-full blur-2xl"></div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Gift className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Custom Designs</h3>
              <p className="text-muted-foreground">Upload your photos and create unique personalized gifts</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
              <p className="text-muted-foreground">Quick processing and delivery across India</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Guarantee</h3>
              <p className="text-muted-foreground">Premium materials and printing technology</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Products</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover our most popular personalized gifts, loved by thousands of customers across India
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="text-center">
            <Link to="/shop">
              <Button size="lg" className="btn-hero">
                View All Products
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Priya Sharma",
                location: "Mumbai",
                rating: 5,
                text: "Amazing quality! The photo mug I ordered for my husband's birthday was perfect. Fast delivery too!"
              },
              {
                name: "Rajesh Kumar",
                location: "Bangalore", 
                rating: 5,
                text: "Great service and beautiful products. The custom t-shirt design exceeded my expectations."
              },
              {
                name: "Anita Patel",
                location: "Delhi",
                rating: 5,
                text: "PrintYourGifts made my anniversary special with their beautiful photo frame. Highly recommended!"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-background p-6 rounded-xl shadow-sm">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-hero text-primary-foreground text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Create Your Perfect Gift?</h2>
          <p className="text-xl mb-8 text-primary-foreground/90">Join thousands of happy customers who trust PrintYourGifts</p>
          <Link to="/shop">
            <Button size="lg" className="btn-gold text-lg px-8 py-4">
              Start Creating Now
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Brand Footer */}
      <div className="py-8 bg-background text-center border-t border-border">
        <p className="text-muted-foreground">
          Powered by <span className="font-semibold text-primary">PrintYourGifts</span> - Your Memories, Our Craft
        </p>
      </div>
    </div>
  );
};

export default Home;