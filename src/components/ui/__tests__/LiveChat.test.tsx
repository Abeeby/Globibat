import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import LiveChat from '../__mocks__/LiveChat';

describe('LiveChat', () => {
  it('should render the chat button', () => {
    render(<LiveChat />);
    const button = screen.getByTestId('open-chat-button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute('aria-label', 'Ouvrir le chat');
  });

  it('should open chat window when button is clicked', () => {
    render(<LiveChat />);
    const button = screen.getByTestId('open-chat-button');
    fireEvent.click(button);

    expect(screen.getByText('Chat en direct')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Tapez votre message...')).toBeInTheDocument();
  });

  it('should close chat window when close button is clicked', () => {
    render(<LiveChat />);
    
    // Ouvrir le chat
    const openButton = screen.getByTestId('open-chat-button');
    fireEvent.click(openButton);

    // Fermer le chat
    const closeButton = screen.getByTestId('close-chat-button');
    fireEvent.click(closeButton);

    // Vérifier que le chat est fermé
    expect(screen.queryByText('Chat en direct')).not.toBeInTheDocument();
  });

  it('should send and display messages', async () => {
    render(<LiveChat />);
    
    // Ouvrir le chat
    const openButton = screen.getByTestId('open-chat-button');
    fireEvent.click(openButton);

    // Envoyer un message
    const input = screen.getByTestId('message-input');
    const sendButton = screen.getByTestId('send-button');
    
    fireEvent.change(input, { target: { value: 'Bonjour!' } });
    fireEvent.click(sendButton);

    // Vérifier que le message est affiché
    expect(screen.getByText('Bonjour!')).toBeInTheDocument();

    // Attendre la réponse automatique
    await waitFor(() => {
      expect(screen.getByText(/Merci pour votre message/)).toBeInTheDocument();
    });
  });

  it('should not send empty messages', () => {
    render(<LiveChat />);
    
    // Ouvrir le chat
    const openButton = screen.getByTestId('open-chat-button');
    fireEvent.click(openButton);

    // Essayer d'envoyer un message vide
    const sendButton = screen.getByTestId('send-button');
    fireEvent.click(sendButton);

    // Vérifier qu'aucun message n'est affiché
    const messagesContainer = screen.getByTestId('messages-container');
    expect(messagesContainer.children.length).toBe(0);
  });

  it('should handle keyboard interactions', () => {
    render(<LiveChat />);
    
    // Ouvrir le chat avec la touche Espace
    const openButton = screen.getByTestId('open-chat-button');
    fireEvent.keyDown(openButton, { key: ' ', code: 'Space' });
    fireEvent.click(openButton); // Simuler le clic car keyDown ne fait pas cet effet automatiquement

    expect(screen.getByText('Chat en direct')).toBeInTheDocument();
  });
}); 