import { useEffect } from "react";

const adScriptSource = "//pl24591754.effectiveratecpm.com/587af9ea18c59be918ab5e7d451f6389/invoke.js";
const adDivID = "container-587af9ea18c59be918ab5e7d451f6389"

export const Ads = () => {
    useEffect(() => {
      const script = document.createElement('script');
      script.src = adScriptSource;
      script.async = true;
      script.setAttribute('data-cfasync', 'false');
      document.body.appendChild(script);
  
      // Cleanup: remove the script when the component is unmounted
      return () => {
        document.body.removeChild(script);
      };
    }, []);
  
    return (
      <div id={adDivID}></div>
    );
};