import React from 'react'
import Header from "../../Common/Header/Header";
import FeaturesSection from "./Features";
import HeroSection from "./Hero";
import Objective from "./Objective";
import PricingSection from "./Pricing";
import ProductSection from "./ProductDiscription";
import ReviewSection from "./Review";
import StoreConnectionSection from "./StoreConnection";
import Footer from '../../Common/Footer/Footer';

export default function HomePage() {
  return (
<>
<Header />
<div className=" mx-auto mb-20">
<HeroSection />
<FeaturesSection />
<ProductSection />
<Objective />
{/* <StoreConnectionSection /> */}
<ReviewSection />
<PricingSection />
</div>
<Footer />
</>
  )
}
