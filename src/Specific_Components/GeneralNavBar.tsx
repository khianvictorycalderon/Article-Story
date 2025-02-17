import { NavBar } from "../Components/NavigationBar/NavBar";
import { colorGrey1, colorWhite3 } from "../App";
import { useNavigate } from 'react-router-dom';
import { slideToID } from "../App";

export const GeneralNavBar: React.FC<{ theme: string, setTheme: React.Dispatch<React.SetStateAction<string>> }> = ({ theme, setTheme }) => {
  const navigate = useNavigate();
  return (
    <>
      <NavBar
        Buttons={[ 
          {
            Label: "Home",
            OnClick: () => {
              navigate("/");
              setTimeout(() => {
                window.scrollTo({
                  top: 0,
                  behavior: "smooth"
                });                
              }, 100);
            }
          },
          {
            Label: `Theme: ${theme}`,
            OnClick: () => {
              setTheme(prevTheme => prevTheme === "Light" ? "Dark" : "Light");
            },
          },
          {
            Label: "About",
            OnClick: () => {
              navigate("/");
              setTimeout(() => {
                slideToID("about-section");
              }, 100);
            }
          },
          {
            Label: "Privacy Policy",
            OnClick: () => {
              navigate("/");
              setTimeout(() => {
                slideToID("privacy-section");
              }, 100);
            }
          },
          {
            Label: "Terms and Conditions",
            OnClick: () => {
              navigate("/");
              setTimeout(() => {
                slideToID("terms-section"); 
              }, 100);
            }
          }
        ]}        
        Style={{
          NavBarBackground: theme === "Light" ? colorWhite3 : colorGrey1,
          ButtonTextColor: theme === "Light" ? colorGrey1 : colorWhite3
        }}
        Logo={{
          ImagePath: "icons/ArticleStory_Logo.png"
        }}
      />
    </>
  );
};