import { ThemeProvider, createTheme } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { BlogProvider } from "./context/BlogContext";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ProtectedRoute from "./components/ProtectedRoute";
import AdminDashboard from "./pages/AdminDashboard";
import BlogDetail from "./pages/BlogDetail";
import AuthorLayout from "./layouts/AuthLayout";
import { Navigate } from "react-router-dom";
import MyBlogs from "./components/author/MyBlogs";
import CreateBlog from "./components/author/CreateBlog";
import AuthorDashboard from "./components/author/AuthorDashboard";
import EditBlog from "./components/author/EditBlog";
import Comments from "./components/author/Comments";

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#2563eb', // Modern blue
      light: '#60a5fa',
      dark: '#1e40af',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#db2777', // Modern pink
      light: '#f472b6',
      dark: '#9d174d',
      contrastText: '#ffffff',
    },
    error: {
      main: '#dc2626',
      light: '#ef4444',
      dark: '#991b1b',
    },
    warning: {
      main: '#f59e0b',
      light: '#fbbf24',
      dark: '#b45309',
    },
    info: {
      main: '#0ea5e9',
      light: '#38bdf8',
      dark: '#0369a1',
    },
    success: {
      main: '#059669',
      light: '#34d399',
      dark: '#065f46',
    },
    grey: {
      50: '#f9fafb',
      100: '#f3f4f6',
      200: '#e5e7eb',
      300: '#d1d5db',
      400: '#9ca3af',
      500: '#6b7280',
      600: '#4b5563',
      700: '#374151',
      800: '#1f2937',
      900: '#111827',
    },
    background: {
      default: '#ffffff',
      paper: '#ffffff',
      alternative: '#f8fafc',
    },
    text: {
      primary: '#111827',
      secondary: '#4b5563',
      disabled: '#9ca3af',
    },
    divider: '#e5e7eb',
  },
  typography: {
    fontFamily: [
      'Inter',
      '-apple-system',
      'BlinkMacSystemFont',
      'Segoe UI',
      'Roboto',
      'Arial',
      'sans-serif',
    ].join(','),
    h1: {
      fontWeight: 800,
      fontSize: '2.5rem',
      lineHeight: 1.2,
      letterSpacing: '-0.02em',
    },
    h2: {
      fontWeight: 700,
      fontSize: '2rem',
      lineHeight: 1.3,
      letterSpacing: '-0.01em',
    },
    h3: {
      fontWeight: 700,
      fontSize: '1.5rem',
      lineHeight: 1.375,
    },
    h4: {
      fontWeight: 600,
      fontSize: '1.25rem',
      lineHeight: 1.375,
    },
    h5: {
      fontWeight: 600,
      fontSize: '1.125rem',
      lineHeight: 1.375,
    },
    h6: {
      fontWeight: 600,
      fontSize: '1rem',
      lineHeight: 1.375,
    },
    subtitle1: {
      fontSize: '1rem',
      lineHeight: 1.5,
      fontWeight: 500,
    },
    subtitle2: {
      fontSize: '0.875rem',
      lineHeight: 1.57,
      fontWeight: 500,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.5,
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.57,
    },
    button: {
      fontSize: '0.875rem',
      fontWeight: 600,
      textTransform: 'none',
      letterSpacing: '0.02em',
    },
    caption: {
      fontSize: '0.75rem',
      lineHeight: 1.66,
    },
    overline: {
      fontSize: '0.75rem',
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '0.08em',
    },
  },
  shape: {
    borderRadius: 8,
  },
  shadows: [
    'none',
    '0px 1px 2px rgba(0, 0, 0, 0.06), 0px 1px 3px rgba(0, 0, 0, 0.1)',
    '0px 2px 4px rgba(0, 0, 0, 0.06), 0px 4px 6px rgba(0, 0, 0, 0.1)',
    '0px 4px 6px rgba(0, 0, 0, 0.05), 0px 10px 15px rgba(0, 0, 0, 0.1)',
    // ... keep existing shadows for indexes 4-24
  ],
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#ffffff',
          color: '#111827',
          boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.06), 0px 1px 3px rgba(0, 0, 0, 0.1)',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '6px',
          padding: '8px 16px',
          fontWeight: 600,
        },
        contained: {
          boxShadow: 'none',
          '&:hover': {
            boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.06), 0px 4px 6px rgba(0, 0, 0, 0.1)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '12px',
          boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.06), 0px 4px 6px rgba(0, 0, 0, 0.1)',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: '12px',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: '8px',
          },
        },
      },
    },
  },
});

const App = () => {
  return (
    <AuthProvider>
      <BlogProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Router>
            <Routes>
              {/* Public Routes */}
              <Route path="/signin" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/" element={<Home />} />

              {/* Protected Routes */}
              {/* <Route path="/" element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              } /> */}
              <Route
                path="/blog/:slug"
                element={
                  <ProtectedRoute>
                    <BlogDetail />
                  </ProtectedRoute>
                }
              />

              {/* Admin Routes */}
              <Route
                path="/admin/dashboard"
                element={
                  <ProtectedRoute roles={["admin", "author"]}>
                    <AdminDashboard />
                  </ProtectedRoute>
                }
              />

              {/* Author Routes */}
              <Route
                path="/author/*"
                element={
                  <ProtectedRoute roles={["author"]}>
                    <AuthorLayout />
                  </ProtectedRoute>
                }
              >
                <Route index element={<Navigate to="dashboard" />} />
                <Route path="dashboard" element={<AuthorDashboard />} />
                <Route path="blogs" element={<MyBlogs />} />
                <Route path="blogs/new" element={<CreateBlog />} />
                <Route path="blogs/edit/:slug" element={<EditBlog />} />
                <Route path="comments" element={<Comments />} />
              </Route>
            </Routes>
          </Router>
        </ThemeProvider>
      </BlogProvider>
    </AuthProvider>
  );
};

export default App;
