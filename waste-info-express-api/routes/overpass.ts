import { Router } from "express";

const overpassRouter = Router();
const OVERPASS_API = "https://overpass-api.de/api/interpreter";

overpassRouter.use(function timeLog(req, res, next) {
  console.log("overpass request at: ", new Date(Date.now()).toTimeString());
  next();
});

const fetchWastePlaces = async (lat: number, lon: number, radius = 1000) => {
  // Build the Overpass QL query to find waste management facilities
  const query = `
    [out:json][timeout:25];
    (
      node["amenity"="waste_disposal"](around:${radius},${lat},${lon});
      way["amenity"="waste_disposal"](around:${radius},${lat},${lon});
      node["amenity"="recycling"](around:${radius},${lat},${lon});
      way["amenity"="recycling"](around:${radius},${lat},${lon});
      node["landuse"="landfill"](around:${radius},${lat},${lon});
      way["landuse"="landfill"](around:${radius},${lat},${lon});
    );
    out body;
    >;
    out skel qt;
  `[4];

  try {
    const response = await fetch(OVERPASS_API, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: "data=" + encodeURIComponent(query),
    });

    const data = await response.json();
    return data.elements;
  } catch (error) {
    console.error("Error fetching waste management places:", error);
    throw error;
  }
};

// Example usage:

overpassRouter.get("/waste-places", async (req, res) => {
  // Get latitude and longitude from query parameters
  console.log(req.query);
  const { lat, lon, radius = 1000 } = req.query;

  // Validate parameters
  if (!lat || !lon) {
    res.status(400).json({
      error: "Missing required parameters: lat and lon are required",
    });
  }

  // Build the Overpass QL query
  const query = `
        [out:json][timeout:25]; (
            node["amenity"="waste_disposal"](around:${radius},${lat},${lon});
            way["amenity"="waste_disposal"](around:${radius},${lat},${lon});
            node["amenity"="recycling"](around:${radius},${lat},${lon});
            way["amenity"="recycling"](around:${radius},${lat},${lon});
            node["landuse"="landfill"](around:${radius},${lat},${lon});
            way["landuse"="landfill"](around:${radius},${lat},${lon});
        );
        out body;
        >;
        out skel qt;
    `;

  try {
    const response = await fetch("https://overpass-api.de/api/interpreter", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: "data=" + encodeURIComponent(query),
    });

    if (!response.ok) {
      throw new Error("Failed to fetch data from Overpass API");
    }

    const data = await response.json();

    // Process and format the response
    const formattedPlaces = data.elements.map((place) => ({
      type: place.type,
      id: place.id,
      name: place.tags?.name || "Unnamed",
      amenity: place.tags?.amenity,
      operator: place.tags?.operator,
      coordinates:
        place.type === "node"
          ? {
              lat: place.lat,
              lon: place.lon,
            }
          : null,
    }));

    res.json({
      success: true,
      count: formattedPlaces.length,
      data: formattedPlaces,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error,
    });
  }
});

export default overpassRouter;
