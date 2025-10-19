import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Calendar, 
  ChevronDown, 
  ChevronUp,
  Star,
  Instagram,
  Globe,
  Heart,
  Scissors,
  Sparkles
} from 'lucide-react';
import { SALON_INFO, SALON_DATA, SERVICE_CATEGORIES, POPULAR_SERVICES } from '../data/salonData';

const ServiceMenu = () => {
  const [expandedCategories, setExpandedCategories] = useState({});
  const [expandedServices, setExpandedServices] = useState({});
  const [selectedService, setSelectedService] = useState(null);
  const [showBookingModal, setShowBookingModal] = useState(false);

  // Toggle category expansion
  const toggleCategory = (category) => {
    setExpandedCategories(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  // Toggle service expansion
  const toggleService = (serviceKey) => {
    setExpandedServices(prev => ({
      ...prev,
      [serviceKey]: !prev[serviceKey]
    }));
  };

  // Handle booking button click
  const handleBookingClick = (serviceName, variation) => {
    setSelectedService({ serviceName, variation });
    setShowBookingModal(true);
  };

  // Handle booking form submission
  const handleBookingSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const serviceDetails = {
      service: selectedService.serviceName,
      variation: selectedService.variation.name,
      price: selectedService.variation.price,
      duration: selectedService.variation.duration,
      clientName: formData.get('clientName'),
      clientPhone: formData.get('clientPhone'),
      clientEmail: formData.get('clientEmail'),
      preferredDate: formData.get('preferredDate'),
      notes: formData.get('notes')
    };

    // Redirect to booking platform with service details
    const bookingUrl = new URL(SALON_INFO.bookingUrl);
    bookingUrl.searchParams.set('service', serviceDetails.service);
    bookingUrl.searchParams.set('variation', serviceDetails.variation);
    bookingUrl.searchParams.set('price', serviceDetails.price);
    
    window.open(bookingUrl.toString(), '_blank');
    setShowBookingModal(false);
    setSelectedService(null);
  };

  // Format price for display
  const formatPrice = (price) => {
    return `$${price}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      {/* Header */}
      <header className="bg-white shadow-lg">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                <Scissors className="w-6 h-6 text-white" />
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
                  <Instagram className="w-4 h-4" />
                  <span>{SALON_INFO.instagram}</span>
                </a>
              )}
              {SALON_INFO.website && (
                <a href={SALON_INFO.website} 
                   className="flex items-center space-x-1 hover:text-pink-200 transition-colors">
                  <Globe className="w-4 h-4" />
                  <span>Website</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Professional Hair Services
          </h2>
          <p className="text-xl text-gray-600 mb-6">
            Expert styling with premium products and personalized care
          </p>
          <div className="flex justify-center space-x-4">
            <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-md">
              <Star className="w-5 h-5 text-yellow-500" />
              <span className="font-semibold">5.0 Rating</span>
            </div>
            <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-md">
              <Heart className="w-5 h-5 text-red-500" />
              <span className="font-semibold">1000+ Happy Clients</span>
            </div>
          </div>
        </div>

        {/* Service Categories */}
        <div className="space-y-6">
          {SERVICE_CATEGORIES.map((category) => (
            <div key={category} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <button
                onClick={() => toggleCategory(category)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-xl font-semibold text-gray-900">{category}</h3>
                {expandedCategories[category] ? (
                  <ChevronUp className="w-5 h-5 text-gray-500" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                )}
              </button>

              {expandedCategories[category] && (
                <div className="border-t border-gray-200">
                  {Object.entries(SALON_DATA[category]).map(([serviceName, serviceData]) => (
                    <div key={serviceName} className="border-b border-gray-100 last:border-b-0">
                      <button
                        onClick={() => toggleService(`${category}-${serviceName}`)}
                        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                      >
                        <div>
                          <h4 className="text-lg font-medium text-gray-900">{serviceName}</h4>
                          <p className="text-sm text-gray-600">{serviceData.description}</p>
                          <p className="text-sm text-purple-600 font-semibold">
                            Starting at {formatPrice(serviceData.starting)}
                          </p>
                        </div>
                        {expandedServices[`${category}-${serviceName}`] ? (
                          <ChevronUp className="w-5 h-5 text-gray-500" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-gray-500" />
                        )}
                      </button>

                      {expandedServices[`${category}-${serviceName}`] && (
                        <div className="px-6 pb-4 bg-gray-50">
                          <div className="grid gap-3">
                            {serviceData.variations.map((variation, index) => (
                              <div key={index} className="bg-white rounded-lg p-4 shadow-sm">
                                <div className="flex items-center justify-between">
                                  <div className="flex-1">
                                    <h5 className="font-medium text-gray-900">{variation.name}</h5>
                                    <p className="text-sm text-gray-600">{variation.duration}</p>
                                  </div>
                                  <div className="flex items-center space-x-3">
                                    <span className="text-lg font-bold text-purple-600">
                                      {formatPrice(variation.price)}
                                    </span>
                                    <button
                                      onClick={() => handleBookingClick(serviceName, variation)}
                                      className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-200 flex items-center space-x-2"
                                    >
                                      <Calendar className="w-4 h-4" />
                                      <span>Book Now</span>
                                    </button>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

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
      </main>

      {/* Booking Modal */}
      {showBookingModal && selectedService && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-900">Book Your Service</h3>
                <button
                  onClick={() => setShowBookingModal(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
              </div>

              <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                <h4 className="font-semibold text-gray-900">{selectedService.serviceName}</h4>
                <p className="text-gray-600">{selectedService.variation.name}</p>
                <p className="text-purple-600 font-semibold">
                  {formatPrice(selectedService.variation.price)} • {selectedService.variation.duration}
                </p>
              </div>

              <form onSubmit={handleBookingSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="clientName"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="clientPhone"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="clientEmail"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    name="preferredDate"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Special Requests or Notes
                  </label>
                  <textarea
                    name="notes"
                    rows="3"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Any specific requests or allergies we should know about?"
                  />
                </div>

                <div className="flex space-x-3 pt-4">
                  <button
                    type="button"
                    onClick={() => setShowBookingModal(false)}
                    className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-200"
                  >
                    Continue to Booking
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4">{SALON_INFO.name}</h4>
              <p className="text-gray-300 mb-4">{SALON_INFO.description}</p>
              <div className="flex space-x-4">
                {SALON_INFO.instagram && (
                  <a href={`https://instagram.com/${SALON_INFO.instagram.replace('@', '')}`} 
                     className="text-gray-400 hover:text-white transition-colors">
                    <Instagram className="w-5 h-5" />
                  </a>
                )}
                {SALON_INFO.website && (
                  <a href={SALON_INFO.website} 
                     className="text-gray-400 hover:text-white transition-colors">
                    <Globe className="w-5 h-5" />
                  </a>
                )}
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-300">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>{SALON_INFO.phone}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>{SALON_INFO.email}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>{SALON_INFO.address}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span>{SALON_INFO.hours}</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <a href={SALON_INFO.bookingUrl} className="block text-gray-300 hover:text-white transition-colors">
                  Book Appointment
                </a>
                <a href={`tel:${SALON_INFO.phone}`} className="block text-gray-300 hover:text-white transition-colors">
                  Call Now
                </a>
                <a href={`mailto:${SALON_INFO.email}`} className="block text-gray-300 hover:text-white transition-colors">
                  Email Us
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 {SALON_INFO.name}. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ServiceMenu;
