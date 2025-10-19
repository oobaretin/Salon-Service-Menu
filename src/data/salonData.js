// Salon Information - Update this for each client
export const SALON_INFO = {
  name: "Elite Braids & Beauty",
  phone: "(555) 123-4567",
  email: "booking@elitebraids.com",
  address: "123 Beauty Lane, Style City, SC 12345",
  hours: "Mon-Sat: 9AM-7PM, Sun: 10AM-5PM",
  bookingUrl: "https://calendly.com/elitebraids", // Change this to your client's booking URL
  website: "https://elitebraids.com",
  instagram: "@elitebraids",
  description: "Professional braiding services with premium products and expert stylists"
};

// Service Categories and Pricing Data
export const SALON_DATA = {
  "Protective Styles": {
    "Box Braids": {
      starting: 200,
      description: "Classic box braids for all hair types",
      variations: [
        { name: "Small Box Braids (Shoulder Length)", duration: "4-5 hours", price: 200 },
        { name: "Small Box Braids (Mid-Back)", duration: "5-6 hours", price: 250 },
        { name: "Small Box Braids (Waist Length)", duration: "6-7 hours", price: 300 },
        { name: "Medium Box Braids (Shoulder Length)", duration: "3-4 hours", price: 180 },
        { name: "Medium Box Braids (Mid-Back)", duration: "4-5 hours", price: 220 },
        { name: "Medium Box Braids (Waist Length)", duration: "5-6 hours", price: 260 },
        { name: "Large Box Braids (Shoulder Length)", duration: "2-3 hours", price: 150 },
        { name: "Large Box Braids (Mid-Back)", duration: "3-4 hours", price: 180 },
        { name: "Large Box Braids (Waist Length)", duration: "4-5 hours", price: 220 }
      ]
    },
    "Goddess Braids": {
      starting: 180,
      description: "Elegant goddess braids with added hair",
      variations: [
        { name: "Goddess Braids (Shoulder Length)", duration: "4-5 hours", price: 180 },
        { name: "Goddess Braids (Mid-Back)", duration: "5-6 hours", price: 220 },
        { name: "Goddess Braids (Waist Length)", duration: "6-7 hours", price: 260 }
      ]
    },
    "Knotless Braids": {
      starting: 220,
      description: "Gentle knotless technique for scalp comfort",
      variations: [
        { name: "Small Knotless (Shoulder Length)", duration: "5-6 hours", price: 220 },
        { name: "Small Knotless (Mid-Back)", duration: "6-7 hours", price: 270 },
        { name: "Small Knotless (Waist Length)", duration: "7-8 hours", price: 320 },
        { name: "Medium Knotless (Shoulder Length)", duration: "4-5 hours", price: 200 },
        { name: "Medium Knotless (Mid-Back)", duration: "5-6 hours", price: 240 },
        { name: "Medium Knotless (Waist Length)", duration: "6-7 hours", price: 280 }
      ]
    },
    "Lemonade Braids": {
      starting: 160,
      description: "Side-parted braids inspired by Beyoncé's iconic look",
      variations: [
        { name: "Lemonade Braids (Shoulder Length)", duration: "3-4 hours", price: 160 },
        { name: "Lemonade Braids (Mid-Back)", duration: "4-5 hours", price: 200 },
        { name: "Lemonade Braids (Waist Length)", duration: "5-6 hours", price: 240 }
      ]
    },
    "Cornrows": {
      starting: 80,
      description: "Traditional cornrow braiding",
      variations: [
        { name: "Basic Cornrows (6-8 rows)", duration: "1-2 hours", price: 80 },
        { name: "Design Cornrows (8-12 rows)", duration: "2-3 hours", price: 120 },
        { name: "Intricate Design Cornrows", duration: "3-4 hours", price: 160 }
      ]
    }
  },

  "Hair Extensions": {
    "Sew-in Weaves": {
      starting: 150,
      description: "Professional sew-in installation",
      variations: [
        { name: "Basic Sew-in (Bone Straight)", duration: "2-3 hours", price: 150 },
        { name: "Basic Sew-in (Body Wave)", duration: "2-3 hours", price: 150 },
        { name: "Basic Sew-in (Curly)", duration: "2-3 hours", price: 150 },
        { name: "Closure Sew-in", duration: "3-4 hours", price: 200 },
        { name: "Frontal Sew-in", duration: "4-5 hours", price: 250 }
      ]
    },
    "Quick Weaves": {
      starting: 100,
      description: "Fast weave installation with glue",
      variations: [
        { name: "Quick Weave (Bone Straight)", duration: "1-2 hours", price: 100 },
        { name: "Quick Weave (Body Wave)", duration: "1-2 hours", price: 100 },
        { name: "Quick Weave (Curly)", duration: "1-2 hours", price: 100 }
      ]
    },
    "Wig Installation": {
      starting: 80,
      description: "Professional wig styling and installation",
      variations: [
        { name: "Wig Cut & Style", duration: "1 hour", price: 80 },
        { name: "Wig Installation (Glue)", duration: "1-2 hours", price: 120 },
        { name: "Wig Installation (Sew-in)", duration: "2-3 hours", price: 150 }
      ]
    }
  },

  "Natural Hair Care": {
    "Wash & Style": {
      starting: 60,
      description: "Professional wash and styling service",
      variations: [
        { name: "Wash & Blow Dry", duration: "1 hour", price: 60 },
        { name: "Wash & Flat Iron", duration: "1.5 hours", price: 80 },
        { name: "Wash & Curl", duration: "1.5 hours", price: 80 },
        { name: "Wash & Twist Out", duration: "2 hours", price: 100 }
      ]
    },
    "Hair Treatments": {
      starting: 40,
      description: "Specialized hair treatments",
      variations: [
        { name: "Deep Conditioning Treatment", duration: "1 hour", price: 40 },
        { name: "Protein Treatment", duration: "1.5 hours", price: 60 },
        { name: "Hot Oil Treatment", duration: "45 min", price: 30 },
        { name: "Scalp Treatment", duration: "1 hour", price: 50 }
      ]
    },
    "Natural Styling": {
      starting: 50,
      description: "Styling for natural hair textures",
      variations: [
        { name: "Twist Out", duration: "2-3 hours", price: 80 },
        { name: "Bantu Knots", duration: "2-3 hours", price: 80 },
        { name: "Finger Coils", duration: "3-4 hours", price: 100 },
        { name: "Wash & Go", duration: "1.5 hours", price: 60 }
      ]
    }
  },

  "Hair Coloring": {
    "Color Services": {
      starting: 120,
      description: "Professional hair coloring",
      variations: [
        { name: "Full Color", duration: "2-3 hours", price: 120 },
        { name: "Highlights", duration: "3-4 hours", price: 150 },
        { name: "Balayage", duration: "4-5 hours", price: 200 },
        { name: "Color Correction", duration: "4-6 hours", price: 250 },
        { name: "Root Touch-up", duration: "1-2 hours", price: 80 }
      ]
    },
    "Bleaching": {
      starting: 100,
      description: "Hair bleaching services",
      variations: [
        { name: "Full Bleach", duration: "3-4 hours", price: 100 },
        { name: "Partial Bleach", duration: "2-3 hours", price: 80 },
        { name: "Bleach & Tone", duration: "4-5 hours", price: 150 }
      ]
    }
  },

  "Hair Cuts": {
    "Basic Cuts": {
      starting: 40,
      description: "Professional hair cutting",
      variations: [
        { name: "Trim", duration: "30 min", price: 40 },
        { name: "Layered Cut", duration: "45 min", price: 60 },
        { name: "Blunt Cut", duration: "30 min", price: 50 },
        { name: "Textured Cut", duration: "1 hour", price: 80 }
      ]
    },
    "Specialty Cuts": {
      starting: 60,
      description: "Specialized cutting techniques",
      variations: [
        { name: "Taper Cut", duration: "45 min", price: 60 },
        { name: "Fade Cut", duration: "1 hour", price: 80 },
        { name: "Design Cut", duration: "1-2 hours", price: 100 },
        { name: "Asymmetrical Cut", duration: "1 hour", price: 80 }
      ]
    }
  },

  "Hair Maintenance": {
    "Braids Maintenance": {
      starting: 50,
      description: "Maintenance for protective styles",
      variations: [
        { name: "Braids Touch-up (Front)", duration: "1 hour", price: 50 },
        { name: "Braids Touch-up (Full)", duration: "2-3 hours", price: 100 },
        { name: "Braids Take-down", duration: "1-2 hours", price: 60 }
      ]
    },
    "Weave Maintenance": {
      starting: 40,
      description: "Weave maintenance services",
      variations: [
        { name: "Weave Touch-up", duration: "1-2 hours", price: 40 },
        { name: "Weave Take-down", duration: "1-2 hours", price: 50 },
        { name: "Weave Repair", duration: "1-3 hours", price: 80 }
      ]
    }
  }
};

// Service categories for navigation
export const SERVICE_CATEGORIES = [
  "Protective Styles",
  "Hair Extensions", 
  "Natural Hair Care",
  "Hair Coloring",
  "Hair Cuts",
  "Hair Maintenance"
];

// Popular services for quick access
export const POPULAR_SERVICES = [
  "Box Braids",
  "Knotless Braids", 
  "Sew-in Weaves",
  "Wash & Style",
  "Hair Coloring"
];

