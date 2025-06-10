export interface Translations {
    nav: {
        benefits: string;
        products: string;
        contact: string;
    };
    hero: {
        title: string;
        subtitle: string;
        announcement: string;
        cta: string;
    };
    benefits: {
        title: string;
        noEffort: {
            title: string;
            description: string;
        };
        enhanced: {
            title: string;
            description: string;
        };
        choice: {
            title: string;
            description: string;
        };
    };
    products: {
        title: string;
        snacks: {
            title: string;
            items: string[];
        };
        convenience: {
            title: string;
            items: string[];
        };
    };
    guarantees: {
        title: string;
        premium: {
            title: string;
            description: string;
        };
        restocking: {
            title: string;
            description: string;
        };
        maintenance: {
            title: string;
            description: string;
        };
        compliance: {
            title: string;
            description: string;
        };
    };
    contact: {
        title: string;
        subtitle: string;
        contactUs: string;
        phone: string;
    };
    footer: {
        tagline: string;
    };
}

export const translations: Record<'en' | 'de', Translations> = {
    en: {
        nav: {
            benefits: "Benefits",
            products: "Products",
            contact: "Contact"
        },
        hero: {
            title: "Premium Vending Solutions with",
            subtitle: "Attractive addition to your home's offerings without additional effort or risk. Enhanced customer experience with AI-based vending machines.",
            announcement: "We are accepting locations again!",
            cta: "Contact Us Now"
        },
        benefits: {
            title: "What We Offer",
            noEffort: {
                title: "No Additional Effort",
                description: "Attractive addition to your home's offerings without additional effort or risk. We handle everything from installation to maintenance."
            },
            enhanced: {
                title: "Enhanced Experience",
                description: "Additional convenience – the customer experience with SuiteSelect is enhanced through our premium vending solutions."
            },
            choice: {
                title: "Your Choice",
                description: "You decide: operator branding or the look of your home. Flexible branding options to match your aesthetic."
            }
        },
        products: {
            title: "Product Portfolio",
            snacks: {
                title: "Snacks & Beverages",
                items: ["Chocolate bars", "Nut and protein bars", "Fruit gums", "Soft drinks", "Premium water"]
            },
            convenience: {
                title: "Convenience Items",
                items: ["Charging cables", "Hygiene products", "Personal care items", "Household essentials", "Drugstore items"]
            }
        },
        guarantees: {
            title: "Our Guarantees",
            premium: {
                title: "Premium Quality",
                description: "Visually appealing and high-quality AI-based vending machines"
            },
            restocking: {
                title: "Regular Restocking",
                description: "Regularly restocked with in-demand items"
            },
            maintenance: {
                title: "Full Maintenance",
                description: "Guaranteed functionality and cleaning services"
            },
            compliance: {
                title: "Agreement Compliance",
                description: "All agreements with home management are strictly adhered to"
            }
        },
        contact: {
            title: "Ready to Get Started?",
            subtitle: "We're accepting new locations! Contact us today to learn how SuiteSelect can enhance your property's guest experience.",
            contactUs: "Contact Us",
            phone: "Phone"
        },
        footer: {
            tagline: "Premium vending solutions with SuiteSelect"
        }
    },
    de: {
        nav: {
            benefits: "Vorteile",
            products: "Produkte",
            contact: "Kontakt"
        },
        hero: {
            title: "Premium Vending-Lösungen mit",
            subtitle: "Attraktive Ergänzung zu Ihren Angeboten ohne zusätzlichen Aufwand oder Risiko. Verbesserte Kundenerfahrung mit KI-basierten Verkaufsautomaten.",
            announcement: "Wir nehmen wieder Standorte auf!",
            cta: "Jetzt Kontakt aufnehmen"
        },
        benefits: {
            title: "Was wir bieten",
            noEffort: {
                title: "Kein zusätzlicher Aufwand",
                description: "Attraktive Ergänzung zu Ihren Angeboten ohne zusätzlichen Aufwand oder Risiko. Wir kümmern uns um alles von der Installation bis zur Wartung."
            },
            enhanced: {
                title: "Verbesserte Erfahrung",
                description: "Zusätzlicher Komfort – die Kundenerfahrung mit SuiteSelect wird durch unsere Premium-Vending-Lösungen verbessert."
            },
            choice: {
                title: "Ihre Wahl",
                description: "Sie entscheiden: Betreiber-Branding oder das Aussehen Ihres Hauses. Flexible Branding-Optionen für Ihre Ästhetik."
            }
        },
        products: {
            title: "Produktportfolio",
            snacks: {
                title: "Snacks & Getränke",
                items: ["Schokoladenriegel", "Nuss- und Proteinriegel", "Fruchtgummis", "Erfrischungsgetränke", "Premium-Wasser"]
            },
            convenience: {
                title: "Praktische Artikel",
                items: ["Ladekabel", "Hygieneprodukte", "Körperpflegeartikel", "Haushaltswaren", "Drogerieartikel"]
            }
        },
        guarantees: {
            title: "Unsere Garantien",
            premium: {
                title: "Premium-Qualität",
                description: "Optisch ansprechende und hochwertige KI-basierte Verkaufsautomaten"
            },
            restocking: {
                title: "Regelmäßige Nachfüllung",
                description: "Regelmäßig mit gefragten Artikeln nachgefüllt"
            },
            maintenance: {
                title: "Vollständige Wartung",
                description: "Garantierte Funktionalität und Reinigungsservice"
            },
            compliance: {
                title: "Vertragstreue",
                description: "Alle Vereinbarungen mit der Hausverwaltung werden strikt eingehalten"
            }
        },
        contact: {
            title: "Bereit anzufangen?",
            subtitle: "Wir nehmen neue Standorte auf! Kontaktieren Sie uns heute, um zu erfahren, wie SuiteSelect die Gästeerfahrung Ihrer Immobilie verbessern kann.",
            contactUs: "Kontaktieren Sie uns",
            phone: "Telefon"
        },
        footer: {
            tagline: "Premium Vending-Lösungen mit SuiteSelect"
        }
    }
};
