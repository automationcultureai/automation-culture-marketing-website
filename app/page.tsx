import { Navbar } from "@/components/sections/Navbar";
import { ToastNotification } from "@/components/ui/ToastNotification";
import { MobileStickyBar } from "@/components/ui/MobileStickyBar";
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
        title={<>Your next{" "}<span className="bg-gradient-to-r from-[#f9a8b4] via-[#C4394A] to-[#A82D3D] bg-clip-text text-transparent">$10k</span>{" "}is already in your contact list</>}
        description={<>We run tailored AI powered email and SMS campaigns to reactivate your old leads — lapsed clients, cancelled bookings, random enquiries. New bookings drop straight into your calendar. You only pay us if the client shows up. <span className="text-[#C4394A]">Zero risk to you.</span></>}
        actions={[
          {
            text: "Wake up my leads",
            href: "#contact",
            variant: "default",
            className: "bg-[#C4394A] hover:bg-[#AD2F3E]",
          },
          {
            text: "See the offer",
            href: "#offer",
            variant: "glow",
          },
        ]}
        image={{
          light: "/images/dashboard.png",
          dark: "/images/dashboard.png",
          alt: "Automation Culture.AI — reactivation campaign dashboard",
        }}
      />

      <SocialProofBar />
      <div className="h-px w-full bg-[linear-gradient(90deg,transparent_0%,#C4394A_30%,#C4394A_70%,transparent_100%)]" />
      <ProblemSection />
      <div className="h-px w-full bg-[#ECEAE6]" />
      <WhoWeServeSection />
      <div className="h-px w-full bg-[#ECEAE6]" />
      <HowItWorksSection />
      <div className="h-px w-full bg-[linear-gradient(90deg,transparent_0%,#C4394A_30%,#C4394A_70%,transparent_100%)]" />
      <OfferSection />
      <div className="h-px w-full bg-[#ECEAE6]" />
      <FounderSection />
      <div className="h-px w-full bg-[#ECEAE6]" />
      <FAQSection />
      <div className="h-px w-full bg-[linear-gradient(90deg,transparent_0%,#C4394A_30%,#C4394A_70%,transparent_100%)]" />
      <ContactSection />
      <Footer />
      <ToastNotification />
      <MobileStickyBar />
    </main>
  );
}
