# Modern Weather Dashboard 🌤️

live link - https://weather-website-4xo7j3a7o-pratikshmalik05s-projects.vercel.app/

A highly polished, handcrafted Weather Application built with React, Vite, and Tailwind CSS. Moving beyond generic templates, this application features a sleek, premium "Bento Box Grid" dark-mode aesthetic commonly found in modern high-end SaaS applications and iOS widgets.

## ✨ Features
* **Bento Grid Dashboard**: Weather metrics are beautifully organized in sharp, responsive widget cards.
* **Real-time Data**: Fetches accurate, real-time weather telemtry via the [OpenWeatherMap API](https://openweathermap.org/).
* **Geolocation Support**: Instantly check the weather at your current physical location with a single click.
* **Search History**: Automatically saves your most recent searches locally and presents them in a sleek, easily accessible sidebar list.
* **Premium Dark Theme**: A monochromatic, high-contrast dark theme with subtle borders and elegant typography.

## 🛠️ Tech Stack
* **Framework**: [React 19](https://react.dev/) via [Vite](https://vitejs.dev/)
* **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
* **Icons**: [Lucide React](https://lucide.dev/)
* **HTTP Client**: [Axios](https://axios-http.com/)

## 🚀 Getting Started

### Prerequisites
You will need Node.js installed on your machine and a free API key from [OpenWeatherMap](https://openweathermap.org/api).

### Installation
1. Clone this repository to your local machine.
2. Navigate to the project directory:
   ```bash
   cd weather-app
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```
4. Create a `.env` file in the root directory of the project and add your OpenWeatherMap API key:
   ```env
   VITE_OPENWEATHER_API_KEY=your_actual_api_key_here
   ```
   *(Note: New OpenWeatherMap API keys can take up to 2 hours to activate after creation. If you receive a 401 error, please wait and try again).*

### Running the App
To start the Vite development server, run:
```bash
npm run dev
```
Open [http://localhost:5177](http://localhost:5177) in your browser to view the application!

## 📦 Deployment
This app is ready to be deployed to platforms like Vercel or Netlify. Please see `DEPLOYMENT.md` for detailed instructions on how to deploy this project to Vercel.

---
*Built with ❤️ and React.*
