import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    en: {
        translation: {
            nav: {
                home: "Home",
                about: "About Us",
                products: "Products",
                contact: "Contact",
                menu_title: "AGRO MART",
                select_lang: "Select Language",
                footer_tag: "Premium Export"
            },
            whatsapp: {
                sub: "Direct Inquiry",
                main: "Chat on WhatsApp",
                support: "Agro Mart Support"
            },
            home: {
                seo_title: "Agro Mart Export | Premium Egyptian Agricultural Products",
                seo_description: "Leading Egyptian exporter of fresh produce. We provide high-quality onions, oranges, and strawberries to global markets with international standards.",
                hero_title1: "Freshness",
                hero_title2: "From Egypt",
                hero_title3: "To The World.",
                global_partner: "Global Export Partner",
                hero_desc: "Agro Mart Export delivers premium agricultural products with a commitment to quality.",
                btn_products: "Explore Products",
                btn_contact: "Contact Us",
                about: { who_we_are: "Fresh, Premium, Global That’s Agro Mart.", title_main: "Setting New Standards for Agricultural Export Quality", description_brief: "At Agro Mart, we build a bridge of trust between Egyptian farms and global markets. Our years of expertise make us the first choice for major supply chains in Europe and the Americas, with total commitment to international certifications.", who_we_are_desc: "From the Heart of Our Farms to Your Global Table", quote: "We don't just export products; we deliver the excellence of Egyptian soil to your global table.", ready_to_start: "Meet Agro Mart", btn_about: "Discover Our Story" },
                harvest: { badge: "High-Quality Crops", title1: "Our", title2: "Seasonal Harvest", desc: "Carefully selected quality from Egyptian farms.", view_all: "View All Products" },
                products: { onion: "IQF Products", orange: "Fresh Products", strawberry: "In Brine Products", veg: "IQF", fruit: "FRESH", berry: "IN BRINE", desc: "Exporting with Global Quality Standards" },
                why: { title1: "Why Partners Trust", title2: "AGRO MART", title3: "We stand out for precision, speed, and safety in every shipment.", standards: "Global Standards", standards_d: "We strictly follow Global G.A.P and international regulations.", direct: "Direct From Farms", direct_d: "Eliminating middlemen to ensure the best price and freshness.", logistics: "Fast Logistics", logistics_d: "Temperature-controlled shipping to preserve maximum quality." },
                cta: { title: "Ready to start a global partnership?", desc: "Request a customized quote for your market needs today.", btn: "Send Inquiry Now" }
            },
            about: {
                hero: {
                    seo_title: "About Us | Agro Mart Export Story & Values",
                    seo_description: "Discover Agro Mart Export's journey in bringing premium Egyptian produce to the world. Our commitment to quality, sustainability, and global standards.",
                    badge: "Our Story",
                    title1: "Roots in",
                    title2: "Egyptian Soil",
                    desc1: "Agro Mart Export is more than just a company; it is a bridge connecting Egypt’s rich agricultural heritage with the global market's demand for premium quality.",
                    desc2: "Founded on principles of integrity and excellence, we specialize in sourcing the finest fruits and vegetables directly from our local farms."
                },
                portfolio: {
                    subTitle: "GLOBAL STANDARDS",
                    bgText: "GALLERY",
                    mainTitlePart1: "Some Of",
                    mainTitlePart2: "Our Operations"
                },
                company: {
                    since: "From the Heart of Egypt",
                    title_part1: "Egyptian Roots,",
                    title_part2: "Global Reach",
                    mission: "From Egypt’s fertile land, we begin our journey as a new generation of fruit and vegetable exporters, placing quality and commitment at the core of everything we do. We carefully select our crops from trusted farms and oversee every stage of preparation and packing to ensure fresh products that meet international market requirements. We aim to build a modern export system based on reliable and sustainable logistics solutions, while continuously developing our operations and building long-term partnerships founded on transparency and responsiveness to our clients’ needs. Our goal is to represent Egyptian agriculture with integrity in global markets and achieve steady, sustainable growth.",
                    exp_label: "Skilled Team",
                    dest_label: "International Partners",
                    read_more: "Start a Partnership",
                    quality_badge: "Premium Egyptian Quality"
                },
                process: {
                    badge: "How We Make a Difference",
                    title: "A Journey of Quality from Farm to World",
                    desc: "We don’t just export products; we deliver the fruits of the land with extreme care, passing through three essential stages that guarantee international quality standards.",
                    s1_title: "Sustainable Farming",
                    s1_desc: "Our journey begins at our selected farms, where we rely on the latest eco-friendly agricultural techniques to ensure 100% natural, nutrient-rich growth.",
                    s2_title: "Smart Sorting & Packing",
                    s2_desc: "Each fruit undergoes rigorous inspection and strict quality tests, then is packed in specially designed packaging to maintain freshness for as long as possible.",
                    s3_title: "Export & Logistics",
                    s3_desc: "With our advanced logistics network, we reach global markets in record time, maintaining the cold chain and quality until it reaches your doorstep."
                },
                certs: {
                    title1: "Certified",
                    title2: "Excellence",
                    desc: "Ensuring safety and quality in every shipment through international certifications."
                },
                cta: {
                    title: "Ready to export the best of Egypt?",
                    btn1: "Start Partnership",
                    btn2: "Company Profile (PDF)"
                }
            },
            products: {
                seo_title: "Our Products | High-Quality Egyptian Fruits & Vegetables",
                seo_description: "Explore our range of fresh and IQF frozen Egyptian produce. Premium onions, oranges, strawberries, and pomegranates exported worldwide.",
            },
            productSlider: {
                title_part1: "Our",
                title_part2: "Products",
                badge: "Pure",
                view_all: "View All",
                grade: "Premium Quality"
            },
            contact: {
                badge: "Contact Us",
                title_grow: "Let's Grow",
                title_together: "Together.",
                subtitle: "Ready for premium Egyptian exports? Reach out and we'll get back to you within 24 hours.",
                seo_title: "Contact Us | Agro Mart Export - Premium Produce",
                seo_description: "Get in touch with Zayat Export for the finest Egyptian onions, oranges, and fresh fruits exported globally.",
                form: {
                    name_label: "Full Name",
                    name_placeholder: "Your Name",
                    email_label: "Email",
                    email_placeholder: "email@company.com",
                    msg_label: "Message",
                    msg_placeholder: "How can we help you?",
                    send_btn: "Send Message"
                },
                info: {
                    phone: "Phone",
                    email: "Email",
                    whatsapp: "WHATSAPP DIRECT",
                    address: "Alexandria Desert Road, Giza, Egypt."
                }
            },
            footer: {
                description: "Leaders in exporting the finest Egyptian crops. Quality, freshness, and global reach.",
                quick_links: "Quick Links",
                key_exports: "Key Exports",
                contact_us: "Contact Us",
                links: ["Home", "About Us", "Our Products", "Contact Us"],
                exports: ["IQF Products", "Fresh Products", "In Brine Products", "All Products"],
                info: { address: "Kafr El-Dawar, Beheira, Egypt.", },
                follow: "Follow Us",
                rights: "All rights reserved.",
                left: "Developed by"
            }
        }
    },
    ar: {
        translation: {
            nav: {
                home: "الرئيسية",
                about: "من نحن",
                products: "منتجاتنا",
                contact: "اتصل بنا",
                menu_title: "AGRO MART",
                select_lang: "اختر اللغة",
                footer_tag: "تصدير فاخر"
            },
            whatsapp: {
                sub: "استفسار مباشر",
                main: "تواصل عبر واتساب",
                support: "دعم اجرو مارت"
            },
            home: {
                seo_title: "شركة اجرو مارت للتصدير | أجود المحاصيل الزراعية المصرية",
                seo_description: "المصدر الرائد للمحاصيل الزراعية المصرية الطازجة. نقدم بصل وبرتقال وفراولة بجودة عالية للأسواق العالمية وفق المعايير الدولية.",
                hero_title1: "نضارة",
                hero_title2: "من مصر",
                hero_title3: "إلى العالم.",
                global_partner: "شريك التصدير العالمي",
                hero_desc: "تقدم شركة اجرو مارت للتصدير منتجات زراعية فاخرة مع التزام تام بأعلى معايير الجودة.",
                btn_products: "اكتشف منتجاتنا",
                btn_contact: "اتصل بنا",
                about: { who_we_are: "طازج، فاخر، عالمي – هذه هي Agro Mart.", title_main: "وضع معايير جديدة لجودة التصدير الزراعي", description_brief: "في Agro Mart، نبني جسرًا من الثقة بين المزارع المصرية والأسواق العالمية. سنوات خبرتنا تجعلنا الخيار الأول لسلاسل الإمداد الكبرى في أوروبا والأمريكتين، مع الالتزام التام بالمعايير والشهادات الدولية.", who_we_are_desc: "من قلب مزارعنا إلى موائدكم العالمية", quote: "نحن لا نصدر منتجات فقط؛ بل نقدم تميز التربة المصرية إلى موائدكم العالمية.", ready_to_start: "تعرف على Agro Mart", btn_about: "اكتشف قصتنا" },
                harvest: { badge: "محاصيل عالية الجودة", title1: "حصادنا", title2: "الموسمي", desc: "جودة مختارة بعناية من المزارع المصرية.", view_all: "عرض كل المنتجات" },
                products: { onion: "منتجات IQF", orange: "منتجات فريش", strawberry: "منتجات في محلول ملحي", veg: "IQF", fruit: "FRESH", berry: "IN BRINE", desc: "تصدير بمعايير جودة عالمية" },
                why: { title1: "لماذا يثق الشركاء في", title2: "AGRO MART", title3: "نتميز بالدقة، السرعة، والأمان في كل شحنة.", standards: "معايير عالمية", standards_d: "نتبع بدقة معايير Global G.A.P واللوائح الدولية.", direct: "من المزارع مباشرة", direct_d: "إلغاء الوسطاء لضمان أفضل سعر وأقصى نضارة.", logistics: "خدمات لوجستية", logistics_d: "شحن مبرد للحفاظ على جودة المنتجات العالية." },
                cta: { title: "هل أنت جاهز لبدء شراكة عالمية؟", desc: "اطلب عرض سعر مخصص لاحتياجات سوقك اليوم.", btn: "أرسل استفسارك الآن" }
            },
            about: {
                hero: {
                    seo_title: "من نحن | شركة اجرو مارت للتصدير الزراعي",
                    seo_description: "تعرف على رحلة شركة اجرو مارت في تصدير أفضل المحاصيل المصرية للعالم. نلتزم بأعلى معايير الجودة والاستدامة في الزراعة والتوريد.",
                    badge: "قصتنا",
                    title1: "جذورنا في",
                    title2: "الأرض المصرية",
                    desc1: "شركة اجرو مارت للتصدير ليست مجرد شركة؛ بل هي جسر يربط بين التراث الزراعي الغني لمصر ومتطلبات السوق العالمية للجودة الفائقة.",
                    desc2: "تأسست شركتنا على مبادئ النزاهة والتميز، ونحن متخصصون في توريد أجود أنواع الفاكهة والخضروات مباشرة من مزارعنا المحلية."
                },
                portfolio: {
                    subTitle: "معايير عالمية",
                    bgText: "أعمالنا",
                    mainTitlePart1: "جانب من",
                    mainTitlePart2: "أعمالنا"
                },
                company: {
                    since: "من قلب مصر",
                    title_part1: "جذور مصرية،",
                    title_part2: "بآفاق عالمية",
                    mission: "من أرض مصر الخصبة، نبدأ رحلتنا كجيل جديد من شركات تصدير الخضروات والفاكهة، واضعين الجودة والالتزام في مقدمة أولوياتنا. نحرص على اختيار محاصيلنا بعناية من أفضل الأراضي الزراعية، مع الاهتمام بجميع مراحل التجهيز والتعبئة لضمان وصول منتجات طازجة تلبي متطلبات الأسواق العالمية. نسعى إلى بناء منظومة تصدير حديثة تعتمد على حلول لوجستية موثوقة ومستدامة، ونؤمن بأهمية التطوير المستمر وبناء علاقات طويلة الأمد مع شركائنا، قائمة على الشفافية والالتزام باحتياجات العملاء. هدفنا هو تمثيل الزراعة المصرية بصورة مشرفة في الأسواق الخارجية، وتحقيق نمو مستدام خطوة بخطوة.",
                    exp_label: "فريق متخصص",
                    dest_label: "شركاء دوليون",
                    read_more: "ابدأ التعاون معنا",
                    quality_badge: "جودة مصرية فائقة"
                },
                process: {
                    badge: "كيف نصنع الفرق",
                    title: "رحلة الجودة من الأرض إلى العالم",
                    desc: "نحن لا نصدر المنتجات فحسب، بل ننقل ثمار الأرض بعناية فائقة تمر عبر ثلاث محطات أساسية تضمن لك معايير الجودة العالمية.",
                    s1_title: "الزراعة المستدامة",
                    s1_desc: "تبدأ رحلتنا من مزارعنا المختارة، حيث نعتمد على أحدث التقنيات الزراعية الصديقة للبيئة لضمان نمو ثمار طبيعية 100% وغنية بالقيم الغذائية.",
                    s2_title: "الفرز والتعبئة الذكية",
                    s2_desc: "تخضع كل ثمرة لعملية فحص دقيقة واختبارات جودة صارمة، ثم تُعبأ في عبوات مصممة خصيصاً للحفاظ على نضارتها أطول فترة ممكنة.",
                    s3_title: "التصدير والخدمات اللوجستية",
                    s3_desc: "بفضل شبكتنا اللوجستية المتطورة، نصل بمنتجاتنا إلى الأسواق العالمية في وقت قياسي، مع الحفاظ على سلسلة التبريد والجودة حتى وصولها إليك."
                },
                certs: {
                    title1: "امتياز",
                    title2: "مُعتمد",
                    desc: "ضمان السلامة والجودة في كل شحنة عبر الشهادات الدولية."
                },
                cta: {
                    title: "جاهز لتصدير أفضل ما في مصر؟",
                    btn1: "ابدأ الشراكة",
                    btn2: "الملف التعريفي (PDF)"
                }
            },
            products: {
                seo_title: "منتجاتنا | تصدير الخضروات والفواكه المصرية عالية الجودة",
                seo_description: "تصفح قائمة منتجاتنا من المحاصيل المصرية الطازجة والمجمدة. نوفر أفضل أنواع البصل، البرتقال، الفراولة، والرمان المطابق للمواصفات الأوروبية.",
            },
            productSlider: {
                title_part1: "بعض",
                title_part2: "منتجاتنا",
                badge: "طبيعي",
                view_all: "عرض الكل",
                grade: "جودة ممتازة"
            },
            contact: {
                badge: "تواصل معنا",
                title_grow: "لنبني مستقبلاً",
                title_together: "زراعياً معاً.",
                subtitle: "هل أنت مستعد لأجود الصادرات المصرية؟ تواصل معنا وسنقوم بالرد عليك في غضون 24 ساعة.",
                seo_title: "اتصل بنا | شركة اجرو مارت للتصدير الزراعي",
                seo_description: "تواصل مع شركة اجرو مارت لتصدير أجود المحاصيل الزراعية المصرية من بصل وبرتقال وفواكه إلى جميع أنحاء العالم.",
                form: {
                    name_label: "الاسم الكامل",
                    name_placeholder: "اسمك الكريم",
                    email_label: "البريد الإلكتروني",
                    email_placeholder: "email@company.com",
                    msg_label: "رسالتك",
                    msg_placeholder: "كيف يمكننا مساعدتك؟",
                    send_btn: "إرسال الرسالة"
                },
                info: {
                    phone: "الهاتف",
                    email: "الإيميل",
                    whatsapp: "تواصل عبر واتساب",
                    address: "كفر الدوار، البحيرة، مصر."
                }
            },
            footer: {
                description: "رائدون في تصدير أجود المحاصيل المصرية. جودة، طزاجة، ووصول عالمي.",
                quick_links: "روابط سريعة",
                key_exports: "منتجاتنا الرئيسية",
                contact_us: "اتصل بنا",
                links: ["الرئيسية", "من نحن", "منتجاتنا", "تواصل معنا"],
                exports: ["منتجات مجمدة (IQF)", "منتجات طازجة", "منتجات في محلول ملحي", "كافة المنتجات"],
                info: { address: "كفر الدوار، البحيرة، مصر." },
                follow: "تابعنا على",
                rights: "جميع الحقوق محفوظة.",
                left: "تم التطوير بواسطة"
            }
        }
    },
    it: {
        translation: {
            nav: {
                home: "Home",
                about: "Chi Siamo",
                products: "Prodotti",
                contact: "Contatti",
                menu_title: "AGRO MART",
                select_lang: "Seleziona Lingua",
                footer_tag: "Esportazione Premium"
            },
            whatsapp: {
                sub: "Richiesta Diretta",
                main: "Chatta su WhatsApp",
                support: "Supporto AGRO MART"
            },
            home: {
                seo_title: "AGRO MART Export | Prodotti Agricoli Egiziani di Qualità",
                seo_description: "Leader nell'esportazione di prodotti freschi egiziani. Forniamo cipolle, arance e fragole di alta qualità ai mercati globali.",
                hero_title1: "Freschezza",
                hero_title2: "dall'Egitto",
                hero_title3: "al Mondo.",
                global_partner: "Il tuo partner globale per l'esportazione",
                hero_desc: "Al-AGRO MART Export offre prodotti agricoli premium con un impegno totale verso i più alti standard di qualità.",
                btn_products: "Scopri i nostri prodotti",
                btn_contact: "Contattaci",
                about: { who_we_are: "Fresco, Premium, Globale – Questo è Agro Mart.", title_main: "Stabilire nuovi standard per la qualità dell'esportazione agricola", description_brief: "In Agro Mart, costruiamo un ponte di fiducia tra le fattorie egiziane e i mercati globali. I nostri anni di esperienza ci rendono la prima scelta per le principali catene di approvvigionamento in Europa e nelle Americhe, con pieno impegno verso le certificazioni internazionali.", who_we_are_desc: "Dal cuore delle nostre fattorie alla vostra tavola globale", quote: "Non esportiamo solo prodotti; portiamo l'eccellenza del suolo egiziano sulla vostra tavola globale.", ready_to_start: "Incontra Agro Mart", btn_about: "Scopri la nostra storia" },
                harvest: { badge: "Colture di Alta Qualità", title1: "Il Nostro", title2: "Raccolto Stagionale", desc: "Qualità selezionata con cura dalle fattorie egiziane.", view_all: "Visualizza Tutti i Prodotti" },
                products: { onion: "Prodotti IQF", orange: "Prodotti Freschi", strawberry: "Prodotti in Salamoia", veg: "IQF", fruit: "FRESH", berry: "IN BRINE", desc: "Esportazione secondo standard di qualità globali" },
                why: { title1: "Perché i partner scelgono", title2: "AGRO MART", title3: "Ci distinguiamo per precisione, velocità e sicurezza in ogni spedizione.", standards: "Standard Internazionali", standards_d: "Seguiamo rigorosamente gli standard Global G.A.P. e le normative internazionali.", direct: "Direttamente dai Campi", direct_d: "Eliminiamo gli intermediari per garantire il miglior prezzo e la massima freschezza.", logistics: "Servizi Logistici", logistics_d: "Spedizioni refrigerate per preservare l'alta qualità dei prodotti." },
                cta: { title: "Pronto per iniziare una partnership globale?", desc: "Richiedi oggi un preventivo personalizzato per le esigenze del tuo mercato.", btn: "Invia la tua richiesta ora" }
            },
            about: {
                hero: {
                    seo_title: "Chi Siamo | La Storia di AGRO MART Export",
                    seo_description: "Scopri il percorso di AGRO MART Export nel portare i migliori prodotti agricoli egiziani nel mondo. Il nostro impegno per la qualità e la sostenibilità.",
                    badge: "La Nostra Storia",
                    title1: "Radici nella",
                    title2: "Terra Egiziana",
                    desc1: "AGRO MART Export non è solo un'azienda; è un ponte che collega il ricco patrimonio agricolo dell'Egitto con le esigenze di alta qualità del mercato globale.",
                    desc2: "Fondata sui principi di integrità ed eccellenza, siamo specializzati nella fornitura dei migliori frutti e ortaggi direttamente dalle nostre aziende agricole locali."
                },
                portfolio: {
                    subTitle: "STANDARD INTERNAZIONALI",
                    bgText: "GALLERIA",
                    mainTitlePart1: "Uno sguardo alle",
                    mainTitlePart2: "nostre operazioni"
                },
                company: {
                    since: "Dal Cuore dell'Egitto",
                    title_part1: "Radici Egiziane,",
                    title_part2: "Orizzonti Globali",
                    mission: "Dalle fertili terre dell’Egitto, iniziamo il nostro percorso come una nuova generazione di esportatori di frutta e verdura, ponendo qualità e impegno al centro di tutto ciò che facciamo. Selezioniamo con cura i nostri prodotti dalle migliori aziende agricole e seguiamo ogni fase di preparazione e confezionamento per garantire prodotti freschi conformi agli standard dei mercati internazionali. Il nostro obiettivo è costruire un sistema di esportazione moderno, basato su soluzioni logistiche affidabili e sostenibili, sviluppando allo stesso tempo relazioni a lungo termine con i nostri partner, fondate sulla trasparenza e sull’attenzione alle esigenze dei clienti. Vogliamo rappresentare l’agricoltura egiziana con professionalità nei mercati globali e crescere in modo costante e sostenibile.",
                    exp_label: "Team Specializzato",
                    dest_label: "Partner Internazionali",
                    read_more: "Avvia una collaborazione",
                    quality_badge: "Qualità Egiziana Superiore"
                },
                process: {
                    badge: "Come Facciamo la Differenza",
                    title: "Il Viaggio della Qualità dalla Terra al Mondo",
                    desc: "Non esportiamo solo prodotti; consegniamo i frutti della terra con estrema cura attraverso tre fasi essenziali che garantiscono standard di qualità internazionali.",
                    s1_title: "Agricoltura Sostenibile",
                    s1_desc: "Il nostro viaggio inizia dalle nostre fattorie selezionate, dove utilizziamo le ultime tecniche agricole eco-compatibili per garantire una crescita naturale al 100% e ricca di nutrienti.",
                    s2_title: "Cernita e Imballaggio Intelligente",
                    s2_desc: "Ogni frutto è sottoposto a un'ispezione accurata e a rigorosi test di qualità, per poi essere confezionato in imballaggi progettati per preservarne la freschezza il più a lungo possibile.",
                    s3_title: "Esportazione e Logistica",
                    s3_desc: "Grazie alla nostra rete logistica avanzata, raggiungiamo i mercati globali in tempi record, mantenendo la catena del freddo e la qualità fino alla consegna finale."
                },
                certs: {
                    title1: "Eccellenza",
                    title2: "Certificata",
                    desc: "Garantiamo sicurezza e qualità in ogni spedizione attraverso certificazioni internazionali."
                },
                cta: {
                    title: "Pronto a esportare il meglio dell'Egitto?",
                    btn1: "Inizia la Partnership",
                    btn2: "Profilo Aziendale (PDF)"
                }
            },
            products: {
                seo_title: "I Nostri Prodotti | Esportazione di Frutta e Verdura Egiziana",
                seo_description: "Scopri la nostra gamma di prodotti egiziani freschi e surgelati IQF. Cipolle, arance e fragole di alta qualità esportate in tutto il mondo.",
            },
            productSlider: {
                title_part1: "Alcuni dei",
                title_part2: "Nostri Prodotti",
                badge: "Naturale",
                view_all: "Mostra Tutto",
                grade: "Qualità Premium"
            },
            contact: {
                badge: "Contattaci",
                title_grow: "Cresciamo",
                title_together: "Insieme.",
                subtitle: "Pronto per le eccellenze dell’export egiziano? Contattaci e ti risponderemo entro 24 ore.",
                seo_title: "Contattaci | AGRO MART Export - Prodotti Egiziani",
                seo_description: "Contatta AGRO MART Export per le migliori cipolle, arance e frutta fresca egiziana esportata in tutto il mondo.",
                form: {
                    name_label: "Nome Completo",
                    name_placeholder: "Il tuo nome",
                    email_label: "Email",
                    email_placeholder: "email@azienda.it",
                    msg_label: "Messaggio",
                    msg_placeholder: "Come possiamo aiutarti?",
                    send_btn: "Invia Messaggio"
                },
                info: {
                    phone: "Telefono",
                    email: "Email",
                    whatsapp: "WHATSAPP DIRETTO",
                    address: "Kafr El-Dawar, Beheira, Egitto."
                }
            },
            footer: {
                description: "Leader nell'esportazione delle migliori colture egiziane. Qualità, freschezza e portata globale.",
                quick_links: "Link Rapidi",
                key_exports: "Esportazioni Principali",
                contact_us: "Contattaci",
                links: ["Home", "Chi Siamo", "I Nostri Prodotti", "Contattaci"],
                exports: ["Prodotti IQF (Surgelati)", "Prodotti Freschi", "Prodotti in Salamoia", "Tutti i Prodotti"],
                info: { address: "Kafr El-Dawar, Beheira, Egitto." },
                follow: "Seguici",
                rights: "Tutti i diritti riservati.",
                left: "Sviluppato da"
            }
        }
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: localStorage.getItem('app_lang') || 'en',
        fallbackLng: 'en',
        interpolation: { escapeValue: false }
    });

export default i18n;