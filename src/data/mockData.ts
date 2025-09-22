import { Word, Story, Quest, UserProgress } from '../types';

export const mockWords: Word[] = [
  {
    id: '1',
    indigenous: 'Selamat pagi',
    english: 'Good morning',
    pronunciation: 'se-la-mat pa-gi',
    category: 'greetings',
    cultural_context: 'Traditional morning greeting used when the sun rises, often accompanied by a gentle bow of respect.',
    language: 'temiar'
  },
  {
    id: '2',
    indigenous: 'Rimba',
    english: 'Forest',
    pronunciation: 'rim-ba',
    category: 'nature',
    cultural_context: 'Sacred space where ancestors dwell. The forest provides everything needed for life and must be respected.',
    language: 'temiar'
  },
  {
    id: '3',
    indigenous: 'Tok Batin',
    english: 'Village Elder',
    pronunciation: 'tok ba-tin',
    category: 'people',
    cultural_context: 'Respected leader who holds traditional knowledge and guides the community in important decisions.',
    language: 'temiar'
  },
  {
    id: '4',
    indigenous: 'Gendang',
    english: 'Traditional drum',
    pronunciation: 'gen-dang',
    category: 'music',
    cultural_context: 'Sacred instrument used in ceremonies to communicate with spirits and celebrate important events.',
    language: 'temiar'
  },
  {
    id: '5',
    indigenous: 'Padi',
    english: 'Rice',
    pronunciation: 'pa-di',
    category: 'food',
    cultural_context: 'Life-giving grain that connects the community to the earth. Planting and harvesting involve sacred rituals.',
    language: 'temiar'
  },
  {
    id: '6',
    indigenous: 'Hantu',
    english: 'Spirit',
    pronunciation: 'han-tu',
    category: 'spiritual',
    cultural_context: 'Ancestral spirits that protect the forest and guide the living. Must be honored with proper ceremonies.',
    language: 'temiar'
  },
  {
    id: '7',
    indigenous: 'Sungai',
    english: 'River',
    pronunciation: 'su-ngai',
    category: 'nature',
    cultural_context: 'Life source that flows through the heart of the village, providing water, fish, and spiritual cleansing.',
    language: 'temiar'
  },
  {
    id: '8',
    indigenous: 'Bomoh',
    english: 'Shaman/Healer',
    pronunciation: 'bo-moh',
    category: 'people',
    cultural_context: 'Spiritual healer who bridges the world of the living and spirits, using traditional medicine and rituals.',
    language: 'temiar'
  }
];

export const mockStories: Story[] = [
  {
    id: '1',
    title: 'Penjaga Pokok Purba',
    content: `Dahulu kala, di tengah-tengah hutan yang lebat dan hijau, terdapat sebatang pokok yang sangat megah dan tua. Pokok ini lebih tua daripada ingatan manusia, bahkan lebih tua daripada cerita-cerita yang diturunkan oleh nenek moyang. Batangnya begitu besar sehingga diperlukan dua puluh orang untuk memeluknya, dan cabang-cabangnya menjulang tinggi hingga menyentuh awan.

Pokok ini bukan sekadar tumbuhan biasa. Ia adalah rumah kepada roh yang sangat kuat bernama Mak Minah, seorang penjaga yang telah melindungi hutan selama berabad-abad. Mak Minah muncul sebagai seorang wanita tua yang bijaksana dengan rambut putih panjang yang berkilauan seperti cahaya bulan. Matanya bersinar dengan kebijaksanaan ribuan tahun, dan suaranya lembut seperti angin yang bertiup melalui daun-daun.

Setiap makhluk di hutan menghormati pokok ini. Burung-burung tidak pernah membuat sarang di cabangnya tanpa meminta izin terlebih dahulu. Harimau dan gajah akan membungkuk hormat ketika melewatinya. Bahkan semut-semut kecil akan berjalan mengelilingi akarnya dengan penuh rasa hormat.

Suatu hari, seorang pemburu muda bernama Jalil datang ke hutan. Dia adalah seorang yang sombong dan tidak percaya pada cerita-cerita lama. "Ini hanya dongeng nenek moyang," katanya sambil tertawa. "Pokok hanyalah pokok. Tidak ada roh atau penjaga."

Jalil melihat pokok besar itu dan matanya berbinar-binar. "Pokok sebesar ini pasti bernilai banyak wang jika dijual," fikirnya. Dia pulang ke kampung dan mengambil kapak yang tajam, berencana untuk menebang pokok itu keesokan harinya.

Malam itu, Mak Minah muncul dalam mimpi Jalil. "Wahai anak muda," katanya dengan suara yang penuh kasih sayang, "janganlah kamu sakiti pokok ini. Ia bukan hanya tempat tinggalku, tetapi juga sumber kehidupan bagi seluruh hutan."

Tetapi Jalil mengabaikan mimpi itu. Pagi-pagi buta, dia pergi ke hutan dengan kapaknya. Ketika dia mulai mengayunkan kapak ke batang pokok, tiba-tiba seluruh hutan menjadi senyap. Tidak ada bunyi burung, tidak ada bunyi serangga, bahkan angin pun berhenti bertiup.

Kemudian, Mak Minah muncul di hadapannya. Kali ini bukan dalam mimpi, tetapi dalam bentuk sebenar. Wajahnya tidak marah, tetapi penuh dengan kesedihan. "Mengapa kamu mahu memusnahkan rumahku?" tanyanya.

Jalil terkejut dan hampir terjatuh. "Siapa... siapa kamu?"

"Aku adalah penjaga pokok ini dan seluruh hutan. Aku telah hidup di sini sejak zaman nenek moyangmu yang pertama. Pokok ini bukan sekadar kayu, anak muda. Ia adalah jantung hutan."

Mak Minah kemudian menunjukkan kepada Jalil keajaiban pokok itu. Dia menyentuh batang pokok, dan tiba-tiba Jalil dapat melihat akar-akar yang menyebar ke seluruh hutan, menghubungkan setiap tumbuhan, setiap pokok, setiap bunga. Dia dapat melihat bagaimana pokok itu memberikan nutrien kepada tumbuhan lain, bagaimana ia menyimpan air untuk musim kemarau, dan bagaimana ia menjadi tempat berlindung bagi ribuan makhluk.

"Lihatlah," kata Mak Minah, "jika kamu tebang pokok ini, bukan sahaja aku yang akan mati. Seluruh hutan akan layu. Sungai akan kering. Haiwan-haiwan akan kehilangan tempat tinggal. Dan akhirnya, kampungmu juga akan terjejas."

Jalil melihat dengan mata kepalanya sendiri bagaimana kehidupan di hutan saling berkaitan. Dia melihat bagaimana lebah bergantung pada bunga, bagaimana bunga bergantung pada pokok, bagaimana pokok bergantung pada tanah, dan bagaimana tanah bergantung pada akar-akar besar pokok purba itu.

Air mata mengalir di pipi Jalil. "Maafkan saya, Mak Minah. Saya tidak tahu. Saya fikir pokok hanyalah kayu."

Mak Minah tersenyum dengan lembut. "Sekarang kamu faham, anak muda. Setiap makhluk di dunia ini mempunyai peranan. Tidak ada yang sia-sia, tidak ada yang tidak penting. Kita semua adalah sebahagian daripada satu keluarga besar."

Dari hari itu, Jalil menjadi pelindung hutan. Dia mengajar anak-anak kampung tentang kepentingan menjaga alam. Dia menjadi seperti Mak Minah, seorang penjaga yang memastikan keharmonian antara manusia dan alam.

Dan pokok purba itu terus berdiri megah, melindungi hutan dan semua makhluk di dalamnya, dengan Mak Minah sebagai penjaganya yang setia.`,
    moral: 'Menghormati alam membawa keharmonian dan perlindungan. Setiap makhluk hidup mempunyai peranan penting dalam ekosistem kehidupan.',
    category: 'myth',
    difficulty: 'beginner',
    language: 'temiar'
  },
  {
    id: '2',
    title: 'Sungai Yang Bernyanyi',
    content: `Pada zaman dahulu kala, di sebuah kampung Orang Asli yang terletak di kaki bukit, mengalir sebuah sungai yang sangat istimewa. Sungai ini tidak seperti sungai-sungai lain, kerana ia mempunyai suara yang paling merdu di dunia. Setiap pagi, ketika matahari mula terbit, sungai itu akan menyanyikan lagu-lagu yang begitu indah sehingga semua orang di kampung akan bangun dengan senyuman di wajah mereka.

Lagu-lagu sungai itu bukan sekadar bunyi air yang mengalir. Ia adalah melodi yang mempunyai kuasa ajaib. Ketika seseorang sakit, mereka hanya perlu duduk di tebing sungai dan mendengar nyanyiannya. Dalam masa beberapa minit, penyakit mereka akan sembuh. Ketika musim kemarau tiba dan tanaman mula layu, sungai akan menyanyikan lagu khas yang dapat memanggil hujan dari langit.

Tok Wan, ketua kampung yang bijaksana, sering bercerita kepada cucu-cucunya tentang asal-usul sungai ajaib itu. "Dahulu," katanya sambil membelai janggut putihnya, "sungai ini adalah tempat tinggal seorang puteri bunian bernama Siti Dewi. Dia mempunyai suara yang paling indah di alam bunian, dan dia memilih untuk tinggal di sungai ini untuk melindungi kampung kita."

Anak-anak kampung sangat menyayangi sungai itu. Mereka akan datang setiap petang untuk mendengar nyanyiannya sambil bermain di tebing. Sungai itu juga menyayangi mereka. Ketika mereka bernyanyi bersama-sama, suara sungai akan menjadi lebih merdu, seolah-olah ia gembira mendengar suara kanak-kanak.

Suatu hari, seorang pedagang kaya dari bandar datang ke kampung itu. Namanya Encik Tamak, dan dia terkenal kerana sifatnya yang sangat rakus. Ketika dia mendengar tentang sungai yang bernyanyi, matanya berbinar-binar memikirkan keuntungan yang boleh dia perolehi.

"Sungai yang boleh menyembuhkan orang sakit?" katanya sambil mengusap dagunya. "Ini adalah peluang emas! Aku boleh menangkap suara sungai ini dan menjualnya kepada orang kaya di bandar. Mereka pasti sanggup membayar jutaan ringgit untuk mendapatkan ubat ajaib ini."

Encik Tamak pulang ke bandar dan membawa peralatan canggih - mikrofon yang sangat sensitif, mesin perakam digital, dan botol-botol khas yang katanya boleh menyimpan bunyi. Dia juga membawa beberapa orang pekerja untuk membantunya.

Keesokan harinya, Encik Tamak kembali ke kampung dengan lori besar yang sarat dengan peralatan. Dia memasang mikrofon di sepanjang sungai dan mula merakam suara nyanyian itu. Tetapi dia tidak berhenti di situ. Dia mahu menangkap suara itu secara fizikal.

"Suara ini pasti datang dari sesuatu di dalam air," katanya kepada pekerjanya. "Kita mesti cari sumber bunyi itu dan ambil ia."

Mereka mula mengorek dasar sungai, memasang jaring-jaring besar, dan menggunakan mesin penyedut untuk mengambil air sungai. Tok Wan dan penduduk kampung cuba menghalang mereka, tetapi Encik Tamak menunjukkan surat kebenaran palsu yang katanya dari kerajaan.

Pada mulanya, sungai masih bernyanyi, tetapi suaranya mula berubah. Lagu-lagu yang dahulunya merdu kini kedengaran sedih dan lemah. Air sungai mula keruh kerana aktiviti penggalian yang berterusan.

Hari demi hari, Encik Tamak dan pekerjanya terus bekerja. Mereka memasang pam besar untuk menyedut air, menggali lubang-lubang besar di dasar sungai, dan memasang perangkap di mana-mana. Mereka fikir suara itu datang dari sejenis ikan ajaib atau batu permata yang tersembunyi.

Kemudian, pada suatu pagi yang malang, sungai itu tiba-tiba menjadi senyap. Tidak ada lagi nyanyian yang merdu. Air yang dahulunya jernih kini menjadi keruh dan kotor. Ikan-ikan mula mati, dan tumbuhan di sepanjang tebing sungai mula layu.

Encik Tamak panik. "Di mana suara itu? Kenapa sungai tidak bernyanyi lagi?" dia menjerit kepada pekerjanya. Mereka terus menggali dan mencari, tetapi tidak menemui apa-apa.

Sementara itu, penduduk kampung mula jatuh sakit. Tanpa lagu penyembuh sungai, mereka tidak mempunyai ubat untuk penyakit mereka. Tanaman mereka mula mati kerana tidak ada lagu pemanggil hujan. Seluruh kampung diselubungi kesedihan.

Anak-anak kampung sangat sedih melihat sungai kesayangan mereka menjadi senyap. Mereka berkumpul di tebing sungai yang kini kotor dan mula menangis. "Sungai, kenapa kamu tidak bernyanyi lagi?" tanya seorang budak perempuan bernama Siti.

Tok Wan yang bijaksana kemudian berkata, "Anak-anak, mungkin sungai sedih kerana kita tidak menjaganya dengan baik. Mungkin jika kita bernyanyi untuknya, dia akan ingat bagaimana rasanya gembira."

Anak-anak itu kemudian duduk dalam bulatan di tebing sungai. Mereka mula bernyanyi lagu-lagu tradisional yang diajar oleh nenek moyang mereka. Suara mereka yang jernih dan ikhlas bergema di sepanjang sungai.

Pada mulanya, tidak ada apa-apa yang berlaku. Tetapi mereka terus bernyanyi dengan penuh harapan. Perlahan-lahan, air sungai mula bergerak dengan lebih lembut. Kemudian, seperti keajaiban, sungai itu mula mengeluarkan bunyi yang sangat perlahan - seperti bisikan yang lembut.

Anak-anak itu gembira dan bernyanyi dengan lebih kuat. Semakin kuat mereka bernyanyi, semakin jelas suara sungai itu. Akhirnya, sungai itu kembali bernyanyi dengan merdu seperti dahulu.

Encik Tamak yang melihat kejadian itu terkejut. Dia akhirnya faham bahawa suara sungai itu bukan datang dari sesuatu yang boleh diambil atau dijual. Ia datang dari kasih sayang dan hubungan yang murni antara sungai dan penduduk kampung.

Dengan muka yang merah kerana malu, Encik Tamak meminta maaf kepada Tok Wan dan semua penduduk kampung. Dia menggunakan wangnya untuk membersihkan sungai dan memulihkan keadaan seperti dahulu.

Dari hari itu, sungai itu kembali bernyanyi dengan indah. Tetapi sekarang, lagu-lagunya menjadi lebih bermakna kerana semua orang di kampung faham bahawa keindahan dan keajaiban alam tidak boleh dimiliki atau dijual. Ia hanya boleh dikongsi dengan kasih sayang dan rasa hormat.

Dan setiap petang, anak-anak kampung akan datang ke tebing sungai untuk bernyanyi bersama-sama dengan sungai kesayangan mereka, menciptakan harmoni yang indah antara manusia dan alam.`,
    moral: 'Sesetengah hadiah alam dimaksudkan untuk dikongsi dengan kasih sayang, bukan dimiliki atau dijual untuk keuntungan peribadi.',
    category: 'folktale',
    difficulty: 'intermediate',
    language: 'temiar'
  },
  {
    id: '3',
    title: 'Kebijaksanaan Burung Enggang',
    content: `Di sebuah kampung Orang Asli yang dikelilingi oleh hutan hujan tropika yang lebat, hiduplah seorang lelaki muda bernama Azlan. Dia adalah anak kepada Tok Batin kampung, dan kerana itu, dia merasa dirinya sangat pandai dan tahu segala-galanya tentang hutan. Setiap kali orang kampung bertanya tentang sesuatu, Azlan akan menjawab dengan yakin, walaupun kadang-kadang jawapannya tidak tepat.

"Aku tahu semua rahsia hutan ini," Azlan sering membanggakan diri. "Aku tahu di mana nak cari madu terbaik, aku tahu pokok mana yang mempunyai buah paling manis, dan aku tahu jalan pintas ke mana-mana sahaja dalam hutan ini."

Penduduk kampung yang lebih tua hanya tersenyum mendengar kebanggaan Azlan. Mereka tahu bahawa anak muda itu masih mempunyai banyak yang perlu dipelajari, tetapi mereka tidak mahu mematahkan semangatnya.

Suatu hari, ketika musim kemarau yang teruk melanda kawasan itu, semua sumber air di kampung mula kering. Telaga kampung yang biasanya penuh dengan air jernih kini tinggal lumpur. Sungai kecil yang mengalir di tepi kampung juga mula surut. Penduduk kampung mula bimbang kerana bekalan air mereka semakin berkurangan.

Tok Batin, ayah Azlan, memanggil semua lelaki dewasa dalam kampung untuk bermesyuarat. "Kita perlu mencari sumber air baru," katanya dengan wajah yang penuh kebimbangan. "Jika tidak, kita terpaksa berpindah ke tempat lain."

Azlan yang mendengar perbincangan itu segera berdiri. "Ayah, biar saya yang cari air. Saya tahu hutan ini seperti tapak tangan saya sendiri. Saya pasti boleh jumpa air dalam masa sehari sahaja."

Tok Batin memandang anaknya dengan penuh kasih sayang tetapi juga kebimbangan. "Azlan, mencari air dalam hutan bukanlah perkara mudah, terutama semasa musim kemarau. Mungkin lebih baik kita pergi beramai-ramai."

"Tidak perlu, Ayah," Azlan menjawab dengan yakin. "Percayalah pada saya. Saya akan buktikan bahawa saya layak menjadi pemimpin kampung ini suatu hari nanti."

Keesokan paginya, Azlan bersiap untuk pergi ke hutan. Dia membawa botol air, beberapa biji kurma, dan parang kecil. Sebelum dia pergi, neneknya, Tok Nenek Aminah, memanggilnya.

"Azlan, cucu nenek," kata Tok Nenek dengan suara yang lembut tetapi penuh nasihat. "Ingatlah, hutan ini penuh dengan guru. Setiap makhluk, setiap tumbuhan, setiap bunyi mempunyai sesuatu untuk diajar. Jangan terlalu bangga dengan pengetahuan sendiri. Kadang-kadang, kita perlu mendengar lebih daripada bercakap."

Azlan hanya mengangguk sambil tersenyum. Dalam hatinya, dia berfikir, "Nenek sudah tua. Apa yang dia tahu tentang mencari air?"

Azlan masuk ke dalam hutan dengan penuh keyakinan. Dia berjalan ke tempat-tempat yang dia fikir mungkin ada air - ke arah sungai lama yang kini kering, ke kawasan rendah yang biasanya lembap, dan ke tempat-tempat yang dia ingat pernah ada kolam kecil.

Tetapi setelah berjalan selama berjam-jam, dia tidak menemui setitik air pun. Matahari semakin terik, dan bekalan airnya sendiri semakin berkurangan. Azlan mula berasa risau, tetapi dia masih tidak mahu mengaku kalah.

"Pasti ada air di suatu tempat," dia berkata pada dirinya sendiri. "Aku hanya perlu cari lebih jauh lagi."

Ketika dia sedang berehat di bawah sebatang pokok besar, tiba-tiba dia mendengar bunyi yang kuat dari atas. Dia mendongak dan melihat seekor burung enggang besar yang hinggap di dahan pokok. Burung itu mempunyai paruh yang besar dan berwarna-warni, dan matanya yang tajam memandang Azlan dengan penuh perhatian.

"Wah, burung enggang," kata Azlan sambil tersenyum. "Kamu pasti tahu di mana ada air, kan? Tapi sayang kamu tidak boleh cakap."

Burung enggang itu tiba-tiba bersuara dengan suara yang jelas dan bijaksana, "Siapa kata aku tidak boleh cakap, anak muda?"

Azlan hampir terjatuh kerana terkejut. "Kamu... kamu boleh cakap?"

"Tentu sahaja aku boleh cakap," jawab burung enggang sambil mengembangkan sayapnya yang besar. "Aku adalah Datuk Enggang, penjaga kebijaksanaan hutan ini. Aku telah hidup di sini selama ratusan tahun dan melihat banyak anak muda seperti kamu yang datang ke hutan dengan penuh keangkuhan."

Azlan menelan air liur. "Datuk Enggang, saya sedang mencari air untuk kampung saya. Bolehkah Datuk tolong saya?"

Datuk Enggang menggelengkan kepalanya. "Kamu kata kamu tahu segala-galanya tentang hutan ini. Kenapa sekarang minta tolong?"

Azlan merasa malu, tetapi dia masih cuba mempertahankan dirinya. "Saya memang tahu hutan ini dengan baik. Cuma... cuma musim kemarau ini luar biasa teruk."

"Baiklah," kata Datuk Enggang dengan nada yang mencabar. "Jika kamu benar-benar tahu hutan ini, cuba kamu cari air sendiri. Aku akan perhatikan sahaja."

Azlan berasa yakin semula. Dia mula berjalan ke sana ke mari, mencari tanda-tanda air. Dia menggali tanah di beberapa tempat yang dia fikir mungkin ada air bawah tanah. Dia memanjat pokok-pokok tinggi untuk melihat dari atas. Tetapi setelah beberapa jam, dia masih tidak menemui apa-apa.

Ketika matahari mula terbenam, Azlan duduk di atas batu dengan wajah yang lesu dan kecewa. Badannya penat, tenggorokannya kering, dan dia mula berasa takut untuk pulang ke kampung dengan tangan kosong.

Datuk Enggang terbang turun dan hinggap di sebelah Azlan. "Bagaimana, anak muda? Sudah jumpa air?"

Azlan menggelengkan kepala dengan sedih. "Tidak, Datuk. Saya tidak jumpa apa-apa. Mungkin saya tidak sepandai yang saya sangka."

Datuk Enggang tersenyum dengan lembut. "Sekarang kamu mula belajar. Kebijaksanaan yang pertama adalah mengaku bahawa kita tidak tahu segala-galanya. Sekarang, adakah kamu mahu belajar cara sebenar untuk mencari air?"

Azlan mengangguk dengan bersemangat. "Ya, Datuk! Sila ajar saya."

"Baiklah," kata Datuk Enggang. "Tetapi kamu mesti berjanji untuk mendengar dengan teliti dan tidak menyampuk. Hutan ini penuh dengan guru, tetapi mereka hanya akan mengajar mereka yang sedia untuk belajar."

Azlan berjanji, dan Datuk Enggang mula mengajarnya. "Pertama, lihat semut-semut itu," kata Datuk Enggang sambil menunjuk ke arah barisan semut yang sedang berjalan. "Ke mana mereka pergi?"

Azlan memerhati dengan teliti. "Mereka semua berjalan ke arah yang sama, Datuk."

"Betul. Semut-semut selalu tahu di mana ada air. Mereka perlu air untuk koloni mereka. Ikut sahaja jejak mereka, dan kamu akan jumpa air."

Kemudian, Datuk Enggang menunjuk ke arah beberapa pokok. "Lihat daun-daun pokok itu. Yang mana satu lebih hijau dan segar?"

Azlan melihat dengan lebih teliti. "Yang di sebelah sana, Datuk. Daun-daunnya lebih hijau dan kelihatan lebih sihat."

"Tepat sekali. Pokok-pokok yang mempunyai akses kepada air akan kelihatan lebih sihat dan hijau, walaupun semasa musim kemarau. Akar mereka mungkin sampai ke sumber air bawah tanah."

Datuk Enggang terus mengajar Azlan tentang tanda-tanda lain. "Dengar bunyi serangga. Serangga tertentu hanya hidup berhampiran dengan air. Lihat tingkah laku burung-burung kecil - mereka akan terbang ke arah air pada waktu petang. Perhatikan di mana rumput masih hijau walaupun tempat lain sudah kering."

Azlan mendengar dengan penuh perhatian. Dia mula melihat hutan dengan mata yang baru. Dia sedar bahawa selama ini dia hanya melihat hutan secara kasar, tetapi tidak pernah memperhatikan detail-detail kecil yang penting.

"Sekarang," kata Datuk Enggang, "cuba kamu gunakan semua tanda-tanda ini untuk mencari air."

Azlan mula mengikut jejak semut. Dia perhatikan ke mana burung-burung kecil terbang. Dia dengar bunyi serangga dengan teliti. Perlahan-lahan, semua tanda-tanda itu membawanya ke arah yang sama - ke sebuah kawasan yang agak rendah di mana terdapat beberapa pokok besar dengan daun-daun yang masih hijau.

Ketika dia sampai ke kawasan itu, dia mula menggali tanah dengan berhati-hati. Setelah menggali sedalam kira-kira satu meter, tiba-tiba air jernih mula meresap keluar dari tanah!

"Datuk Enggang!" jerit Azlan dengan gembira. "Ada air! Saya jumpa air!"

Datuk Enggang tersenyum dengan bangga. "Bagus, anak muda. Tetapi ini bukan kamu yang jumpa air. Ini adalah semut, pokok, burung, dan serangga yang tunjukkan jalan kepada kamu. Kamu hanya perlu tahu cara mendengar ajaran mereka."

Azlan mengangguk dengan faham. "Saya faham sekarang, Datuk. Pengetahuan sejati bukan datang dari keangkuhan, tetapi dari kerendahan hati untuk belajar dari semua makhluk di sekeliling kita."

"Tepat sekali," kata Datuk Enggang. "Hutan ini adalah sekolah yang terbesar. Setiap makhluk adalah guru. Tetapi mereka hanya akan mengajar mereka yang datang dengan hati yang terbuka dan telinga yang sedia mendengar."

Azlan pulang ke kampung dengan berita gembira tentang sumber air baru. Tetapi yang lebih penting, dia pulang dengan kebijaksanaan baru. Dia tidak lagi membanggakan diri atau berlagak tahu segala-galanya. Sebaliknya, dia menjadi seorang yang suka bertanya dan belajar dari orang lain.

Dari hari itu, Azlan menjadi seorang pemimpin yang bijaksana. Dia selalu mendengar nasihat orang tua, dia belajar dari anak-anak kecil, dan dia sentiasa memperhatikan ajaran alam. Dan setiap kali dia menghadapi masalah, dia akan ingat kata-kata Datuk Enggang: "Pengetahuan sejati datang daripada mendengar semua guru di sekeliling kita."`,
    moral: 'Kerendahan hati membuka pintu kepada kebijaksanaan sejati. Alam adalah guru terbesar yang mengajar mereka yang sedia untuk mendengar.',
    category: 'proverb',
    difficulty: 'advanced',
    language: 'temiar'
  },
  {
    id: '4',
    title: 'Legenda Harimau Putih',
    content: `Pada zaman dahulu kala, di dalam hutan belantara yang sangat dalam, hiduplah seekor harimau yang sangat istimewa. Harimau ini tidak seperti harimau-harimau lain kerana bulunya berwarna putih bersih seperti salji, dengan jalur-jalur hitam yang berkilauan seperti permata. Matanya berwarna biru seperti langit yang jernih, dan langkahnya begitu anggun sehingga tidak mengeluarkan bunyi walaupun di atas daun-daun kering.

Harimau putih ini bernama Raja Rimba, dan dia adalah penjaga spiritual hutan yang paling suci. Dia mempunyai kuasa untuk berkomunikasi dengan semua makhluk hidup, dari semut yang paling kecil hingga gajah yang paling besar. Raja Rimba juga mempunyai kebijaksanaan yang luar biasa dan dapat melihat masa depan.

Di sebuah kampung Orang Asli yang terletak di pinggir hutan itu, hiduplah seorang gadis muda bernama Seri. Dia adalah anak kepada bomoh kampung, Tok Dukun Hakim, yang terkenal dengan ilmu perubatannya. Seri mempunyai hati yang sangat baik dan sentiasa membantu orang yang memerlukan.

Suatu hari, wabak penyakit aneh mula melanda kampung itu. Penyakit ini menyebabkan orang yang dijangkiti demam tinggi, batuk yang tidak berhenti, dan badan menjadi sangat lemah. Yang menakutkan, penyakit ini tidak dapat disembuhkan dengan ubat-ubatan tradisional yang biasa digunakan oleh Tok Dukun Hakim.

Satu demi satu, penduduk kampung mula jatuh sakit. Kanak-kanak menangis kerana demam, orang dewasa tidak dapat bekerja, dan orang tua menjadi sangat lemah. Tok Dukun Hakim cuba segala cara untuk menyembuhkan mereka, tetapi tidak ada ubat yang berkesan.

"Ayah," kata Seri kepada bapanya suatu malam, "mungkin kita perlu mencari ubat yang lebih kuat. Saya pernah dengar cerita tentang pokok ajaib di dalam hutan yang dapat menyembuhkan segala penyakit."

Tok Dukun Hakim menggelengkan kepala dengan sedih. "Anak, pokok itu memang wujud. Namanya Pokok Kehidupan, dan ia tumbuh di tengah-tengah hutan yang paling dalam. Tetapi untuk sampai ke sana, seseorang perlu melewati banyak bahaya. Lagipun, pokok itu dijaga oleh Raja Rimba, harimau putih yang sangat ganas."

"Ganas?" tanya Seri dengan hairan. "Tetapi bukankah harimau putih itu adalah penjaga yang baik?"

"Itulah masalahnya," jawab ayahnya. "Raja Rimba memang baik, tetapi dia hanya akan membenarkan orang yang benar-benar suci hati untuk mendekati Pokok Kehidupan. Jika seseorang mempunyai niat yang tidak baik, Raja Rimba akan menghalau mereka."

Seri berfikir sejenak. "Ayah, saya mahu cuba. Saya tidak dapat melihat orang kampung terus menderita."

Tok Dukun Hakim memandang anaknya dengan penuh kebimbangan. "Seri, perjalanan itu sangat berbahaya. Kamu perlu berjalan selama tiga hari tiga malam melalui hutan yang gelap. Ada banyak binatang buas, jurang yang dalam, dan roh-roh jahat yang akan cuba menghalang kamu."

"Saya tidak takut, Ayah," kata Seri dengan tegas. "Jika saya tidak cuba, siapa lagi yang akan tolong orang kampung kita?"

Akhirnya, dengan hati yang berat, Tok Dukun Hakim membenarkan Seri pergi. Dia memberikan anaknya beberapa azimat pelindung, bekalan makanan, dan doa-doa khas untuk keselamatan.

Keesokan paginya, Seri memulakan perjalanannya. Dia berjalan masuk ke dalam hutan dengan hati yang penuh keazaman. Pada hari pertama, dia menghadapi berbagai cabaran. Dia perlu menyeberangi sungai yang deras, memanjat bukit yang curam, dan berjalan melalui semak belukar yang tebal.

Ketika malam tiba, Seri berehat di bawah sebatang pokok besar. Tiba-tiba, dia mendengar bunyi auman yang menakutkan. Dari kegelapan hutan, muncul beberapa ekor serigala yang lapar. Mata mereka bersinar merah dalam kegelapan, dan mereka menunjukkan gigi-gigi yang tajam.

Seri ketakutan, tetapi dia ingat nasihat ayahnya. "Jika kamu menghadapi bahaya, jangan lari. Berdoa dan tunjukkan bahawa kamu tidak berniat jahat."

Seri duduk dengan tenang dan mula berdoa. Dia juga mengeluarkan sedikit makanannya dan meletakkannya di hadapan serigala-serigala itu. "Saya tidak mahu ganggu kalian," katanya dengan lembut. "Saya hanya mahu tolong orang kampung saya yang sakit. Jika kalian lapar, silakan ambil makanan saya."

Serigala-serigala itu terkejut dengan kebaikan Seri. Mereka mengendus makanan itu dan kemudian memandang Seri dengan mata yang lebih lembut. Ketua serigala itu kemudian menggonggong dengan nada yang berbeza - bukan auman yang menakutkan, tetapi bunyi yang seolah-olah berkata "terima kasih".

Serigala-serigala itu kemudian pergi dengan aman, dan Seri dapat tidur dengan nyenyak.

Pada hari kedua, Seri menghadapi cabaran yang lebih besar. Dia perlu menyeberangi jurang yang sangat dalam. Jambatan kayu yang lama sudah reput dan hampir putus. Ketika dia cuba menyeberang, papan kayu itu patah, dan dia hampir terjatuh ke dalam jurang.

Tiba-tiba, seekor burung helang besar terbang turun dan menawarkan diri untuk membawa Seri menyeberangi jurang itu. "Mengapa kamu mahu tolong saya?" tanya Seri.

"Kerana saya dapat melihat hati kamu yang suci," jawab burung helang itu. "Kamu tidak datang ke hutan untuk mencari keuntungan peribadi, tetapi untuk menolong orang lain."

Burung helang itu membawa Seri dengan selamat ke seberang jurang. Sebelum terbang pergi, dia berkata, "Teruskan perjalanan kamu, anak yang baik. Raja Rimba sudah menunggu."

Pada hari ketiga, Seri akhirnya sampai ke kawasan yang paling dalam dalam hutan. Di situ, dia melihat sebatang pokok yang sangat besar dan indah. Pokok itu bersinar dengan cahaya emas yang lembut, dan daun-daunnya berkilauan seperti permata. Di sekeliling pokok itu tumbuh pelbagai jenis bunga yang sangat harum.

Tetapi di hadapan pokok itu, duduk seekor harimau putih yang sangat besar dan gagah. Matanya yang biru memandang Seri dengan tajam, seolah-olah sedang menilai hatinya.

Seri berhenti pada jarak yang selamat dan membungkuk hormat. "Raja Rimba," katanya dengan suara yang bergetar sedikit kerana takut tetapi tetap tegas. "Saya datang ke sini bukan untuk diri saya sendiri. Kampung saya diserang wabak penyakit yang teruk. Banyak orang yang menderita, termasuk kanak-kanak kecil dan orang tua. Saya mohon izin untuk mengambil sedikit daun dari Pokok Kehidupan untuk menyembuhkan mereka."

Raja Rimba memandang Seri untuk masa yang lama tanpa berkata apa-apa. Kemudian, dengan suara yang dalam dan bijaksana, dia berkata, "Anak muda, banyak orang yang datang ke sini mencari Pokok Kehidupan. Tetapi kebanyakan mereka datang kerana tamak - mahu menjual daun-daun ajaib ini untuk menjadi kaya, atau mahu hidup kekal untuk diri mereka sendiri."

"Saya tidak mahu apa-apa untuk diri saya," jawab Seri dengan jujur. "Saya hanya mahu orang kampung saya sembuh dan sihat semula."

Raja Rimba berdiri dan berjalan perlahan mengelilingi Seri. "Sepanjang perjalanan kamu ke sini, kamu telah menunjukkan kebaikan hati. Kamu berkongsi makanan dengan serigala yang lapar walaupun kamu sendiri memerlukan makanan itu. Kamu berterima kasih kepada burung helang yang menolong kamu. Kamu tidak pernah menyakiti mana-mana makhluk di hutan ini."

Seri mendengar dengan penuh perhatian.

"Oleh kerana itu," sambung Raja Rimba, "saya akan benarkan kamu mengambil daun-daun dari Pokok Kehidupan. Tetapi ingat, gunakan daun-daun ini dengan bijaksana. Jangan sia-siakan, dan jangan gunakan untuk tujuan yang tidak baik."

Raja Rimba kemudian menggunakan cakarnya yang tajam untuk memetik beberapa helai daun dari Pokok Kehidupan. Daun-daun itu bersinar dengan cahaya hijau yang lembut dan mengeluarkan bau yang sangat harum.

"Terima kasih, Raja Rimba," kata Seri sambil menerima daun-daun itu dengan penuh rasa syukur. "Saya berjanji akan gunakan ini hanya untuk menyembuhkan orang yang sakit."

"Saya tahu kamu akan menepati janji," kata Raja Rimba sambil tersenyum. "Sekarang, pergilah. Orang kampung kamu memerlukan kamu."

Perjalanan pulang Seri menjadi lebih mudah kerana semua makhluk hutan yang dia temui sepanjang perjalanan datang membantunya. Serigala-serigala itu menghantar dia melewati kawasan mereka dengan selamat. Burung helang membawanya menyeberangi jurang sekali lagi. Bahkan gajah-gajah hutan membantu dia melalui kawasan yang sukar.

Ketika Seri sampai di kampung, dia segera pergi kepada ayahnya. Tok Dukun Hakim sangat gembira melihat anaknya pulang dengan selamat. Mereka segera menyediakan ubat dari daun-daun Pokok Kehidupan.

Keajaiban berlaku! Dalam masa beberapa jam setelah meminum ubat itu, orang-orang yang sakit mula sembuh. Demam mereka turun, batuk berhenti, dan tenaga mereka kembali. Dalam masa tiga hari, semua penduduk kampung telah sembuh sepenuhnya.

Penduduk kampung sangat berterima kasih kepada Seri. Mereka mengadakan kenduri besar untuk meraikan kesembuhan mereka dan keberanian Seri. Tetapi Seri tidak mahu dipuji berlebihan.

"Saya hanya melakukan apa yang patut," katanya dengan rendah hati. "Yang penting, semua orang sudah sihat semula."

Dari hari itu, Seri menjadi seorang bomoh yang sangat dihormati. Dia menggunakan ilmu yang dipelajari dari ayahnya dan kebijaksanaan yang diperoleh dari perjalanannya untuk menolong orang lain. Dan setiap kali dia menghadapi masalah yang sukar, dia akan ingat kata-kata Raja Rimba: "Hati yang suci dan niat yang baik adalah kunci kepada semua keajaiban."

Legenda mengatakan bahawa Raja Rimba masih menjaga Pokok Kehidupan hingga hari ini, dan dia akan sentiasa membantu mereka yang datang dengan hati yang suci untuk menolong orang lain.`,
    moral: 'Keberanian dan keikhlasan hati dapat mengatasi segala cabaran. Mereka yang menolong orang lain dengan niat yang suci akan sentiasa mendapat bantuan dari alam.',
    category: 'myth',
    difficulty: 'intermediate',
    language: 'temiar'
  },
  {
    id: '5',
    title: 'Misteri Gua Bercahaya',
    content: `Di kawasan pergunungan yang tinggi, tersembunyi sebuah gua yang sangat misteri. Gua ini tidak seperti gua-gua biasa kerana pada setiap malam bulan purnama, dinding-dinding gua itu akan bersinar dengan cahaya biru yang sangat indah. Cahaya itu bukan datang dari api atau lampu, tetapi dari kristal-kristal kecil yang tumbuh di dinding gua.

Orang kampung memanggil tempat itu "Gua Bintang" kerana cahaya kristal-kristal itu kelihatan seperti bintang-bintang di langit malam. Tetapi tidak semua orang berani pergi ke gua itu kerana terdapat banyak cerita seram tentangnya.

Ada yang berkata bahawa gua itu dijaga oleh roh nenek moyang yang sangat kuat. Ada pula yang percaya bahawa sesiapa yang masuk ke dalam gua itu tanpa izin akan hilang untuk selama-lamanya. Kerana itu, kebanyakan orang kampung mengelak dari pergi ke kawasan pergunungan itu, terutama pada malam bulan purnama.

Tetapi seorang anak muda bernama Farid tidak percaya pada cerita-cerita itu. Dia adalah anak kepada seorang saudagar yang kaya, dan dia selalu berfikir bahawa semua cerita tentang roh dan hantu hanyalah dongeng untuk menakutkan orang.

"Semua itu hanya karut," kata Farid kepada kawan-kawannya. "Mana ada roh atau hantu. Gua itu mungkin ada emas atau permata yang berharga. Itulah sebabnya orang tua-tua buat cerita seram supaya orang lain tidak pergi ambil harta itu."

Kawan-kawan Farid cuba memujuknya supaya tidak pergi ke gua itu. "Farid, jangan main-main dengan perkara yang kita tidak faham," kata salah seorang kawannya, Ahmad. "Tok Wan selalu pesan, jangan ganggu tempat-tempat yang suci."

Tetapi Farid hanya ketawa. "Kamu semua penakut. Aku akan pergi ke gua itu dan buktikan bahawa tidak ada apa-apa yang menakutkan di sana. Mungkin aku akan balik dengan kantung penuh emas!"

Pada malam bulan purnama yang berikutnya, Farid bersiap untuk pergi ke Gua Bintang. Dia membawa lampu suluh, tali, dan beg besar untuk mengisi harta yang dia jangka akan ditemui. Walaupun ibunya merayu supaya dia tidak pergi, Farid tetap degil.

"Jangan risau, Mak," katanya sambil tersenyum sombong. "Aku akan balik sebelum subuh dengan banyak kekayaan."

Farid memulakan pendakiannya ke pergunungan ketika matahari mula terbenam. Perjalanan itu tidak mudah kerana laluan ke gua itu curam dan berbatu. Tetapi Farid terus berjalan dengan penuh keazaman, didorong oleh ketamakan untuk mencari harta.

Setelah berjalan selama beberapa jam, akhirnya dia sampai ke mulut gua. Seperti yang diceritakan, dinding-dinding gua itu bersinar dengan cahaya biru yang indah. Kristal-kristal kecil yang menempel di dinding mengeluarkan cahaya yang lembut dan mempesona.

"Wah!" jerit Farid dengan gembira. "Ini pasti kristal yang sangat berharga! Aku akan kaya raya!"

Dia segera masuk ke dalam gua dan mula memetik kristal-kristal itu. Setiap kali dia menyentuh kristal, cahayanya menjadi semakin redup. Tetapi Farid tidak peduli. Dia terus mengisi begnya dengan kristal-kristal itu.

Ketika dia sedang sibuk mengumpul kristal, tiba-tiba dia mendengar suara yang dalam dan menggema di dalam gua. "Siapa yang berani mencuri harta pusaka nenek moyang?"

Farid terkejut dan hampir menjatuhkan begnya. Dia menoleh ke sekeliling tetapi tidak melihat sesiapa. "Siapa di sana?" tanyanya dengan suara yang bergetar sedikit.

"Aku adalah Datuk Gua, penjaga tempat suci ini," jawab suara itu. "Mengapa kamu ambil kristal-kristal yang telah dijaga selama berabad-abad?"

Farid cuba menguatkan hatinya. "Aku tidak percaya pada hantu atau roh. Kamu hanya cuba menakutkan aku supaya aku tidak ambil kristal-kristal ini."

Tiba-tiba, angin kencang mula bertiup di dalam gua. Cahaya kristal-kristal yang tinggal mula berkelip-kelip dengan cepat. Suhu di dalam gua menjadi sangat sejuk sehingga Farid dapat melihat nafasnya sendiri.

"Kamu masih tidak percaya?" tanya Datuk Gua. "Baiklah, aku akan tunjukkan kepada kamu apa yang berlaku kepada mereka yang tidak menghormati tempat suci."

Tiba-tiba, Farid melihat bayangan-bayangan di dinding gua. Bayangan-bayangan itu menunjukkan orang-orang yang pernah datang ke gua itu dengan niat yang sama seperti dia. Dia melihat bagaimana mereka tersesat di dalam gua dan tidak dapat keluar. Dia melihat bagaimana mereka menyesal kerana ketamakan mereka.

"Ini... ini tidak mungkin," kata Farid sambil bergetar ketakutan.

"Kristal-kristal ini bukan sekadar batu berharga," kata Datuk Gua. "Ia adalah cahaya arwah nenek moyang yang menjaga kampung di bawah sana. Setiap kristal mewakili satu arwah yang melindungi keturunan mereka dari bahaya."

Farid melihat dengan lebih teliti dan sedar bahawa setiap kristal yang dia ambil telah kehilangan cahayanya. "Maksud Datuk, aku telah..."

"Ya, kamu telah memadamkan cahaya pelindung kampung. Tanpa cahaya ini, kampung akan diserang oleh roh-roh jahat dan bencana alam."

Farid tiba-tiba berasa sangat bersalah. Dia teringat pada keluarganya, kawan-kawannya, dan semua orang di kampung yang mungkin akan terjejas kerana perbuatannya.

"Datuk, saya minta maaf," kata Farid sambil menangis. "Saya tidak tahu. Saya hanya mahu kaya. Bagaimana saya boleh betulkan kesalahan ini?"

Datuk Gua diam sejenak. "Masih ada cara untuk memulihkan cahaya kristal-kristal itu. Tetapi kamu mesti sanggup berkorban."

"Apa sahaja, Datuk. Saya sanggup buat apa sahaja untuk betulkan kesalahan saya."

"Kamu mesti tinggal di gua ini selama tujuh hari tujuh malam. Setiap hari, kamu mesti berdoa dan meminta maaf kepada arwah nenek moyang. Kamu mesti puasa dan hanya minum air dari mata air suci di dalam gua. Jika kamu berjaya, cahaya kristal akan kembali."

Farid mengangguk dengan tegas. "Saya akan buat, Datuk."

Tujuh hari tujuh malam yang berikutnya adalah masa yang paling sukar dalam hidup Farid. Dia tidak makan apa-apa, hanya minum air dari mata air suci. Dia berdoa tanpa henti dan meminta maaf kepada arwah nenek moyang. Dia berfikir tentang kesombongan dan ketamakannya, dan berjanji untuk ber
