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
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#dc004e",
    },
  },
  typography: {
    fontFamily: [
      "Inter",
      "-apple-system",
      "BlinkMacSystemFont",
      "Segoe UI",
      "Roboto",
      "Arial",
      "sans-serif",
    ].join(","),
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 600,
    },
    button: {
      textTransform: "none",
      fontWeight: 500,
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#fff",
          color: "#000",
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
