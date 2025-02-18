import { Footer } from "../Components/Footer/Footer";
import { colorGrey1, colorWhite1, colorWhite3 } from "../App";

export const GeneralFooter: React.FC<{theme: string}> = ({theme}) => (
  <Footer
    Title={
      <h4>Website created by <a href="https://khian.netlify.app/">Khian Victory D. Calderon</a></h4>
    }
    Description={
      <p>Want to help khian? <a href="https://khianvictorycalderon.github.io/donation/donate.html">Donate to Khian</a></p>
    }
    Logo="icons/Khian_Icon_Logo.png"
    MiscInfo={
      <p>
        All rights reserved 2025.<br/>
        Articles & Stories Version 2: February 18, 2025.
      </p>
    }
    Style={{
      Background: theme === "Light" ? colorWhite3 : colorGrey1,
      TextColor: theme === "Light" ? colorGrey1 : colorWhite1,
      HRColor: theme === "Light" ? colorGrey1 : colorWhite1
    }}
  />
);