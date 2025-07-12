import { render, screen, fireEvent } from '@testing-library/react';
import FloatingContact from '../FloatingContact';
import { ThemeProvider } from '@/lib/providers/ThemeProvider';

// Mock du hook useTheme
jest.mock('@/lib/providers/ThemeProvider', () => ({
  useTheme: () => ({ theme: 'light', toggleTheme: jest.fn() }),
  ThemeProvider: ({ children }: { children: React.ReactNode }) => <>{children}</>,
}));

describe('FloatingContact', () => {
  it('should render the contact button', () => {
    render(<FloatingContact />);
    const button = screen.getByRole('button', { name: /ouvrir le menu de contact/i });
    expect(button).toBeInTheDocument();
  });

  it('should show contact info when clicked', () => {
    render(<FloatingContact />);
    const button = screen.getByRole('button', { name: /ouvrir le menu de contact/i });
    
    fireEvent.click(button);
    
    expect(screen.getByText(/appelez-nous/i)).toBeInTheDocument();
    expect(screen.getByText(/écrivez-nous/i)).toBeInTheDocument();
    expect(screen.getByText('+41 21 505 00 62')).toBeInTheDocument();
    expect(screen.getByText('info@globibat.com')).toBeInTheDocument();
  });

  it('should have correct phone number link', () => {
    render(<FloatingContact />);
    const button = screen.getByRole('button', { name: /ouvrir le menu de contact/i });
    
    fireEvent.click(button);
    
    const phoneLink = screen.getByRole('link', { name: /appeler globibat/i });
    expect(phoneLink).toHaveAttribute('href', 'tel:+41215050062');
  });

  it('should have correct email link', () => {
    render(<FloatingContact />);
    const button = screen.getByRole('button', { name: /ouvrir le menu de contact/i });
    
    fireEvent.click(button);
    
    const emailLink = screen.getByRole('link', { name: /envoyer un email/i });
    expect(emailLink).toHaveAttribute('href', 'mailto:info@globibat.com');
  });

  it('should close when clicking the close button', () => {
    render(<FloatingContact />);
    const openButton = screen.getByRole('button', { name: /ouvrir le menu de contact/i });
    
    fireEvent.click(openButton);
    expect(screen.getByText(/appelez-nous/i)).toBeInTheDocument();
    
    const closeButton = screen.getByRole('button', { name: /fermer le menu de contact/i });
    fireEvent.click(closeButton);
    
    expect(screen.queryByText(/appelez-nous/i)).not.toBeInTheDocument();
  });

  it('should be accessible', () => {
    const { container } = render(<FloatingContact />);
    expect(container).toBeAccessible();
  });
}); 