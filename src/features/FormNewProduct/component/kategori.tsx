import { useState } from "react";
import {
  List,
  ListItemButton,
  ListItemText,
  Collapse,
  Grid,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
const useStyles = makeStyles(() => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    width: "100%",
  },
  listContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
  },
  nested: {
    paddingLeft: "2px",
  },
  contentContainer: {
    width: "100%",
    flexBasis: "100%",
    display: "none",
  },
  horizontalIcon: {
    transform: "rotate(90deg)",
  },
  showContentContainer: {
    display: "block",
  },
}));

const NestedList = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [openFashionPria, setOpenFashionPria] = useState(false);
  const [openAtasanPria, setOpenAtasanPria] = useState(false);

  const handleClick = () => {
    if (open || openFashionPria || openAtasanPria) {
      handleCollapseClose();
    } else {
      setOpen(true);
    }
  };

  const handleCollapseClose = () => {
    setOpen(false);
    setOpenFashionPria(false);
    setOpenAtasanPria(false);
  };

  const handleFashionPriaClick = () => {
    setOpenFashionPria(!openFashionPria);
  };

  const handleAtasanPriaClick = () => {
    setOpenAtasanPria(!openAtasanPria);
  };

  return (
    <div className={classes.container}>
      <Grid item xs={12} className={classes.container}>
        <ListItemButton onClick={handleClick}>
          <ListItemText primary="Pilih kategori produk" />
          {open ? (
            <ExpandLess className={classes.horizontalIcon} />
          ) : (
            <ExpandMore className={classes.horizontalIcon} />
          )}
        </ListItemButton>
      </Grid>
      <div className={classes.listContainer}>
        <List component="nav" aria-labelledby="nested-list-subheader">
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton className={classes.nested}>
                <ListItemText primary="Audio, Kamera & Elektronik Lainnya" />
                <ExpandLess className={classes.horizontalIcon} />
              </ListItemButton>
              <ListItemButton className={classes.nested}>
                <ListItemText primary="Buku" />
                <ExpandLess className={classes.horizontalIcon} />
              </ListItemButton>
              <ListItemButton className={classes.nested}>
                <ListItemText primary="Dapur" />
                <ExpandLess className={classes.horizontalIcon} />
              </ListItemButton>
              <ListItemButton className={classes.nested}>
                <ListItemText primary="Fashion Anak & Bayi" />
                <ExpandLess className={classes.horizontalIcon} />
              </ListItemButton>
              <ListItemButton className={classes.nested}>
                <ListItemText primary="Fashion Muslim" />
                <ExpandLess className={classes.horizontalIcon} />
              </ListItemButton>

              <ListItemButton
                onClick={handleFashionPriaClick}
                className={classes.nested}
              >
                <ListItemText primary="Fashion Pria" />
                {openFashionPria ? (
                  <ExpandLess className={classes.horizontalIcon} />
                ) : (
                  <ExpandMore className={classes.horizontalIcon} />
                )}
              </ListItemButton>
              <ListItemButton className={classes.nested}>
                <ListItemText primary="Fashion Wanita" />
                <ExpandLess className={classes.horizontalIcon} />
              </ListItemButton>
              <ListItemButton className={classes.nested}>
                <ListItemText primary="Handphone & Tablet" />
                <ExpandLess className={classes.horizontalIcon} />
              </ListItemButton>
              <ListItemButton className={classes.nested}>
                <ListItemText primary="Lainnya" />
                <ExpandLess className={classes.horizontalIcon} />
              </ListItemButton>
            </List>
          </Collapse>
        </List>
        <div
          className={
            openFashionPria
              ? `${classes.contentContainer} ${classes.showContentContainer}`
              : classes.contentContainer
          }
        >
          <List component="nav" aria-labelledby="nested-list-subheader">
            <Collapse in={openFashionPria} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton
                  // onClick={handleAtasanPriaClick}
                  className={classes.nested}
                >
                  <ListItemText primary="Aksesoris Pria" />
                  <ExpandLess className={classes.horizontalIcon} />
                </ListItemButton>
                <ListItemButton
                  // onClick={handleAtasanPriaClick}
                  className={classes.nested}
                >
                  <ListItemText primary="Aksesoris Sepatu Pria" />
                  <ExpandLess className={classes.horizontalIcon} />
                </ListItemButton>

                <ListItemButton
                  onClick={handleAtasanPriaClick}
                  className={classes.nested}
                >
                  <ListItemText primary="Atasan Pria" />
                  {openAtasanPria ? (
                    <ExpandLess className={classes.horizontalIcon} />
                  ) : (
                    <ExpandMore className={classes.horizontalIcon} />
                  )}
                </ListItemButton>
                <ListItemButton
                  // onClick={handleAtasanPriaClick}
                  className={classes.nested}
                >
                  <ListItemText primary="Baju Tidur Pria" />
                  <ExpandLess className={classes.horizontalIcon} />
                </ListItemButton>
                <ListItemButton
                  // onClick={handleAtasanPriaClick}
                  className={classes.nested}
                >
                  <ListItemText primary="Batik Pria" />
                  <ExpandLess className={classes.horizontalIcon} />
                </ListItemButton>
                <ListItemButton
                  // onClick={handleAtasanPriaClick}
                  className={classes.nested}
                >
                  <ListItemText primary="Blazer & Jas Pria" />
                  <ExpandLess className={classes.horizontalIcon} />
                </ListItemButton>
                <ListItemButton
                  // onClick={handleAtasanPriaClick}
                  className={classes.nested}
                >
                  <ListItemText primary="Celana Pria" />
                  <ExpandLess className={classes.horizontalIcon} />
                </ListItemButton>
                <ListItemButton
                  // onClick={handleAtasanPriaClick}
                  className={classes.nested}
                >
                  <ListItemText primary="Lainnya" />
                  <ExpandLess className={classes.horizontalIcon} />
                </ListItemButton>
              </List>
            </Collapse>
          </List>
        </div>
        <div
          className={
            openAtasanPria
              ? `${classes.contentContainer} ${classes.showContentContainer}`
              : classes.contentContainer
          }
        >
          <List component="nav" aria-labelledby="nested-list-subheader">
            <ListItemButton onClick={handleAtasanPriaClick}>
              <ListItemText primary="Kaos Polo Pria" />
            </ListItemButton>
            <Collapse in={openAtasanPria} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton
                  // onClick={handleAtasanPriaClick}
                  className={classes.nested}
                >
                  <ListItemText primary="Kaos Pria" />
                </ListItemButton>
                <ListItemButton
                  // onClick={handleAtasanPriaClick}
                  className={classes.nested}
                >
                  <ListItemText primary="Kemeja Pria" />
                </ListItemButton>
              </List>
            </Collapse>
          </List>
        </div>
      </div>
    </div>
  );
};

export default NestedList;
