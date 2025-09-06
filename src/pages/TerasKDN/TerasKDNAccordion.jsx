import { useState } from "react"
import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
    Card,
    CardMedia,
    CardContent
} from "@mui/material"

const data = [
    {
        title: "Teras 1 : Kedaulatan dan Keutuhan Wilayah",
        description: "Kedaulatan sesebuah negara boleh diterjemahkan melalui simbol antaranya garis sempadan, kekuasaan di sempadan, penyatuan rakyat dalam lingkungan kawasan sempadan, bila mana wilayah yang mereka diami menjadi milik negara dan mereka diiktiraf sebagai warganegara yang sah (Berg & Kuusk, 2010). Kedaulatan dan keutuhan wilayah haruslah dipelihara dan dikekalkan. Malaysia secara geografinya merangkumi tanah daratan dan sungai, kawasan perairan dan ciri maritim, ruang udara dan angkasa lepas, domain siber serta perairan laut wilayah dan hak-hak berdaulat ke atas zon maritim. Oleh itu, kedaulatan dan keutuhan wilayah menjadi teras utama dalam menentukan kestabilan dan keselamatan sesebuah negara termasuklah Malaysia. Dalam usaha untuk mempertahankan kedaulatan dan keutuhan wilayah; beberapa isu, cabaran dan ancaman keselamatan dikenal pasti bagi memperkasakan usaha melindungi kepentingan negara dari semasa ke semasa (Majlis Keselamatan Negara, 2021). Perkembangan alam siber turut memainkan peranan penting dalam mempertingkatkan sistem pertahanan negara yang berteknologi canggih dan efektif, yang mana ia akan mengukuhkan kedaulatan dan keutuhan wilayah.",
        image: "https://ikk.gov.my/wp-content/uploads/2024/01/Teras1.webp"
    },
    {
        title: "Teras 2 : Kestabilan Sosiopolitik",
        description: "Menurut Pusat Rujukan Persuratan Melayu (2022), sosiopolitik membawa maksud, berkaitan dengan atau melibatkan faktor-faktor kemasyarakatan dan politik. Kestabilan sosiopolitik merupakan Teras 2 yang ditekankan di dalam DKN 2021-2025. Teras ini merupakan aspek penting terutamanya dalam mewujudkan suasana aman serta harmoni dalam kalangan rakyat Malaysia. Kerajaan bertanggungjawab untuk memastikan perlembagaan Malaysia adalah terpelihara dan sentiasa dipandang tinggi dalam aspek menjunjung Raja Berperlembagaan, demokrasi berparlimen, keluhuran Perlembagaan, kedaulatan undang- undang, sistem pentadbiran Persekutuan, menghormati dan menjamin hak-hak asasi rakyat berdasarkan Perlembagaan Persekutuan. Pada masa yang sama, rakyat juga adalah bertanggungjawab untuk menyokong dasar-dasar yang dilaksanakan oleh kerajaan bagi memastikan keamanan dan kestabilan negara sentiasa terpelihara. Prinsip- prinsip tersebut perlu dihormati dan dipatuhi oleh semua lapisan rakyat Malaysia tanpa mengira fahaman politik, agama, etnik, asal usul dan status sosial. Perubahan pemikiran rakyat merupakan suatu perkara yang harus di lihat dari sudut keupayaan Malaysia dalam mengekalkan nilai-nilai asas negara berdasarkan Perlembagaan Persekutuan. Gelombang perubahan pemikiran disebabkan globalisasi, penggunaan meluas teknologi maklumat terkini dan peranti komunikasi, menyebabkan nilai-nilai global menjadi suatu kebiasaan yang telah dinormalisasikan sebagai budaya global. Perkara ini sedikit sebanyak telah mempengaruhi corak pemikiran dan tindak-tanduk rakyat berdasarkan pemikiran dan persepsi global mahupun pengaruh negara asing dalam kehidupan masyarakat. Keadaan ini termasuklah dari aspek pembentukan nilai politik dan nilai sosial yang sebelum ini asing dalam suasana di Malaysia, tetapi telah menjadi trend global terkini hari ini. Kepentingan kestabilan sosiopolitik terhadap keselamatan negara perlu diperkasakan dalam kalangan aktor politik, jentera kerajaan, pihak yang berkepentingan serta masyarakat secara keseluruhan. Justeru, aspek kestabilan sosiopolitik perlu diberi perhatian yang mendalam sebagai salah satu nilai/teras/domain keselamatan negara.",
        image: "https://ikk.gov.my/wp-content/uploads/2024/01/Teras2.webp"
    },
    {
        title: "Teras 3 : Kesepaduan Nasional",
        description: "Negara Malaysia dibentuk dengan acuan yang tersendiri dan unik dalam mencorakkan pembinaan negara bangsa yang membawa kepada kewujudan Perlembagaan Persekutuan 1957 sebagai dokumen perundangan utama negara. Justeru, permuafakatan dalam kalangan masyarakat Melayu, Bumiputera, Cina serta India telah melahirkan kontrak sosial yang mewakili semangat perpaduan masyarakat majmuk berlandaskan kepada perlembagaan (Mohd Azrone, 2018; Nazri Muslim, 2012). Dalam memacu pembangunan negara yang pesat, kesepaduan nasional yang menekankan kepada nilai-nilai murni adalah merupakan asas kepada pembinaan sebuah negara bangsa yang melibatkan masyarakat berbilang kaum. Walau bagaimanapun, agenda ini adalah merupakan satu cabaran yang bukan sahaja perlu dihadapi oleh Malaysia, malahan semua negara yang merdeka. Pepatah Melayu menyatakan “bulat air kerana pembetung, bulat manusia kerana muafakat”. Ianya membawa erti bahawa tanpa perpaduan dan permuafakatan, masyarakat akan hidup dalam suasana tidak aman dan berpecah belah. Peristiwa berdarah melibatkan rusuhan kaum yang berlaku pada 13 Mei 1969 telah membuktikan kepincangan perpaduan dalam kalangan masyarakat yang seterusnya menggugat perjanjian yang dipersetujui dalam kontrak sosial. Peristiwa ini juga dikatakan satu- satunya keganasan etnik berskala besar semenjak Malaysia mencapai kemerdekaan pada 1957. Justeru, peristiwa tersebut sering dijadikan asas pelaksanaan pelbagai dasar dan program untuk meminimakan jurang dalam hubungan etnik di Malaysia (Beh et al., 2021). Terdapat perdebatan yang menyatakan bahawa tragedi 13 Mei 1969 ini merupakan kesan daripada jajahan negara dan minda oleh penjajah yang berlaku suatu masa dahulu. Dasar pecah dan perintah yang diperkenalkan oleh British telah mewujudkan jurang yang besar dari aspek sosioekonomi dalam kalangan masyarakat Melayu, Bumiputera, Cina dan India (Bernama, 2019). Perbezaan taraf ekonomi antara kaum telah mencetuskan perasaan kurang senang dalam kalangan masyarakat sehingga mencetuskan perbalahan termasuk mempersoalkan hak-hak kewarganegaraan, mencaci institusi Raja Melayu dan mempertikaikan hak keistimewaan orang Melayu. Natijahnya, masyarakat berbilang kaum hidup dalam suasana berpecah belah dan semakin lama, wujud sifat kebencian di antara satu sama lain. Sejarah hitam ini merupakan suatu pengajaran penting kepada semua rakyat Malaysia agar terus bersatu- padu, saling menghormati dan hidup dalam keadaan harmoni tanpa mengira kaum dan bangsa (Wan Shahrudin & Zubir, 2020; A’Azmi et al., 2019; Sinar Harian, 2019). Sejarah juga telah mematangkan kita agar tidak mengulangi kesilapan yang sama yang telah merobek perpaduan masyarakat di dalam negara. Walaupun sejarah hitam 13 Mei 1969 telah berlalu semenjak lebih 50 tahun dahulu, namun pihak kerajaan tidak pernah mengambil mudah dalam menangani isu perpaduan di Malaysia (Nasir & Ahmad, 2009).",
        image: "https://ikk.gov.my/wp-content/uploads/2024/01/Teras3.webp"
    },
    {
        title: "Teras 4 : Tatakelola/Tadbir Urus Yang Baik",
        description: "Nilai teras tatakelola/tadbir urus yang baik atau good governance perlu didokong oleh pelbagai pihak dalam memastikan kedaulatan, keselamatan dan keamanan negara sentiasa terpelihara. Berdasarkan The Cadbury Report (1992), tadbir urus didefinisikan sebagai satu sistem di mana organisasi diarah dan dikawal. Amalan konsep tatakelola/tadbir urus yang baik ini telah mendapat perhatian Pertubuhan Bangsa-Bangsa Bersatu (PBB), Tabung Kewangan Antarabangsa dan Bank Dunia dalam merencana pembangunan yang mampan (Mohd Gunawan, 2019). Melalui pembangunan konsep tatakelola/tadbir urus yang baik, ianya dilihat membantu meningkatkan akauntabiliti dan legitimasi sesebuah organisasi (Norhaslinda, 2019), integriti dan ketelusan, serta seterusnya memastikan kelangsungan institusi tadbir korporat Malaysia di seluruh dunia (Nina & SM, 2019). Menurut Nina dan SM (2019), krisis kewangan yang berlaku pada tahun 1997 telah menjadi pemangkin kepada pembaharuan tatakelola/tadbir urus di Malaysia. Secara amnya, konsep good governance ini telah mula dipraktikkan oleh sektor swasta di Malaysia melalui pengenalan Kod Tatakelola/Tadbir Urus Korporat Malaysia (MCCG) pada tahun 2000 (Suruhanjaya Sekuriti, 2021). Mengambil kira pelaksanaan konsep good corporate governance yang memberi impak yang baik, sektor awam juga telah mula mempraktikkan tatakelola/tadbir urus yang baik melalui Garis Panduan Bagi Meningkatkan Tatakelola/Tadbir Urus Dalam Sektor Awam pada 9 Mac 2007. Namun, keperluan tatakelola/tadbir urus yang baik bukan berpaksi kepada sektor awam dan swasta sahaja, malah sektor Non-Government Organisations (NGO) atau Pertubuhan Bukan Kerajaan termasuk orang awam, media, serta kumpulan akademik atau civil society turut berperanan penting dalam pembangunan negara dengan matlamat untuk memperbaiki taraf kualiti hidup masyarakat (Mohd Sidek, 2007).",
        image: "https://ikk.gov.my/wp-content/uploads/2024/01/Teras4.webp"
    },
    {
        title: "Teras 5 : Keutuhan Ekonomi",
        description: "Nilai teras ke-5 yang terdapat dalam Dasar Keselamatan Negara (DKN) adalah merujuk kepada keutuhan ekonomi. Definisi bagi keutuhan ekonomi menurut DKN 2021-2025, adalah negara yang mempunyai ekonomi yang mampan serta berdaya tahan terhadap ancaman-ancaman berkaitan ekonomi dari dalam dan luar negara. Keselamatan ekonomi merupakan aspek penting yang perlu diberikan keutamaan bagi menjamin keutuhan ekonomi dan kesejahteraan rakyat (Libat Urus, Kementerian Perdagangan Antarabangsa dan Industri Malaysia, 2022). Pada tahun 1998, negara Malaysia telah berhadapan dengan kemelesetan ekonomi susulan daripada krisis kewangan oleh negara- negara Asia Tenggara seperti Thailand dan Indonesia pada tahun 1997. Pada waktu tersebut kedudukan ekonomi dan nilai Ringgit Malaysia pada ketika itu berada di tahap yang rendah iaitu sekitar 7%, susulan daripada kemerosotan Keluaran Dalam Negara Kasar (KDNK). Krisis kewangan ini telah memberi impak yang besar terhadap ekonomi negara, di mana negara kita tidak berupaya menanggung bebanan hutang yang tinggi pada ketika itu (Mun, 2000). Justeru, untuk mengelakkan implikasi serta kesan yang buruk susulan daripada krisis kewangan global, Malaysia harus bertindak agresif dalam meningkatkan ekonomi eksport dan domestik bagi menjamin kestabilan ekonomi di negara kita. Realitinya, tidak semua negara mampu mencapai pertumbuhan ekonomi yang mampan seperti mana yang diinginkan. Pelbagai isu dan cabaran timbul dalam usaha untuk mengukuhkan kestabilan ekonomi. Tidak hanya berfokus kepada negara Malaysia, negara membangun atau negara maju juga tidak terkecuali daripada menghadapi cabaran dalam pemantapan ekonomi.",
        image: "https://ikk.gov.my/wp-content/uploads/2024/01/Teras5.webp"
    },
    {
        title: "Teras 6 : Keadilan Sosial",
        description: "Malaysia merupakan sebuah negara yang berbilang kaum atau sinonim sebagai masyarakat majmuk serta telah mencecah usia lebih enam dekad. Disebabkan oleh kepelbagaian yang ada di dalam negara, prinsip dan elemen kesamarataan dan keadilan dalam pelbagai aspek perlu diberikan penekanan demi menjaga keharmonian masyarakat dan kesejahteraan negara (Faiz, 2020). Siti Noor Atikah, Ahmad Sunawari dan Yusri (2021), menyatakan bahawa keadilan merupakan prinsip yang sangat penting dalam mewujudkan keseimbangan, keharmonian dan keselarasan dalam kehidupan manusia yang berbilang kaum, bangsa dan agama. Sekiranya elemen ini tidak diberikan penekanan, negara akan berhadapan dengan pelbagai masalah seperti diskriminasi jantina dan bangsa, ketidakstabilan ekonomi dan sebagainya (Sinar Harian, 2020c). Secara ringkasnya, sesebuah negara yang demokrasi haruslah berpaksikan kepada keadilan sosial yang wujud di negara tersebut. Selain daripada tadbir urus yang baik dan kedaulatan undang-undang, aspek keadilan sosial juga dianggap sebagai salah satu tunjang utama kepada pembentukan sesebuah negara yang selamat. Perbincangan mengenai aspek keadilan sosial ini sering kali didengari dan telah menjadi perbualan hangat sejak berkurun lalu oleh semua bangsa manusia yang terdiri daripada pelbagai golongan (Siti Noor Atikah, Ahmad Sunawari & Yusri, 2021); malahan, ianya juga menjadi tuntutan utama golongan masyarakat sehingga kini.",
        image: "https://ikk.gov.my/wp-content/uploads/2024/01/Teras6.webp"
    },
    {
        title: "Teras 7 : Pembangunan Mampan",
        description: "Pembangunan mampan merupakan Teras ke-7 dalam DKN 2021-2025 di mana ianya merupakan agenda global yang perlu diberikan penekanan dalam mengukur keselamatan negara. Hal ini kerana, pembangunan negara yang mampan dapat menjamin kelangsungan sumber negara, kesejahteraan rakyat serta memastikan sumber negara dapat dinikmati oleh generasi akan datang. Dalam memacu pembangunan negara yang mampan, penekanan kepada pembangunan ekonomi perlu diseimbangkan dengan aspek sosial dan penjagaan alam sekitar. Justeru, dalam konteks menjaga keselamatan negara, agenda pembangunan mampan boleh menjadi kekuatan negara yang seterusnya akan berperanan sebagai pelengkap dan perlu diberikan keutamaan (Smiljanic, 2016). Kajian berkaitan dengan integrasi konsep pembangunan mampan dan keselamatan negara telah mula dibincangkan dalam literatur pada sekitar tahun 2000, terutamanya melibatkan aspek keselamatan persekitaran dan keselamatan sumber tenaga (Smiljanic, 2016). Kajian Jalaluddin (2015) turut menyatakan bahawa pembangunan mampan perlu mengambil kira semua aspek pembangunan yang merujuk kepada singkatan “PEDSITELE”— politik dan pentadbiran, ekonomi, demografi, sosio-budaya, infrastruktur, teknologi dan inovasi, pendidikan, perundangan dan alam sekitar. Dalam erti kata lain, semua aspek penting dalam pembangunan negara perlu diberi perhatian agar pembangunan yang dirancang lebih menyeluruh, seimbang dan mampan.",
        image: "https://ikk.gov.my/wp-content/uploads/2024/01/Teras7.webp"
    },
    {
        title: "Teras 8 : Keselamatan Rakyat",
        description: "Sesungguhnya, faktor keselamatan merupakan salah satu tonggak penting dan menjadi asas kepada kejayaan setiap insan dalam mengekalkan kemerdekaan, keamanan dan kesejahteraan negara. Keselamatan yang terjamin mampu membuatkan masyarakat berasa selamat berada dalam negara. Pertumbuhan serta percambahan idea dan persekitaran keselamatan dunia menyaksikan perubahan yang berlaku daripada pendekatan keselamatan berpaksikan negara (state centric security) kepada pendekatan keselamatan berpaksikan insan (people centric security). Penekanan terhadap people centric security akan memberi ruang secara langsung kepada penglibatan masyarakat dalam merencana program bagi menjaga keselamatan dalam negara, serta melindungi keluarga tercinta. Aspek kesejahteraan, kebajikan dan hak-hak rakyat Malaysia sentiasa terletak di bawah Perlembagaan Persekutuan serta perlu dilindungi dan dijamin oleh kerajaan. Pada masa yang sama, hak-hak negara juga perlu didukung dan dipertahankan oleh rakyat dengan penuh semangat patriotik dan rasa tanggungjawab terhadap keselamatan dan kelangsungan negara. Keadaan ini menunjukkan rakyat juga perlu berusaha dan bekerjasama dalam menjaga keselamatan dan bukan hanya meletakkan tanggungjawab tersebut kepada pihak kerajaan. Aspek keselamatan insan ditadbir urus secara menyeluruh melalui pengurusan elemen-elemen berkenaan di pelbagai bidang yang merentas sektor dan hirarki pentadbiran serta struktur masyarakat. Melalui tadbir urus keselamatan insan yang cekap, kemakmuran yang dikecapi bukan sahaja dinikmati oleh rakyat Malaysia, tetapi akan menyumbang kepada seluruh ketamadunan manusia (Dasar Keselamatan Negara 2021-2025).",
        image: "https://ikk.gov.my/wp-content/uploads/2024/01/Teras8.webp"
    },
    {
        title: "Teras 9 : Pengiktirafan Antarabangsa",
        description: "Teras 9 merujuk kepada ‘Pengiktirafan Antarabangsa’ di dalam DKN 2021- 2025 yang menyatakan bahawa Malaysia sentiasa mengamalkan sikap pragmatik, berprinsip dan berkecuali berjaya menjamin pengiktirafan dan kerjasama yang berterusan dengan kuasa-kuasa besar serantau dan antarabangsa dalam pelbagai aspek termasuklah politik, ekonomi serta keselamatan. Pelaksanaan dasar-dasar luar negara yang memayungi strategi diplomasi dua hala dan pelbagai hala turut menyemarakkan lagi jalinan kerjasama yang konsisten. Hasilnya, imej dan reputasi positif terhadap Malaysia dapat diwujudkan di peringkat antarabangsa, sekali gus menjamin pengiktirafan berterusan terhadap kedaulatan dan kepentingan negara. Proses pembentukan regionalisme Asia Tenggara adalah proses pembentukan persefahaman dan kerjasama di antara negara dalam wilayah yang muncul pada era 1950- an dan 1960-an. Faktor utama yang menjadi pendorong kepada pembentukan regionalisme adalah hasil daripada kestabilan politik serantau, matlamat keamanan, penyelesaian konflik serantau, jaminan keselamatan, pembangunan ekonomi dan kerjasama antara negara serta bertindak secara bersama khususnya dalam isu-isu yang melibatkan keserantauan (Huxley, 2008). Pembentukan regionalisme melibatkan gabungan antara negara- negara serantau dalam memperlihatkan pendapat, cadangan, pendekatan dan pendirian yang mewakili negara-negara anggota. Dalam usaha membentuk gabungan negara- negara tersebut ianya memerlukan persefahaman antara negara agar dapat bersatu padu, bekerjasama dan saling menghormati antara negara serantau. Pembentukan organisasi serantau berperanan penting dalam menyelesaikan konflik sempadan, isu kedaulatan dan pencerobohan wilayah serta perebutan pulau dan isu lain.",
        image: "https://ikk.gov.my/wp-content/uploads/2024/01/Teras9.webp"
    },
]

export default function TerasKDNAccordion() {
    const [expanded, setExpanded] = useState(false)

    const handleChange = (panel) => (_, isExpanded) => {
        setExpanded(isExpanded ? panel : false)
    }

    return (
        <div className="mb-10">
            <Typography
                variant="h4"
                gutterBottom
                sx={{ fontWeight: "bold", textAlign: "center", mb: 4 }}
            >
                Teras
            </Typography>
            {data.map((item, i) => (
                <Accordion
                    key={i}
                    expanded={expanded === i}
                    onChange={handleChange(i)}
                    sx={{
                        boxShadow: 3,
                        overflow: "hidden",
                        "&:before": { display: "none" },
                        marginBottom: 2
                    }}
                >
                    <AccordionSummary
                        expandIcon={
                            <motion.div
                                animate={{ rotate: expanded === i ? 180 : 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <ChevronDown size={20} />
                            </motion.div>
                        }
                        sx={{
                            background:
                                "linear-gradient(90deg, #6a1b9a 0%, #9c27b0 100%)",
                            color: "white",
                            fontWeight: "600",
                            "&:hover": {
                                background:
                                    "linear-gradient(90deg, #4a148c 0%, #7b1fa2 100%)"
                            }
                        }}
                    >
                        <Typography>{item.title}</Typography>
                    </AccordionSummary>

                    <AccordionDetails>
                        <Card elevation={0}>
                            {item.image && (
                                <CardMedia
                                    component="img"
                                    image={item.image}
                                    alt={item.title}
                                    sx={{
                                        width: "100%",
                                        height: 400,
                                        borderRadius: 2,
                                        marginBottom: 4,
                                        objectFit: "cover",
                                        objectPosition: "center"
                                    }}
                                />

                            )}
                            <CardContent sx={{ pt: 0 }}>
                                <Typography variant="body2" color="text.secondary">
                                    {item.description}
                                </Typography>
                            </CardContent>
                        </Card>

                    </AccordionDetails>
                </Accordion>
            ))}
        </div>
    )
}
