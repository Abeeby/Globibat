import { useState } from 'react';
import { FaComments, FaTimes, FaPaperPlane } from 'react-icons/fa';

// Mock simplifié du composant LiveChat pour les tests
export default function LiveChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Array<{ text: string; isUser: boolean }>>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    setMessages([...messages, { text: message, isUser: true }]);
    setMessage('');

    // Simuler une réponse automatique
    setTimeout(() => {
      setMessages(prev => [...prev, {
        text: 'Merci pour votre message. Un agent vous répondra dans les plus brefs délais.',
        isUser: false
      }]);
    }, 100); // Réduire le délai pour les tests
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 p-4 rounded-full bg-primary text-white shadow-lg hover:shadow-xl transition-shadow"
        aria-label="Ouvrir le chat"
        data-testid="open-chat-button"
      >
        <FaComments className="w-6 h-6" />
      </button>

      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-96 bg-white dark:bg-gray-800 rounded-lg shadow-xl">
          <div className="flex items-center justify-between p-4 border-b dark:border-gray-700">
            <h3 className="text-lg font-semibold">Chat en direct</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full"
              aria-label="Fermer le chat"
              data-testid="close-chat-button"
            >
              <FaTimes className="w-5 h-5" />
            </button>
          </div>

          <div className="h-96 overflow-y-auto p-4 space-y-4" data-testid="messages-container">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'}`}
                data-testid={`message-${index}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    msg.isUser
                      ? 'bg-primary text-white'
                      : 'bg-gray-100 dark:bg-gray-700'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="p-4 border-t dark:border-gray-700">
            <div className="flex space-x-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tapez votre message..."
                className="flex-1 p-2 border dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                data-testid="message-input"
              />
              <button
                type="submit"
                className="p-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
                aria-label="Envoyer le message"
                data-testid="send-button"
              >
                <FaPaperPlane className="w-5 h-5" />
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
} 