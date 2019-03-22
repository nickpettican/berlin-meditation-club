export default (theme) => ({
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column"
  },
  cardTitle: {
    textAlign: "left",
    fontSize: "1em"
  },
  cardSubheader: {
    textAlign: "left",
    fontSize: "1em"
  },
  media: {
    // ⚠️ object-fit is not supported by IE 11.
    objectFit: "cover"
  },
  seeMoreButton: {
    marginLeft: "auto"
  },
  locationLink: {
    textDecoration: "none",
    color: theme.palette.primary.main,
    fontSize: "1.1em"
  },
  h6: {
    fontSize: "1.1em"
  },
  h6Bold: {
    fontSize: "1.1em",
    fontWeight: 600
  },
  tableIcon: {
    paddingLeft: 0,
    paddingRight: 5
  }
});
