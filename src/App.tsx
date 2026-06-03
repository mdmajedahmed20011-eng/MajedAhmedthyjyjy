/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { TrustBar } from "./components/TrustBar";
import { Story } from "./components/Story";
import { Products } from "./components/Products";
import { VideoSection } from "./components/VideoSection";
import { SocialProof } from "./components/SocialProof";
import { WhyUs } from "./components/WhyUs";
import { OrderForm } from "./components/OrderForm";
import { FAQ } from "./components/FAQ";
import { Footer } from "./components/Footer";
import { StickyMobileCTA } from "./components/StickyMobileCTA";

export default function App() {
  return (
    <div className="min-h-screen relative flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <TrustBar />
        <Story />
        <Products />
        <VideoSection />
        <SocialProof />
        <WhyUs />
        <OrderForm />
        <FAQ />
      </main>
      <Footer />
      <StickyMobileCTA />
    </div>
  );
}
