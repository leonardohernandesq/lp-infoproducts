'use client';

import { Header } from './components/header';
import { Banner } from './components/banner';
import { AboutUs } from './components/about';
import { HowWorks } from './components/howworks';
import { Testemonials } from './components/testimonials';
import { WhyChoose } from './components/whychoose';
import { Contact } from './components/contact';
import { Footer } from './components/footer';
import { Exchange } from './components/exchange';

export default function Home() {

  return (
    <main className='containerMain'>
      <Header />
      <Banner />
      <Exchange />
      <AboutUs />
      <HowWorks />
      <Testemonials />
      <WhyChoose />
      <Contact />
      <Footer />
    </main>
  );
}
