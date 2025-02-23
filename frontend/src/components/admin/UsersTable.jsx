import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  IconButton,
  Box,
  Button,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import PersonAddIcon from "@mui/icons-material/PersonAdd";

// eslint-disable-next-line react/prop-types
const UsersTable = ({ users, onDeleteUser }) => (
  <Box sx={{ p: 3 }}>
    <Box sx={{ display: "flex", justifyContent: "space-between", mb: 3 }}>
      <Button
        variant="contained"
        startIcon={<PersonAddIcon />}
        sx={{ textTransform: "none", borderRadius: 2, px: 3 }}
      >
        Add User
      </Button>
    </Box>
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow sx={{ backgroundColor: "grey.50" }}>
            <TableCell sx={{ fontWeight: "bold" }}>Username</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>Email</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>Role</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {/* eslint-disable-next-line react/prop-types */}
          {users.map((user) => (
            <TableRow
              key={user._id}
              sx={{ "&:hover": { backgroundColor: "grey.50" } }}
            >
              <TableCell>{user.username}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>
                <Typography
                  sx={{
                    color: user.role === "admin" ? "primary.main" : "success.main",
                    fontWeight: "medium",
                  }}
                >
                  {user.role}
                </Typography>
              </TableCell>
              <TableCell>
                <IconButton size="small" sx={{ mr: 1 }}>
                  <EditIcon color="primary" />
                </IconButton>
                <IconButton size="small" onClick={() => onDeleteUser(user)}>
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

export default UsersTable;