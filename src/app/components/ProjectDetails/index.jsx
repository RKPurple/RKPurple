import SentinelProject from "./SentinelDetails";
import PortfolioProject from "./PortfolioDetails";
import PikachuProject from "./PikachuDetails";
import RedrafterProject from "./RedrafterDetails";

// Map project IDs to their respective components
const projectComponents = {
    "sentinel": SentinelProject,
    "portfolio": PortfolioProject,
    "pikachu": PikachuProject,
    "redrafter": RedrafterProject,
};
export default projectComponents;