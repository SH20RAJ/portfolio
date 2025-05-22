import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import SkillsSection from '@/components/sections/SkillsSection';
import ContactSection from '@/components/sections/ContactSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import BlogSection from '@/components/sections/BlogSection';
import Header from '@/components/ui/Header';
import Footer from '@/components/ui/Footer';
import BackToTop from '@/components/ui/BackToTop';
import ThemeToggle from '@/components/ui/ThemeToggle';
import Loader from '@/components/ui/Loader';

export default function Home() {
  return (
    <>
      <Loader />
      <Header />
      <main className="flex flex-col min-h-screen">
        <div className='-mt-20'>
        <HeroSection /></div>
        <AboutSection />
        {/* <ExperienceSection /> */}
        <ProjectsSection />
        <SkillsSection />
        <BlogSection />
        <ContactSection />
      </main>
      <Footer />
      <BackToTop />
      <ThemeToggle />
    </>
  );
}

      