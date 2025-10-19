# 🚀 Salon Service Menu - Integration Guide

## 📋 Quick Integration for Client Projects

This guide shows you how to easily add the salon service menu to any client project.

---

## 🎯 **Method 1: Copy & Paste (Fastest)**

### **Step 1: Copy the Component**
- Copy the entire `STANDALONE_COMPONENT.jsx` file
- Paste it into your client project

### **Step 2: Install Dependencies**
```bash
npm install lucide-react
```

### **Step 3: Import and Use**
```jsx
import SalonServiceMenu from './components/SalonServiceMenu';

function App() {
  return (
    <div>
      <SalonServiceMenu />
    </div>
  );
}
```

### **Step 4: Customize for Client**
- Edit the `SALON_DATA` object in the component
- Update prices, services, and categories
- Done! ✨

---

## 🎯 **Method 2: NPM Package (Professional)**

### **Step 1: Create NPM Package**
```bash
# In your salon-service-menu project
npm init -y
npm publish
```

### **Step 2: Install in Client Project**
```bash
npm install your-salon-menu-package
```

### **Step 3: Use in Client Project**
```jsx
import { SalonServiceMenu } from 'your-salon-menu-package';

function App() {
  return <SalonServiceMenu />;
}
```

---

## 🎯 **Method 3: Git Submodule (Version Control)**

### **Step 1: Add as Submodule**
```bash
git submodule add https://github.com/oobaretin/Salon-Service-Menu.git salon-menu
```

### **Step 2: Import in Client Project**
```jsx
import SalonServiceMenu from './salon-menu/src/components/ServiceMenu';
```

---

## 🛠️ **Customization Guide**

### **1. Update Pricing Data**
```javascript
// Find this section in the component
const SALON_DATA = {
  "Braids": {
    "Box Braids": {
      starting: 180,  // ← Change starting price
      variations: [
        { name: "Shoulder Length Large", duration: "45 min", price: 180 },  // ← Change individual prices
        // ... more variations
      ]
    }
  }
};
```

### **2. Add New Services**
```javascript
// Add new categories
"New Category": {
  "New Service": {
    starting: 150,
    variations: [
      { name: "Option 1", duration: "1 hour", price: 150 },
      { name: "Option 2", duration: "1.5 hours", price: 200 }
    ]
  }
}
```

### **3. Remove Services**
```javascript
// Simply delete the category or service you don't want
// Example: Remove "Dreads" category
// Delete the entire "Dreads" object
```

### **4. Change Styling**
```jsx
// Update Tailwind classes for different themes
className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50"  // Blue theme
className="bg-gradient-to-br from-green-50 via-teal-50 to-blue-50"   // Green theme
```

---

## 📱 **Framework Integration**

### **React (Create React App)**
```jsx
// App.js
import SalonServiceMenu from './components/SalonServiceMenu';

function App() {
  return <SalonServiceMenu />;
}
```

### **Next.js**
```jsx
// pages/services.js
import SalonServiceMenu from '../components/SalonServiceMenu';

export default function Services() {
  return <SalonServiceMenu />;
}
```

### **Gatsby**
```jsx
// src/pages/services.js
import SalonServiceMenu from '../components/SalonServiceMenu';

const ServicesPage = () => <SalonServiceMenu />;
export default ServicesPage;
```

### **Vue.js (with React compatibility)**
```vue
<template>
  <div id="salon-menu"></div>
</template>

<script>
import { createRoot } from 'react-dom/client';
import SalonServiceMenu from './SalonServiceMenu';

export default {
  mounted() {
    const root = createRoot(document.getElementById('salon-menu'));
    root.render(SalonServiceMenu);
  }
}
</script>
```

---

## 🎨 **Styling Customization**

### **Color Themes**
```jsx
// Purple/Pink (default)
className="bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50"

// Blue/Indigo
className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50"

// Green/Teal
className="bg-gradient-to-br from-green-50 via-teal-50 to-blue-50"

// Orange/Red
className="bg-gradient-to-br from-orange-50 via-red-50 to-pink-50"
```

### **Button Colors**
```jsx
// Update these classes throughout the component
'bg-gradient-to-r from-purple-600 to-pink-600'  // Default
'bg-gradient-to-r from-blue-600 to-indigo-600'  // Blue theme
'bg-gradient-to-r from-green-600 to-teal-600'   // Green theme
```

---

## 📊 **Client Examples**

### **Example 1: Basic Hair Salon**
```javascript
const SALON_DATA = {
  "Haircuts": {
    "Men's Cut": { starting: 25, variations: [...] },
    "Women's Cut": { starting: 45, variations: [...] }
  },
  "Styling": {
    "Blowout": { starting: 35, variations: [...] },
    "Updo": { starting: 65, variations: [...] }
  }
};
```

### **Example 2: Nail Salon**
```javascript
const SALON_DATA = {
  "Manicures": {
    "Basic Manicure": { starting: 25, variations: [...] },
    "Gel Manicure": { starting: 35, variations: [...] }
  },
  "Pedicures": {
    "Basic Pedicure": { starting: 35, variations: [...] },
    "Spa Pedicure": { starting: 55, variations: [...] }
  }
};
```

### **Example 3: Spa Services**
```javascript
const SALON_DATA = {
  "Massages": {
    "Swedish": { starting: 80, variations: [...] },
    "Deep Tissue": { starting: 90, variations: [...] }
  },
  "Facials": {
    "Basic Facial": { starting: 75, variations: [...] },
    "Anti-Aging": { starting: 120, variations: [...] }
  }
};
```

---

## 🚀 **Deployment Options**

### **Static Sites**
- Works with any static site generator
- No server-side rendering required
- Perfect for Netlify, Vercel, GitHub Pages

### **Dynamic Sites**
- Integrates with any React-based framework
- Can be embedded in existing pages
- Supports server-side rendering

### **Mobile Apps**
- Works with React Native (with minor adjustments)
- Can be embedded in web views
- Responsive design works on all devices

---

## 💰 **Business Benefits**

### **For You (Developer)**
- ✅ **Save 2-3 weeks** of development time per client
- ✅ **Consistent quality** across all projects
- ✅ **Easy customization** for different clients
- ✅ **Professional appearance** builds client trust
- ✅ **Scalable business model** with reusable components

### **For Your Clients**
- ✅ **Professional service menu** with clear pricing
- ✅ **Mobile-friendly** for customers on the go
- ✅ **Easy to update** pricing and services
- ✅ **Builds trust** with transparent pricing
- ✅ **Increases bookings** with clear service options

---

## 🎯 **Quick Start Checklist**

- [ ] Copy `STANDALONE_COMPONENT.jsx` to client project
- [ ] Install `lucide-react` dependency
- [ ] Import and use the component
- [ ] Customize `SALON_DATA` with client's services
- [ ] Update pricing for client's market
- [ ] Test on mobile devices
- [ ] Deploy to client's hosting platform
- [ ] Train client on how to update prices

---

## 📞 **Support & Maintenance**

### **Client Training**
1. Show them how to edit the `SALON_DATA` object
2. Explain the structure (categories → services → variations)
3. Provide examples of common updates
4. Set up a maintenance schedule

### **Ongoing Support**
- Monthly price updates: $50-100
- New service additions: $25-50
- Major restructuring: $100-200
- Training sessions: $75-150/hour

---

## 🎉 **Success!**

Your salon service menu is now ready to help clients:
- **Attract customers** with professional presentation
- **Increase bookings** with clear pricing
- **Build trust** with transparent service information
- **Scale their business** with easy updates

**This template will save you hours of development time while delivering professional results for your clients!** 🚀✨
