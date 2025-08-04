import { type Metadata } from 'next'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import imageLaptop from '@/images/laptop.jpg'

function StudentsSupport() {
  return (
    <>
      <SectionIntro
        eyebrow="Student Support"
        title="Empowering students for a better tomorrow"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          We believe in the power of education and research to transform lives 
          and communities. Our mission is to support deserving students in their 
          academic journey and research endeavors.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={imageLaptop}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem title="Research Support">
              We provide assistance to students conducting research across various 
              fields. From guidance on methodology to technical support, we&apos;re here 
              to help you advance knowledge and innovation.
            </ListItem>
            <ListItem title="Grant & Scholarship Assistance">
              Our team helps deserving students identify and apply for grants and 
              scholarships. We sponsor students in the final stages of higher 
              education research when they need it most.
            </ListItem>
            <ListItem title="Academic Technology">
              We provide access to cutting-edge technology and software tools 
              that students need for their research projects and academic work.
            </ListItem>
            <ListItem title="Mentorship Programs">
              Connect with experienced professionals and researchers who can 
              guide you through your academic journey and help you achieve 
              your educational goals.
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  )
}

function StudentsContact() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <FadeIn>
          <h2 className="font-display text-3xl font-medium text-white sm:text-4xl">
            Ready to start your journey?
          </h2>
          <p className="mt-6 text-xl text-neutral-300">
            Get in touch with us to learn more about how we can support your 
            academic goals and research projects.
          </p>
          <div className="mt-10">
            <a
              href="mailto:info@vadainnovation.com?subject=Student Support Inquiry&body=Hello,%0D%0A%0D%0AI am interested in learning more about your student support programs.%0D%0A%0D%0APlease provide me with more information.%0D%0A%0D%0AThank you!"
              className="inline-flex rounded-full bg-white px-8 py-3 text-sm font-semibold text-neutral-950 transition hover:bg-neutral-200"
            >
              Contact Us for Student Support
            </a>
          </div>
        </FadeIn>
      </Container>
    </div>
  )
}

export const metadata: Metadata = {
  title: 'Students',
  description:
    'Supporting students in their research and education journey for a better tomorrow.',
}

export default function Students() {
  return (
    <>
      <PageIntro eyebrow="Students" title="Building the future through education">
        <p>
          At Vada Innovation, we are committed to helping students excel in their 
          research and educational pursuits. We believe that by supporting the next 
          generation of innovators and researchers, we contribute to building a 
          better tomorrow.
        </p>
        <div className="mt-10 max-w-2xl space-y-6 text-base">
          <p>
            Our student support program focuses on providing comprehensive assistance 
            to deserving students who demonstrate exceptional potential and dedication 
            to their studies. We understand that financial constraints and lack of 
            resources can hinder academic progress, which is why we step in to provide 
            the necessary support.
          </p>
          <p>
            Whether you&apos;re conducting groundbreaking research, need assistance with 
            grant applications, or require access to specialized technology and tools, 
            our team is here to help you succeed in your academic journey.
          </p>
        </div>
      </PageIntro>

      <StudentsSupport />

      <StudentsContact />
    </>
  )
}