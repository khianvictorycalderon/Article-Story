import { colorGrey1, colorWhite1, colorGrey2, colorWhite2, colorWhite3, colorGrey3 } from '../App';

export const PageNotFound: React.FC<{theme: string}> = ({theme}) => {
    return (
        <div 
            className="page-not-found"
            style={{
                background: theme === "Light" ? colorWhite1 : colorGrey2,
                color: theme === "Light" ? colorGrey1 : colorWhite1
            }}
            >
            Error 404: Page not found<br/>
            The page you are looking for may not exist or is deleted.
        </div>
    )
}