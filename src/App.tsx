import Layout from '@/components/layout/Layout'
import ParticleCanvas from '@/components/ParticleCanvas'
import HeroSection from '@/components/hero/HeroSection'
import StatsSection from '@/components/stats/StatsSection'
import NuttStudySection from '@/components/nutt/NuttStudySection'
import TestimoniesSection from '@/components/testimonies/TestimoniesSection'
import ResourcesSection from '@/components/resources/ResourcesSection'
import Divider from '@/components/ui/Divider'

function App() {
  return (
    <>
      <ParticleCanvas />
      <Layout>
        <HeroSection />
        <Divider />
        <StatsSection />
        <Divider />
        <NuttStudySection />
        <Divider />
        <TestimoniesSection />
        <Divider />
        <ResourcesSection />
      </Layout>
    </>
  )
}

export default App
