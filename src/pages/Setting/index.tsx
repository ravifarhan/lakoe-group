import { Box, Tab, Tabs, Typography } from "@mui/material";
import { useState } from "react";
import PanelInformation from "../../components/PanelInformation";
import PanelTemplateMessage from "../../components/PanelTemplateMessage";
import PanelLocation from "../../components/PanelLocation";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const Setting = () => {
  const [value, setValue] = useState(0);


  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const a11yProps = (index: number) => {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  };
  const CustomTabPanel = (props: TabPanelProps) => {
    const { children, value, index, ...other } = props;

    return (
      <Box
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box>
            <Typography component="div">{children}</Typography>
          </Box>
        )}
      </Box>
    );
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          bgcolor: "white",
          margin: "20px",
          borderRadius: "10px",
        }}
      >
        <Box display={"flex"} >
          <Typography variant="h6" padding={"10px"} fontWeight={"bold"} marginRight={"40px"}>
            Fesyen Store
          </Typography>
        </Box>
        <Box sx={{ padding: "10px" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
              sx={{
                "& .MuiTab-root": {
                  textTransform: "none",
                },
              }}
            >
              <Tab label="Informasi" {...a11yProps(0)} />
              <Tab label="Lokasi" {...a11yProps(1)} />
              <Tab label="Template Pesan" {...a11yProps(2)} />
            </Tabs>
          </Box>
          <Box sx={{ padding: "10px" }}>
            <CustomTabPanel value={value} index={0}>
              <PanelInformation />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
              <PanelLocation />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
              <PanelTemplateMessage />
            </CustomTabPanel>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Setting;
