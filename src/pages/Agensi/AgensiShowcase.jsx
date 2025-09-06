import React from "react";
import { Typography, Grid, Box, Divider, Card, CardContent, CardActionArea, } from "@mui/material";

const agenciesData = [
  {
    category: "KDN – Bahagian",
    agencies: [
      { name: "BHGN. KESELAMATAN DAN KETENTERAMAN AWAM (K)", logo: "https://ikk.gov.my/wp-content/uploads/2023/11/govm11.webp", link: "#" },
      { name: "PEJABAT STRATEGIK NASIONAL MAPO (NSO MAPO)", logo: "https://ikk.gov.my/wp-content/uploads/2023/11/govm11.webp", link: "#" },
      { name: "BHGN. KEWANGAN (Kw)", logo: "https://ikk.gov.my/wp-content/uploads/2023/11/govm11.webp", link: "#" },
      { name: "BHGN. PEMBANGUNAN (PB)", logo: "https://ikk.gov.my/wp-content/uploads/2023/11/govm11.webp", link: "#" },
      { name: "BHGN. PENGURUSAN SUMBER MANUSIA (SM)", logo: "https://ikk.gov.my/wp-content/uploads/2023/11/govm11.webp", link: "#" },
      { name: "UNIT INTEGRITI (UI)", logo: "https://ikk.gov.my/wp-content/uploads/2023/11/govm11.webp", link: "#" },
    ],
  },
  {
    category: "KDN – Jabatan / Agensi",
    agencies: [
      { name: "AADK", logo: "https://ikk.gov.my/wp-content/uploads/2023/11/govm11.webp", link: "#" },
      { name: "AKPS", logo: "https://ikk.gov.my/wp-content/uploads/2023/11/govm11.webp", link: "#" },
      { name: "APMM", logo: "https://ikk.gov.my/wp-content/uploads/2023/11/govm11.webp", link: "#" },
      { name: "AKPS", logo: "https://ikk.gov.my/wp-content/uploads/2023/11/govm11.webp", link: "#" },
      { name: "JIM", logo: "https://ikk.gov.my/wp-content/uploads/2023/11/govm11.webp", link: "#" },
      { name: "JPN", logo: "https://ikk.gov.my/wp-content/uploads/2023/11/govm11.webp", link: "#" },
      { name: "JAB. PENJARA", logo: "https://ikk.gov.my/wp-content/uploads/2023/11/govm11.webp", link: "#" },
      { name: "PDRM (AMLA)", logo: "https://ikk.gov.my/wp-content/uploads/2023/11/pdrm1.webp", link: "#" },
      { name: "PDRM (CK)", logo: "https://ikk.gov.my/wp-content/uploads/2023/11/pdrm1.webp", link: "#" },
      { name: "PDRM (JIPS)", logo: "https://ikk.gov.my/wp-content/uploads/2023/11/pdrm1.webp", link: "#" },
      { name: "PDRM (JPJKK)", logo: "https://ikk.gov.my/wp-content/uploads/2023/11/pdrm1.webp", link: "#" },
      { name: "PDRM (JSJ)", logo: "https://ikk.gov.my/wp-content/uploads/2023/11/pdrm1.webp", link: "#" },
      { name: "⁠PDRM (JSJ-D4)", logo: "https://ikk.gov.my/wp-content/uploads/2023/11/pdrm1.webp", link: "#" },
      { name: "PDRM (JSJ-D7)", logo: "https://ikk.gov.my/wp-content/uploads/2023/11/pdrm1.webp", link: "#" },
      { name: "⁠PDRM (JSJ-D9)", logo: "https://ikk.gov.my/wp-content/uploads/2023/11/pdrm1.webp", link: "#" },
      { name: "⁠PDRM (JSJ-D11)", logo: "https://ikk.gov.my/wp-content/uploads/2023/11/pdrm1.webp", link: "#" },
      { name: "PDRM (JSJK)", logo: "https://ikk.gov.my/wp-content/uploads/2023/11/pdrm1.webp", link: "#" },
      { name: "PDRM (JSJN)", logo: "https://ikk.gov.my/wp-content/uploads/2023/11/pdrm1.webp", link: "#" },
      { name: "PDRM (JSPT)", logo: "https://ikk.gov.my/wp-content/uploads/2023/11/pdrm1.webp", link: "#" },
      { name: "PDRM (KDNKA)", logo: "https://ikk.gov.my/wp-content/uploads/2023/11/pdrm1.webp", link: "#" },
      { name: "PDRM (KDNKA -FRU)", logo: "https://ikk.gov.my/wp-content/uploads/2023/11/pdrm1.webp", link: "#" },
      { name: "PDRM (PENGURUSAN)", logo: "https://ikk.gov.my/wp-content/uploads/2023/11/pdrm1.webp", link: "#" },
    ],
  },
  {
    category: "JABATAN PERDANA MENTERI (JPM)",
    agencies: [
      { name: "CGSO", logo: "https://ikk.gov.my/wp-content/uploads/2023/11/govm11.webp", link: "#" },
      { name: "JAKIM", logo: "https://ikk.gov.my/wp-content/uploads/2023/11/govm11.webp", link: "#" },
      { name: "⁠NACSA MKN", logo: "https://ikk.gov.my/wp-content/uploads/2023/11/govm11.webp", link: "#" },
      { name: "PKPMP", logo: "https://ikk.gov.my/wp-content/uploads/2023/11/govm11.webp", link: "#" },
      { name: "SIAP", logo: "https://ikk.gov.my/wp-content/uploads/2023/11/govm11.webp", link: "#" },
      { name: "PUSAT DATA, SPRM", logo: "https://ikk.gov.my/wp-content/uploads/2023/11/govm11.webp", link: "#" },
      { name: "UNIT INTEGRITI, SPRM", logo: "https://ikk.gov.my/wp-content/uploads/2023/11/govm11.webp", link: "#" },
    ],
  },
  {
    category: "KEMENTERIAN KEWANGAN (MOF)",
    agencies: [
      { name: "PUSAT DATA, KASTAM", logo: "https://ikk.gov.my/wp-content/uploads/2023/11/govm11.webp", link: "#" },
      { name: "UNIT INTEGRITI, KASTAM", logo: "https://ikk.gov.my/wp-content/uploads/2023/11/govm11.webp", link: "#" },
    ],
  },
  {
    category: "KEMENTERIAN PERTAHANAN (MINDEF)",
    agencies: [
      { name: "BHGN. DASAR DAN PERANCANGAN STRATEGIK (BDPS)", logo: "https://ikk.gov.my/wp-content/uploads/2023/11/govm11.webp", link: "#" },
    ],
  },
  {
    category: "KEMENTERIAN DIGITAL (KD)",
    agencies: [
      { name: "CYBER SECURITY MALAYSIA (CSM)", logo: "https://ikk.gov.my/wp-content/uploads/2023/11/govm11.webp", link: "#" },
      { name: "SKMM", logo: "https://ikk.gov.my/wp-content/uploads/2023/11/govm11.webp", link: "#" },
    ],
  },
];

export default function AgensiShowcase() {
  return (
    <Box sx={{ py: 6, px: { xs: 2, md: 8 }, bgcolor: "#f9fafb" }}>
      {/* Section Title */}
      <Typography
        variant="h4"
        align="center"
        sx={{ fontWeight: "bold", mb: 4 }}
      >
        Senarai Agensi
      </Typography>

      {/* Loop Categories */}
      {agenciesData.map((group, index) => (
        <Box key={index} sx={{ mb: 6 }}>
          {/* Category Title */}
          <Typography
            variant="h6"
            sx={{ fontWeight: 600, mb: 1, color: "#1e293b" }}
          >
            {group.category}
          </Typography>
          <Divider sx={{ mb: 3 }} />

          {/* Agencies Grid */}
          <Grid container spacing={3}>
            {group.agencies.map((agency, idx) => (
              <Grid item xs={12} sm={6} md={4} lg={2.4} key={idx}>
                <Card
                  sx={{
                    borderRadius: 3,
                    boxShadow: 2,
                    height: "200px",
                    transition: "0.3s",
                    "&:hover": {
                      transform: "scale(1.05)",
                      boxShadow: 4,
                    },
                  }}
                >
                  <CardActionArea
                    component="a"
                    href={agency.link}
                    target="_blank"
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      height: "100%",
                      justifyContent: "space-between",
                      p: 2,
                    }}
                  >
                    {/* Logo */}
                    <Box
                      sx={{
                        flex: "0 0 100px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Box
                        component="img"
                        src={agency.logo}
                        alt={agency.name}
                        sx={{
                          maxHeight: 100,
                          maxWidth: "100%",
                          objectFit: "contain",
                        }}
                      />
                    </Box>

                    {/* Name */}
                    <CardContent
                      sx={{
                        flex: "0 0 60px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        p: 0,
                      }}
                    >
                      <Typography
                        variant="body2"
                        sx={{
                          fontWeight: 500,
                          color: "#475569",
                          textAlign: "center",
                        }}
                      >
                        {agency.name}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      ))}
    </Box>
  );
}
