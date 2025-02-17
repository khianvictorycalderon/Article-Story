import style from './Cards.module.css'

interface CardProps {
    Cards: {
        ImagePath?: string;
        Title: string;
        Description: string;
        Onclick: () => void;
    }[];
    Style?:{
        SectionBackground?: string;
        CardsBackground?: string;
        CardsTextColor?: string;
    }
}

export const Cards = ({Cards, Style}: CardProps) => {
    return (
        <>
            <div 
                className={style.cardsection}
                style={{
                    ...(Style?.SectionBackground ? {background: Style.SectionBackground} : undefined),
                }}
                >
                {Cards.map((item, index) => (
                    <div 
                        className={style.card} 
                        key={item.Title + index}
                        onClick={item.Onclick}
                        style={{
                            ...(Style?.CardsBackground ? {background: Style.CardsBackground} : undefined),
                            ...(Style?.CardsTextColor ? {color: Style.CardsTextColor} : undefined),
                        }}
                        >
                        {item.ImagePath && (
                            <div 
                            className={style.card_image}
                            style={{
                                backgroundImage: `url(${item.ImagePath})`
                            }}/>
                            )
                        }
                        <div className={style.card_title}>
                            <h4>{item.Title}</h4>
                        </div>
                        <hr className={style.card_hr}/>
                        <p className={style.card_desc}>
                            {item.Description}
                        </p>
                    </div>
                ))}
            </div>
        </>
    )
}