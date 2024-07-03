import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Package2, Star } from "lucide-react";

const Index = () => {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center py-16 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
        <h1 className="text-5xl font-bold mb-4">Welcome to SaaSify</h1>
        <p className="text-xl mb-8">Your one-stop solution for all SaaS needs</p>
        <Button variant="primary" size="lg">Get Started</Button>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <h2 className="text-3xl font-bold text-center mb-8">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            icon={<Package2 className="h-12 w-12 text-blue-500" />}
            title="Feature One"
            description="Description of feature one."
          />
          <FeatureCard
            icon={<Package2 className="h-12 w-12 text-blue-500" />}
            title="Feature Two"
            description="Description of feature two."
          />
          <FeatureCard
            icon={<Package2 className="h-12 w-12 text-blue-500" />}
            title="Feature Three"
            description="Description of feature three."
          />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-8">Testimonials</h2>
        <Carousel>
          <CarouselContent>
            <CarouselItem>
              <TestimonialCard
                name="John Doe"
                testimonial="This product is amazing! It has changed my life."
              />
            </CarouselItem>
            <CarouselItem>
              <TestimonialCard
                name="Jane Smith"
                testimonial="I can't imagine working without this tool anymore."
              />
            </CarouselItem>
            <CarouselItem>
              <TestimonialCard
                name="Sam Wilson"
                testimonial="A must-have for any professional."
              />
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </section>

      {/* Pricing Section */}
      <section className="py-16">
        <h2 className="text-3xl font-bold text-center mb-8">Pricing</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <PricingCard
            title="Basic"
            price="$10/month"
            features={["Feature A", "Feature B", "Feature C"]}
          />
          <PricingCard
            title="Pro"
            price="$30/month"
            features={["Feature A", "Feature B", "Feature C", "Feature D"]}
          />
          <PricingCard
            title="Enterprise"
            price="Contact Us"
            features={["Feature A", "Feature B", "Feature C", "Feature D", "Feature E"]}
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-800 text-white text-center">
        <div className="space-x-4">
          <a href="/about" className="hover:underline">About</a>
          <a href="/contact" className="hover:underline">Contact</a>
          <a href="/privacy" className="hover:underline">Privacy Policy</a>
        </div>
        <div className="mt-4 space-x-4">
          <a href="https://facebook.com" className="hover:underline">Facebook</a>
          <a href="https://twitter.com" className="hover:underline">Twitter</a>
          <a href="https://linkedin.com" className="hover:underline">LinkedIn</a>
        </div>
      </footer>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => (
  <Card className="text-center">
    <CardHeader>
      {icon}
      <CardTitle className="mt-4">{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <p>{description}</p>
    </CardContent>
  </Card>
);

const TestimonialCard = ({ name, testimonial }) => (
  <Card className="text-center">
    <CardHeader>
      <Star className="h-12 w-12 text-yellow-500" />
      <CardTitle className="mt-4">{name}</CardTitle>
    </CardHeader>
    <CardContent>
      <p>"{testimonial}"</p>
    </CardContent>
  </Card>
);

const PricingCard = ({ title, price, features }) => (
  <Card className="text-center">
    <CardHeader>
      <CardTitle className="text-2xl">{title}</CardTitle>
      <p className="text-xl font-bold mt-2">{price}</p>
    </CardHeader>
    <CardContent>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <Button variant="primary" className="mt-4">Choose Plan</Button>
    </CardContent>
  </Card>
);

export default Index;