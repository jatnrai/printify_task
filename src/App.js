import Header from "./Common/Header/Header";
import FeaturesSection from "./Components/HomePage/Features";
import HomePage from "./Components/HomePage/HomePage";
import Objective from "./Components/HomePage/Objective";
import PricingSection from "./Components/HomePage/Pricing";
import ProductSection from "./Components/HomePage/ProductDiscription";
import ReviewSection from "./Components/HomePage/Review";
import StoreConnectionSection from "./Components/HomePage/StoreConnection";

function App() {
  return (
<>
<Header />
<div className=" mx-auto mb-20">
<HomePage />
<FeaturesSection />
<ProductSection />
<Objective />
{/* <StoreConnectionSection /> */}
<ReviewSection />
<PricingSection />
</div>
</>
  );
}

export default App;
