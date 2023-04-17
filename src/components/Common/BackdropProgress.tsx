import { CircularProgress, Backdrop } from "@mui/material";

const BackdropProgress = ({
  open,
  zIndex,
  position,
}: {
  open: boolean;
  zIndex?: number;
  position?: "fixed" | "absolute" | undefined;
}) => {
  return (
    <Backdrop
      sx={{
        color: "#fff",
        zIndex: (theme) => (zIndex ? zIndex : theme.zIndex.drawer + 2),
        position: position ? position : "fixed",
      }}
      open={open}
    >
      <CircularProgress color="primary" />
    </Backdrop>
  );
};

export default BackdropProgress;
