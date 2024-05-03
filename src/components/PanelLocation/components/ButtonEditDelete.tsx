import { DeleteOutline, Edit } from "@mui/icons-material";
import { Box, Button } from "@mui/material";
import ModalDialog from "../../ModalPanel";
import { useState } from "react";
import DeleteLocation from "./DeleteLocation";
import FormEditLocation from "./FormEditLocation";

const ButtonEditDelete = () => {
  const [showModalEdit, setShowModalEdit] = useState<boolean>(false);
  const [showModalDelete, setShowModalDelete] = useState<boolean>(false);

  const toggleModalEdit = () => {
    setShowModalEdit(!showModalEdit);
  };
  const toggleModalDelete = () => {
    setShowModalDelete(!showModalDelete);
  };

  return (
    <>
      <Box flex={0} display={"flex"} gap={1}>
        <ModalDialog callback={toggleModalDelete} show={showModalDelete}>
          <DeleteLocation callback={toggleModalDelete} />
        </ModalDialog>
        <Button
          onClick={toggleModalDelete}
          sx={{
            color: "black",
            border: "1px solid #e6e4e5",
            borderRadius: "20px",
            minWidth: "auto",
            height: "30px",
            p: "5px",
            ":hover": { backgroundColor: "transparent" },
          }}
        >
          <DeleteOutline fontSize="small" />
        </Button>
        <ModalDialog callback={toggleModalEdit} show={showModalEdit}>
          <FormEditLocation callback={toggleModalEdit} />
        </ModalDialog>
        <Button
          onClick={toggleModalEdit}
          sx={{
            color: "black",
            border: "1px solid #e6e4e5",
            borderRadius: "20px",
            minWidth: "auto",
            height: "30px",
            p: "5px",
            ":hover": { backgroundColor: "transparent" },
          }}
        >
          <Edit fontSize="small" />
        </Button>
      </Box>
    </>
  );
};

export default ButtonEditDelete;
