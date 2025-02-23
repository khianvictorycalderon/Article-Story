import { TextSection } from '../Components/TextSection/TextSection';
import { useNavigate } from 'react-router-dom';
import { colorGrey1, colorWhite1, colorGrey2, colorWhite2, colorWhite3, colorGrey3 } from '../App';
import { useEffect } from 'react';
import { slideToID } from '../App';

export const Home: React.FC<{ theme: string }> = ({ theme }) => {
  
  // for getting the section id
  useEffect(() => {
    const hash = window.location.hash; // Get hash part
    const queryParams = new URLSearchParams(hash.split("?")[1]); // Extract query params after '?'
    const value = queryParams.get("section"); // Get 'section' param
    if (value) {
        setTimeout(() => slideToID(value), 100);
    }
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
          <div className="justify">
            ArticleStory is a platform for publishing articles and stories, combining both written content and personal narratives. It was created by the developer as their first project using React, which initially led to a basic design. However, with React’s flexible templating system, the website can now be easily redesigned and improved.
            The primary goal of the redesign is to bring new life to the platform, staying true to the developer's original vision: to provide a space where people can share their thoughts and opinions with minimal restrictions. While ArticleStory is not intended to be a source of scientific knowledge, it aims to be a platform for individuals to express themselves, as long as their content complies with our terms and conditions.
            Our new design focuses on simplicity, and we also implemented search bar when you are looking for an article or story. We also created a new logo for our platform, it may be simple but it is our logo.
            <br/><br/>
            Submit your own story or article <a href="https://docs.google.com/forms/d/e/1FAIpQLSc7VpMQuQNcPenFXhh74vxJRcv9YzWpWmg0FLZjMdiRwe5qGQ/viewform?usp=dialog">here</a>.
          </div>          
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
          <div className="justify">
            Last updated: February 18, 2025
            <br/><br/>
            We value your privacy and are committed to protecting your personal information. Our website does not collect personal data from visitors, except for basic analytics data collected through Google Analytics. This helps us understand how the site is used and improve your browsing experience. Please note that we do not control the advertisements displayed on our site, as they may vary based on third-party services.
            <br/><br/>
            While we make every effort to safeguard your privacy, we cannot guarantee the complete security of information you share online. We recommend that you avoid sharing any personal or sensitive details while browsing our website. By using our site, you acknowledge that you have read and understood this Privacy Policy.
            <br/><br/>
            We reserve the right to update this Privacy Policy at any time. Any changes will be posted on this page. Your continued use of the website after these updates indicates your acceptance of the revised policy.
          </div>          
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
          <div className="justify">
            Last updated: February 20, 2025
            <br/><br/>
            By accessing our website, you agree to comply with and be bound by these Terms and Conditions. We kindly ask that you refrain from using ad blockers while browsing, as our revenue depends on the advertisements displayed.
            <br/><br/>
            Use of our platform comes with certain limitations to encourage healthy social interaction while promoting diverse opinions.
            We do not allow the following content on our platform, both in articles and stories:
            <ul>
                <li>harmful or illegal content,</li>
                <li>bullying or harassment,</li>
                <li>use of offensive or vulgar language,</li>
                <li>promotion of products or brands,</li>
                <li>political content,</li>
                <li>sharing personal information about others,</li>
                <li>content that reflects personal or ethical beliefs,</li>
                <li>and false or misleading information.</li>
            </ul>

            In terms of articles, we allow the following:
            <ul>
                <li>persuasive content, as we encourage people to share their opinions. It is not our responsibility to convince users, and we respect your freedom to believe what you choose,</li>
                <li>content based on personal observations, even without studies or research,</li>
                <li>AI-assisted content, as long as it is not fully AI-generated, to help make articles more engaging,</li>
                <li>and personal opinions in articles, as long as they are reasonable, well-supported, and believable.</li>
            </ul>

            In terms of stories, we do not allow the following:
            <ul>
                <li>AI-generated stories, as we aim to publish meaningful stories based on real-life experiences or imagination,</li>
                <li>stories copied from other sources, as we only accept original stories written by real people,</li>
                <li>and stories that include excessive personal information about someone, as we value user privacy.</li>
            </ul>

            We do allow the following types of stories:
            <ul>
                <li>fictional or non-fictional stories, as long as they are original. A fictional story can be based on real-life events but should not exceed what is scientifically possible. A non-fictional story can be based on your own experience or that of someone you know, with the option to change names to protect privacy,</li>
                <li>and real-life stories, provided that the names, events, and places are altered to ensure privacy,</li>
                <li>please note that some stories may or may not be based on real events. If a story is based on real events, names, places, and brands may be changed. Any resemblance to actual persons, events, or locations is purely coincidental.</li>
            </ul>
            
            By submitting your content through our forms, you understand that publication is not guaranteed. All submissions undergo a manual review process, and you will be notified once a decision has been made regarding acceptance or decline. By submitting your article or story, you acknowledge and willingly agree that, if published, your contribution is provided voluntarily without any financial compensation. Instead, you will receive recognition as the author.
            You also grant us a non-exclusive, royalty-free, worldwide license to display, host, and share your content solely on our platform, with appropriate credit given to you as the original author. This license allows us to showcase your work on our platform while ensuring you retain full ownership of your content.
            Please note that once your article or story is submitted, it cannot be edited or revised. We encourage you to review your work carefully before submission
            <br/><br/>

            Users are fully responsible for the content they post. While our platform moderates content, we do not endorse or take responsibility for user-generated content. We reserve the right to remove content that violates these guidelines.
            <br/><br/>
            These Terms and Conditions govern your use of our website and apply to all visitors, users, and others who access or use our services. We reserve the right to update these terms at any time without prior notice, and your continued use of the website indicates your acceptance of any changes. If you disagree with any part of these terms, we recommend that you stop using our website immediately. While we strive to provide accurate and up-to-date information, we cannot guarantee that all content is error-free. Your use of the website is at your own risk, and we are not liable for any damages that may result from your use.

          </div>          
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