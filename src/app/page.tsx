import { Navbar } from "@/components/site/navbar";
import { Hero } from "@/components/site/hero";
import { StatsStrip } from "@/components/site/stats-strip";
import { Features } from "@/components/site/features";
import { Showcase } from "@/components/site/showcase";
import { QuranSection } from "@/components/site/quran-section";
import { News } from "@/components/site/news";
import { DownloadSection } from "@/components/site/download";
import { PrivacyAndCommunity } from "@/components/site/privacy-community";
import { Footer } from "@/components/site/footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <StatsStrip />
        <Features />
        <Showcase />
        <QuranSection />
        <News />
        <DownloadSection />
        <PrivacyAndCommunity />
      </main>
      <Footer />
    </div>
  );
}
