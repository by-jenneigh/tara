"use client";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import { DESTINATIONS } from "@/app/components/constants/destinations";
import { InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export default function Search() {
  return (
    <Stack spacing={2} sx={{ width: 300 }}>
      <Autocomplete
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        options={DESTINATIONS.map((option) => option.name)}
        renderInput={(params) => (
          <TextField
            variant="filled"
            margin="normal"
            color="success"
            {...params}
            label="Search a destination"
            slotProps={{
              input: {
                ...params.InputProps,
                type: "search",
                endAdornment: (
                  <InputAdornment position="end">
                    <SearchIcon />
                  </InputAdornment>
                ),
              },
            }}
          />
        )}
      />
    </Stack>
  );
}
