import React, { useState } from 'react';
import './Chatbot.css';
import { FiMessageSquare, FiX } from 'react-icons/fi';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeQuestion, setActiveQuestion] = useState(null);

  const faqs = [
    {
      question: 'LGS kursu ne kadar sürüyor?',
      answer: 'LGS hazırlık programımız 8. sınıfın başından LGS sınavına kadar devam eden bir yıllık bir programdır. Yaz aylarında ise hızlandırma kamplarımız mevcuttur.',
    },
    {
      question: 'Dersler nerede yapılıyor?',
      answer: 'Derslerimiz hem yüz yüze şubelerimizde hem de online olarak "atölyemonline" platformumuz üzerinden yapılmaktadır.',
    },
    {
      question: 'Şubeleriniz nerede?',
      answer: "İstanbul'da Bakırköy, Bahçeşehir, Esentepe, Ataşehir, Çekmeköy ve Atakent'te şubelerimiz bulunmaktadır. Detaylı adres bilgileri için \"Şubelerimiz\" bölümünü ziyaret edebilirsiniz.",
    },
    {
      question: 'atölyemonline platformu nedir?',
      answer: 'atölyemonline, öğrenci gelişimini anlık olarak takip edebileceğiniz, size özel raporlar sunan ve veli bilgilendirme sistemi içeren dijital bir asistandır.',
    },
    {
      question: 'Kayıt için ne yapmalıyım?',
      answer: 'Kayıt olmak için size en yakın şubemizi ziyaret edebilir veya web sitemizdeki iletişim formunu doldurarak bize ulaşabilirsiniz. Eğitim danışmanlarımız en kısa sürede sizinle iletişime geçecektir.',
    },
  ];

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
    setActiveQuestion(null); 
  };

  return (
    <div className="chatbot-container">
      {isOpen && (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <h3>Merhaba! Nasıl yardımcı olabilirim?</h3>
            <button onClick={toggleChatbot} className="close-btn">
              <FiX />
            </button>
          </div>
          <div className="chatbot-body">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item">
                <button className="faq-question" onClick={() => setActiveQuestion(index === activeQuestion ? null : index)}>
                  {faq.question}
                </button>
                {activeQuestion === index && <p className="faq-answer">{faq.answer}</p>}
              </div>
            ))}
          </div>
        </div>
      )}
      <button className="chatbot-toggle-btn" onClick={toggleChatbot}>
        {isOpen ? <FiX /> : <FiMessageSquare />}
      </button>
    </div>
  );
};

export default Chatbot;
