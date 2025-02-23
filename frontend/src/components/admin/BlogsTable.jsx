import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  Box,
  Button,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";
import PostAddIcon from "@mui/icons-material/PostAdd";

// eslint-disable-next-line react/prop-types
const BlogsTable = ({ posts, onViewBlog, onDeleteBlog }) => (
  <Box sx={{ p: 3 }}>
    <Box sx={{ display: "flex", justifyContent: "space-between", mb: 3 }}>
      <Button
        variant="contained"
        startIcon={<PostAddIcon />}
        sx={{ textTransform: "none", borderRadius: 2, px: 3 }}
      >
        Add Blog
      </Button>
    </Box>
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow sx={{ backgroundColor: "grey.50" }}>
            <TableCell sx={{ fontWeight: "bold" }}>Title</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>Author</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>Category</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {/* eslint-disable-next-line react/prop-types */}
          {posts.map((post) => (
            <TableRow
              key={post._id}
              sx={{ "&:hover": { backgroundColor: "grey.50" } }}
            >
              <TableCell>{post.title}</TableCell>
              <TableCell>{post.author?.username || "Unknown"}</TableCell>
              <TableCell>{post.category}</TableCell>
              <TableCell>
                <IconButton
                  size="small"
                  sx={{ mr: 1 }}
                  onClick={() => onViewBlog(post.slug)}
                >
                  <VisibilityIcon color="info" />
                </IconButton>
                <IconButton size="small" sx={{ mr: 1 }}>
                  <EditIcon color="primary" />
                </IconButton>
                <IconButton
                  size="small"
                  onClick={() => onDeleteBlog(post)}
                >
                  <DeleteIcon color="error" />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </Box>
);

export default BlogsTable;