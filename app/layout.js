import { Metadata } from 'next';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './globalStyles';

// Metadata
export const metadata: Metadata = {
  title: 'My Portfolio',
  description: 'This is my portfolio showcasing my projects and skills.',
};

// Root layout component
export default function RootLayout({ children }: { children: React.ReactNode }) {
  // Dark mode theme
  const theme = {
    colors: {
      background: '#121212',
      text: '#ffffff',
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
}