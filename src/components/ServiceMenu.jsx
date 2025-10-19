import React, { useState } from 'react';
import { ChevronDown, ChevronRight, Clock } from 'lucide-react';

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">
            Service Menu
          </h1>
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
                        <button
                          onClick={() => toggleVariations(variationKey)}
                          className="w-full mb-4 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold hover:opacity-90 transition-opacity"
                        >
                          {showVariations ? 'Hide' : 'Show'} All Variations ({data.variations.length})
                        </button>

                        {showVariations && (
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {data.variations.map((variation, idx) => (
                              <div
                                key={idx}
                                className="border-2 border-purple-200 rounded-lg p-4 hover:bg-purple-50 transition-colors"
                              >
                                <div className="flex justify-between items-start mb-2">
                                  <h4 className="font-semibold text-gray-800 flex-1">
                                    {variation.name}
                                  </h4>
                                  <span className="text-purple-600 font-bold text-lg ml-2">
                                    ${variation.price}
                                  </span>
                                </div>
                                <div className="flex items-center text-sm text-gray-600">
                                  <Clock size={14} className="mr-1" />
                                  {variation.duration}
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {!selectedCategory && (
          <div className="bg-white rounded-2xl shadow-xl p-8 mt-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">💡 For Web Developers</h3>
            <div className="space-y-2 text-gray-600">
              <p className="font-semibold">To customize prices for different clients:</p>
              <ol className="list-decimal list-inside space-y-1 ml-4">
                <li>Find the SALON_DATA object at the top of the code</li>
                <li>Modify prices in the variations array for each style</li>
                <li>Update the starting price for each subcategory</li>
                <li>Add or remove variations as needed</li>
                <li>Copy the entire code and integrate into your client websites</li>
              </ol>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ServiceMenu;

