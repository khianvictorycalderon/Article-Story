import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from "react";
import { GeneralFooter } from './Specific_Components/GeneralFooter';
import { GeneralNavBar } from './Specific_Components/GeneralNavBar';
import { Home } from './Pages/Home';
import { Articles } from './Pages/Articles';
import { Stories } from './Pages/Stories';
import { PageNotFound } from './Pages/NotFoundPage';
import { Content } from './Pages/Content';
import { Helmet } from 'react-helmet-async';

// Define color constants
export const colorWhite1 = "#f8f9fa";
export const colorWhite2 = "#e9ecef";
export const colorWhite3 = "#dee2e6";

export const colorGrey1 = "#212529";
export const colorGrey2 = "#343a40";
export const colorGrey3 = "#495057";

const basePath = "https://khianvictorycalderon.github.io/ArticleStory-Data";
export const ArticlesJSONPath = `${basePath}/articles.json`;
export const StoriesJSONPath = `${basePath}/stories.json`;
export const AboutDataPath = `${basePath}/about.dat`;
export const PrivacyDataPath = `${basePath}/privacy.dat`;
export const TermsDataPath = `${basePath}/terms.dat`;

export const slideToID = (id: string): void => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    } else {
      console.warn(`Element with id "${id}" not found.`);
    }
};

export const shuffleArray = (arr: string[]): string[] => {
  // Loop through the array from the end to the beginning
  for (let i = arr.length - 1; i > 0; i--) {
    // Generate a random index from 0 to i
    const randomIndex = Math.floor(Math.random() * (i + 1));

    // Swap the elements at i and randomIndex
    [arr[i], arr[randomIndex]] = [arr[randomIndex], arr[i]];
  }
  return arr;
};

export default function App() {
  // Initialize the theme state with localStorage value or default to 'Light'
  const [theme, setTheme] = useState<string>(() => {
    return localStorage.getItem("Theme") || "Light";
  });

  // Update the localStorage whenever the theme changes
  useEffect(() => {
    localStorage.setItem("Theme", theme);
  }, [theme]);

  return (
    <>
      <Helmet>
        <title>Articles & Stories</title>
      </Helmet>
      <Router>
          <GeneralNavBar theme={theme} setTheme={setTheme} />
          <Routes>
            <Route path="/" element={<Home theme={theme} />} />
            <Route path="/articles" element={<Articles theme={theme} />} />
            <Route path="/stories" element={<Stories theme={theme} />} />
            <Route path="/content/:contentID" element={<Content theme={theme} />} />
            <Route path="*" element={<PageNotFound theme={theme} />} />
          </Routes>
          <GeneralFooter theme={theme}/>
      </Router>
    </>
  );
}
