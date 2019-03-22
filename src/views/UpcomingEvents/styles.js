export default (theme) => ({
  root: {
    display: "flex",
    overflow: "hidden"
  },
  layoutBody: {
    marginTop: theme.spacing.unit * 15,
    marginBottom: theme.spacing.unit * 30,
    display: "flex",
    position: "relative",
    flexDirection: "column"
  },
  title: {
    marginTop: theme.spacing.unit * 5,
    marginBottom: theme.spacing.unit * 10,
    textAlign: "center"
  }
});
