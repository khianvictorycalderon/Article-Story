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
              window.scrollTo({top: 0})
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
              navigate("/?section=about-section");
              slideToID("about-section");
            }
          },
          {
            Label: "Privacy Policy",
            OnClick: () => {
              navigate("/?section=privacy-section");
              slideToID("privacy-section");
            }
          },
          {
            Label: "Terms and Conditions",
            OnClick: () => {
              navigate("/?section=terms-section");
              slideToID("terms-section");
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