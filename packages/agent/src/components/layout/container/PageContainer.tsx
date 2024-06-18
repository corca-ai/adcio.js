import { Box, Paper, createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  wrapper: {
    fontFamily: 'Pretendard',
    padding: '24px',
    [theme.fn.smallerThan('sm')]: {
      padding: '10px',
    },
  },
  paper: {
    overflow: 'hidden',
    border: `0.5px solid ${theme.colors.gray[0]}`,
    boxShadow: '0px 0px 7px rgba(0, 0, 0, 0.25)',
    [theme.fn.smallerThan('sm')]: {
      borderRadius: '30px 30px 0 0 ',
      margin: 'auto',
    },
  },
  pageContainer: {
    width: '360px',
    height: '600px',
    [theme.fn.smallerThan('sm')]: {
      width: '100vw',
      height: '80vh',
    },
  },
}));

export const PageContainer = ({ children }: { children: React.ReactNode }) => {
  const { classes } = useStyles();
  return (
    <Paper radius="xl" className={classes.paper}>
      <Box className={classes.pageContainer}>{children}</Box>
    </Paper>
  );
};
