import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Mail,
  CheckCircle,
  Star,
  Zap,
  Shield,
  Wrench,
  Globe,
  Phone,
} from "lucide-react";
import { useState, useEffect } from "react";
import "./index.css";
import logo from "./assets/suiteselect-logo.svg";
import { translations, type Translations } from "./translations";

export function App() {
  // Function to detect browser language
  const detectBrowserLanguage = (): "en" | "de" => {
    const browserLang = navigator.language || navigator.languages?.[0] || "en";
    // Check if the browser language starts with 'de' (for German)
    return browserLang.toLowerCase().startsWith("de") ? "de" : "en";
  };

  // Function to get initial language (localStorage > browser > default)
  const getInitialLanguage = (): "en" | "de" => {
    try {
      const savedLanguage = localStorage.getItem("suiteselect-language") as
        | "en"
        | "de"
        | null;
      if (savedLanguage && (savedLanguage === "en" || savedLanguage === "de")) {
        return savedLanguage;
      }
    } catch (error) {
      console.warn("Could not access localStorage:", error);
    }
    return detectBrowserLanguage();
  };

  const [language, setLanguage] = useState<"en" | "de">(getInitialLanguage());
  const t = translations[language];

  // Set initial language based on browser preference if no saved preference
  useEffect(() => {
    const initialLanguage = getInitialLanguage();
    setLanguage(initialLanguage);
  }, []);

  // Save language preference to localStorage when it changes
  useEffect(() => {
    try {
      localStorage.setItem("suiteselect-language", language);
    } catch (error) {
      console.warn(
        "Could not save language preference to localStorage:",
        error
      );
    }
  }, [language]);
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Header */}
      <header className="bg-black/50 backdrop-blur-md border-b border-yellow-400/20 shadow-lg">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img
                src={logo}
                alt="SuiteSelect Logo"
                className="w-40 h-20 object-contain"
              />
              <div>
                <h1 className="text-2xl font-bold gradient-text">
                  SuiteSelect
                </h1>
                <p className="text-xs text-yellow-400/80 tracking-wider">
                  HAVE WHAT YOU WANT
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <nav className="hidden md:flex space-x-8">
                <a
                  href="#benefits"
                  className="text-gray-300 hover:text-yellow-400 transition-colors"
                >
                  {t.nav.benefits}
                </a>
                <a
                  href="#products"
                  className="text-gray-300 hover:text-yellow-400 transition-colors"
                >
                  {t.nav.products}
                </a>
                <a
                  href="#contact"
                  className="text-gray-300 hover:text-yellow-400 transition-colors"
                >
                  {t.nav.contact}
                </a>
              </nav>

              {/* Language Switcher */}
              <div className="flex items-center space-x-2">
                <Globe className="w-4 h-4 text-yellow-400" />
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setLanguage(language === "en" ? "de" : "en")}
                  className="text-gray-300 hover:text-yellow-400 hover:bg-yellow-400/10 px-3 py-1 text-sm"
                >
                  {language === "en" ? "DE" : "EN"}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/5 to-transparent"></div>
        <div className="container mx-auto text-center relative z-10">
          <h2 className="text-6xl font-bold text-white mb-6 leading-tight">
            {t.hero.title}{" "}
            <span className="gradient-text gold-shimmer">SuiteSelect</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            {t.hero.subtitle}
          </p>
          <div className="luxury-card rounded-lg p-6 mb-8 inline-block gold-border">
            <p className="text-yellow-400 font-medium flex items-center text-lg">
              <CheckCircle className="w-6 h-6 mr-3" />
              {t.hero.announcement}
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
              {t.hero.cta}
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
            {t.benefits.title}
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="luxury-card hover:luxury-card transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Zap className="w-8 h-8 text-black" />
                </div>
                <CardTitle className="text-white text-center text-xl">
                  {t.benefits.noEffort.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-center leading-relaxed">
                  {t.benefits.noEffort.description}
                </p>
              </CardContent>
            </Card>

            <Card className="luxury-card hover:luxury-card transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Star className="w-8 h-8 text-black" />
                </div>
                <CardTitle className="text-white text-center text-xl">
                  {t.benefits.enhanced.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-center leading-relaxed">
                  {t.benefits.enhanced.description}
                </p>
              </CardContent>
            </Card>

            <Card className="luxury-card hover:luxury-card transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Shield className="w-8 h-8 text-black" />
                </div>
                <CardTitle className="text-white text-center text-xl">
                  {t.benefits.choice.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-center leading-relaxed">
                  {t.benefits.choice.description}
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
            {t.products.title}
          </h3>
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="luxury-card">
              <CardHeader>
                <CardTitle className="text-3xl gradient-text text-center">
                  {t.products.snacks.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {t.products.snacks.items.map((item, index) => (
                    <li key={index} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 mr-3 text-yellow-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="luxury-card">
              <CardHeader>
                <CardTitle className="text-3xl gradient-text text-center">
                  {t.products.convenience.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {t.products.convenience.items.map((item, index) => (
                    <li key={index} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 mr-3 text-yellow-400" />
                      {item}
                    </li>
                  ))}
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
            {t.guarantees.title}
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center luxury-card p-6 rounded-lg">
              <div className="w-20 h-20 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="w-10 h-10 text-black" />
              </div>
              <h4 className="font-bold text-white mb-3 text-lg">
                {t.guarantees.premium.title}
              </h4>
              <p className="text-gray-300 text-sm leading-relaxed">
                {t.guarantees.premium.description}
              </p>
            </div>

            <div className="text-center luxury-card p-6 rounded-lg">
              <div className="w-20 h-20 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-black" />
              </div>
              <h4 className="font-bold text-white mb-3 text-lg">
                {t.guarantees.restocking.title}
              </h4>
              <p className="text-gray-300 text-sm leading-relaxed">
                {t.guarantees.restocking.description}
              </p>
            </div>

            <div className="text-center luxury-card p-6 rounded-lg">
              <div className="w-20 h-20 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Wrench className="w-10 h-10 text-black" />
              </div>
              <h4 className="font-bold text-white mb-3 text-lg">
                {t.guarantees.maintenance.title}
              </h4>
              <p className="text-gray-300 text-sm leading-relaxed">
                {t.guarantees.maintenance.description}
              </p>
            </div>

            <div className="text-center luxury-card p-6 rounded-lg">
              <div className="w-20 h-20 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-10 h-10 text-black" />
              </div>
              <h4 className="font-bold text-white mb-3 text-lg">
                {t.guarantees.compliance.title}
              </h4>
              <p className="text-gray-300 text-sm leading-relaxed">
                {t.guarantees.compliance.description}
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
            {t.contact.title}
          </h3>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            {t.contact.subtitle}
          </p>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="luxury-card gold-border">
              <CardContent className="pt-8 pb-8">
                <div className="flex items-center justify-center mb-6">
                  <Mail className="w-10 h-10 text-yellow-400 mr-4" />
                  <span className="text-white font-semibold text-xl">
                    {t.contact.contactUs}
                  </span>
                </div>
                <a
                  href="mailto:jakob.petersdorff@suiteselect.de"
                  className="text-yellow-400 hover:text-yellow-300 text-lg font-medium break-all transition-colors"
                >
                  jakob.petersdorff@suiteselect.de
                </a>
              </CardContent>
            </Card>

            <Card className="luxury-card gold-border">
              <CardContent className="pt-8 pb-8">
                <div className="flex items-center justify-center mb-6">
                  <Phone className="w-10 h-10 text-yellow-400 mr-4" />
                  <span className="text-white font-semibold text-xl">
                    {t.contact.phone}
                  </span>
                </div>
                <a
                  href="tel:+4915204911982"
                  className="text-yellow-400 hover:text-yellow-300 text-lg font-medium transition-colors"
                >
                  +49 152 0491 1982
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-yellow-400/20 py-12">
        <div className="container mx-auto px-6 text-center">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <img
              src={logo}
              alt="SuiteSelect Logo"
              className="w-16 h-16 object-contain"
            />
            <div>
              <span className="text-2xl font-bold gradient-text">
                SuiteSelect
              </span>
              <p className="text-xs text-yellow-400/80 tracking-wider">
                HAVE WHAT YOU WANT
              </p>
            </div>
          </div>
          <p className="text-gray-400">{t.footer.tagline}</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
