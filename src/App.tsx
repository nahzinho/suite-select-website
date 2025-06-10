import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, CheckCircle, Star, Zap, Shield, Wrench } from "lucide-react";
import "./index.css";
import logo from "./assets/suiteselect-logo.svg";

export function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Header */}
      <header className="bg-black/50 backdrop-blur-md border-b border-yellow-400/20 shadow-lg">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img src={logo} alt="SuiteSelect Logo" className="w-32 h-16" />
              <div>
                <h1 className="text-2xl font-bold gradient-text">
                  SuiteSelect
                </h1>
                <p className="text-xs text-yellow-400/80 tracking-wider">
                  HAVE WHAT YOU WANT
                </p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a
                href="#benefits"
                className="text-gray-300 hover:text-yellow-400 transition-colors"
              >
                Benefits
              </a>
              <a
                href="#products"
                className="text-gray-300 hover:text-yellow-400 transition-colors"
              >
                Products
              </a>
              <a
                href="#contact"
                className="text-gray-300 hover:text-yellow-400 transition-colors"
              >
                Contact
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/5 to-transparent"></div>
        <div className="container mx-auto text-center relative z-10">
          <h2 className="text-6xl font-bold text-white mb-6 leading-tight">
            Premium Vending Solutions with{" "}
            <span className="gradient-text gold-shimmer">SuiteSelect</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Attractive addition to your home's offerings without additional
            effort or risk. Enhanced customer experience with AI-based vending
            machines.
          </p>
          <div className="luxury-card rounded-lg p-6 mb-8 inline-block gold-border">
            <p className="text-yellow-400 font-medium flex items-center text-lg">
              <CheckCircle className="w-6 h-6 mr-3" />
              We are accepting locations again!
            </p>
          </div>
          <div>
            <Button
              size="lg"
              className="btn-gradient px-12 py-4 text-lg font-semibold rounded-full"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Contact Us Now
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section
        id="benefits"
        className="py-16 bg-gradient-to-b from-gray-900 to-black"
      >
        <div className="container mx-auto px-6">
          <h3 className="text-4xl font-bold text-center text-white mb-12 gradient-text">
            What We Offer
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="luxury-card hover:luxury-card transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Zap className="w-8 h-8 text-black" />
                </div>
                <CardTitle className="text-white text-center text-xl">
                  No Additional Effort
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-center leading-relaxed">
                  Attractive addition to your home's offerings without
                  additional effort or risk. We handle everything from
                  installation to maintenance.
                </p>
              </CardContent>
            </Card>

            <Card className="luxury-card hover:luxury-card transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Star className="w-8 h-8 text-black" />
                </div>
                <CardTitle className="text-white text-center text-xl">
                  Enhanced Experience
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-center leading-relaxed">
                  Additional convenience – the customer experience with
                  SuiteSelect is enhanced through our premium vending solutions.
                </p>
              </CardContent>
            </Card>

            <Card className="luxury-card hover:luxury-card transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Shield className="w-8 h-8 text-black" />
                </div>
                <CardTitle className="text-white text-center text-xl">
                  Your Choice
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-center leading-relaxed">
                  You decide: operator branding or the look of your home.
                  Flexible branding options to match your aesthetic.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-16 bg-black/50">
        <div className="container mx-auto px-6">
          <h3 className="text-4xl font-bold text-center text-white mb-12 gradient-text">
            Product Portfolio
          </h3>
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="luxury-card">
              <CardHeader>
                <CardTitle className="text-3xl gradient-text text-center">
                  Snacks & Beverages
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 mr-3 text-yellow-400" />
                    Chocolate bars
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 mr-3 text-yellow-400" />
                    Nut and protein bars
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 mr-3 text-yellow-400" />
                    Fruit gums
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 mr-3 text-yellow-400" />
                    Soft drinks
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 mr-3 text-yellow-400" />
                    Premium water
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="luxury-card">
              <CardHeader>
                <CardTitle className="text-3xl gradient-text text-center">
                  Convenience Items
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 mr-3 text-yellow-400" />
                    Charging cables
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 mr-3 text-yellow-400" />
                    Hygiene products
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 mr-3 text-yellow-400" />
                    Menstruation products
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 mr-3 text-yellow-400" />
                    Household essentials
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 mr-3 text-yellow-400" />
                    Drugstore items
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Guarantees Section */}
      <section className="py-16 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-6">
          <h3 className="text-4xl font-bold text-center text-white mb-12 gradient-text">
            Our Guarantees
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center luxury-card p-6 rounded-lg">
              <div className="w-20 h-20 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="w-10 h-10 text-black" />
              </div>
              <h4 className="font-bold text-white mb-3 text-lg">
                Premium Quality
              </h4>
              <p className="text-gray-300 text-sm leading-relaxed">
                Visually appealing and high-quality AI-based vending machines
              </p>
            </div>

            <div className="text-center luxury-card p-6 rounded-lg">
              <div className="w-20 h-20 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-black" />
              </div>
              <h4 className="font-bold text-white mb-3 text-lg">
                Regular Restocking
              </h4>
              <p className="text-gray-300 text-sm leading-relaxed">
                Regularly restocked with in-demand items
              </p>
            </div>

            <div className="text-center luxury-card p-6 rounded-lg">
              <div className="w-20 h-20 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Wrench className="w-10 h-10 text-black" />
              </div>
              <h4 className="font-bold text-white mb-3 text-lg">
                Full Maintenance
              </h4>
              <p className="text-gray-300 text-sm leading-relaxed">
                Guaranteed functionality and cleaning services
              </p>
            </div>

            <div className="text-center luxury-card p-6 rounded-lg">
              <div className="w-20 h-20 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-10 h-10 text-black" />
              </div>
              <h4 className="font-bold text-white mb-3 text-lg">
                Agreement Compliance
              </h4>
              <p className="text-gray-300 text-sm leading-relaxed">
                All agreements with home management are strictly adhered to
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 bg-gradient-to-r from-yellow-400/20 via-black to-yellow-600/20"
      >
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-4xl font-bold text-white mb-8 gradient-text">
            Ready to Get Started?
          </h3>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            We're accepting new locations! Contact us today to learn how
            SuiteSelect can enhance your property's guest experience.
          </p>
          <Card className="max-w-lg mx-auto luxury-card gold-border">
            <CardContent className="pt-8 pb-8">
              <div className="flex items-center justify-center mb-6">
                <Mail className="w-10 h-10 text-yellow-400 mr-4" />
                <span className="text-white font-semibold text-xl">
                  Contact Us
                </span>
              </div>
              PHONE NUMBER
              <a
                href="mailto:jakob.petersdorff@suiteselect.de"
                className="text-yellow-400 hover:text-yellow-300 text-xl font-medium break-all transition-colors"
              >
                jakob.petersdorff@suiteselect.de
              </a>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-yellow-400/20 py-12">
        <div className="container mx-auto px-6 text-center">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <img src={logo} alt="SuiteSelect Logo" className="w-12 h-12" />
            <div>
              <span className="text-2xl font-bold gradient-text">
                SuiteSelect
              </span>
              <p className="text-xs text-yellow-400/80 tracking-wider">
                HAVE WHAT YOU WANT
              </p>
            </div>
          </div>
          <p className="text-gray-400">
            Premium vending solutions with SuiteSelect
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
