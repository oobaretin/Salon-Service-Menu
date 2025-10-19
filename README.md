# 🚀 Salon Service Menu - Complete Project Setup Guide

## 📁 Project Structure

```
salon-service-menu/
├── src/
│   ├── components/
│   │   └── ServiceMenu.jsx          # Main component
│   ├── data/
│   │   └── salonData.js              # Pricing data
│   ├── App.jsx                       # Main app file
│   └── index.css                     # Tailwind styles
├── public/
├── package.json
├── tailwind.config.js
└── README.md
```

---

## 🛠️ Step-by-Step Setup

### 1. Create React Project (Choose One Method)

#### Option A: Using Vite (Recommended - Faster)
```bash
npm create vite@latest salon-service-menu -- --template react
cd salon-service-menu
npm install
```

#### Option B: Using Create React App
```bash
npx create-react-app salon-service-menu
cd salon-service-menu
```

---

### 2. Install Dependencies

```bash
# Install Tailwind CSS
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# Install Lucide React (for icons)
npm install lucide-react
```

---

### 3. Configure Tailwind CSS

**tailwind.config.js:**
```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

**src/index.css:**
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

---

### 4. Create Project Files

#### Create `src/data/salonData.js`
- Copy the entire code from the **"salonData.js - Separate Data File"** artifact
- Customize `SALON_INFO` with your client's information

#### Create `src/components/ServiceMenu.jsx`
- Copy the entire code from the **"ServiceMenu.jsx - With Booking Integration"** artifact

#### Update `src/App.jsx`
```javascript
import ServiceMenu from './components/ServiceMenu';

function App() {
  return (
    <div className="App">
      <ServiceMenu />
    </div>
  );
}

export default App;
```

---

### 5. Run the Project

```bash
npm run dev
```

Your app should now be running at `http://localhost:5173` (Vite) or `http://localhost:3000` (CRA)

---

## 🎨 Customization Guide

### For Each New Client:

#### 1. **Update Pricing Data** (`src/data/salonData.js`)

```javascript
// Change prices for a specific service
"Box Braids": {
  starting: 200,  // ← Change starting price
  variations: [
    { name: "Shoulder Length Large", duration: "45 min", price: 200 },  // ← Change individual prices
    // ... more variations
  ]
}
```

#### 2. **Update Salon Information** (`src/data/salonData.js`)

```javascript
export const SALON_INFO = {
  name: "Your Client's Salon Name",
  phone: "(555) 123-4567",
  email: "booking@clientsalon.com",
  address: "456 Street Name, City, State ZIP",
  bookingUrl: "https://calendly.com/yourclient", // ← Important!
  // ... update all fields
};
```

#### 3. **Change Color Scheme** (Optional)

In `ServiceMenu.jsx`, search and replace colors:
- `purple-600` → `blue-600` (or any Tailwind color)
- `pink-600` → `indigo-600`

---

## 🔗 Booking Platform Integration

### Supported Platforms:

1. **Calendly**
   ```javascript
   bookingUrl: "https://calendly.com/yourusername"
   ```

2. **Square Appointments**
   ```javascript
   bookingUrl: "https://square.site/book/YOURCODE/yourbusiness"
   ```

3. **Acuity Scheduling**
   ```javascript
   bookingUrl: "https://yourbusiness.acuityscheduling.com"
   ```

4. **Booksy**
   ```javascript
   bookingUrl: "https://booksy.com/en-us/yourbusiness"
   ```

5. **Custom Booking System**
   - Modify the `handleBookingSubmit` function in `ServiceMenu.jsx`
   - Pass service details to your booking API

---

## 📱 Making it Mobile-Friendly

The app is already responsive! But you can test:

```bash
# Open in browser and press F12
# Click the mobile device icon
# Test different screen sizes
```

---

## 🚀 Deployment Options

### Option 1: Netlify (Easiest)
```bash
npm run build
# Drag & drop the 'dist' folder to netlify.com
```

### Option 2: Vercel
```bash
npm install -g vercel
vercel
```

### Option 3: GitHub Pages
```bash
npm run build
# Push to GitHub
# Enable GitHub Pages in repository settings
```

---

## 💰 Multi-Client Management

### Strategy 1: Separate Repositories
```
client1-salon/
  src/data/salonData.js  (Client 1 prices)

client2-salon/
  src/data/salonData.js  (Client 2 prices)
```

### Strategy 2: Environment Variables
```javascript
// .env.client1
VITE_SALON_NAME="Elite Braids"
VITE_BOOKING_URL="https://calendly.com/elite"

// .env.client2
VITE_SALON_NAME="Beauty Bar"
VITE_BOOKING_URL="https://calendly.com/beauty"
```

Then in `salonData.js`:
```javascript
export const SALON_INFO = {
  name: import.meta.env.VITE_SALON_NAME,
  bookingUrl: import.meta.env.VITE_BOOKING_URL,
  // ...
};
```

### Strategy 3: JSON Configuration Files
```
src/
  clients/
    client1.json
    client2.json
    client3.json
```

---

## 🐛 Common Issues & Solutions

### Issue: Icons not showing
```bash
npm install lucide-react
# Restart dev server
```

### Issue: Tailwind styles not working
```bash
# Make sure tailwind.config.js has correct content paths
# Restart dev server
```

### Issue: Build errors
```bash
npm run build
# Check console for specific errors
# Usually missing imports or syntax errors
```

---

## 🎯 Quick Checklist for New Client

- [ ] Copy project files to new folder
- [ ] Update `SALON_INFO` in `salonData.js`
- [ ] Update prices in `SALON_DATA`
- [ ] Test all category expansions
- [ ] Test booking button
- [ ] Verify contact information
- [ ] Test on mobile device
- [ ] Deploy to hosting platform
- [ ] Send client the live URL

---

## 📞 Advanced Features (Optional)

### Add Search Functionality
```javascript
const [searchTerm, setSearchTerm] = useState('');

// Filter services based on search
const filteredData = Object.entries(SALON_DATA).filter(/* ... */);
```

### Add Price Calculator
```javascript
const [selectedServices, setSelectedServices] = useState([]);
const total = selectedServices.reduce((sum, s) => sum + s.price, 0);
```

### Add Image Gallery
```javascript
// In salonData.js
variations: [
  { 
    name: "Box Braids Large", 
    price: 180, 
    image: "/images/box-braids-large.jpg"  // ← Add images
  }
]
```

---

## 📚 Resources

- **Tailwind CSS Docs:** https://tailwindcss.com/docs
- **Lucide Icons:** https://lucide.dev/icons
- **React Docs:** https://react.dev
- **Vite Docs:** https://vitejs.dev

---

## 🎉 You're All Set!

Your salon service menu is ready to use. For each new client:
1. Copy the project
2. Update `salonData.js`
3. Deploy
4. Done! ✨

**Need help?** Check the code comments in each file for detailed explanations.