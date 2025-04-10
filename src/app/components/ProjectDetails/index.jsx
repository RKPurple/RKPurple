import SentinelProject from "./SentinelDetails";
import PortfolioProject from "./PortfolioDetails";
import PikachuProject from "./PikachuDetails";

// Map project IDs to their respective components
const projectComponents = {
    "sentinel": SentinelProject,
    "portfolio": PortfolioProject,
    "pikachu": PikachuProject,
};
export default projectComponents;