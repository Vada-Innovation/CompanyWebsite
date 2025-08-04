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

function StudentsStats() {
  return (
    <div className="mt-24 rounded-4xl bg-gradient-to-br from-blue-50 to-indigo-100 py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <FadeIn>
          <div className="text-center">
            <h2 className="font-display text-3xl font-medium text-neutral-950 sm:text-4xl">
              Making a Real Impact
            </h2>
            <p className="mt-6 text-xl text-neutral-700">
              Our commitment to student success is reflected in the outcomes we&apos;ve helped achieve.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600">PhD</div>
              <div className="mt-2 text-sm text-neutral-600">Research Support</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600">£1,500</div>
              <div className="mt-2 text-sm text-neutral-600">Grant Value (Approx.)</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600">Final</div>
              <div className="mt-2 text-sm text-neutral-600">Semester Focus</div>
            </div>
          </div>
        </FadeIn>
      </Container>
    </div>
  )
}

function StudentsContact() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <FadeIn>
          <div className="lg:flex lg:items-center lg:gap-x-8">
            <div className="lg:w-1/2">
              <h2 className="font-display text-3xl font-medium text-white sm:text-4xl">
                Ready to start your academic journey with us?
              </h2>
              <p className="mt-6 text-xl text-neutral-300">
                Whether you need research guidance, grant assistance, or academic support, 
                we&apos;re here to help you achieve your educational goals.
              </p>
            </div>
            <div className="mt-10 lg:mt-0 lg:w-1/2 lg:pl-8">
              <div className="rounded-2xl bg-white p-8">
                <h3 className="font-display text-xl font-semibold text-neutral-950 mb-6">
                  Get Student Support
                </h3>
                <div className="space-y-4">
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSdQ1CyKNIvYSzTJ7xN7gva-4YuraqUZTNvf58HuE_6wSzX-DQ/viewform?usp=header"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full rounded-full bg-blue-600 px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-blue-500"
                  >
                    Apply for PhD Research Grant
                  </a>
                  <a
                    href="mailto:info@vadainnovation.com?subject=PhD Grant Inquiry&body=Hello,%0D%0A%0D%0AI am a PhD student interested in your research grant program. Here are my details:%0D%0A%0D%0AName:%0D%0AUniversity:%0D%0ACurrent Semester: (7th/8th)%0D%0AResearch Area:%0D%0AExpected Thesis Submission:%0D%0A%0D%0APlease provide more information about the application process.%0D%0A%0D%0AThank you!"
                    className="block w-full rounded-full border border-blue-600 px-6 py-3 text-center text-sm font-semibold text-blue-600 transition hover:bg-blue-50"
                  >
                    Contact for Information
                  </a>
                  <div className="text-center pt-4">
                    <p className="text-sm text-neutral-600">
                      Questions? Email us at{' '}
                      <a href="mailto:info@vadainnovation.com" className="text-blue-600 hover:underline">
                        info@vadainnovation.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
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

      <StudentsStats />

      <StudentsContact />
    </>
  )
}