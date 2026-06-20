import Layout from '@/components/layout/Layout'
import ParticleCanvas from '@/components/ParticleCanvas'
import HeroSection from '@/components/hero/HeroSection'
import StatsSection from '@/components/stats/StatsSection'
import NuttStudySection from '@/components/nutt/NuttStudySection'
import TestimoniesSection from '@/components/testimonies/TestimoniesSection'
import ResourcesSection from '@/components/resources/ResourcesSection'
import ConstellationDivider from '@/components/ui/ConstellationDivider'

function App() {
  return (
    <>
      <ParticleCanvas />
      <Layout>
        <HeroSection />
        <ConstellationDivider />
        <StatsSection />
        <ConstellationDivider />
        <NuttStudySection />
        <ConstellationDivider />
        <TestimoniesSection />
        <ConstellationDivider />
        <ResourcesSection />
      </Layout>
    </>
  )
}

export default App
