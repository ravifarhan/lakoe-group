import { Box, Modal } from "@mui/material";
import { PropsWithChildren, ReactElement } from "react";

interface IModalDialogProps extends PropsWithChildren {
  children: ReactElement;
  show: boolean;
  callback: () => void;
}

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "#ffffff",
  borderRadius: "10px",
  boxShadow: 10,
  p: "20px",
};

const ModalDialog: React.FC<IModalDialogProps> = ({
  children,
  show,
  callback,
}) => {
  return (
    <Modal
      open={show}
      onClose={callback}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>{children}</Box>
    </Modal>
  );
};

export default ModalDialog;
