import { RouterProvider } from 'react-router';
import { router } from './routes';
import { AuthProvider } from './context/AuthContext';
import { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    // Add dark class to html element for dark theme
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}