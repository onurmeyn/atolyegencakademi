import React, { useState } from 'react';
import { FiMessageSquare, FiX } from 'react-icons/fi';
import './Chatbot.css';

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    const branches = [
        {
          name: 'Bakırköy Genç Akademi',
          address: 'Zuhuratbaba Mahallesi Yücetarla Caddesi No: 24, Bakırköy / İSTANBUL',
          phone: '+90 545 196 93 06',
        },
        {
          name: 'Bahçeşehir Genç Akademi',
          address: 'Bahçeşehir 2. Kısım Mahallesi Ahmet Taner Kışlalı Bulvarı 3. Cadde A02 Villa, Bahçeşehir, Başakşehir / İSTANBUL',
          phone: '+90 546 559 61 96',
        },
        {
          name: 'Esentepe Genç Akademi',
          address: 'Esentepe Mahallesi Matbuat Sok. No: 13, Gayrettepe, Şişli / İSTANBUL',
          phone: '+90 212 296 93 06',
        },
        {
          name: 'Ataşehir Genç Akademi',
          address: 'Barbaros Mahallesi Mimar Sinan Caddesi No: 160/A, Ataşehir / İSTANBUL',
          phone: '+90 546 903 39 09',
        },
        {
          name: 'Çekmeköy Genç Akademi',
          address: 'Mimar Sinan Mahallesi Şenay Sok. No: 3, Çekmeköy / İSTANBUL',
          phone: '+90 216 642 60 00',
        },
        {
          name: 'Atakent Genç Akademi',
          address: 'Atakent Mahallesi 221. Cadde Rota Office B Blok No: 11, Küçükçekmece / İSTANBUL',
          phone: '+90 540 174 75 75',
        },
      ];

    const branchInfo = branches.map(branch => `${branch.name}: ${branch.address}, Tel: ${branch.phone}`).join('\n\n');

    const faqs = [
        {
            question: `LGS kursu ne kadar sürüyor?`,
            answer: `LGS hazırlık programımız, ağustos ayındaki Sınıf Belirleme Sınavı ile başlar ve mayıs sonundaki Deneme Rallisi ile sona erer. Yani tüm 8. sınıf eğitim yılını kapsar.`,
        },
        {
            question: `Sınıflarınız kaç kişilik?`,
            answer: `Sınıflarımız maksimum 10 kişiliktir. Öğrenciler, Sınıf Belirleme Sınavı sonucuna göre seviyelerine uygun sınıflara yerleştirilir. Yıl içinde yapılan sınav sonuçlarına ve öğretmenlerimizin görüşlerine göre sınıf değişiklikleri olabilir.`,
        },
        {
            question: `Haftalık ders programınız nasıl?`,
            answer: `Haftada 4 gün eğitim veriyoruz. Programda toplam 16 ders saati ve sınavlar bulunur. Haftalık ders dağılımı şöyledir: 4 saat Matematik, 4 saat Fen Bilimleri, 2 saat Türkçe, 2 saat İnkılap Tarihi, 1 saat İngilizce, 1 saat Din Kültürü ve 2 saat Matematik/Türkçe etüt.`,
        },
        {
            question: `Etüt derslerinde ne yapılıyor?`,
            answer: `Etüt saatlerinde öğrencilerimizin ödevlerde zorlandığı sorular çözülür, konu tekrarları ve üst düzey soru çözümleri yapılır. Ayrıca, öğrencilerimizin eksiklerine yönelik özel etüt günleri de düzenleyerek birebir çalışmalar yapıyoruz.`,
        },
        {
            question: `Ara tatillerde ders yapıyor musunuz?`,
            answer: `Evet, ara tatillerde derslerimiz devam eder ve ek programlar uygulanabilir. Sömestr tatilinin ilk haftası ara verilir, ikinci haftası ise ek programlarla derslere devam edilir.`,
        },
        {
            question: `Konuları ne zaman bitiriyorsunuz?`,
            answer: `Mart ayı itibarıyla tüm konuları tamamlayıp genel tekrarlara ve deneme sınavlarına odaklanıyoruz.`,
        },
        {
            question: `Deneme Rallisi nedir?`,
            answer: `Mayıs ayının ortasında başlayan Deneme Rallisi, LGS'ye kadar süren yoğun bir dönemdir. Öğrencilerimiz her gün kuruma gelerek deneme sınavına girer ve ardından derslerde bu denemelerin detaylı soru çözümleri yapılır.`,
        },
        {
            question: `Ne sıklıkla deneme sınavı yapıyorsunuz?`,
            answer: `Eğitim başladıktan sonraki ikinci haftadan itibaren sınavlarımız başlar. İlk başta işlenen konulara yönelik Tarama Sınavları yapılır. Sonrasında ise düzenli olarak her hafta Türkiye Geneli LGS deneme sınavları uygulanır.`,
        },
        {
            question: `Ödev takibini nasıl yapıyorsunuz?`,
            answer: `Ödevler, branş öğretmenlerimiz tarafından Atolyemonline sistemine bağlı fasiküllerimizden ve seçilen ek kaynak kitaplardan verilir. Ödev kontrolleri yine öğretmenlerimiz tarafından yapılır ve sonuçlar rehber öğretmenlerimizle paylaşılır.`,
        },
        {
            question: `Rehberlik sisteminiz nasıl işliyor?`,
            answer: `Rehber öğretmenlerimiz, öğrencilerimizin akademik gelişimini ve motivasyonunu yakından takip eder. Düzenli görüşmeler yapar, velilerimizi bilgilendirir ve Atolyemonline verileriyle kişiye özel çalışma programları hazırlarlar.`,
        },
        {
            question: `Dersler nerede yapılıyor?`,
            answer: `Derslerimiz hem yüz yüze şubelerimizde hem de online olarak "atölyemonline" platformumuz üzerinden yapılmaktadır.`,
        },
        {
            question: `Şubeleriniz nerede?`,
            answer: `İstanbul\'da Bakırköy, Bahçeşehir, Esentepe, Ataşehir, Çekmeköy ve Atakent\'te şubelerimiz bulunmaktadır. Detaylı adres ve iletişim bilgileri aşağıdadır:\n\n${branchInfo}`,
        },
        {
            question: 'İletişim, bilgi veya ücretler hakkında nasıl bilgi alabilirim?',
            answer: [
                { type: 'text', content: 'İletişim, bilgi ve ücretler hakkında detaylı bilgi almak için size en yakın şubemizi arayabilirsiniz. Şube bilgilerimiz:\n\n' },
                ...branches.flatMap(branch => [
                    { type: 'text', content: `${branch.name}: ` },
                    { type: 'link', content: branch.phone, href: `tel:${branch.phone.replace(/\s/g, '')}` },
                    { type: 'text', content: '\n\n' }
                ])
            ]
        },
        {
            question: `atölyemonline platformu nedir?`,
            answer: `atölyemonline, öğrenci gelişimini anlık olarak takip edebileceğiniz, ödevlerin verildiği, size özel raporlar sunan ve veli bilgilendirme sistemi içeren dijital bir asistandır.`,
        },
        {
            question: `Kayıt için ne yapmalıyım?`,
            answer: `Kayıt ve detaylı bilgi için "İletişim" bölümünden bize ulaşabilir veya şubelerimizi ziyaret edebilirsiniz. Online kayıt seçeneklerimiz de mevcuttur.`,
        },
        {
            question: `Bursluluk sınavı hakkında bilgi alabilir miyim?`,
            answer: `Atölye LGS’ye kabul ve bursluluk sınavı her yıl binlerce öğrencinin katılımıyla gerçekleşir. Bursluluk sınavlarımız gerçek anlamda başarıyı ödüllendirmek için yapılıyor olup sıralamalara göre yüksek burslar verilmektedir.`
        }
    ];

    const filteredFaqs = faqs.filter(faq =>
        faq.question.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const toggleChat = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <div className={`chatbot-container ${isOpen ? 'open' : ''}`}>
                <div className="chatbot-header" onClick={toggleChat}>
                    <h3>Yardıma mı ihtiyacınız var?</h3>
                    <FiX className="close-icon" />
                </div>
                <div className="chatbot-body">
                    <input
                        type="text"
                        placeholder="Sorunuzu buraya yazın..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <div className="faq-list">
                        {filteredFaqs.length > 0 ? (
                            filteredFaqs.map((faq, index) => (
                                <div className="faq-item" key={index}>
                                    <p className="question">{faq.question}</p>
                                    <p className="answer" style={{whiteSpace: 'pre-line'}}>
                                        {Array.isArray(faq.answer) ? (
                                            faq.answer.map((item, i) =>
                                                item.type === 'link' ? (
                                                    <a key={i} href={item.href}>{item.content}</a>
                                                ) : (
                                                    <span key={i}>{item.content}</span>
                                                )
                                            )
                                        ) : (
                                            faq.answer
                                        )}
                                    </p>
                                </div>
                            ))
                        ) : (
                            <p>Uygun bir cevap bulunamadı. Lütfen farklı bir anahtar kelime deneyin veya şubelerimizle iletişime geçin.</p>
                        )}
                    </div>
                </div>
            </div>
            <div className="chatbot-toggle" onClick={toggleChat}>
                <FiMessageSquare />
            </div>
        </div>
    );
};

export default Chatbot;
