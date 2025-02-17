import { TextSection } from '../Components/TextSection/TextSection';
import { useNavigate } from 'react-router-dom';
import { colorGrey1, colorWhite1, colorGrey2, colorWhite2, colorWhite3, colorGrey3 } from '../App';

export const Home: React.FC<{ theme: string }> = ({ theme }) => {
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
        Title="About Article Story"
        Content={
          <>
            Article Story is a static website platform that publishes articles and stories. 
            ArticleStory stands for Articles and Stories, a website that mixes both worlds.
            This platform is the developer's first React website so that initial design was not that good.
            The development of react templates allows the developer to re-design this website so easily.
            The reason for re-designment is to revive a dead legacy or vision of the developer which is for this platform to be a way people share there thoughts almost without limitations.
            The purpose of ArticleStory is not to be a source of scientific information but rather to spread people opinion and as long as it complies with our terms and conditions.
          </>          
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
          <>
            We value your privacy and are committed to safeguarding your personal information. Our website does not collect any personal data from visitors, except for basic analytics data gathered through Google Analytics. This information helps us understand how our site is used and improve your experience. We do not have control over the advertisements displayed on our site, which may vary based on third-party services.
            <br/><br/>
            While we strive to protect your privacy, we cannot guarantee the security of information you disclose online. We recommend that you do not share any personal or sensitive information while browsing our website. By using our site, you acknowledge that you have read and understood this Privacy Policy. 
            As of February 2025, we don't directly publish AI-Generated content on this platform.
            Whoever submitted an article or story, that credit goes to them regardless if they used AI or not since the purpose of this platform is to promote people opinion.
            <br/><br/>
            We reserve the right to modify this policy at any time, and any changes will be reflected on this page. Your continued use of the website after such changes signifies your acceptance of the new policy.
          </>          
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
          <>
            By accessing our website, you agree to comply with and be bound by these Terms and Conditions. We kindly ask that you refrain from using ad blockers while browsing, as our revenue relies on the advertisements displayed.
            <br/><br/>
            Use of our platform comes with limitations as well to promote people opinion while maintaining healthy social interaction.
            We do not allow the following in our platform in both articles and stories:
            harmful and illegal content,
            bullying,
            use of bad or vulgar words,
            promoting products or brands,
            political content,
            personal information about someone,
            ethical or personal beliefs,
            and fake information.

            In terms of articles, we allow the following for their own reason:
            persuasive content since we promote people opinion and it is not our responsibility to convince user which should they believe it is up to them,
            content without studies or research if it is proven by observations,
            ai-assisted but not fully generated if you want your articles to be eye-catching,
            and of course your own personal opinion about your article as long as it is backed by a reasonable statement or explanation and is believable.
            
            In terms of stories, we do not allow the following for a reason:
            ai-written story since we want to publish meaningful stories with people's experience or imagination,
            copied story from any source since we want to publish originally written stories by real people,
            and stories that contains too much personal information about someone since we protect our user privacy.

            In terms of stories, we allow the following for a reason:
            fictional or non-fictional story as long as it is originally written but by mean of fictional meaning that it can happen in real life and does not go beyond what is scientifically possible and by means of non-fictional if it is happened to you or someone you knew and you are free to choose other names to hide their real identity,
            and real life stories if the story's events and names are altered to protect their identity,

            Users are solely responsible for the content they post. Our platform acts as a moderator but does not endorse or take responsibility for user-generated content. We reserve the right to remove content that violates our guidelines.
           <br/><br/>
            These Terms and Conditions govern your use of our website and apply to all visitors, users, and others who access or use the service. We reserve the right to make changes to these terms at any time without prior notice, and your continued use of the site constitutes acceptance of those changes. If you do not agree with any part of these terms, we recommend that you cease using our website immediately. We strive to provide accurate and up-to-date information, but we do not warrant that the content is free from errors or omissions. Your use of the website is at your own risk, and we are not liable for any damages that may arise from your use.
          </>          
        }
        Style={{
          Background: theme === "Light" ? colorWhite1 : colorGrey2,
          TextColor: theme === "Light" ? colorGrey1 : colorWhite1,
          HRColor: theme === "Light" ? colorGrey1 : colorWhite1,
        }}
      />

    </>
  );
};