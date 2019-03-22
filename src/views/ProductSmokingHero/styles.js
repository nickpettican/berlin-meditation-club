export default (theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: theme.spacing.unit * 9,
    marginBottom: theme.spacing.unit * 9
  },
  button: {
    border: "4px solid currentColor",
    borderRadius: 0,
    height: "auto",
    [theme.breakpoints.up("sm")]: {
      padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 5}px`
    }
  },
  link: {
    marginTop: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 3
  },
  buoy: {
    width: 60
  }
});
