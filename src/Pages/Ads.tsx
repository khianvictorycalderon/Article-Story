import { useEffect } from 'react';

export const Ads = () => {
    useEffect(() => {
        // Create the script tag
        const script = document.createElement("script");
        script.async = true;
        script.setAttribute("data-cfasync", "false");
        script.src = "//pl24591754.effectiveratecpm.com/587af9ea18c59be918ab5e7d451f6389/invoke.js";

        // Create the container div
        const container = document.createElement("div");
        container.id = "container-587af9ea18c59be918ab5e7d451f6389";

        // Append the script and div to the body or a specific element
        document.body.appendChild(script);
        document.body.appendChild(container);

        // Cleanup: Remove the script and div when the component is unmounted
        return () => {
            document.body.removeChild(script);
            document.body.removeChild(container);
        };
    }, []); // Empty dependency array ensures this only runs once on mount and unmount

    return null; // The Ads component doesn't render anything itself, it just injects the script and div
};