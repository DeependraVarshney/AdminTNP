import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { SnackbarProvider } from 'notistack';
import { store } from './store';
import { ThemeProvider } from './contexts/admin/ThemeContext';
import { LayoutProvider } from './contexts/admin/LayoutContext';
import { AuthProvider } from './contexts/AuthContext';
import AppRoutes from './routes';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider>
          <SnackbarProvider
            maxSnack={3}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
          >
            <LayoutProvider>
              <AuthProvider>
                <AppRoutes />
              </AuthProvider>
            </LayoutProvider>
          </SnackbarProvider>
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  );
}

export default App;