import * as React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import { Box } from "@mui/material";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  "Terakhir Diubah",
  "Terlaris",
  "Kurang Diminati",
  "Harga Tertinggi",
  "Harga Terendah",
  "Stok Terbanyak",
  "Stok Sedikit",
];

export default function ListSortProduct() {
  const [personName, setPersonName] = React.useState<string[]>([]);
  console.log(personName);

  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  return (
    <Box>
      <FormControl size="small">
        <InputLabel id="demo-multiple-checkbox-label">Urutkan</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput label="Kategori" />}
          renderValue={(selected) => selected.join(", ")}
          MenuProps={MenuProps}
          sx={{
            width: "195px",
            height: "40px",
          }}
        >
          {names.map((name) => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={personName.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
