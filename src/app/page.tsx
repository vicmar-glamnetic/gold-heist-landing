import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Ticker } from "@/components/Ticker";
import { RecentResults } from "@/components/RecentResults";
import { WhyFree } from "@/components/WhyFree";
import { Steps } from "@/components/Steps";
import { Bonus } from "@/components/Bonus";
import { Videos } from "@/components/Videos";
import { AppFeatures } from "@/components/AppFeatures";
import { Team } from "@/components/Team";
import { Connect } from "@/components/Connect";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Ticker />
      <RecentResults />
      <WhyFree />
      <Steps />
      <Bonus />
      <Videos />
      <AppFeatures />
      <Team />
      <Connect />
      <Footer />
    </main>
  );
}
