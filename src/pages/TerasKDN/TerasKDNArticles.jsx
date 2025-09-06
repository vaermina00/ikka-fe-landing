import { useState } from "react"
import { Card, CardContent, CardMedia, Typography, Grid, Button, Box } from "@mui/material"
import { motion } from "framer-motion"

const articles = [
    {
        header: "Teras 1 : Kedaulatan dan Keutuhan Wilayah",
        title: "Peristiwa Lahad Datu sejarah hitam Malaysia",
        description: "Peristiwa Lahad Datu pada 2013 telah meninggalkan sejarah hitam buat Malaysia apabila telah diceroboh oleh pengganas Sulu dan menyebabkan kematian seramai 74 orang (12 perwira negara, 56 pengganas, 6 orang awam).",
        image: "https://ikk.gov.my/wp-content/uploads/2023/12/427szz-111.webp",
        link: "https://www.sinarharian.com.my/article/102150/berita/nasional/peristiwa-lahad-datu-sejarah-hitam-malaysia"
    },
    {
        header: "Teras 2 : Kestabilan Sosio-politik",
        title: "39 ahli Parlimen lompat parti sejak berakhir PRU14",
        description: "Seramai 39 ahli Parlimen telah melompat parti sejak berakhirnya Pilihan Raya Umum ke-14 (PRU14) sehingga mengakibatkan negara berhadapan dengan isu pergolakan parti dengan menyaksikan penyandang Perdana Menteri bertukar sebanyak tiga kali.",
        image: "https://ikk.gov.my/wp-content/uploads/2023/12/427szz-108.webp",
        link: "https://www.sinarharian.com.my/article/197331/berita/nasional/39-ahli-parlimen-lompat-parti-sejak-berakhir-pru14"
    },
    {
        header: "Teras 3 : Kesepaduan Nasional",
        title: "182 kes hina institusi diraja",
        description: "Polis Diraja Malaysia (PDRM) merekodkan sebanyak 182 kes penghinaan terhadap Institusi Diraja yang berbaur hasutan, tidak beradab serta mendatangkan kebencian sejak tahun 2020 sehingga Mei tahun 2022.",
        image: "https://ikk.gov.my/wp-content/uploads/2023/12/427szz-109.webp",
        link: "https://www.sinarharian.com.my/article/591046/berita/nasional/182-kes-hina-institusi-diraja"
    },
    {
        header: "Teras 4 : Tadbir Urus Yang Baik",
        title: "'Rasuah untuk ‘hidup’",
        description: "Peningkatan kos sara hidup yang tinggi menjadi antara punca individu terjebak dengan gejala rasuah. Isu rasuah juga kini bukan sahaja melibatkan penjawat awam, malah turut melibatkan orang awam.",
        image: "https://ikk.gov.my/wp-content/uploads/2023/12/427szz-105.webp",
        link: "https://www.sinarharian.com.my/article/120735/berita/nasional/rasuah-untuk-lsquohiduprsquo"
    },
    {
        header: "Teras 5 : Keutuhan Ekonomi",
        title: "Rakyat semakin tersepit dengan kenaikan harga barang",
        description: "Baru-baru ini rakyat telah digemparkan dengan isu kenaikan harga barang, terutamanya barang basah ekoran pemansuhan minyak masak tulen botol, kawalan siling ayam dan telur ayam.",
        image: "https://ikk.gov.my/wp-content/uploads/2023/12/427szz-110.webp",
        link: "https://www.bharian.com.my/berita/nasional/2022/06/967047/rakyat-semakin-tersepit-dengan-kenaikan-harga-barang"
    },
    {
        header: "Teras 6 : Keadilan Sosial",
        title: "Kes pengasingan pelajar rencatkan penyatuan bangsa Malaysia",
        description: "Sistem/dasar pendidikan di Malaysia telah melebarkan jurang/perbezaan antara kaum serta golongan kaya dengan yang miskin.",
        image: "https://ikk.gov.my/wp-content/uploads/2023/12/427szz-106.webp",
        link: "hhttps://www.sinarharian.com.my/article/134128/berita/nasional/kes-pengasingan-pelajar-rencatkan-penyatuan-bangsa-malaysia"
    },
    {
        header: "Teras 7 : Pembangunan Mampan",
        title: "Kerajaan ambil langkah segera tangani banjir kilat di KL",
        description: "Banjir melanda sekitar Kuala Lumpur menyaksikan ribuan kereta yang diletakkan di parkir terbuka dan bawah tanah dalam bangunan sekitar ibu kota ini turut tenggelam.",
        image: "https://ikk.gov.my/wp-content/uploads/2023/12/427szz-107.webp",
        link: "https://www.sinarharian.com.my/article/191557/berita/semasa/kerajaan-ambil-langkah-segera-tangani-banjir-kilat-di-kl"
    },
    {
        header: "Teras 8 : Keselamatan Rakyat",
        title: "Pencerobohan PATI, serangan siber antara 66 ancaman baharu -MKN",
        description: "Pada 19 April 2022, seramai 528 tahanan etnik Rohingya telah berjaya meloloskan diri dari Depot Imigresen Sementara Sungai Bakap, Pulau Pinang, yang berpunca daripada rusuhan.",
        image: "https://ikk.gov.my/wp-content/uploads/2023/12/427szz-112.webp",
        link: "https://www.nextstepmalaysia.com/pencerobohan-pati-serangan-siber-antara-66-ancaman-baharu-mkn/"
    },
    {
        header: "Teras 9 : Pengiktirafan Antarabangsa",
        title: "Malaysia antara 5 negara terbaik kawal Covid-19",
        description: "Malaysia diiktiraf sebagai antara lima negara tebaik di dunia dalam mengawal pandemik COVID-19 dengan penerimaan rakyat yang tertinggi.",
        image: "https://ikk.gov.my/wp-content/uploads/2023/12/427szz-113.webp",
        link: "https://www.hmetro.com.my/mutakhir/2020/06/589613/malaysia-antara-5-negara-terbaik-kawal-covid-19"
    },
]

export default function TerasKDNArticles() {
    const [visible, setVisible] = useState(3)

    return (
        <div>
            <Typography
                variant="h4"
                gutterBottom
                sx={{ fontWeight: "bold", textAlign: "center", mb: 4 }}
            >
                Berita & Artikel
            </Typography>
            <Grid container spacing={4}>
                {articles.slice(0, visible).map((article, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <motion.div whileHover={{ scale: 1.03 }}>
                            <Card
                                sx={{
                                    borderRadius: 4,
                                    boxShadow: 3,
                                    height: 480,
                                    display: "flex",
                                    flexDirection: "column",
                                }}
                            >
                                <Box sx={{ p: 2 }}>
                                    <Typography
                                        variant="subtitle2"
                                        color="primary"
                                        sx={{ fontWeight: 600 }}
                                    >
                                        {article.header}
                                    </Typography>
                                </Box>

                                <CardMedia
                                    component="img"
                                    image={article.image}
                                    alt={article.title}
                                    sx={{
                                        height: 200,
                                        objectFit: "cover",
                                    }}
                                />

                                <CardContent
                                    sx={{
                                        flexGrow: 1,
                                        p: 2,
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "space-between",
                                    }}
                                >
                                    <div>
                                        <Typography
                                            variant="h6"
                                            gutterBottom
                                            sx={{
                                                fontWeight: 600,
                                                mb: 1.5,
                                                fontSize: "1rem",
                                                minHeight: "3em",
                                                overflow: "hidden",
                                                textOverflow: "ellipsis",
                                                display: "-webkit-box",
                                                WebkitLineClamp: 2,
                                                WebkitBoxOrient: "vertical",
                                            }}
                                        >
                                            {article.title}
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            color="text.secondary"
                                            sx={{
                                                lineHeight: 1.6,
                                                overflow: "hidden",
                                                textOverflow: "ellipsis",
                                                display: "-webkit-box",
                                                WebkitLineClamp: 3,
                                                WebkitBoxOrient: "vertical",
                                            }}
                                        >
                                            {article.description}
                                        </Typography>
                                    </div>
                                    <Box sx={{ mt: 2, display: "flex", justifyContent: "flex-end" }}>
                                        <Button
                                            variant="contained"
                                            size="medium"
                                            href={article.link}
                                            target="_blank"
                                            sx={{
                                                borderRadius: 3,
                                                textTransform: "none",
                                                backgroundColor: "#1976d2",
                                                color: "#fff",
                                                "&:hover": {
                                                    backgroundColor: "#1565c0",
                                                },
                                            }}
                                        >
                                            Pautan Berita
                                        </Button>
                                    </Box>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </Grid>
                ))}
            </Grid>
            {visible < articles.length && (
                <div className="flex justify-center mt-6">
                    <Button
                        variant="contained"
                        sx={{ borderRadius: 3, px: 4, py: 1.5 }}
                        onClick={() => setVisible(visible + 3)}
                    >
                        Load More
                    </Button>
                </div>
            )}
        </div>
    )
}
