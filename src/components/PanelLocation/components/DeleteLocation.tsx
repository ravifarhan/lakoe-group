import { HighlightOffOutlined } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";

interface ITemplateProps {
  callback?: () => void;
}

const DeleteLocation: React.FC<ITemplateProps> = ({ callback }) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="body2" fontWeight={"bold"}>
            Hapus Template Pesan
          </Typography>

          <Button
            size="small"
            sx={{
              minWidth: "auto",
              p: "0px",
              ":hover": { backgroundColor: "transparent" },
            }}
          >
            <HighlightOffOutlined sx={{ color: "gray" }} onClick={callback} />
          </Button>
        </Box>
        <Box sx={{ display: "flex" }}>
          <Typography variant="body2">
          Apakah kamu yakin untuk menghapus{" "}
            <span style={{ fontWeight: "bold" }}>
              Rumah?
            </span>{" "}
            Kamu tidak akan dapat mengembalikan alamat yang sudah dihapus.
          </Typography>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "5px" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "end",
              gap: "10px",
              mt: "10px",
            }}
          >
            <Button
              onClick={callback}
              sx={{
                width: "80px",
                height: "35px",
                color: "black",
                backgroundColor: "white",
                border: "1px solid gray",
                ":hover": {
                  backgroundColor: "white",
                },
                borderRadius: "20px",
                textTransform: "none",
              }}
            >
              Batalkan
            </Button>
            <Button
              sx={{
                width: "90px",
                height: "35px",
                color: "white",
                backgroundColor: "#0086b4",
                ":hover": {
                  backgroundColor: "#0086b4",
                },
                borderRadius: "20px",
                textTransform: "none",
              }}
            >
              Ya, Hapus
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default DeleteLocation;
