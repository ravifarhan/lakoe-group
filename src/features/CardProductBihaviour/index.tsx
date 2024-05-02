import * as React from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import EditIcon from "@mui/icons-material/Edit";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { Delete } from "@mui/icons-material";

export default function CardProductBihaviour() {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "23px",
          height: "23px",
          borderRadius: "9999px",
          border: "1px #909090 solid",
          color: "black",
        }}
      >
        <Button onClick={handleClick}>
          <SettingsIcon
            sx={{ width: "15px", height: "15px", color: "black" }}
          />
        </Button>
      </Box>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Box width={"150px"} padding={"20px"}>
          <Box display={"flex"}>
            <EditIcon />
            <Typography marginLeft={"5px"}>Edit Produk</Typography>
          </Box>
          <Box display={"flex"} marginTop={"10px"}>
            <ContentCopyIcon />
            <Typography marginLeft={"5px"}>Duplikat Produk</Typography>
          </Box>
          <Box display={"flex"} marginTop={"10px"}>
            <Delete />
            <Typography marginLeft={"5px"}>Hapus Produk</Typography>
          </Box>
        </Box>
      </Popover>
    </div>
  );
}
