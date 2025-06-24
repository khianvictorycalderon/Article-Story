import { TextSection } from '../Components/TextSection/TextSection';
import { useNavigate } from 'react-router-dom';
import { colorGrey1, colorWhite1, colorGrey2, colorWhite2, colorWhite3, colorGrey3, AboutDataPath, PrivacyDataPath, TermsDataPath } from '../App';
import { useEffect, useState } from 'react';
import { slideToID } from '../App';

export const Home: React.FC<{ theme: string }> = ({ theme }) => {
  const [about, setAbout] = useState<string>("Loading...");
  const [privacy, setPrivacy] = useState<string>("Loading...");
  const [terms, setTerms] = useState<string>("Loading...");

  // for getting the section id
  useEffect(() => {
    const hash = window.location.hash; // Get hash part
    const queryParams = new URLSearchParams(hash.split("?")[1]); // Extract query params after '?'
    const value = queryParams.get("section"); // Get 'section' param
    if (value) {
        setTimeout(() => slideToID(value), 100);
    }
  }, []);

  // Fetching the dynamic about content
  useEffect(() => {
    const cacheBustedAboutPath = `${AboutDataPath}?t=${new Date().getTime()}`;

    fetch(cacheBustedAboutPath)
      .then(data => data.text())
      .then(data => setAbout(data))
      .catch(error => console.error(`Error fetching: ${error}`));
  }, []);

  // Fetching the dynamic privacy content
  useEffect(() => {
    const cacheBustedPrivacyPath = `${PrivacyDataPath}?t=${new Date().getTime()}`;

    fetch(cacheBustedPrivacyPath)
      .then(data => data.text())
      .then(data => setPrivacy(data))
      .catch(error => console.error(`Error fetching: ${error}`));
  }, []);

  // Fetching the dynamic terms content
  useEffect(() => {
    const cacheBustedTermsPath = `${TermsDataPath}?t=${new Date().getTime()}`;

    fetch(cacheBustedTermsPath)
      .then(data => data.text())
      .then(data => setTerms(data))
      .catch(error => console.error(`Error fetching: ${error}`));
  }, []);

  const navigate = useNavigate();
  return (
    <>
      <div
        className="hero-section"
        style={{
          background: theme === "Light" ? colorWhite1 : colorGrey2,
          color: theme === "Light" ? colorGrey1 : colorWhite1
        }}
      >
        <div className="hero-section-title">
          <span className="main-title">Article Story</span><br/>
          <span className="main-quote">Discover captivating articles and meaningful stories</span>
        </div>
        <div className="hero-section-buttons">
          <button 
            className="cta-button"
            style={{
              background: theme === "Light" ? colorGrey2 : colorWhite3,
              color: theme === "Light" ? colorWhite1 : colorGrey1
            }}
            onClick={() => {
              navigate("/articles");
              setTimeout(() => {
                window.scrollTo({
                  top: 0,
                  behavior: "smooth"
                });                
              }, 100);
            }}
          >Read Articles</button>
          <br/>
          <button 
            className="cta-button"
            style={{
              background: theme === "Light" ? colorGrey2 : colorWhite3,
              color: theme === "Light" ? colorWhite1 : colorGrey1
            }}
            onClick={() => {
              navigate("/stories");
              setTimeout(() => {
                window.scrollTo({
                  top: 0,
                  behavior: "smooth"
                });                
              }, 100);
            }}
          >Read Stories</button>
        </div>
      </div>

      <div id="about-section" />
      <TextSection
        Title="About"
        Content={
          <div className="justify" dangerouslySetInnerHTML={{ __html: about }}/>          
        }
        Style={{
          Background: theme === "Light" ? colorWhite3 : colorGrey3,
          TextColor: theme === "Light" ? colorGrey1 : colorWhite1,
          HRColor: theme === "Light" ? colorGrey1 : colorWhite1,
        }}
      />

      <div id="privacy-section" />
      <TextSection
        Title="Privacy Policy"
        Content={
          <div className="justify" dangerouslySetInnerHTML={{ __html: privacy }} />          
        }
        Style={{
          Background: theme === "Light" ? colorWhite2 : colorGrey1,
          TextColor: theme === "Light" ? colorGrey1 : colorWhite1,
          HRColor: theme === "Light" ? colorGrey1 : colorWhite1,
        }}
      />

      <div id="terms-section" />
      <TextSection
        Title="Terms and Conditions"
        Content={
          <div className="justify" dangerouslySetInnerHTML={{ __html:terms }} />          
        }
        Style={{
          Background: theme === "Light" ? colorWhite1 : colorGrey2,
          TextColor: theme === "Light" ? colorGrey1 : colorWhite1,
          HRColor: theme === "Light" ? colorGrey1 : colorWhite1,
        }}
      />

      <TextSection
        Title="Archive"
        Content={
          <div className="justify">
            Here is our old design:
            <br/><br/>
            Landscape: <br/><br/>
            <img className="w-100" src="images/old_landscape.png" />
            <br/><br/>
            <hr/>
            Portrait: <br/><br/>
            <img className="w-100" src="images/old_portrait.png" />
          </div>          
        }
        Style={{
          Background: theme === "Light" ? colorWhite3 : colorGrey3,
          TextColor: theme === "Light" ? colorGrey1 : colorWhite1,
          HRColor: theme === "Light" ? colorGrey1 : colorWhite1,
        }}
      />

    </>
  );
};