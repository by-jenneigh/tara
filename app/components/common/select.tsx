/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

type BasicSelectProps = {
  options: Record<string, any>[];
  value: any;
  onChange: (value: any) => void;
  sx?: object;
  label?: string;
};

export default function BasicSelect(props: BasicSelectProps) {
  const { options, value, onChange, sx = {}, label = "Origin" } = props;

  const selectId = `select-${label.replace(/\s+/g, "").toLowerCase()}`;

  const handleChange = (event: SelectChangeEvent) => {
    const selectedId = event.target.value as string;
    const selectedOption = options.find((opt) => opt.id === selectedId);
    onChange(selectedOption || null);
  };

  return (
    <Box sx={{ width: 300, ...sx }}>
      <FormControl fullWidth>
        <InputLabel
          id={`${selectId}-label`}
          color="success"
          sx={{ fontSize: "23px" }}
        >
          {label}
        </InputLabel>

        <Select
          labelId={`${selectId}-label`}
          id={selectId}
          value={value?.id || ""}
          label={label}
          onChange={handleChange}
          variant="filled"
          fullWidth
          color="success"
        >
          {options.map((option) => (
            <MenuItem
              key={option.id}
              value={option.id}
              sx={{ whiteSpace: "normal" }}
            >
              {option.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
