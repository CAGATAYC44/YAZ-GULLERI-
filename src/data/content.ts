export type NavLink = {
  label: string;
  href: string;
};

export const navLinks: NavLink[] = [
  { label: "Eserler", href: "#eserler" },
  { label: "Hakkında", href: "#hakkinda" },
  { label: "Okuyuculardan", href: "#okuyuculardan" },
  { label: "İletişim", href: "#iletisim" },
];

export const contactBadge = {
  label: "Kitabı Sipariş Et",
  href: "#iletisim",
};

export type HeroVideo = {
  id: string;
  label: string;
  src: string;
  dotColor: string;
};

export const heroVideos: HeroVideo[] = [
  {
    id: "gul-bahcesi",
    label: "Gül Bahçesi",
    src: "/videos/gul-bahcesi.mp4",
    dotColor: "#C86D51",
  },
  {
    id: "editorden",
    label: "Editörden",
    src: "/videos/editorden.mp4",
    dotColor: "#F9F8F6",
  },
  {
    id: "misralar",
    label: "Mısralar",
    src: "/videos/misralar.mp4",
    dotColor: "#C86D51",
  },
];

export const availabilityBadge = "Yakında";

export const authorName = "Gülşen Mete";
export const bookYear = "2026";

export const heroTitle = {
  lines: ["YAZ GÜLLERİ"],
  punctuation: ".",
};

export const heroParagraph =
  "Her mısra, bir yaz akşamının son ışığında açan bir gül gibi kendini yavaşça ele verir. “Yaz Gülleri”, Gülşen Mete'nin kaleminden aşkın, kaybın ve yeniden doğuşun izinde ilerleyen 189 şiirden oluşan bir “Kırgın Çiçekler” bahçesidir — sayfalar arasında dolaşırken zamanın nasıl yavaşladığını hissedeceksiniz.";

export const ctaLabel = "Kitabı Sipariş Et";

export const bookMockup = {
  src: "/kitap-mockup.png",
  alt: "Yaz Gülleri şiir kitabı kapak mockupı",
};

export const bookShowcase = {
  eyebrow: "YENİ · 2026",
  title: "YAZ GÜLLERİ",
  description:
    "Yüz seksen dokuz mısrayla dokunmuş, kırgın çiçeklerle dolu yürekten bir yolculuk. Gülşen Mete'nin yarım asırlık gurbetinden hayat, sevgi ve nihayete dönüşen dizeler.",
  poemExcerpt:
    "“Kuzeyin karlarında açan her kırgın çiçek, en sonunda kendi yazına kavuşur...”",
  details: [
    { label: "Yazar", value: authorName },
    { label: "Tür", value: "Aşk Şiirleri" },
    { label: "Şiir Sayısı", value: "189" },
    { label: "Alt Başlık", value: "Kırgın Çiçekler" },
    { label: "Yayın Yılı", value: bookYear },
  ],
  ctaLabel: "Kitabı Keşfet",
};

export const aboutContent = {
  eyebrow: "YAZAR",
  name: authorName,
  backgroundVideo: "/videos/hakkinda-arkaplan.mp4",
  portrait: {
    src: "/yazar-portresi.png",
    alt: "Gülşen Mete portresi",
  },
  bio: [
    "Gülşen Mete, 12 yaşına kadar Konya'nın bir köyünde yaşadı; ardından ailesiyle birlikte İsveç'e taşındı ve 51 yıldır orada yaşıyor.",
    "Kendisi bir anaokulu öğretmeni ve çocukları hâlâ çok seviyor. En büyük hayali, yıllardır yazdığı şiirlerinin bir kitap olmasıydı — ve nihayet gerçekleşti.",
  ],
  dedication: "“Sizlere güzel, mutlu, huzurlu bir hayat diliyorum. Canlarım.”",
  readMoreLabel: "Yazarın Hikayesini Oku",
  readMoreHref: "/hakkinda",
};

export const editorsNote = {
  lead: "Konya'nın bozkırlarından Kuzey'in soğuk iklimlerine uzanan, yarım asırlık bir suskunluğun ve şefkatin öyküsü...",
  paragraphs: [
    "Gülşen Mete, henüz 12 yaşındayken Anadolu'nun o sıcak bağrından kopup İsveç'e adım attığında, yanında sadece çocukluk umutlarını değil, aynı zamanda memleketinin tarifsiz özlemini de götürmüştü. Tam 51 yıldır gurbet ellerde kök salan yazar, bir anaokulu öğretmeni olarak yıllarca binlerce masum çocuğun hayatına şefkatle dokunurken; kendi içindeki o anavatan hasreti çeken kız çocuğunun sesini ise hep mısralarında yaşattı.",
    "Kuzey ışıklarının altında geçen 51 uzun yıl boyunca, ruhundaki Anadolu sıcaklığı ile gurbetin o ince burukluğu birleşerek eşsiz bir şiir pınarına dönüştü. Onun dizelerinde sadece bir kadının aşka dair hisleri değil, aynı zamanda köklerinden binlerce kilometre uzakta kalmış bir kalbin, yarım asırlık sabrının ve yaşanmışlıklarının en saf hâli yankılanır.",
  ],
  closing:
    "“Yaz Gülleri”, İsveç'in karlarında açan bir Anadolu çiçeğinin, ömrünü çocuklara adamış naif bir ruhun ve en derin duyguların 51 yıl sonra kâğıda dökülen muazzam manifestosudur.",
};

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

export const testimonialsContent = {
  eyebrow: "OKUYUCULARDAN",
  title: "Yürekten Satırlar, Yürekten Yorumlar",
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Her sayfada kendimden bir parça buldum. Kalbi kırılmış herkese bir teselli bu kitap.",
    name: "Elif Yıldız",
    role: "Okur",
  },
  {
    quote:
      "Yıllar sonra bir şiir kitabını elimden bırakamadım. Yaz Gülleri, gerçek bir yürek işi.",
    name: "Mehmet Kaya",
    role: "Okur",
  },
  {
    quote:
      "Annemle birlikte okuduk, ikimiz de ağladık. Bu satırlar gerçekten yaşanmış hissettiriyor.",
    name: "Zeynep Arslan",
    role: "Okur",
  },
  {
    quote: "Sade ama bir o kadar derin. Her mısrada yeniden doğan bir umut var.",
    name: "Ahmet Söylemez",
    role: "Okur",
  },
];

export const contactContent = {
  eyebrow: "İLETİŞİM",
  title: "Kitabı Sipariş Edin",
  description: "Kitap ve imzalı baskı hakkında güncellemeler için bizimle iletişime geçin.",
};

export const footerBadge = "YAYINDA";

export const siteMeta = {
  title: "Yaz Gülleri — Gülşen Mete",
  description:
    "Yaz Gülleri, Gülşen Mete'nin kaleminden 189 aşk şiirinden oluşan “Kırgın Çiçekler” bahçesi.",
};
