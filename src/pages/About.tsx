import { useEffect } from 'react';
import { Heart, Users, Award, Clock } from 'lucide-react';
import { Link } from "react-router-dom";

const About = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.fade-in');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const team = [
    {
      name: 'Rajesh Patel',
      role: 'Founder & CEO',
      bio: 'Passionate about technology and customer satisfaction. 10+ years in printing industry.',
    },
    {
      name: 'Priya Sharma',
      role: 'Design Director',
      bio: 'Creative designer with expertise in personalization and visual storytelling.',
    },
    {
      name: 'Amit Kumar',
      role: 'Quality Manager',
      bio: 'Ensures every product meets our high standards before reaching customers.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-hero text-primary-foreground py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About PrintYourGifts
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto">
            We transform your precious memories into beautiful, personalized
            gifts that last a lifetime
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="fade-in text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                At PrintYourGifts, we believe that every memory deserves to be
                cherished. Our mission is to help people celebrate life's
                special moments by creating high-quality, personalized gifts
                that tell their unique stories.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="fade-in">
                <h3 className="text-2xl font-semibold mb-4">Why We Started</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Founded in 2020, PrintYourGifts was born from a simple idea:
                  everyone should be able to turn their favorite photos and
                  memories into meaningful gifts. We saw how much joy a
                  personalized mug or photo frame could bring to someone's day.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  What started as a small printing service has grown into
                  India's trusted platform for custom gifts, serving thousands
                  of happy customers across the country.
                </p>
              </div>
              <div className="fade-in">
                <div className="bg-gradient-to-br from-primary to-primary-glow rounded-2xl p-8 text-primary-foreground shadow-lg hover:scale-[1.02] transition">
                  <h4 className="text-xl font-semibold mb-4">Our Promise</h4>
                  <ul className="space-y-2">
                    <li>✨ Premium quality materials</li>
                    <li>🚚 Fast, reliable delivery</li>
                    <li>💝 Unique, personalized designs</li>
                    <li>🛡️ 100% satisfaction guarantee</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              PrintYourGifts by Numbers
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Users, number: '50,000+', label: 'Happy Customers' },
              { icon: Heart, number: '200,000+', label: 'Gifts Created' },
              { icon: Award, number: '4.9/5', label: 'Customer Rating' },
              { icon: Clock, number: '24-48hrs', label: 'Delivery Time' },
            ].map((stat, index) => (
              <div
                key={index}
                className="fade-in text-center hover:-translate-y-1 hover:shadow-xl hover:scale-105 transition rounded-xl p-6 bg-background border border-border"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                  <stat.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-muted-foreground">
              Passionate professionals dedicated to bringing your memories to
              life
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {team.map((member, index) => (
              <div
                key={index}
                className="fade-in text-center hover:-translate-y-1 hover:shadow-2xl hover:scale-105 transition rounded-xl p-6 bg-gradient-to-br from-background to-muted border border-border"
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-primary font-medium mb-3">{member.role}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Quality First',
                description:
                  'We never compromise on quality. Every product is carefully crafted using premium materials and advanced printing technology.',
              },
              {
                title: 'Customer Happiness',
                description:
                  'Your satisfaction is our priority. We go above and beyond to ensure every customer has an amazing experience.',
              },
              {
                title: 'Innovation',
                description:
                  'We continuously improve our processes and introduce new products to give you more ways to express creativity.',
              },
            ].map((value, index) => (
              <div
                key={index}
                className="fade-in text-center hover:-translate-y-1 hover:shadow-xl hover:scale-105 transition"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="bg-background p-6 rounded-xl shadow-sm border border-border">
                  <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 bg-gradient-hero text-primary-foreground text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Create Something Special?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90">
            Join our community of satisfied customers and start creating your
            personalized gifts today
          </p>

          {/* ✅ Scoped Styles */}
          <style>
            {`
              .btn-3 {
                background: linear-gradient(0deg, rgba(238, 0, 0, 1) 0%, rgba(251, 27, 2, 1) 100%);
                width: 160px;
                height: 50px;
                line-height: 50px;
                border: none;
                border-radius: 12px;
                cursor: pointer;
                position: relative;
                overflow: hidden;
                color: #fff;
                font-weight: 600;
                font-size: 16px;
                transition: all 0.3s ease;
              }
              .btn-3 span {
                position: relative;
                display: block;
                width: 100%;
                height: 100%;
              }
              .btn-3:before,
              .btn-3:after {
                position: absolute;
                content: "";
                right: 0;
                top: 0;
                background: rgba(251, 2, 102, 1);
                transition: all 0.3s ease;
              }
              .btn-3:before {
                height: 0%;
                width: 2px;
              }
              .btn-3:after {
                width: 0%;
                height: 2px;
              }
              .btn-3:hover {
                background: transparent;
                box-shadow: 0 0 15px rgba(251, 2, 110, 0.6);
              }
              .btn-3:hover:before {
                height: 100%;
              }
              .btn-3:hover:after {
                width: 100%;
              }
              .btn-3 span:hover {
                color: rgba(252, 252, 252, 1);
              }
              .btn-3 span:before,
              .btn-3 span:after {
                position: absolute;
                content: "";
                left: 0;
                bottom: 0;
                background: hsla(320, 82%, 48%, 0.84);
                transition: all 0.3s ease;
              }
              .btn-3 span:before {
                width: 2px;
                height: 0%;
              }
              .btn-3 span:after {
                width: 0%;
                height: 2px;
              }
              .btn-3 span:hover:before {
                height: 100%;
              }
              .btn-3 span:hover:after {
                width: 100%;
              }
            `}
          </style>

          <div className="flex flex-col md:flex-row justify-center gap-6">
            <Link to="/shop">
              <button className="btn-3">
                <span>Start Shopping</span>
              </button>
            </Link>

            <Link to="/contact">
              <button className="btn-3">
                <span>Contact Us</span>
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
