import { DeleteOutline, Edit } from "@mui/icons-material";
import { Box, Button } from "@mui/material";
import ModalDialog from "../../ModalPanel";
import DeleteTemplate from "./DeleteTemplate";
import FormEditTemplate from "./FormEditTemplate";
import { useState } from "react";

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
      <Box display={"flex"} gap={1}>
        <ModalDialog callback={toggleModalDelete} show={showModalDelete}>
          <DeleteTemplate callback={toggleModalDelete} />
        </ModalDialog>
        <Button
          onClick={toggleModalDelete}
          sx={{
            color: "black",
            border: "1px solid #e6e4e5",
            borderRadius: "20px",
            minWidth: "auto",
            p: "5px",
            ":hover": { backgroundColor: "transparent" },
          }}
        >
          <DeleteOutline fontSize="small" />
        </Button>
        <ModalDialog callback={toggleModalEdit} show={showModalEdit}>
          <FormEditTemplate callback={toggleModalEdit} />
        </ModalDialog>
        <Button
          onClick={toggleModalEdit}
          sx={{
            color: "black",
            border: "1px solid #e6e4e5",
            borderRadius: "20px",
            minWidth: "auto",
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
