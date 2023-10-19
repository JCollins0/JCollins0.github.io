import { useEffect } from "react";
const useImportScript = (src: string) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = src;
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, [src]);
};

export const Examples: React.FC = () => {
  useImportScript("../../assets/scripts/shared-topnav.js");
  return (
    <div>
      <div id="vdp-navbar"></div>
      <body style={{ height: "80vh", textAlign: "center" }}>
        <p>The header and footer are Angular web components!</p>
      </body>
      <footer id="footer"></footer>
    </div>
  );
};
