import { Container, Box } from "@mui/material";
import TopNavbar from "./TopNavbar";
import Footer from "./Footer";

import "../styles/Layout.css";

export default function Layout({ children }) {
  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      {/* Top Navbar */}
      <TopNavbar />

      {/* Main Content */}
      <Container sx={{ flex: 1, py: 4 }}>
        {children}
      </Container>

      {/* Footer */}
      <Footer />
    </Box>
  );
}
