import { Router } from "express";

const iwasteRouter = Router();
const IWASTE_API = "https://iwaste.epa.gov/api";

iwasteRouter.use(function timeLog(req, res, next) {
  console.log("iwaste request at: ", new Date(Date.now()).toTimeString());
  next();
});

iwasteRouter.get("/epa-regions", async (req, res) => {
  const epaRegionResponse = await fetch(IWASTE_API + "/epa-regions");
  const epaData = await epaRegionResponse.json();

  const stateToRegions: { [key: string]: number } = {};
  epaData.forEach((region: { epaRegionName: string; id: number }) => {
    const states = region.epaRegionName.match(/\((.*?)\)/)![1].split(", ");

    states.forEach((state: string) => {
      stateToRegions[state] = region.id;
    });
  });

  console.log(stateToRegions);
  res.status(epaRegionResponse.status).json(stateToRegions);
});

export default iwasteRouter;
