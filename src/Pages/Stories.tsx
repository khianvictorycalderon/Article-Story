import { colorGrey1, colorWhite1, colorGrey2, colorWhite2, colorWhite3, colorGrey3 } from '../App';

export const Stories: React.FC<{theme: string}> = ({theme}) => {
    return (
        <>
            <div
                className="list-section"
                style={{
                    background: theme === "Light" ? colorWhite1 : colorGrey3,
                    color: theme === "Light" ? colorGrey1 : colorWhite1
                }}
            >
            <h2 className="center">Choose Story</h2>
            <hr/>
            <div className="">Search:</div>
            </div>
        </>
    )
}