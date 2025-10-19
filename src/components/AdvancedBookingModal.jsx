import React, { useState } from 'react';
import { Calendar, Clock, User, Phone, Mail, CheckCircle, AlertCircle } from 'lucide-react';

const AdvancedBookingModal = ({ 
  isOpen, 
  onClose, 
  selectedService, 
  salonInfo,
  onBookingSuccess 
}) => {
  const [step, setStep] = useState(1); // 1: Form, 2: Confirmation, 3: Success
  const [isLoading, setIsLoading] = useState(false);
  const [bookingData, setBookingData] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    const formData = new FormData(e.target);
    const bookingDetails = {
      service: selectedService.serviceName,
      variation: selectedService.variation.name,
      price: selectedService.variation.price,
      duration: selectedService.variation.duration,
      clientName: formData.get('clientName'),
      clientPhone: formData.get('clientPhone'),
      clientEmail: formData.get('clientEmail'),
      preferredDate: formData.get('preferredDate'),
      preferredTime: formData.get('preferredTime'),
      notes: formData.get('notes'),
      bookingId: `BK${Date.now()}${Math.random().toString(36).substr(2, 5)}`
    };

    try {
      // Simulate API call - replace with your actual backend endpoint
      const response = await fetch('/api/book-appointment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...bookingDetails,
          salonEmail: salonInfo.email,
          salonName: salonInfo.name,
          salonPhone: salonInfo.phone
        })
      });

      if (response.ok) {
        setBookingData(bookingDetails);
        setStep(2); // Show confirmation
      } else {
        throw new Error('Failed to book appointment');
      }
    } catch (err) {
      setError('Failed to book appointment. Please try again or contact us directly.');
    } finally {
      setIsLoading(false);
    }
  };

  const confirmBooking = async () => {
    setIsLoading(true);
    try {
      // Send confirmation emails
      await fetch('/api/send-confirmation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          bookingData,
          salonInfo
        })
      });
      
      setStep(3); // Show success
      onBookingSuccess(bookingData);
    } catch (err) {
      setError('Booking confirmed but failed to send notifications. Please contact us directly.');
    } finally {
      setIsLoading(false);
    }
  };

  const resetModal = () => {
    setStep(1);
    setBookingData(null);
    setError(null);
    setIsLoading(false);
  };

  const handleClose = () => {
    resetModal();
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-gray-900">
              {step === 1 && "Book Your Service"}
              {step === 2 && "Confirm Your Booking"}
              {step === 3 && "Booking Confirmed!"}
            </h3>
            <button
              onClick={handleClose}
              className="text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
          </div>

          {/* Step 1: Booking Form */}
          {step === 1 && (
            <>
              <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                <h4 className="font-semibold text-gray-900">{selectedService.serviceName}</h4>
                <p className="text-gray-600">{selectedService.variation.name}</p>
                <p className="text-purple-600 font-semibold">
                  ${selectedService.variation.price} • {selectedService.variation.duration}
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
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
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="clientEmail"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Preferred Date *
                  </label>
                  <input
                    type="date"
                    name="preferredDate"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Preferred Time *
                  </label>
                  <select
                    name="preferredTime"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  >
                    <option value="">Select a time</option>
                    <option value="9:00 AM">9:00 AM</option>
                    <option value="9:30 AM">9:30 AM</option>
                    <option value="10:00 AM">10:00 AM</option>
                    <option value="10:30 AM">10:30 AM</option>
                    <option value="11:00 AM">11:00 AM</option>
                    <option value="11:30 AM">11:30 AM</option>
                    <option value="12:00 PM">12:00 PM</option>
                    <option value="12:30 PM">12:30 PM</option>
                    <option value="1:00 PM">1:00 PM</option>
                    <option value="1:30 PM">1:30 PM</option>
                    <option value="2:00 PM">2:00 PM</option>
                    <option value="2:30 PM">2:30 PM</option>
                    <option value="3:00 PM">3:00 PM</option>
                    <option value="3:30 PM">3:30 PM</option>
                    <option value="4:00 PM">4:00 PM</option>
                    <option value="4:30 PM">4:30 PM</option>
                    <option value="5:00 PM">5:00 PM</option>
                    <option value="5:30 PM">5:30 PM</option>
                    <option value="6:00 PM">6:00 PM</option>
                    <option value="6:30 PM">6:30 PM</option>
                    <option value="7:00 PM">7:00 PM</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Special Requests or Notes
                  </label>
                  <textarea
                    name="notes"
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Any special requests or notes for your appointment..."
                  />
                </div>

                {error && (
                  <div className="flex items-center space-x-2 text-red-600 bg-red-50 p-3 rounded-lg">
                    <AlertCircle size={16} />
                    <span className="text-sm">{error}</span>
                  </div>
                )}

                <div className="flex space-x-3 pt-4">
                  <button
                    type="button"
                    onClick={handleClose}
                    className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-200 disabled:opacity-50"
                  >
                    {isLoading ? 'Booking...' : 'Book Appointment'}
                  </button>
                </div>
              </form>
            </>
          )}

          {/* Step 2: Confirmation */}
          {step === 2 && bookingData && (
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-green-600 bg-green-50 p-4 rounded-lg">
                <CheckCircle size={20} />
                <span className="font-semibold">Appointment Details</span>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Service:</span>
                  <span className="font-semibold">{bookingData.service} - {bookingData.variation}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Price:</span>
                  <span className="font-semibold">${bookingData.price}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Duration:</span>
                  <span className="font-semibold">{bookingData.duration}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Date:</span>
                  <span className="font-semibold">{bookingData.preferredDate}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Time:</span>
                  <span className="font-semibold">{bookingData.preferredTime}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Booking ID:</span>
                  <span className="font-semibold text-purple-600">{bookingData.bookingId}</span>
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-2">What happens next?</h4>
                <ul className="text-sm text-blue-800 space-y-1">
                  <li>• You'll receive a confirmation email</li>
                  <li>• We'll contact you to confirm availability</li>
                  <li>• You'll get a reminder before your appointment</li>
                </ul>
              </div>

              <div className="flex space-x-3 pt-4">
                <button
                  onClick={() => setStep(1)}
                  className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Edit Details
                </button>
                <button
                  onClick={confirmBooking}
                  disabled={isLoading}
                  className="flex-1 bg-gradient-to-r from-green-600 to-green-700 text-white px-4 py-2 rounded-lg hover:from-green-700 hover:to-green-800 transition-all duration-200 disabled:opacity-50"
                >
                  {isLoading ? 'Confirming...' : 'Confirm Booking'}
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Success */}
          {step === 3 && (
            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <CheckCircle size={48} className="text-green-500" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900">Booking Confirmed!</h3>
              
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="text-green-800 text-sm">
                  Your appointment has been booked successfully. You'll receive confirmation emails shortly.
                </p>
              </div>

              <div className="space-y-2 text-sm text-gray-600">
                <p><strong>Booking ID:</strong> {bookingData?.bookingId}</p>
                <p><strong>Service:</strong> {bookingData?.service} - {bookingData?.variation}</p>
                <p><strong>Date & Time:</strong> {bookingData?.preferredDate} at {bookingData?.preferredTime}</p>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-2">Important:</h4>
                <ul className="text-sm text-blue-800 space-y-1 text-left">
                  <li>• Arrive 10 minutes early</li>
                  <li>• Bring a valid ID</li>
                  <li>• Cancel 24 hours in advance if needed</li>
                  <li>• Contact us at {salonInfo.phone} for changes</li>
                </ul>
              </div>

              <button
                onClick={handleClose}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-200"
              >
                Close
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdvancedBookingModal;
