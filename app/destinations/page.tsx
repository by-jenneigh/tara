"use client";

import { useMemo, useState } from "react";
import DestinationCard from "@/app/components/common/card";
import Search from "@/app/components/common/search";
import TopBar from "@/app/components/common/topbar";
import { DESTINATIONS } from "@/app/components/constants/destinations";
import {
  Grid,
  Stack,
  IconButton,
  Popover,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Chip,
} from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";
import { useRouter } from "next/navigation";

export default function Destinations() {
  const router = useRouter();

  const [searchValue, setSearchValue] = useState("");
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const [selectedType, setSelectedType] = useState("");
  const [selectedTown, setSelectedTown] = useState("");

  const handleOpenFilter = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseFilter = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  const towns = [...new Set(DESTINATIONS.map((d) => d.town))];
  const types = [...new Set(DESTINATIONS.map((d) => d.type))];

  const filteredDestinations = useMemo(() => {
    return DESTINATIONS.filter((d) => {
      const matchesSearch = d.name
        .toLowerCase()
        .includes(searchValue.toLowerCase());

      const matchesType = selectedType ? d.type === selectedType : true;
      const matchesTown = selectedTown ? d.town === selectedTown : true;

      return matchesSearch && matchesType && matchesTown;
    });
  }, [searchValue, selectedType, selectedTown]);

  return (
    <Stack className="pb-30" alignItems="center">
      <Stack sx={{ width: "100%", maxWidth: 900 }}>
        <TopBar label="Destinations" onBackClick={() => router.back()} />

        <Stack
          direction="row"
          alignItems="center"
          spacing={1}
          sx={{
            position: "sticky",
            top: 0,
            zIndex: 10,
            pt: 5,
            pb: 2,
          }}
        >
          <Search
            options={DESTINATIONS}
            onInputChange={setSearchValue}
            onSelect={(destination) => {
              if (destination) {
                router.push(`/destinations/${destination.id}`);
              }
            }}
          />

          <IconButton onClick={handleOpenFilter}>
            <FilterListIcon sx={{ color: "white" }} />
          </IconButton>
        </Stack>

        <Popover
          open={open}
          anchorEl={anchorEl}
          onClose={handleCloseFilter}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
        >
          <Stack spacing={2} p={2} minWidth={200}>
            <FormControl fullWidth size="small">
              <InputLabel>Type</InputLabel>
              <Select
                value={selectedType}
                label="Type"
                onChange={(e) => setSelectedType(e.target.value)}
              >
                <MenuItem value="">All</MenuItem>
                {types.map((type) => (
                  <MenuItem key={type} value={type}>
                    {type}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl fullWidth size="small">
              <InputLabel>Town</InputLabel>
              <Select
                value={selectedTown}
                label="Town"
                onChange={(e) => setSelectedTown(e.target.value)}
              >
                <MenuItem value="">All</MenuItem>
                {towns.map((town) => (
                  <MenuItem key={town} value={town}>
                    {town}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <Chip
              label="Clear Filters"
              onClick={() => {
                setSelectedType("");
                setSelectedTown("");
              }}
              clickable
            />
          </Stack>
        </Popover>

        <Stack px={2}>
          <Grid container spacing={2}>
            {filteredDestinations.map((destination) => (
              <Grid size={{ xs: 6, sm: 4, md: 3 }} key={destination.id}>
                <DestinationCard
                  name={destination.name}
                  content={destination.town}
                  image={destination.images[0]}
                  type={destination.type}
                  onCardClick={() =>
                    router.push(`/destinations/${destination.id}`)
                  }
                />
              </Grid>
            ))}
          </Grid>
        </Stack>
      </Stack>
    </Stack>
  );
}
