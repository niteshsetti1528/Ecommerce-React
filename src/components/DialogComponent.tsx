import * as React from "react";
import Dialog from "@mui/material/Dialog";

export interface DialogProps {
  open: boolean;
  component: React.ReactNode;
}

const DialogComponent: React.FC<{ dialog: DialogProps }> = ({ dialog }) => {
  return (
    <Dialog open={dialog.open} maxWidth={"sm"}>
      {dialog.component}
    </Dialog>
  );
};

export default DialogComponent;
