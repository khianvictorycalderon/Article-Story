import style from './Footer.module.css'

interface FooterProps {
    Title: React.ReactNode;
    Description: React.ReactNode;
    Logo: string;
    Style?: {
        TextColor?: string;
        Background?: string;
    }
    Links?: {
        ImagePath: string;
        Href: string;
        Alt: string;
    }[];
    MiscLinks?: {
        Text: string;
        Href: string;
    }[];
    MiscInfo?: React.ReactNode;
}

export const Footer = ({Title, Logo, Description, Links, MiscLinks, MiscInfo, Style}: FooterProps) => {
    return (
        <footer 
            className={style.footer}
            style={{
                ...(Style?.TextColor ? {color: Style?.TextColor} : undefined),
                ...(Style?.Background ? {background: Style?.Background} : undefined),
            }}
            >
            <div className={style.flex}>
                <img src={Logo} className={style.footer_logo}/>
                <div className={style.main_text}>
                    {Title}
                    {Description}
                </div>
            </div>
            <div className={style.socmed_links}>
                {Links && Links.map((item, index) => (
                    <div key={index}>
                        <a href={item.Href} title={item.Alt}>
                            <img className={style.socmed_image} alt={item.Alt} src={item.ImagePath} />
                        </a>
                    </div>
                ))}
            </div>
			<br/>
            {MiscLinks && (
                <>
                    <hr className={style.hr}/>
                    <div className={style.misc}>
                        {MiscLinks.map((item, index) => (
                            <a className={style.no_design} href={item.Href} key={index}>
                                {item.Text}
                            </a>
                        ))}
                    </div>
                </>
            )}
            {MiscInfo && (
                <>
                    <hr className={style.hr}/>
                    <div className={style.last_info}>{MiscInfo}</div>
                </>
            )}
        </footer>
    )
}