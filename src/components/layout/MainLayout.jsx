import { AdminThemeProvider } from '../../contexts/admin/AdminThemeContext';
import { AdminLayoutProvider } from '../../contexts/admin/AdminLayoutContext';
import AdminLayoutContent from './admin/AdminLayoutContent';

// Main layout component that provides the context
const MainLayout = () => {
    return (
        <AdminThemeProvider>
            <AdminLayoutProvider>
                <AdminLayoutContent />
            </AdminLayoutProvider>
        </AdminThemeProvider>
    );
};

export default MainLayout; 