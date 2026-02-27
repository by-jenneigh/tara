"use client";

import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import { InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Destination } from "@/app/components/types/destinations-type";

type SearchProps = {
  options: Destination[];
  onSelect?: (destination: Destination | null) => void;
  onInputChange?: (value: string) => void;
};

export default function Search({
  options,
  onSelect,
  onInputChange,
}: SearchProps) {
  return (
    <Stack sx={{ width: 300 }}>
      <Autocomplete
        freeSolo
        options={options}
        getOptionLabel={(option) =>
          typeof option === "string" ? option : option.name
        }
        onChange={(_, value) => {
          if (typeof value !== "string") {
            onSelect?.(value);
          }
        }}
        onInputChange={(_, value) => {
          onInputChange?.(value);
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="filled"
            margin="normal"
            color="success"
            label="Search a destination"
            InputProps={{
              ...params.InputProps,
              type: "search",
              endAdornment: (
                <InputAdornment position="end">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        )}
      />
    </Stack>
  );
}
