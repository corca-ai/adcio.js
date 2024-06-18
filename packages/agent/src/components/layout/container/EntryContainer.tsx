import { Box, Paper, createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  wrapper: {
    fontFamily: "Pretendard",
  },
  paper: {
    position: "relative",
    overflow: "hidden",
    border: `0.5px solid ${theme.colors.gray[0]}`,
    boxShadow: "0px 0px 7px rgba(0, 0, 0, 0.25)",
    [theme.fn.smallerThan("sm")]: {
      margin: "auto",
    },
  },
}));

export const EntryContainer = ({ children }: { children: React.ReactNode }) => {
  const { classes } = useStyles();
  return (
    <Box className={classes.wrapper}>
      <Paper radius="xl" className={classes.paper}>
        {children}
      </Paper>
    </Box>
  );
};
