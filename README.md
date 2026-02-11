# 📊 SalesPro Dashboard

A modern, professional sales performance dashboard built with Next.js, TypeScript, and Recharts. Designed to showcase clean UI/UX, interactive data visualizations, and responsive design principles.

![Dashboard Preview](https://raw.githubusercontent.com/johnsoninsights/Salesforce-Dasboard/main/screenshots/dashboard.png)

## ✨ Features

- **📈 Interactive Analytics** - Real-time revenue trends with beautiful gradient area charts
- **💼 Pipeline Management** - Visual breakdown of deals across sales stages
- **👥 Team Performance** - Track top performers with dynamic bar charts
- **📱 Fully Responsive** - Seamless experience across desktop, tablet, and mobile
- **🎨 Modern Design** - Clean, professional UI with custom typography and smooth animations
- **⚡ Fast & Performant** - Built with Next.js 15 App Router for optimal performance

## 🖼️ Screenshots

### Desktop View
![Desktop Dashboard](https://raw.githubusercontent.com/johnsoninsights/Salesforce-Dasboard/main/screenshots/dashboard.png)

### Mobile View
<img src="https://raw.githubusercontent.com/johnsoninsights/Salesforce-Dasboard/main/screenshots/mobile.png" alt="Mobile View" width="300">

### Charts & Analytics
![Charts](https://raw.githubusercontent.com/johnsoninsights/Salesforce-Dasboard/main/screenshots/charts.png)

## 🛠️ Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Charts:** [Recharts](https://recharts.org/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Fonts:** Space Grotesk & JetBrains Mono

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository
```bash
git clone https://github.com/johnsoninsights/Salesforce-Dasboard.git
cd Salesforce-Dasboard
```

2. Install dependencies
```bash
npm install
```

3. Run the development server
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure
```
Salesforce-Dasboard/
├── src/
│   ├── app/              # Next.js app directory
│   │   ├── page.tsx      # Main dashboard page
│   │   ├── layout.tsx    # Root layout
│   │   └── globals.css   # Global styles
│   ├── components/       # React components
│   │   ├── Sidebar.tsx
│   │   ├── MetricCard.tsx
│   │   ├── RecentDeals.tsx
│   │   └── ...
│   ├── data/            # Mock data generation
│   ├── types/           # TypeScript type definitions
│   └── utils/           # Utility functions
├── public/              # Static assets
└── screenshots/         # Project screenshots
```

## 💡 Key Features Explained

### Dynamic Data Visualization
- Revenue trend chart with gradient area fill
- Interactive tooltips and hover effects
- Responsive chart sizing for all devices

### Sales Pipeline Tracking
- Visual stage breakdown (Lead → Qualified → Proposal → Negotiation → Closed)
- Real-time deal counts and revenue per stage
- Color-coded status badges

### Performance Metrics
- Total Revenue with trend indicators
- Active Deals count
- Conversion Rate percentage
- Average Deal Size

## 🎯 Purpose

This project was built as a portfolio piece to demonstrate:

✅ Modern React patterns and hooks  
✅ TypeScript for type safety and better DX  
✅ Responsive design with mobile-first approach  
✅ Data visualization best practices  
✅ Clean, maintainable code architecture  
✅ Professional UI/UX design principles  

## 🚧 Future Enhancements

- [ ] Add authentication and user accounts
- [ ] Integrate with real backend API
- [ ] Export data to CSV/PDF
- [ ] Dark mode toggle
- [ ] Advanced filtering and search
- [ ] Real-time data updates with WebSockets

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Evan Johnson**
- GitHub: [@johnsoninsights](https://github.com/johnsoninsights)
- Portfolio: [evanjohnson.dev](https://evanjohnson.dev)

## 🙏 Acknowledgments

- Design inspiration from modern SaaS dashboards
- Mock data generated for demonstration purposes
- Built with ❤️ using Next.js and TypeScript

---

⭐ If you found this project interesting, please consider giving it a star!