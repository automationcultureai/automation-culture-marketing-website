import { Navbar } from "@/components/sections/Navbar";
import { ToastNotification } from "@/components/ui/ToastNotification";
import { HeroSection } from "@/components/sections/HeroSection";
import { SocialProofBar } from "@/components/sections/SocialProofBar";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { WhoWeServeSection } from "@/components/sections/WhoWeServeSection";
import { OfferSection } from "@/components/sections/OfferSection";
import { FounderSection } from "@/components/sections/FounderSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />

      <HeroSection
        badge={{
          text: "AI-powered lead reactivation for small business",
          action: {
            text: "See how it works",
            href: "#how-it-works",
          },
        }}
        title={<>Your next{" "}<span className="bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent">$10k</span>{" "}is already in your contact list</>}
        description={<>We run tailored AI powered email and SMS campaigns to reactivate your old leads — past clients, lost quotes, cold enquiries. Bookings drop straight into your calendar. You only pay us when the job is done. <span className="text-white">Zero risk to you.</span></>}
        actions={[
          {
            text: "Wake up my leads",
            href: "#contact",
            variant: "white",
          },
          {
            text: "See the offer",
            href: "#offer",
            variant: "glow",
          },
        ]}
        image={{
          light: "/images/dashboard-light.png",
          dark: "/images/dashboard-dark.png",
          alt: "Automation Culture.AI — reactivation campaign dashboard",
        }}
      />

      <SocialProofBar />
      <div className="h-px w-full bg-[linear-gradient(90deg,transparent_0%,rgba(249,115,22,0.5)_30%,rgba(249,115,22,0.5)_70%,transparent_100%)]" />
      <ProblemSection />
      <div className="h-px w-full bg-[linear-gradient(90deg,transparent_0%,rgba(249,115,22,0.5)_30%,rgba(249,115,22,0.5)_70%,transparent_100%)]" />
      <WhoWeServeSection />
      <div className="h-px w-full bg-[linear-gradient(90deg,transparent_0%,rgba(249,115,22,0.5)_30%,rgba(249,115,22,0.5)_70%,transparent_100%)]" />
      <HowItWorksSection />
      <div className="h-px w-full bg-[linear-gradient(90deg,transparent_0%,rgba(249,115,22,0.5)_30%,rgba(249,115,22,0.5)_70%,transparent_100%)]" />
      <OfferSection />
      <div className="h-px w-full bg-[linear-gradient(90deg,transparent_0%,rgba(249,115,22,0.5)_30%,rgba(249,115,22,0.5)_70%,transparent_100%)]" />
      <FounderSection />
      <div className="h-px w-full bg-[linear-gradient(90deg,transparent_0%,rgba(249,115,22,0.5)_30%,rgba(249,115,22,0.5)_70%,transparent_100%)]" />
      <FAQSection />
      <div className="h-px w-full bg-[linear-gradient(90deg,transparent_0%,rgba(249,115,22,0.5)_30%,rgba(249,115,22,0.5)_70%,transparent_100%)]" />
      <ContactSection />
      <Footer />
      <ToastNotification />
    </main>
  );
}
