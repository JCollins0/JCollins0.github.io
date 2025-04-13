import { Typography } from "@mui/material";

const NotFoundComponent: React.FC = () => {
  return (
    <div
      style={{
        width: "50%",
        margin: "auto",
        textAlign: "center",
        padding: "5rem",
      }}
    >
      <Typography variant="h1">404 - Not Found</Typography>
      <Typography>The page you are looking for does not exist.</Typography>
    </div>
  );
};

export default NotFoundComponent;
