import { Alert, AlertColor, Snackbar } from "@mui/material";

export interface ToastParams {
  open: boolean;
  duration?: number;
  onClose?: () => void;
  message: string;
  severity: AlertColor;
}

const ToastComponent: React.FC<{ toastParams: ToastParams }> = ({
  toastParams,
}) => {
  const { open, duration = 1000, onClose, message, severity } = toastParams;
  return (
    <Snackbar open={open} autoHideDuration={duration} onClose={onClose}>
      <Alert severity={severity} sx={{ width: "100%" }}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default ToastComponent;
