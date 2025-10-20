import React, { useState } from 'react';
import { ChevronDown, ChevronRight, Clock, Calendar, Phone, Mail, MapPin } from 'lucide-react';
import AdvancedBookingModal from './AdvancedBookingModal';

// 🎯 CUSTOMIZE THIS DATA FOR EACH CLIENT
const SALON_INFO = {
  name: "Your Salon Name",
  phone: "(555) 123-4567",
  email: "booking@yoursalon.com",
  address: "123 Beauty Lane, Style City, SC 12345",
  hours: "Mon-Sat: 9AM-7PM, Sun: 10AM-5PM",
  bookingUrl: "mailto:booking@yoursalon.com", // ← Email booking (works with Gmail, Outlook, etc.)
  // Alternative booking options:
  // bookingUrl: "https://wa.me/15551234567", // ← WhatsApp
  // bookingUrl: "tel:+15551234567", // ← Direct phone call
  website: "https://yoursalon.com",
  instagram: "@yoursalon",
  description: "Professional salon services with premium products and expert stylists"
};

// DATA STRUCTURE - Easy to modify for different clients
const SALON_DATA = {
  "Braids": {
    "Box Braids": {
      starting: 180,
      variations: [
        { name: "Shoulder Length Large", duration: "45 min", price: 180 },
        { name: "Shoulder Length Medium", duration: "45 min", price: 200 },
        { name: "Waist Length Large", duration: "45 min", price: 200 },
        { name: "Thigh Length Large", duration: "45 min", price: 200 },
        { name: "Mid Back Length Large", duration: "45 min", price: 220 },
        { name: "Shoulder Length Small", duration: "45 min", price: 230 },
        { name: "Mid Back Length Medium", duration: "45 min", price: 240 },
        { name: "Mid Back Length Small", duration: "45 min", price: 260 },
        { name: "Waist Length Medium", duration: "45 min", price: 280 },
        { name: "Waist Length Small", duration: "45 min", price: 300 },
        { name: "Thigh Length Medium", duration: "45 min", price: 320 },
        { name: "Thigh Length Small", duration: "45 min", price: 340 }
      ]
    },
    "Bohemian Box Braids": {
      starting: 200,
      variations: [
        { name: "Shoulder Length Large", duration: "45 min", price: 200 },
        { name: "Shoulder Length Medium", duration: "45 min", price: 230 },
        { name: "Mid Back Length Large", duration: "45 min", price: 250 },
        { name: "Shoulder Length Small", duration: "45 min", price: 250 },
        { name: "Mid Back Length Medium", duration: "45 min", price: 260 },
        { name: "Waist Length Large", duration: "45 min", price: 270 },
        { name: "Mid Back Length Small", duration: "45 min", price: 290 },
        { name: "Waist Length Medium", duration: "45 min", price: 300 },
        { name: "Thigh Length Large", duration: "45 min", price: 300 },
        { name: "Waist Length Small", duration: "45 min", price: 320 },
        { name: "Thigh Length Medium", duration: "45 min", price: 340 },
        { name: "Thigh Length Small", duration: "45 min", price: 360 }
      ]
    },
    "Micro Braids": {
      starting: 300,
      variations: [
        { name: "Shoulder Length Large", duration: "45 min", price: 300 },
        { name: "Mid Back Length Large", duration: "45 min", price: 320 },
        { name: "Shoulder Length Medium", duration: "45 min", price: 340 },
        { name: "Shoulder Length Small", duration: "45 min", price: 360 },
        { name: "Mid Back Length Medium", duration: "45 min", price: 360 },
        { name: "Mid Back Length Small", duration: "45 min", price: 380 },
        { name: "Waist Length Large", duration: "45 min", price: 420 },
        { name: "Waist Length Medium", duration: "45 min", price: 460 },
        { name: "Waist Length Small", duration: "45 min", price: 470 },
        { name: "Thigh Length Large", duration: "45 min", price: 600 },
        { name: "Thigh Length Medium", duration: "45 min", price: 650 },
        { name: "Thigh Length Small", duration: "45 min", price: 680 }
      ]
    },
    "Bob Box Braids": {
      starting: 200,
      variations: [
        { name: "Shoulder Length Large", duration: "45 min", price: 200 },
        { name: "Shoulder Length Medium", duration: "45 min", price: 230 },
        { name: "Shoulder Length Small", duration: "45 min", price: 250 }
      ]
    },
    "Jumbo Box Braids": {
      starting: 180,
      variations: [
        { name: "Shoulder Length Jumbo", duration: "45 min", price: 180 },
        { name: "Mid Back Length Jumbo", duration: "45 min", price: 200 },
        { name: "Thigh Length Jumbo", duration: "45 min", price: 220 }
      ]
    },
    "Feed In Braids": {
      starting: 50,
      variations: [
        { name: "2 Braids", duration: "45 min", price: 50 },
        { name: "3 Braids", duration: "45 min", price: 60 },
        { name: "4 Braids", duration: "45 min", price: 70 },
        { name: "6 Braids", duration: "45 min", price: 85 },
        { name: "8 Braids", duration: "45 min", price: 100 },
        { name: "10 Braids", duration: "45 min", price: 150 }
      ]
    },
    "Fulani Braids": {
      starting: 125,
      variations: [
        { name: "Shoulder Length Large", duration: "45 min", price: 125 },
        { name: "Shoulder Length Medium", duration: "45 min", price: 135 },
        { name: "Shoulder Length Small", duration: "45 min", price: 145 },
        { name: "Mid Back Length Large", duration: "45 min", price: 150 },
        { name: "Mid Back Length Medium", duration: "45 min", price: 165 },
        { name: "Mid Back Length Small", duration: "45 min", price: 175 },
        { name: "Waist Length Large", duration: "45 min", price: 225 },
        { name: "Mid Back Length Medium", duration: "45 min", price: 245 },
        { name: "Mid Back Length Small", duration: "45 min", price: 275 },
        { name: "Thigh Length Large", duration: "45 min", price: 285 },
        { name: "Thigh Length Medium", duration: "45 min", price: 300 },
        { name: "Thigh Length Large", duration: "45 min", price: 400 }
      ]
    },
    "Lemonade Braids": {
      starting: 100,
      variations: [
        { name: "Shoulder Length Large", duration: "45 min", price: 100 },
        { name: "Shoulder Length Medium", duration: "45 min", price: 120 },
        { name: "Shoulder Length Small", duration: "45 min", price: 150 },
        { name: "Mid Back Length Large", duration: "45 min", price: 150 },
        { name: "Mid Back Length Medium", duration: "45 min", price: 180 },
        { name: "Mid Back Length Small", duration: "45 min", price: 200 },
        { name: "Waist Length Large", duration: "45 min", price: 200 },
        { name: "Waist Length Medium", duration: "45 min", price: 240 },
        { name: "Thigh Length Large", duration: "45 min", price: 250 },
        { name: "Waist Length Small", duration: "45 min", price: 260 },
        { name: "Thigh Length Medium", duration: "45 min", price: 280 },
        { name: "Thigh Length Small", duration: "45 min", price: 300 }
      ]
    },
    "Bora Bora Braids": {
      starting: 200,
      variations: [
        { name: "Shoulder Length Large", duration: "45 min", price: 200 },
        { name: "Shoulder Length Medium", duration: "45 min", price: 230 },
        { name: "Mid Back Length Large", duration: "45 min", price: 240 },
        { name: "Shoulder Length Small", duration: "45 min", price: 260 },
        { name: "Mid Back Length Medium", duration: "45 min", price: 270 },
        { name: "Waist Length Large", duration: "45 min", price: 270 },
        { name: "Mid Back Length Small", duration: "45 min", price: 290 },
        { name: "Thigh Length Large", duration: "45 min", price: 290 },
        { name: "Waist Length Medium", duration: "45 min", price: 300 },
        { name: "Waist Length Small", duration: "45 min", price: 320 },
        { name: "Thigh Length Medium", duration: "45 min", price: 320 },
        { name: "Thigh Length Small", duration: "45 min", price: 350 }
      ]
    }
  },
  "Twists": {
    "Havana Twist": {
      starting: 200,
      variations: [
        { name: "Shoulder Length Large", duration: "45 min", price: 200 },
        { name: "Shoulder Length Medium", duration: "45 min", price: 220 },
        { name: "Waist Length Medium", duration: "45 min", price: 225 },
        { name: "Mid Back Length Large", duration: "45 min", price: 230 },
        { name: "Shoulder Length Small", duration: "45 min", price: 250 },
        { name: "Mid Back Length Medium", duration: "45 min", price: 260 },
        { name: "Mid Back Length Small", duration: "45 min", price: 275 },
        { name: "Waist Length Small", duration: "45 min", price: 350 },
        { name: "Thigh Length Large", duration: "45 min", price: 380 },
        { name: "Thigh Length Medium", duration: "45 min", price: 400 },
        { name: "Thigh Length Small", duration: "45 min", price: 450 },
        { name: "Waist Length Large", duration: "45 min", price: 500 }
      ]
    },
    "Senegalese Twists": {
      starting: 300,
      variations: [
        { name: "Shoulder Length Medium", duration: "45 min", price: 300 },
        { name: "Shoulder Length Small", duration: "45 min", price: 350 },
        { name: "Mid Back Length Medium", duration: "45 min", price: 350 },
        { name: "Mid Back Length Small", duration: "45 min", price: 380 },
        { name: "Waist Length Medium", duration: "45 min", price: 400 },
        { name: "Waist Length Small", duration: "45 min", price: 450 },
        { name: "Thigh Length Medium", duration: "45 min", price: 475 },
        { name: "Thigh Length Small", duration: "45 min", price: 500 }
      ]
    },
    "Passion Twist": {
      starting: 175,
      variations: [
        { name: "Shoulder Length Large", duration: "45 min", price: 175 },
        { name: "Shoulder Length Medium", duration: "45 min", price: 200 },
        { name: "Mid Back Length Large", duration: "45 min", price: 245 },
        { name: "Shoulder Length Small", duration: "45 min", price: 250 },
        { name: "Mid Back Length Medium", duration: "45 min", price: 260 },
        { name: "Mid Back Length Small", duration: "45 min", price: 275 },
        { name: "Waist Length Large", duration: "45 min", price: 325 },
        { name: "Waist Length Medium", duration: "45 min", price: 350 },
        { name: "Waist Length Small", duration: "45 min", price: 375 },
        { name: "Thigh Length Large", duration: "45 min", price: 400 },
        { name: "Thigh Length Medium", duration: "45 min", price: 445 },
        { name: "Thigh Length Small", duration: "45 min", price: 475 }
      ]
    },
    "Kinky Twists": {
      starting: 200,
      variations: [
        { name: "Shoulder Length Medium", duration: "45 min", price: 200 },
        { name: "Mid Back Length Medium", duration: "45 min", price: 260 },
        { name: "Shoulder Length Small", duration: "45 min", price: 275 },
        { name: "Waist Length Medium", duration: "45 min", price: 350 },
        { name: "Mid Back Length Small", duration: "45 min", price: 375 },
        { name: "Waist Length Small", duration: "45 min", price: 375 },
        { name: "Thigh Length Medium", duration: "45 min", price: 400 },
        { name: "Thigh Length Small", duration: "45 min", price: 450 }
      ]
    },
    "Marley Twists": {
      starting: 200,
      variations: [
        { name: "Shoulder Length Large", duration: "45 min", price: 200 },
        { name: "Shoulder Length Medium", duration: "45 min", price: 220 },
        { name: "Mid Back Length Large", duration: "45 min", price: 230 },
        { name: "Shoulder Length Small", duration: "45 min", price: 250 },
        { name: "Mid Back Length Medium", duration: "45 min", price: 260 },
        { name: "Mid Back Length Small", duration: "45 min", price: 275 },
        { name: "Waist Length Large", duration: "45 min", price: 300 },
        { name: "Waist Length Medium", duration: "45 min", price: 325 },
        { name: "Waist Length Small", duration: "45 min", price: 350 },
        { name: "Thigh Length Large", duration: "45 min", price: 380 },
        { name: "Thigh Length Medium", duration: "45 min", price: 425 },
        { name: "Thigh Length Small", duration: "45 min", price: 450 }
      ]
    },
    "Nubian Twist": {
      starting: 225,
      variations: [
        { name: "Shoulder Length Large", duration: "45 min", price: 225 },
        { name: "Shoulder Length Medium", duration: "45 min", price: 225 },
        { name: "Shoulder Length Small", duration: "45 min", price: 245 },
        { name: "Mid Back Length Large", duration: "45 min", price: 250 },
        { name: "Mid Back Length Medium", duration: "45 min", price: 285 },
        { name: "Mid Back Length Small", duration: "45 min", price: 300 },
        { name: "Waist Length Large", duration: "45 min", price: 345 },
        { name: "Waist Length Medium", duration: "45 min", price: 360 },
        { name: "Waist Length Small", duration: "45 min", price: 380 },
        { name: "Thigh Length Large", duration: "45 min", price: 400 },
        { name: "Thigh Length Medium", duration: "45 min", price: 425 },
        { name: "Thigh Length Small", duration: "45 min", price: 450 }
      ]
    },
    "Comb Twist": {
      starting: 75,
      variations: [
        { name: "Standard", duration: "45 min", price: 75 }
      ]
    },
    "Two Strand Twist": {
      starting: 100,
      variations: [
        { name: "Standard", duration: "45 min", price: 100 }
      ]
    }
  },
  "Faux Locs": {
    "Goddess Locs": {
      starting: 200,
      variations: [
        { name: "Shoulder Length Large", duration: "45 min", price: 200 },
        { name: "Shoulder Length Medium", duration: "45 min", price: 230 },
        { name: "Mid Back Length Large", duration: "45 min", price: 245 },
        { name: "Shoulder Length Small", duration: "45 min", price: 250 },
        { name: "Mid Back Length Medium", duration: "45 min", price: 260 },
        { name: "Mid Back Length Small", duration: "45 min", price: 275 },
        { name: "Waist Length Small", duration: "45 min", price: 275 },
        { name: "Waist Length Large", duration: "45 min", price: 325 },
        { name: "Waist Length Medium", duration: "45 min", price: 350 },
        { name: "Thigh Length Large", duration: "45 min", price: 400 },
        { name: "Thigh Length Medium", duration: "45 min", price: 430 },
        { name: "Thigh Length Small", duration: "45 min", price: 475 }
      ]
    },
    "Butterfly/Distressed Locs": {
      starting: 200,
      variations: [
        { name: "Shoulder Length Large", duration: "45 min", price: 200 },
        { name: "Shoulder Length Medium", duration: "45 min", price: 230 },
        { name: "Shoulder Length Small", duration: "45 min", price: 250 },
        { name: "Mid Back Length Large", duration: "45 min", price: 250 },
        { name: "Mid Back Length Medium", duration: "45 min", price: 285 },
        { name: "Waist Length Small", duration: "45 min", price: 300 },
        { name: "Mid Back Length Small", duration: "45 min", price: 330 },
        { name: "Waist Length Large", duration: "45 min", price: 345 },
        { name: "Waist Length Medium", duration: "45 min", price: 360 },
        { name: "Thigh Length Large", duration: "45 min", price: 440 },
        { name: "Thigh Length Medium", duration: "45 min", price: 460 },
        { name: "Thigh Length Small", duration: "45 min", price: 475 }
      ]
    },
    "Bohemian Locs": {
      starting: 225,
      variations: [
        { name: "Shoulder Length Large", duration: "45 min", price: 225 },
        { name: "Shoulder Length Medium", duration: "45 min", price: 250 },
        { name: "Mid Back Length Large", duration: "45 min", price: 265 },
        { name: "Shoulder Length Small", duration: "45 min", price: 275 },
        { name: "Mid Back Length Medium", duration: "45 min", price: 285 },
        { name: "Mid Back Length Small", duration: "45 min", price: 300 },
        { name: "Waist Length Large", duration: "45 min", price: 300 },
        { name: "Waist Length Medium", duration: "45 min", price: 325 },
        { name: "Waist Length Small", duration: "45 min", price: 350 },
        { name: "Thigh Length Small", duration: "45 min", price: 350 },
        { name: "Thigh Length Large", duration: "45 min", price: 400 },
        { name: "Thigh Length Medium", duration: "45 min", price: 425 }
      ]
    }
  },
  "Crotchets": {
    "Crotchet with Pre Looped Hair": {
      starting: 160,
      variations: [
        { name: "Any Length Large", duration: "45 min", price: 160 },
        { name: "Any Length Medium/Small", duration: "45 min", price: 185 }
      ]
    }
  },
  "Dreads": {
    "Starter Locs": {
      starting: 90,
      variations: [
        { name: "Standard", duration: "45 min", price: 90 }
      ]
    },
    "Loc Takedown": {
      starting: 65,
      variations: [
        { name: "Standard", duration: "45 min", price: 65 }
      ]
    }
  },
  "Kid Styles": {
    "Kid's Box Braids": {
      starting: 80,
      variations: [
        { name: "Shoulder Length Large", duration: "45 min", price: 80 },
        { name: "Shoulder Length Medium", duration: "45 min", price: 100 },
        { name: "Shoulder Length Small", duration: "45 min", price: 125 },
        { name: "Mid Back Length Large", duration: "45 min", price: 125 },
        { name: "Mid Back Length Medium", duration: "45 min", price: 140 },
        { name: "Mid Back Length Small", duration: "45 min", price: 150 }
      ]
    },
    "Kid's Ponytail Buns": {
      starting: 75,
      variations: [
        { name: "Shoulder Length Large", duration: "45 min", price: 75 },
        { name: "Shoulder Length Medium", duration: "45 min", price: 140 },
        { name: "Shoulder Length Small", duration: "45 min", price: 150 }
      ]
    }
  },
  "Cornrows": {
    "Cornrow Updo": {
      starting: 80,
      variations: [
        { name: "Shoulder Length Large", duration: "45 min", price: 80 },
        { name: "Shoulder Length Medium", duration: "45 min", price: 95 },
        { name: "Shoulder Length Small", duration: "45 min", price: 100 },
        { name: "Mid Back Length Large", duration: "45 min", price: 100 },
        { name: "Mid Back Length Medium", duration: "45 min", price: 110 },
        { name: "Mid Back Length Small", duration: "45 min", price: 125 },
        { name: "Waist Length Large", duration: "45 min", price: 130 },
        { name: "Waist Length Medium", duration: "45 min", price: 140 },
        { name: "Waist Length Small", duration: "45 min", price: 150 },
        { name: "Thigh Length Large", duration: "45 min", price: 165 },
        { name: "Thigh Length Medium", duration: "45 min", price: 170 },
        { name: "Thigh Length Small", duration: "45 min", price: 185 }
      ]
    }
  },
  "Bantu Knots": {
    "Bantu Knots": {
      starting: 65,
      variations: [
        { name: "Standard", duration: "45 min", price: 65 }
      ]
    }
  }
};

const ServiceMenu = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);
  const [expandedVariations, setExpandedVariations] = useState({});
  const [selectedService, setSelectedService] = useState(null);
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [bookingSuccess, setBookingSuccess] = useState(false);

  const toggleCategory = (category) => {
    if (selectedCategory === category) {
      setSelectedCategory(null);
      setSelectedSubcategory(null);
    } else {
      setSelectedCategory(category);
      setSelectedSubcategory(null);
    }
  };

  const toggleSubcategory = (subcategory) => {
    if (selectedSubcategory === subcategory) {
      setSelectedSubcategory(null);
    } else {
      setSelectedSubcategory(subcategory);
    }
  };

  const toggleVariations = (key) => {
    setExpandedVariations(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const handleBookingClick = (serviceName, variation) => {
    setSelectedService({ serviceName, variation });
    setShowBookingModal(true);
  };

  const handleBookingSuccess = (bookingData) => {
    setBookingSuccess(true);
    setShowBookingModal(false);
    // You can add additional success handling here
    console.log('Booking successful:', bookingData);
  };


  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50">
      {/* Header */}
      <header className="bg-white shadow-lg">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">{SALON_INFO.name}</h1>
                <p className="text-gray-600">{SALON_INFO.description}</p>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-6 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>{SALON_INFO.phone}</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>{SALON_INFO.address}</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Contact Bar */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between text-sm">
            <div className="flex items-center space-x-6 mb-2 md:mb-0">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>{SALON_INFO.phone}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>{SALON_INFO.email}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>{SALON_INFO.hours}</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              {SALON_INFO.instagram && (
                <a href={`https://instagram.com/${SALON_INFO.instagram.replace('@', '')}`} 
                   className="flex items-center space-x-1 hover:text-pink-200 transition-colors">
                  <span>{SALON_INFO.instagram}</span>
                </a>
              )}
              {SALON_INFO.website && (
                <a href={SALON_INFO.website} 
                   className="flex items-center space-x-1 hover:text-pink-200 transition-colors">
                  <span>Website</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto p-4 md:p-8">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">
            Service Menu
          </h2>
          <p className="text-gray-600 text-lg">Select a category to view our services</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {Object.keys(SALON_DATA).map((category) => (
            <button
              key={category}
              onClick={() => toggleCategory(category)}
              className={`p-6 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                  : 'bg-white text-gray-800 hover:shadow-xl'
              }`}
            >
              <h3 className="text-xl font-bold">{category}</h3>
              <p className="text-sm mt-1 opacity-80">
                {Object.keys(SALON_DATA[category]).length} styles
              </p>
            </button>
          ))}
        </div>

        {selectedCategory && (
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-lg mr-3">
                {selectedCategory}
              </span>
            </h2>

            <div className="space-y-4">
              {Object.entries(SALON_DATA[selectedCategory]).map(([subcategory, data]) => {
                const isExpanded = selectedSubcategory === subcategory;
                const variationKey = `${selectedCategory}-${subcategory}`;
                const showVariations = expandedVariations[variationKey];

                return (
                  <div key={subcategory} className="border-2 border-gray-200 rounded-xl overflow-hidden">
                    <button
                      onClick={() => toggleSubcategory(subcategory)}
                      className={`w-full p-5 flex items-center justify-between transition-colors ${
                        isExpanded ? 'bg-purple-100' : 'bg-gray-50 hover:bg-gray-100'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        {isExpanded ? <ChevronDown size={24} /> : <ChevronRight size={24} />}
                        <div className="text-left">
                          <h3 className="text-xl font-bold text-gray-800">{subcategory}</h3>
                          <p className="text-sm text-gray-600">
                            {data.variations.length} option{data.variations.length > 1 ? 's' : ''} • Starting at ${data.starting}
                          </p>
                        </div>
                      </div>
                      <div className="bg-purple-600 text-white px-4 py-2 rounded-lg font-bold">
                        From ${data.starting}
                      </div>
                    </button>

                    {isExpanded && (
                      <div className="bg-white p-5">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {data.variations.map((variation, idx) => (
                            <div
                              key={idx}
                              onClick={() => handleBookingClick(subcategory, variation)}
                              className="border-2 border-purple-200 rounded-lg p-4 hover:bg-purple-50 hover:border-purple-400 cursor-pointer transition-all duration-200 hover:shadow-md"
                            >
                              <div className="flex justify-between items-start mb-2">
                                <h4 className="font-semibold text-gray-800 flex-1">
                                  {variation.name}
                                </h4>
                                <span className="text-purple-600 font-bold text-lg ml-2">
                                  ${variation.price}
                                </span>
                              </div>
                              <div className="flex items-center text-sm text-gray-600 mb-3">
                                <Clock size={14} className="mr-1" />
                                {variation.duration}
                              </div>
                              <div className="flex items-center justify-center space-x-2 text-purple-600 font-semibold">
                                <Calendar size={16} />
                                <span>Click to Book</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Look?</h3>
            <p className="text-lg mb-6">
              Book your appointment today and experience professional hair care at its finest
            </p>
            <a
              href={SALON_INFO.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              <Calendar className="w-5 h-5" />
              <span>Book Appointment</span>
            </a>
          </div>
        </div>

        {!selectedCategory && (
          <div className="bg-white rounded-2xl shadow-xl p-8 mt-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">💡 For Web Developers</h3>
            <div className="space-y-2 text-gray-600">
              <p className="font-semibold">To customize for different clients:</p>
              <ol className="list-decimal list-inside space-y-1 ml-4">
                <li>Update SALON_INFO with client's contact details</li>
                <li>Modify SALON_DATA pricing for their market</li>
                <li>Change bookingUrl to their booking platform</li>
                <li>Customize colors and branding as needed</li>
                <li>Set up Google App Password for email notifications</li>
                <li>Deploy and you're done!</li>
              </ol>
            </div>
          </div>
        )}
      </div>


      {/* Advanced Booking Modal */}
      <AdvancedBookingModal
        isOpen={showBookingModal}
        onClose={() => setShowBookingModal(false)}
        selectedService={selectedService}
        salonInfo={SALON_INFO}
        onBookingSuccess={handleBookingSuccess}
      />
    </div>
  );
};

export default ServiceMenu;

