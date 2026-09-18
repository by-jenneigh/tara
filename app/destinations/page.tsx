"use client";

import { useMemo, useState } from "react";

import CategoryCard from "@/app/components/common/category-card";
import DestinationCard from "@/app/components/common/card";
import Search from "@/app/components/common/search";
import TopBar from "@/app/components/common/topbar";
import { DESTINATIONS } from "@/app/components/constants/destinations";

import { Grid, Stack, Typography } from "@mui/material";

import {
  Anchor,
  Building2,
  Church,
  Compass,
  Fish,
  Landmark,
  MapPin,
  Mountain,
  Navigation,
  Radio,
  Utensils,
  Waves,
  Trees,
  TriangleAlert,
  type LucideIcon,
} from "lucide-react";

import { useRouter } from "next/navigation";

type ViewLevel = "towns" | "categories" | "destinations";

/*
 * Maps destination types/categories to icons.
 */
const CATEGORY_ICONS: Record<string, LucideIcon> = {
  Beach: Waves,
  Beaches: Waves,

  Nature: Trees,
  "Nature & Wildlife": Trees,

  Mountain: Mountain,
  Mountains: Mountain,

  Historical: Landmark,
  "Historical Site": Landmark,
  "Historical Sites": Landmark,

  Cultural: Building2,
  "Cultural Site": Church,

  Religious: Church,
  "Religious Site": Church,

  Food: Utensils,
  "Food & Dining": Utensils,
  Restaurant: Utensils,

  Fishing: Fish,

  Adventure: Compass,

  Navigation: Navigation,

  Transportation: Navigation,

  Anchorage: Anchor,

  Communication: Radio,

  Emergency: TriangleAlert,

  Landmark: Landmark,

  Other: MapPin,
};

const DEFAULT_CATEGORY_ICON = MapPin;

function getCategoryIcon(type: string): LucideIcon {
  return CATEGORY_ICONS[type] ?? DEFAULT_CATEGORY_ICON;
}

export default function Destinations() {
  const router = useRouter();

  const [searchValue, setSearchValue] = useState("");
  const [selectedTown, setSelectedTown] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [viewLevel, setViewLevel] = useState<ViewLevel>("towns");

  /*
   * ---------------------------------------------------------
   * TOWNS
   * ---------------------------------------------------------
   */

  const towns = useMemo(() => {
    return [...new Set(DESTINATIONS.map((destination) => destination.town))]
      .filter(Boolean)
      .sort();
  }, []);

  /*
   * ---------------------------------------------------------
   * CATEGORIES FOR SELECTED TOWN
   * ---------------------------------------------------------
   */

  const townCategories = useMemo(() => {
    if (!selectedTown) return [];

    return [
      ...new Set(
        DESTINATIONS.filter(
          (destination) => destination.town === selectedTown,
        ).map((destination) => destination.type),
      ),
    ]
      .filter(Boolean)
      .sort();
  }, [selectedTown]);

  /*
   * ---------------------------------------------------------
   * DESTINATIONS FOR SELECTED TOWN + CATEGORY
   * ---------------------------------------------------------
   */

  const townDestinations = useMemo(() => {
    if (!selectedTown || !selectedType) return [];

    return DESTINATIONS.filter(
      (destination) =>
        destination.town === selectedTown && destination.type === selectedType,
    );
  }, [selectedTown, selectedType]);

  /*
   * ---------------------------------------------------------
   * SEARCH
   * ---------------------------------------------------------
   *
   * Search remains available on every level and can
   * take the user directly to a destination.
   */

  const searchOptions = useMemo(() => {
    return DESTINATIONS;
  }, []);

  /*
   * ---------------------------------------------------------
   * NAVIGATION
   * ---------------------------------------------------------
   */

  const handleTownClick = (town: string) => {
    setSelectedTown(town);
    setSelectedType("");
    setSearchValue("");
    setViewLevel("categories");
  };

  const handleCategoryClick = (type: string) => {
    setSelectedType(type);
    setViewLevel("destinations");
  };

  /*
   * Breadcrumb navigation:
   *
   * Towns
   *   ↓
   * Town
   *   ↓
   * Category
   */

  const handleBreadcrumbTowns = () => {
    setSelectedTown("");
    setSelectedType("");
    setViewLevel("towns");
  };

  const handleBreadcrumbTown = () => {
    setSelectedType("");
    setViewLevel("categories");
  };

  const handleBreadcrumbCategory = () => {
    setViewLevel("destinations");
  };

  /*
   * ---------------------------------------------------------
   * BREADCRUMBS
   * ---------------------------------------------------------
   */

  const renderBreadcrumbs = () => {
    return (
      <Stack
        direction="row"
        alignItems="center"
        spacing={0.5}
        sx={{
          flexWrap: "wrap",
          rowGap: 0.5,
          mb: 2,
        }}
      >
        {/* Towns */}
        <Typography
          component="button"
          onClick={handleBreadcrumbTowns}
          sx={{
            border: 0,
            background: "none",
            padding: 0,
            margin: 0,
            cursor: "pointer",
            color: viewLevel === "towns" ? "white" : "rgba(255,255,255,0.65)",
            fontSize: "0.875rem",
            fontWeight: viewLevel === "towns" ? 600 : 400,
            "&:hover": {
              color: "white",
              textDecoration: "underline",
            },
          }}
        >
          Towns
        </Typography>

        {/* Town */}
        {selectedTown && (
          <>
            <Typography
              sx={{
                color: "rgba(255,255,255,0.5)",
                fontSize: "0.875rem",
              }}
            >
              /
            </Typography>

            <Typography
              component="button"
              onClick={handleBreadcrumbTown}
              sx={{
                border: 0,
                background: "none",
                padding: 0,
                margin: 0,
                cursor: "pointer",
                color:
                  viewLevel === "categories"
                    ? "white"
                    : "rgba(255,255,255,0.65)",
                fontSize: "0.875rem",
                fontWeight: viewLevel === "categories" ? 600 : 400,
                "&:hover": {
                  color: "white",
                  textDecoration: "underline",
                },
              }}
            >
              {selectedTown}
            </Typography>
          </>
        )}

        {/* Category */}
        {selectedType && (
          <>
            <Typography
              sx={{
                color: "rgba(255,255,255,0.5)",
                fontSize: "0.875rem",
              }}
            >
              /
            </Typography>

            <Typography
              component="button"
              onClick={handleBreadcrumbCategory}
              sx={{
                border: 0,
                background: "none",
                padding: 0,
                margin: 0,
                cursor: "pointer",
                color: "white",
                fontSize: "0.875rem",
                fontWeight: 600,
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
            >
              {selectedType}
            </Typography>
          </>
        )}
      </Stack>
    );
  };

  return (
    <Stack
      className="pb-30"
      alignItems="center"
      sx={{
        width: "100%",
      }}
    >
      <Stack
        sx={{
          width: "100%",
          maxWidth: 900,
        }}
      >
        {/* =====================================================
            TOP BAR
           ===================================================== */}

        <TopBar label="Destinations" onBackClick={() => router.back()} />

        {/* =====================================================
            SEARCH
           ===================================================== */}

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
            px: 2,
          }}
        >
          <Search
            options={searchOptions}
            onInputChange={setSearchValue}
            onSelect={(destination) => {
              if (destination) {
                router.push(`/destinations/${destination.id}`);
              }
            }}
          />
        </Stack>

        {/* =====================================================
            BREADCRUMBS ONLY
           ===================================================== */}

        <Stack px={2} mb={3}>
          {renderBreadcrumbs()}
        </Stack>

        {/* =====================================================
            LEVEL 1 — TOWNS
            ONE RECTANGULAR CARD PER ROW
           ===================================================== */}

        {viewLevel === "towns" && (
          <Stack px={2}>
            <Grid container spacing={2}>
              {towns.map((town) => {
                const townCount = DESTINATIONS.filter(
                  (destination) => destination.town === town,
                ).length;

                return (
                  <Grid size={{ xs: 12 }} key={town}>
                    <CategoryCard
                      name={town}
                      content={`${townCount} ${
                        townCount === 1 ? "destination" : "destinations"
                      }`}
                      onCardClick={() => handleTownClick(town)}
                    />
                  </Grid>
                );
              })}
            </Grid>

            {towns.length === 0 && (
              <Stack alignItems="center" py={6}>
                <Typography color="white">No towns available.</Typography>
              </Stack>
            )}
          </Stack>
        )}

        {/* =====================================================
            LEVEL 2 — CATEGORIES
            ONE RECTANGULAR CARD PER ROW
           ===================================================== */}

        {viewLevel === "categories" && (
          <Stack px={2}>
            <Grid container spacing={2}>
              {townCategories.map((type) => {
                const categoryCount = DESTINATIONS.filter(
                  (destination) =>
                    destination.town === selectedTown &&
                    destination.type === type,
                ).length;

                const CategoryIcon = getCategoryIcon(type);

                return (
                  <Grid size={{ xs: 12 }} key={type}>
                    <CategoryCard
                      name={type}
                      content={`${categoryCount} ${
                        categoryCount === 1 ? "destination" : "destinations"
                      }`}
                      icon={<CategoryIcon size={28} strokeWidth={2} />}
                      onCardClick={() => handleCategoryClick(type)}
                    />
                  </Grid>
                );
              })}
            </Grid>

            {townCategories.length === 0 && (
              <Stack alignItems="center" py={6}>
                <Typography color="white">
                  No categories available for this town.
                </Typography>
              </Stack>
            )}
          </Stack>
        )}

        {/* =====================================================
            LEVEL 3 — DESTINATIONS
            EXISTING PHOTO DESTINATION CARDS
           ===================================================== */}

        {viewLevel === "destinations" && (
          <Stack px={2}>
            <Grid container spacing={2}>
              {townDestinations.map((destination) => (
                <Grid size={{ xs: 6, sm: 6 }} key={destination.id}>
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

            {townDestinations.length === 0 && (
              <Stack alignItems="center" py={6}>
                <Typography color="white">
                  No destinations available in this category.
                </Typography>
              </Stack>
            )}
          </Stack>
        )}
      </Stack>
    </Stack>
  );
}
