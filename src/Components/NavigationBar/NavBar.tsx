import { useState, useEffect } from "react";
import style from "./NavBar.module.css"

interface NavBarProps {
    Style?: {
        ButtonTextColor?: string;
        NavBarBackground?: string;
    };
    Buttons: {
        Label: string;
        OnClick: () => void;
    }[];
    Logo?: {
        ImagePath: string;
        Href?: string;
    };
}

export const NavBar = ({ Buttons, Style, Logo }: NavBarProps) => {
    
    // Check if it is mobile for mobile responsiveness of the hamburger icon
    const [isMobile, setIsMobile] = useState<boolean>(false);
    const [isMobileMenuShown, setIsMobileMenuShown] = useState<boolean>(false);
    useEffect(() => {
        const checkIfMobile = () => {
          if (window.innerWidth <= 768) {
            setIsMobile(true);
          } else {
            setIsMobile(false);
          }
        };
        checkIfMobile();
        window.addEventListener('resize', checkIfMobile);
        return () => {
          window.removeEventListener('resize', checkIfMobile);
        };
    }, []); // Empty dependency array, meaning this effect runs once when the component mounts
    
    return (
        <>
            <div onClick={() => setIsMobileMenuShown(true)} id={style.hamburger}/>
            {(!isMobile || isMobileMenuShown) && (
                <nav className={style.navbar} style={
                    Style?.NavBarBackground ? {background: Style.NavBarBackground} : undefined
                }>
                    {Logo && Logo?.Href ? (
                        <a href={Logo.Href}>
                            <img className={style.logo} src={Logo.ImagePath} />
                        </a>
                        ) : (
                            <img className={style.logo} src={Logo?.ImagePath} />
                        )
                    }
                    {isMobile && (
                        <>
                            <div 
                                onClick={() => setIsMobileMenuShown(false)}
                                className={style.close_icon} 
                            />
                            <hr className={style.hr}/>
                        </>
                    )}
                    <div className={style.buttons}>
                        {Buttons.map((item) => (
                            <button
                                className={style.button}
                                key={item.Label}
                                onClick={() => {
                                    item.OnClick();
                                    setIsMobileMenuShown(false);
                                }}
                                style = {
                                    Style?.ButtonTextColor ? {color: Style.ButtonTextColor} : undefined
                                }
                            >
                                {item.Label}
                            </button>
                        ))}
                    </div>
                </nav>
                )
            }
        </>
    );
};
