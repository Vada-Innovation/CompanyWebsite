import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { Testimonial } from '@/components/Testimonial'
import logoDarkBMJ from '@/images/clients/bmj-consultant/logo-dark.svg'
import logoBMJ from '@/images/clients/bmj-consultant/logo-light.svg'
import logodeSwot from '@/images/clients/deswot/logo-light.svg'
import logoGlobalGroupOne from '@/images/clients/global-group-one/logo-light.svg'
import logoRegnxt from '@/images/clients/regnxt/logo-light.svg'
// import logoBrightPath from '@/images/clients/bright-path/logo-light.svg'
// import logoFamilyFund from '@/images/clients/regnxt/logo-light.svg'
// import logoUnseal from '@/images/clients/unseal/logo-light.svg'
import imageLaptop from '@/images/laptop.jpg'
import { type CaseStudy, type MDXEntry, loadCaseStudies } from '@/lib/mdx'

const clients = [
  ['Regnxt', logoRegnxt],
  ['Global Group One', logoGlobalGroupOne],
  ['DeSwot', logodeSwot],
  ['BMJ Consultant', logoBMJ],
]

function Clients() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
            We’ve worked with some of amazing people
          </h2>
          <div className="h-px flex-auto bg-neutral-800" />
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4"
          >
            {clients.map(([client, logo]) => (
              <li key={client}>
                <FadeIn>
                  <Image src={logo} alt={client} unoptimized />
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </Container>
    </div>
  )
}

function CaseStudies({
  caseStudies,
}: {
  caseStudies: Array<MDXEntry<CaseStudy>>
}) {
  return (
    <>
      <SectionIntro
        title="Harnessing technology for a brighter future"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          We believe technology is the answer to the world’s greatest
          challenges. It’s also the cause, so we find ourselves in bit of a
          catch 22 situation.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {caseStudies.map((caseStudy) => (
            <FadeIn key={caseStudy.href} className="flex">
              <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
                <h3>
                  <Link href={caseStudy.href}>
                    <span className="absolute inset-0 rounded-3xl" />
                    <Image
                      src={caseStudy.logo}
                      alt={caseStudy.client}
                      className="h-16 w-16"
                      unoptimized
                    />
                  </Link>
                </h3>
                <p className="mt-6 flex gap-x-2 text-sm text-neutral-950">
                  <time
                    dateTime={caseStudy.date.split('-')[0]}
                    className="font-semibold"
                  >
                    {caseStudy.date.split('-')[0]}
                  </time>
                  <span className="text-neutral-300" aria-hidden="true">
                    /
                  </span>
                  <span>Case study</span>
                </p>
                <p className="mt-6 font-display text-2xl font-semibold text-neutral-950">
                  {caseStudy.title}
                </p>
                <p className="mt-4 text-base text-neutral-600">
                  {caseStudy.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </>
  )
}

function Services() {
  return (
    <>
      <SectionIntro
        eyebrow="Services"
        title="We help you identify, explore and respond to new opportunities."
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          As long as those opportunities involve giving us money to re-purpose
          old projects — we can come up with an endless number of those.
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
            <ListItem title="Web development">
              We specialise in crafting beautiful, high quality marketing pages.
              The rest of the website will be a shell that uses lorem ipsum
              everywhere.
            </ListItem>
            <ListItem title="Application development">
              We have a team of skilled developers who are experts in the latest
              app frameworks, like Angular 1 and Google Web Toolkit.
            </ListItem>
            <ListItem title="E-commerce">
              We are at the forefront of modern e-commerce development. Which
              mainly means adding your logo to the Shopify store template we&apos;ve
              used for the past six years.
            </ListItem>
            <ListItem title="Custom content management">
              At Vada Innovation we understand the importance of having a robust
              and customised CMS. That&apos;s why we run all of our client projects
              out of a single, enormous Joomla instance.
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  )
}

function StudentsSection() {
  return (
    <>
      <SectionIntro
        eyebrow="Education & Research"
        title="Building tomorrow through academic excellence"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Beyond technology solutions, we&apos;re committed to fostering the next 
          generation of innovators. Our student support program bridges the gap 
          between academic potential and real-world impact.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-start lg:gap-x-8">
          <div className="lg:w-1/2">
            <FadeIn>
              <div className="rounded-3xl bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                    </svg>
                  </div>
                  <h3 className="font-display text-2xl font-semibold text-neutral-950">
                    Student Support Program
                  </h3>
                </div>
                <p className="text-base text-neutral-700 mb-6">
                  We provide comprehensive support to students pursuing research and 
                  higher education, helping bridge the gap between academic potential 
                  and meaningful impact.
                </p>
                <div className="grid grid-cols-1 gap-4 mb-8">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">PhD Research Grants</div>
                    <div className="text-sm text-neutral-600">Supporting final semester students</div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Link
                    href="/students"
                    className="flex-1 rounded-full border border-blue-600 px-3 py-2 text-center text-xs font-semibold text-blue-600 transition hover:bg-blue-50"
                  >
                    Learn More
                  </Link>
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSdQ1CyKNIvYSzTJ7xN7gva-4YuraqUZTNvf58HuE_6wSzX-DQ/viewform?usp=header"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 rounded-full bg-blue-600 px-3 py-2 text-center text-xs font-semibold text-white transition hover:bg-blue-500"
                  >
                    Apply for Grant
                  </a>
                  <a
                    href="mailto:info@vadainnovation.com?subject=PhD Grant Inquiry"
                    className="flex-1 rounded-full border border-blue-600 px-3 py-2 text-center text-xs font-semibold text-blue-600 transition hover:bg-blue-50"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </FadeIn>
          </div>
          <div className="mt-8 lg:mt-0 lg:w-1/2 lg:pl-8">
            <FadeIn>
              <List>
                <ListItem title="Research Guidance">
                  Expert mentorship and methodology support for students across 
                  various academic disciplines and research areas.
                </ListItem>
                <ListItem title="Grant Applications">
                  Assistance with scholarship applications, research funding proposals, 
                  and grant writing for academic projects.
                </ListItem>
                <ListItem title="Technology Access">
                  Providing access to cutting-edge tools, software, and technological 
                  resources needed for modern research.
                </ListItem>
                <ListItem title="Final Stage Support">
                  Specialized assistance for students in their thesis, dissertation, 
                  or final project phases of higher education.
                </ListItem>
              </List>
            </FadeIn>
          </div>
        </div>
      </Container>
    </>
  )
}

export const metadata: Metadata = {
  description:
    'We are a development studio creating technology solutions for businesses while empowering students through research support, grants, and academic assistance programs.',
}

export default async function Home() {
  let caseStudies = (await loadCaseStudies()).slice(0, 3)

  return (
    <>
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
            Innovation for business. Support for students.
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
            We are a development studio creating technology solutions for businesses 
            while empowering the next generation of researchers and innovators through 
            our student support programs.
          </p>
        </FadeIn>
      </Container>

      <Clients />

      <CaseStudies caseStudies={caseStudies} />

      <Testimonial
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: 'BMJ Consultant', logo: logoDarkBMJ }}
      >
        The team at Vada Innovation went above and beyond with our onboarding,
        even finding a way to access the user’s microphone without triggering
        one of those annoying permission dialogs.
      </Testimonial>

      <Services />

      <StudentsSection />

      <ContactSection />
    </>
  )
}
