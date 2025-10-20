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
        { name: "Shoulder Length Large", duration: "3-4 hours", price: 180 },
        { name: "Shoulder Length Medium", duration: "4-5 hours", price: 200 },
        { name: "Waist Length Large", duration: "4-5 hours", price: 200 },
        { name: "Thigh Length Large", duration: "5-6 hours", price: 200 },
        { name: "Mid Back Length Large", duration: "4-5 hours", price: 220 },
        { name: "Shoulder Length Small", duration: "5-6 hours", price: 230 },
        { name: "Mid Back Length Medium", duration: "5-6 hours", price: 240 },
        { name: "Mid Back Length Small", duration: "6-7 hours", price: 260 },
        { name: "Waist Length Medium", duration: "6-7 hours", price: 280 },
        { name: "Waist Length Small", duration: "7-8 hours", price: 300 },
        { name: "Thigh Length Medium", duration: "7-8 hours", price: 320 },
        { name: "Thigh Length Small", duration: "8-9 hours", price: 340 }
      ]
    },
    "Bohemian Box Braids": {
      starting: 200,
      variations: [
        { name: "Shoulder Length Large", duration: "4-5 hours", price: 200 },
        { name: "Shoulder Length Medium", duration: "5-6 hours", price: 230 },
        { name: "Mid Back Length Large", duration: "5-6 hours", price: 250 },
        { name: "Shoulder Length Small", duration: "6-7 hours", price: 250 },
        { name: "Mid Back Length Medium", duration: "6-7 hours", price: 260 },
        { name: "Waist Length Large", duration: "6-7 hours", price: 270 },
        { name: "Mid Back Length Small", duration: "7-8 hours", price: 290 },
        { name: "Waist Length Medium", duration: "7-8 hours", price: 300 },
        { name: "Thigh Length Large", duration: "7-8 hours", price: 300 },
        { name: "Waist Length Small", duration: "8-9 hours", price: 320 },
        { name: "Thigh Length Medium", duration: "8-9 hours", price: 340 },
        { name: "Thigh Length Small", duration: "9-10 hours", price: 360 }
      ]
    },
    "Micro Braids": {
      starting: 300,
      variations: [
        { name: "Shoulder Length Large", duration: "6-8 hours", price: 300 },
        { name: "Mid Back Length Large", duration: "7-9 hours", price: 320 },
        { name: "Shoulder Length Medium", duration: "8-10 hours", price: 340 },
        { name: "Shoulder Length Small", duration: "10-12 hours", price: 360 },
        { name: "Mid Back Length Medium", duration: "9-11 hours", price: 360 },
        { name: "Mid Back Length Small", duration: "11-13 hours", price: 380 },
        { name: "Waist Length Large", duration: "10-12 hours", price: 420 },
        { name: "Waist Length Medium", duration: "12-14 hours", price: 460 },
        { name: "Waist Length Small", duration: "13-15 hours", price: 470 },
        { name: "Thigh Length Large", duration: "12-14 hours", price: 600 },
        { name: "Thigh Length Medium", duration: "14-16 hours", price: 650 },
        { name: "Thigh Length Small", duration: "15-18 hours", price: 680 }
      ]
    },
    "Bob Box Braids": {
      starting: 200,
      variations: [
        { name: "Shoulder Length Large", duration: "2-3 hours", price: 200 },
        { name: "Shoulder Length Medium", duration: "3-4 hours", price: 230 },
        { name: "Shoulder Length Small", duration: "4-5 hours", price: 250 }
      ]
    },
    "Jumbo Box Braids": {
      starting: 180,
      variations: [
        { name: "Shoulder Length Jumbo", duration: "2-3 hours", price: 180 },
        { name: "Mid Back Length Jumbo", duration: "3-4 hours", price: 200 },
        { name: "Thigh Length Jumbo", duration: "4-5 hours", price: 220 }
      ]
    },
    "Feed In Braids": {
      starting: 50,
      variations: [
        { name: "2 Braids", duration: "1-2 hours", price: 50 },
        { name: "3 Braids", duration: "1.5-2.5 hours", price: 60 },
        { name: "4 Braids", duration: "2-3 hours", price: 70 },
        { name: "6 Braids", duration: "3-4 hours", price: 85 },
        { name: "8 Braids", duration: "4-5 hours", price: 100 },
        { name: "10 Braids", duration: "5-6 hours", price: 150 }
      ]
    },
    "Fulani Braids": {
      starting: 125,
      variations: [
        { name: "Shoulder Length Large", duration: "3-4 hours", price: 125 },
        { name: "Shoulder Length Medium", duration: "4-5 hours", price: 135 },
        { name: "Shoulder Length Small", duration: "5-6 hours", price: 145 },
        { name: "Mid Back Length Large", duration: "4-5 hours", price: 150 },
        { name: "Mid Back Length Medium", duration: "5-6 hours", price: 165 },
        { name: "Mid Back Length Small", duration: "6-7 hours", price: 175 },
        { name: "Waist Length Large", duration: "5-6 hours", price: 225 },
        { name: "Mid Back Length Medium", duration: "6-7 hours", price: 245 },
        { name: "Mid Back Length Small", duration: "7-8 hours", price: 275 },
        { name: "Thigh Length Large", duration: "6-7 hours", price: 285 },
        { name: "Thigh Length Medium", duration: "7-8 hours", price: 300 },
        { name: "Thigh Length Large", duration: "8-9 hours", price: 400 }
      ]
    },
    "Lemonade Braids": {
      starting: 100,
      variations: [
        { name: "Shoulder Length Large", duration: "3-4 hours", price: 100 },
        { name: "Shoulder Length Medium", duration: "3-4 hours", price: 120 },
        { name: "Shoulder Length Small", duration: "3-4 hours", price: 150 },
        { name: "Mid Back Length Large", duration: "3-4 hours", price: 150 },
        { name: "Mid Back Length Medium", duration: "3-4 hours", price: 180 },
        { name: "Mid Back Length Small", duration: "3-4 hours", price: 200 },
        { name: "Waist Length Large", duration: "3-4 hours", price: 200 },
        { name: "Waist Length Medium", duration: "3-4 hours", price: 240 },
        { name: "Thigh Length Large", duration: "3-4 hours", price: 250 },
        { name: "Waist Length Small", duration: "3-4 hours", price: 260 },
        { name: "Thigh Length Medium", duration: "3-4 hours", price: 280 },
        { name: "Thigh Length Small", duration: "3-4 hours", price: 300 }
      ]
    },
    "Bora Bora Braids": {
      starting: 200,
      variations: [
        { name: "Shoulder Length Large", duration: "3-4 hours", price: 200 },
        { name: "Shoulder Length Medium", duration: "3-4 hours", price: 230 },
        { name: "Mid Back Length Large", duration: "3-4 hours", price: 240 },
        { name: "Shoulder Length Small", duration: "3-4 hours", price: 260 },
        { name: "Mid Back Length Medium", duration: "3-4 hours", price: 270 },
        { name: "Waist Length Large", duration: "3-4 hours", price: 270 },
        { name: "Mid Back Length Small", duration: "3-4 hours", price: 290 },
        { name: "Thigh Length Large", duration: "3-4 hours", price: 290 },
        { name: "Waist Length Medium", duration: "3-4 hours", price: 300 },
        { name: "Waist Length Small", duration: "3-4 hours", price: 320 },
        { name: "Thigh Length Medium", duration: "3-4 hours", price: 320 },
        { name: "Thigh Length Small", duration: "3-4 hours", price: 350 }
      ]
    }
  },
  "Twists": {
    "Havana Twist": {
      starting: 200,
      variations: [
        { name: "Shoulder Length Large", duration: "3-4 hours", price: 200 },
        { name: "Shoulder Length Medium", duration: "3-4 hours", price: 220 },
        { name: "Waist Length Medium", duration: "3-4 hours", price: 225 },
        { name: "Mid Back Length Large", duration: "3-4 hours", price: 230 },
        { name: "Shoulder Length Small", duration: "3-4 hours", price: 250 },
        { name: "Mid Back Length Medium", duration: "3-4 hours", price: 260 },
        { name: "Mid Back Length Small", duration: "3-4 hours", price: 275 },
        { name: "Waist Length Small", duration: "3-4 hours", price: 350 },
        { name: "Thigh Length Large", duration: "3-4 hours", price: 380 },
        { name: "Thigh Length Medium", duration: "3-4 hours", price: 400 },
        { name: "Thigh Length Small", duration: "3-4 hours", price: 450 },
        { name: "Waist Length Large", duration: "3-4 hours", price: 500 }
      ]
    },
    "Senegalese Twists": {
      starting: 300,
      variations: [
        { name: "Shoulder Length Medium", duration: "3-4 hours", price: 300 },
        { name: "Shoulder Length Small", duration: "3-4 hours", price: 350 },
        { name: "Mid Back Length Medium", duration: "3-4 hours", price: 350 },
        { name: "Mid Back Length Small", duration: "3-4 hours", price: 380 },
        { name: "Waist Length Medium", duration: "3-4 hours", price: 400 },
        { name: "Waist Length Small", duration: "3-4 hours", price: 450 },
        { name: "Thigh Length Medium", duration: "3-4 hours", price: 475 },
        { name: "Thigh Length Small", duration: "3-4 hours", price: 500 }
      ]
    },
    "Passion Twist": {
      starting: 175,
      variations: [
        { name: "Shoulder Length Large", duration: "3-4 hours", price: 175 },
        { name: "Shoulder Length Medium", duration: "3-4 hours", price: 200 },
        { name: "Mid Back Length Large", duration: "3-4 hours", price: 245 },
        { name: "Shoulder Length Small", duration: "3-4 hours", price: 250 },
        { name: "Mid Back Length Medium", duration: "3-4 hours", price: 260 },
        { name: "Mid Back Length Small", duration: "3-4 hours", price: 275 },
        { name: "Waist Length Large", duration: "3-4 hours", price: 325 },
        { name: "Waist Length Medium", duration: "3-4 hours", price: 350 },
        { name: "Waist Length Small", duration: "3-4 hours", price: 375 },
        { name: "Thigh Length Large", duration: "3-4 hours", price: 400 },
        { name: "Thigh Length Medium", duration: "3-4 hours", price: 445 },
        { name: "Thigh Length Small", duration: "3-4 hours", price: 475 }
      ]
    },
    "Kinky Twists": {
      starting: 200,
      variations: [
        { name: "Shoulder Length Medium", duration: "3-4 hours", price: 200 },
        { name: "Mid Back Length Medium", duration: "3-4 hours", price: 260 },
        { name: "Shoulder Length Small", duration: "3-4 hours", price: 275 },
        { name: "Waist Length Medium", duration: "3-4 hours", price: 350 },
        { name: "Mid Back Length Small", duration: "3-4 hours", price: 375 },
        { name: "Waist Length Small", duration: "3-4 hours", price: 375 },
        { name: "Thigh Length Medium", duration: "3-4 hours", price: 400 },
        { name: "Thigh Length Small", duration: "3-4 hours", price: 450 }
      ]
    },
    "Marley Twists": {
      starting: 200,
      variations: [
        { name: "Shoulder Length Large", duration: "3-4 hours", price: 200 },
        { name: "Shoulder Length Medium", duration: "3-4 hours", price: 220 },
        { name: "Mid Back Length Large", duration: "3-4 hours", price: 230 },
        { name: "Shoulder Length Small", duration: "3-4 hours", price: 250 },
        { name: "Mid Back Length Medium", duration: "3-4 hours", price: 260 },
        { name: "Mid Back Length Small", duration: "3-4 hours", price: 275 },
        { name: "Waist Length Large", duration: "3-4 hours", price: 300 },
        { name: "Waist Length Medium", duration: "3-4 hours", price: 325 },
        { name: "Waist Length Small", duration: "3-4 hours", price: 350 },
        { name: "Thigh Length Large", duration: "3-4 hours", price: 380 },
        { name: "Thigh Length Medium", duration: "3-4 hours", price: 425 },
        { name: "Thigh Length Small", duration: "3-4 hours", price: 450 }
      ]
    },
    "Nubian Twist": {
      starting: 225,
      variations: [
        { name: "Shoulder Length Large", duration: "3-4 hours", price: 225 },
        { name: "Shoulder Length Medium", duration: "3-4 hours", price: 225 },
        { name: "Shoulder Length Small", duration: "3-4 hours", price: 245 },
        { name: "Mid Back Length Large", duration: "3-4 hours", price: 250 },
        { name: "Mid Back Length Medium", duration: "3-4 hours", price: 285 },
        { name: "Mid Back Length Small", duration: "3-4 hours", price: 300 },
        { name: "Waist Length Large", duration: "3-4 hours", price: 345 },
        { name: "Waist Length Medium", duration: "3-4 hours", price: 360 },
        { name: "Waist Length Small", duration: "3-4 hours", price: 380 },
        { name: "Thigh Length Large", duration: "3-4 hours", price: 400 },
        { name: "Thigh Length Medium", duration: "3-4 hours", price: 425 },
        { name: "Thigh Length Small", duration: "3-4 hours", price: 450 }
      ]
    },
    "Comb Twist": {
      starting: 75,
      variations: [
        { name: "Standard", duration: "3-4 hours", price: 75 }
      ]
    },
    "Two Strand Twist": {
      starting: 100,
      variations: [
        { name: "Standard", duration: "3-4 hours", price: 100 }
      ]
    }
  },
  "Faux Locs": {
    "Goddess Locs": {
      starting: 200,
      variations: [
        { name: "Shoulder Length Large", duration: "3-4 hours", price: 200 },
        { name: "Shoulder Length Medium", duration: "3-4 hours", price: 230 },
        { name: "Mid Back Length Large", duration: "3-4 hours", price: 245 },
        { name: "Shoulder Length Small", duration: "3-4 hours", price: 250 },
        { name: "Mid Back Length Medium", duration: "3-4 hours", price: 260 },
        { name: "Mid Back Length Small", duration: "3-4 hours", price: 275 },
        { name: "Waist Length Small", duration: "3-4 hours", price: 275 },
        { name: "Waist Length Large", duration: "3-4 hours", price: 325 },
        { name: "Waist Length Medium", duration: "3-4 hours", price: 350 },
        { name: "Thigh Length Large", duration: "3-4 hours", price: 400 },
        { name: "Thigh Length Medium", duration: "3-4 hours", price: 430 },
        { name: "Thigh Length Small", duration: "3-4 hours", price: 475 }
      ]
    },
    "Butterfly/Distressed Locs": {
      starting: 200,
      variations: [
        { name: "Shoulder Length Large", duration: "3-4 hours", price: 200 },
        { name: "Shoulder Length Medium", duration: "3-4 hours", price: 230 },
        { name: "Shoulder Length Small", duration: "3-4 hours", price: 250 },
        { name: "Mid Back Length Large", duration: "3-4 hours", price: 250 },
        { name: "Mid Back Length Medium", duration: "3-4 hours", price: 285 },
        { name: "Waist Length Small", duration: "3-4 hours", price: 300 },
        { name: "Mid Back Length Small", duration: "3-4 hours", price: 330 },
        { name: "Waist Length Large", duration: "3-4 hours", price: 345 },
        { name: "Waist Length Medium", duration: "3-4 hours", price: 360 },
        { name: "Thigh Length Large", duration: "3-4 hours", price: 440 },
        { name: "Thigh Length Medium", duration: "3-4 hours", price: 460 },
        { name: "Thigh Length Small", duration: "3-4 hours", price: 475 }
      ]
    },
    "Bohemian Locs": {
      starting: 225,
      variations: [
        { name: "Shoulder Length Large", duration: "3-4 hours", price: 225 },
        { name: "Shoulder Length Medium", duration: "3-4 hours", price: 250 },
        { name: "Mid Back Length Large", duration: "3-4 hours", price: 265 },
        { name: "Shoulder Length Small", duration: "3-4 hours", price: 275 },
        { name: "Mid Back Length Medium", duration: "3-4 hours", price: 285 },
        { name: "Mid Back Length Small", duration: "3-4 hours", price: 300 },
        { name: "Waist Length Large", duration: "3-4 hours", price: 300 },
        { name: "Waist Length Medium", duration: "3-4 hours", price: 325 },
        { name: "Waist Length Small", duration: "3-4 hours", price: 350 },
        { name: "Thigh Length Small", duration: "3-4 hours", price: 350 },
        { name: "Thigh Length Large", duration: "3-4 hours", price: 400 },
        { name: "Thigh Length Medium", duration: "3-4 hours", price: 425 }
      ]
    }
  },
  "Crotchets": {
    "Crochet Box Braids": {
      starting: 100,
      variations: [
        { name: "Small Box Braids", duration: "2-3 hrs", price: 100 },
        { name: "Medium Box Braids", duration: "3-4 hrs", price: 130 },
        { name: "Large Box Braids", duration: "2.5-3.5 hrs", price: 120 },
        { name: "Jumbo Box Braids", duration: "2-3 hrs", price: 110 }
      ]
    },
    "Crochet Twists": {
      starting: 120,
      variations: [
        { name: "Havana Twists", duration: "3-4 hrs", price: 120 },
        { name: "Senegalese Twists", duration: "3.5-4.5 hrs", price: 140 },
        { name: "Marley Twists", duration: "3-4 hrs", price: 130 },
        { name: "Passion Twists", duration: "3.5-4.5 hrs", price: 150 }
      ]
    },
    "Crochet Faux Locs": {
      starting: 140,
      variations: [
        { name: "Soft Locs", duration: "3-4 hrs", price: 140 },
        { name: "Goddess Locs", duration: "4-5 hrs", price: 170 },
        { name: "Butterfly Locs", duration: "4-5 hrs", price: 180 },
        { name: "Boho Locs", duration: "3.5-4.5 hrs", price: 160 }
      ]
    },
    "Crochet Curls & Waves": {
      starting: 110,
      variations: [
        { name: "Water Waves", duration: "2.5-3.5 hrs", price: 110 },
        { name: "Deep Curls", duration: "3-4 hrs", price: 130 },
        { name: "Beachy Waves", duration: "2.5-3.5 hrs", price: 120 },
        { name: "Tight Ringlets", duration: "3-4 hrs", price: 140 }
      ]
    },
    "Crochet Bobs & Short Styles": {
      starting: 90,
      variations: [
        { name: "Crochet Bob", duration: "2-3 hrs", price: 90 },
        { name: "Curly Pixie", duration: "2.5-3.5 hrs", price: 100 },
        { name: "Textured Bob", duration: "2-3 hrs", price: 95 },
        { name: "Short Curly Style", duration: "2.5-3.5 hrs", price: 105 }
      ]
    },
    "Crochet Updos & Ponytails": {
      starting: 130,
      variations: [
        { name: "High Ponytail", duration: "2.5-3.5 hrs", price: 130 },
        { name: "Crochet Bun", duration: "2-3 hrs", price: 120 },
        { name: "Half-Up Half-Down", duration: "3-4 hrs", price: 150 },
        { name: "Crochet Updo", duration: "3.5-4.5 hrs", price: 170 }
      ]
    },
    "Crochet Straight Styles": {
      starting: 100,
      variations: [
        { name: "Straight Crochet", duration: "2-3 hrs", price: 100 },
        { name: "Silky Straight", duration: "2.5-3.5 hrs", price: 120 },
        { name: "Blunt Cut Straight", duration: "2-3 hrs", price: 110 },
        { name: "Layered Straight", duration: "2.5-3.5 hrs", price: 130 }
      ]
    },
    "Specialty Crochet Styles": {
      starting: 150,
      variations: [
        { name: "Knotless Crochet", duration: "4-5 hrs", price: 150 },
        { name: "Crochet with Highlights", duration: "4-6 hrs", price: 200 },
        { name: "Ombre Crochet", duration: "4-6 hrs", price: 220 },
        { name: "Colorful Crochet", duration: "4-6 hrs", price: 250 }
      ]
    },
    "Crochet with Pre Looped Hair": {
      starting: 160,
      variations: [
        { name: "Any Length Large", duration: "3-4 hours", price: 160 },
        { name: "Any Length Medium/Small", duration: "3-4 hours", price: 185 }
      ]
    }
  },
  "Dreads": {
    "Starter Locs": {
      starting: 90,
      variations: [
        { name: "Standard", duration: "3-4 hours", price: 90 }
      ]
    },
    "Loc Takedown": {
      starting: 65,
      variations: [
        { name: "Standard", duration: "3-4 hours", price: 65 }
      ]
    }
  },
  "Kid Styles": {
    "Kid's Box Braids": {
      starting: 80,
      variations: [
        { name: "Shoulder Length Large", duration: "3-4 hours", price: 80 },
        { name: "Shoulder Length Medium", duration: "3-4 hours", price: 100 },
        { name: "Shoulder Length Small", duration: "3-4 hours", price: 125 },
        { name: "Mid Back Length Large", duration: "3-4 hours", price: 125 },
        { name: "Mid Back Length Medium", duration: "3-4 hours", price: 140 },
        { name: "Mid Back Length Small", duration: "3-4 hours", price: 150 }
      ]
    },
    "Kid's Ponytail Buns": {
      starting: 75,
      variations: [
        { name: "Shoulder Length Large", duration: "3-4 hours", price: 75 },
        { name: "Shoulder Length Medium", duration: "3-4 hours", price: 140 },
        { name: "Shoulder Length Small", duration: "3-4 hours", price: 150 }
      ]
    }
  },
  "Cornrows": {
    "Straight Back Cornrows": {
      starting: 50,
      variations: [
        { name: "Basic (6-8 braids)", duration: "1-2 hrs", price: 50 },
        { name: "Medium (10-12 braids)", duration: "2-3 hrs", price: 75 },
        { name: "Detailed (14-16 braids)", duration: "3-4 hrs", price: 100 },
        { name: "Intricate (18+ braids)", duration: "4-5 hrs", price: 125 }
      ]
    },
    "Ghana Braids": {
      starting: 80,
      variations: [
        { name: "Short Length (8-10 inches)", duration: "2-3 hrs", price: 80 },
        { name: "Medium Length (12-14 inches)", duration: "3-4 hrs", price: 100 },
        { name: "Long Length (16-18 inches)", duration: "4-5 hrs", price: 120 },
        { name: "Extra Long (20+ inches)", duration: "5-6 hrs", price: 150 }
      ]
    },
    "Stitch Braids": {
      starting: 90,
      variations: [
        { name: "Basic Stitch (6-8 braids)", duration: "2-3 hrs", price: 90 },
        { name: "Medium Stitch (10-12 braids)", duration: "3-4 hrs", price: 110 },
        { name: "Detailed Stitch (14-16 braids)", duration: "4-5 hrs", price: 130 },
        { name: "Precision Stitch (18+ braids)", duration: "5-6 hrs", price: 150 }
      ]
    },
    "Tribal Cornrows": {
      starting: 120,
      variations: [
        { name: "Simple Tribal Pattern", duration: "3-4 hrs", price: 120 },
        { name: "Medium Tribal Design", duration: "4-5 hrs", price: 150 },
        { name: "Complex Tribal Pattern", duration: "5-6 hrs", price: 180 },
        { name: "Intricate Tribal Art", duration: "6-8 hrs", price: 220 }
      ]
    },
    "Freestyle Cornrows": {
      starting: 100,
      variations: [
        { name: "Basic Freestyle", duration: "2-3 hrs", price: 100 },
        { name: "Creative Zigzag", duration: "3-4 hrs", price: 125 },
        { name: "Complex Freestyle", duration: "4-5 hrs", price: 150 },
        { name: "Artistic Freestyle", duration: "5-6 hrs", price: 180 }
      ]
    },
    "Curved/Circular Cornrows": {
      starting: 110,
      variations: [
        { name: "Simple Curved", duration: "3-4 hrs", price: 110 },
        { name: "Circular Swirl", duration: "4-5 hrs", price: 140 },
        { name: "Complex Curved Pattern", duration: "5-6 hrs", price: 170 },
        { name: "Intricate Swirl Design", duration: "6-7 hrs", price: 200 }
      ]
    },
    "Side-Swept Cornrows": {
      starting: 85,
      variations: [
        { name: "Basic Side-Swept", duration: "2-3 hrs", price: 85 },
        { name: "Medium Side-Swept", duration: "3-4 hrs", price: 110 },
        { name: "Detailed Side-Swept", duration: "4-5 hrs", price: 135 },
        { name: "Lemonade Style", duration: "5-6 hrs", price: 160 }
      ]
    },
    "Criss-Cross Cornrows": {
      starting: 95,
      variations: [
        { name: "Simple Criss-Cross", duration: "3-4 hrs", price: 95 },
        { name: "Medium Criss-Cross", duration: "4-5 hrs", price: 120 },
        { name: "Complex Criss-Cross", duration: "5-6 hrs", price: 145 },
        { name: "Intricate Criss-Cross", duration: "6-7 hrs", price: 170 }
      ]
    },
    "French Braids": {
      starting: 40,
      variations: [
        { name: "Single French Braid", duration: "1-1.5 hrs", price: 40 },
        { name: "Double French Braids", duration: "1.5-2 hrs", price: 60 },
        { name: "French Braid with Extensions", duration: "2-2.5 hrs", price: 80 },
        { name: "Exotic French Braids (2)", duration: "1.5-2 hrs", price: 125 }
      ]
    },
    "Dutch Braids": {
      starting: 45,
      variations: [
        { name: "Single Dutch Braid", duration: "1-1.5 hrs", price: 45 },
        { name: "Double Dutch Braids", duration: "1.5-2 hrs", price: 65 },
        { name: "Dutch Braid with Extensions", duration: "2-2.5 hrs", price: 85 },
        { name: "Feed-In Dutch Braids", duration: "2-3 hrs", price: 100 }
      ]
    },
    "French/Dutch Combinations": {
      starting: 70,
      variations: [
        { name: "French + Dutch Combo", duration: "2-2.5 hrs", price: 70 },
        { name: "Multiple French Braids", duration: "2-3 hrs", price: 90 },
        { name: "Multiple Dutch Braids", duration: "2-3 hrs", price: 95 },
        { name: "Crown French Braid", duration: "1.5-2 hrs", price: 75 },
        { name: "Crown Dutch Braid", duration: "1.5-2 hrs", price: 80 }
      ]
    },
    "Cornrow Updo": {
      starting: 80,
      variations: [
        { name: "Shoulder Length Large", duration: "3-4 hours", price: 80 },
        { name: "Shoulder Length Medium", duration: "3-4 hours", price: 95 },
        { name: "Shoulder Length Small", duration: "3-4 hours", price: 100 },
        { name: "Mid Back Length Large", duration: "3-4 hours", price: 100 },
        { name: "Mid Back Length Medium", duration: "3-4 hours", price: 110 },
        { name: "Mid Back Length Small", duration: "3-4 hours", price: 125 },
        { name: "Waist Length Large", duration: "3-4 hours", price: 130 },
        { name: "Waist Length Medium", duration: "3-4 hours", price: 140 },
        { name: "Waist Length Small", duration: "3-4 hours", price: 150 },
        { name: "Thigh Length Large", duration: "3-4 hours", price: 165 },
        { name: "Thigh Length Medium", duration: "3-4 hours", price: 170 },
        { name: "Thigh Length Small", duration: "3-4 hours", price: 185 }
      ]
    }
  },
  "Bantu Knots": {
    "Classic Bantu Knots": {
      starting: 60,
      variations: [
        { name: "Small Knots (8-10)", duration: "2-3 hrs", price: 60 },
        { name: "Medium Knots (12-15)", duration: "3-4 hrs", price: 80 },
        { name: "Large Knots (6-8)", duration: "2.5-3.5 hrs", price: 70 },
        { name: "Jumbo Knots (4-6)", duration: "2-3 hrs", price: 65 }
      ]
    },
    "Bantu Knots with Extensions": {
      starting: 90,
      variations: [
        { name: "Small Knots with Weave", duration: "3-4 hrs", price: 90 },
        { name: "Medium Knots with Weave", duration: "4-5 hrs", price: 110 },
        { name: "Large Knots with Weave", duration: "3.5-4.5 hrs", price: 100 },
        { name: "Braided Knots with Extensions", duration: "4-6 hrs", price: 130 }
      ]
    },
    "Creative Bantu Knots": {
      starting: 85,
      variations: [
        { name: "Irregular Parting Design", duration: "3-4 hrs", price: 85 },
        { name: "Heart-Shaped Parting", duration: "3.5-4.5 hrs", price: 95 },
        { name: "Zig-Zag Parting Pattern", duration: "4-5 hrs", price: 105 },
        { name: "Geometric Parting", duration: "4-5 hrs", price: 110 }
      ]
    },
    "Bantu Knots with Braids": {
      starting: 100,
      variations: [
        { name: "Knots with Side Braids", duration: "3-4 hrs", price: 100 },
        { name: "Knots with Cornrows", duration: "4-5 hrs", price: 120 },
        { name: "Knots with Flat Twists", duration: "3.5-4.5 hrs", price: 110 },
        { name: "Half-Up Half-Down Style", duration: "4-5 hrs", price: 125 }
      ]
    },
    "Bantu Knots with Beads/Decorations": {
      starting: 95,
      variations: [
        { name: "Knots with Beads", duration: "3-4 hrs", price: 95 },
        { name: "Knots with Golden Details", duration: "3.5-4.5 hrs", price: 110 },
        { name: "Knots with Neon Accents", duration: "4-5 hrs", price: 120 },
        { name: "Knots with Decorative Accessories", duration: "4-5 hrs", price: 125 }
      ]
    },
    "Specialty Bantu Knots": {
      starting: 80,
      variations: [
        { name: "Twist Out Knots", duration: "3-4 hrs", price: 80 },
        { name: "Dreadlock Knots", duration: "4-5 hrs", price: 100 },
        { name: "Chunky Knot Locs", duration: "3.5-4.5 hrs", price: 90 },
        { name: "Messy Knot Style", duration: "2.5-3.5 hrs", price: 75 }
      ]
    },
    "Bantu Knots for Short Hair": {
      starting: 55,
      variations: [
        { name: "Micro Knots", duration: "2-3 hrs", price: 55 },
        { name: "Tapered Knots", duration: "2.5-3.5 hrs", price: 65 },
        { name: "Side Knots", duration: "2-3 hrs", price: 60 },
        { name: "Crown Knots", duration: "2.5-3.5 hrs", price: 70 }
      ]
    }
  },

  "Weaves/Extensions": {
    "Sew-In Weaves": {
      starting: 150,
      variations: [
        { name: "Seamless Sew-In with Leave Out", duration: "2-3.5 hrs", price: 150 },
        { name: "Closure Sew-In (4x4)", duration: "2.5-4 hrs", price: 165 },
        { name: "Closure Sew-In (5x5)", duration: "2.5-4 hrs", price: 175 },
        { name: "Frontal Sew-In (13x4)", duration: "3-4.5 hrs", price: 200 },
        { name: "Frontal Sew-In (13x6)", duration: "3-4.5 hrs", price: 215 },
        { name: "360 Frontal", duration: "3.5-5 hrs", price: 250 },
        { name: "Extra Bundle Addition", duration: "30 min - 1 hr", price: 25 }
      ]
    },
    "Quick Weaves": {
      starting: 130,
      variations: [
        { name: "Traditional Quick Weave", duration: "1.5-3 hrs", price: 130 },
        { name: "Quick Weave + 6-8 Braids", duration: "2-3.5 hrs", price: 145 },
        { name: "2 Braids w/ Quick Weave", duration: "1.5-2.5 hrs", price: 135 },
        { name: "Braid Down Quick Weave (10-12 braids)", duration: "2-3.5 hrs", price: 155 },
        { name: "Natural Luxury Quick Weave", duration: "2-3.5 hrs", price: 165 },
        { name: "Flip Over Quick Weave", duration: "2-3 hrs", price: 150 },
        { name: "Glueless HD Closure Quick Weave (2x6)", duration: "2-3.5 hrs", price: 165 },
        { name: "Quick Weave with Leave Out", duration: "1.5-3 hrs", price: 140 },
        { name: "Full Closure Quick Weave", duration: "2-3.5 hrs", price: 165 }
      ]
    },
    "Ponytails": {
      starting: 75,
      variations: [
        { name: "Braid Pony (High or Mid)", duration: "1-2.5 hrs", price: 75 },
        { name: "Middle Part Ponytail", duration: "1-2.5 hrs", price: 80 },
        { name: "Low Swoop Ponytail", duration: "1.5-3 hrs", price: 85 },
        { name: "Sleek Pony (Mid/High)", duration: "1.5-3 hrs", price: 90 },
        { name: "Half Up Half Down", duration: "2-3 hrs", price: 95 },
        { name: "Knot Bun (High or Low)", duration: "1-2.5 hrs", price: 85 }
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

