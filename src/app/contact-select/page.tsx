import { type Metadata } from 'next'
import Link from 'next/link'

import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'

function ContactOptions() {
  return (
    <Container className="mt-16">
      <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <FadeIn className="flex">
          <div className="relative flex w-full flex-col rounded-3xl p-8 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-10">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                </svg>
              </div>
              <h3 className="font-display text-2xl font-semibold text-neutral-950">
                Student Support
              </h3>
            </div>
            <p className="mt-6 text-base text-neutral-600">
              Are you a student looking for research support, grants, scholarships, 
              or academic assistance? We&apos;re here to help you achieve your educational goals.
            </p>
            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-2 text-sm text-neutral-600">
                <svg className="h-4 w-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Research Support & Guidance
              </div>
              <div className="flex items-center gap-2 text-sm text-neutral-600">
                <svg className="h-4 w-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Grants & Scholarships
              </div>
              <div className="flex items-center gap-2 text-sm text-neutral-600">
                <svg className="h-4 w-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Academic Technology Access
              </div>
            </div>
            <div className="mt-8 flex gap-4">
              <Link
                href="/students"
                className="flex-1 rounded-full bg-blue-600 px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-blue-500"
              >
                Learn More
              </Link>
              <a
                href="mailto:info@vadainnovation.com?subject=PhD Grant Program Inquiry&body=Hello,%0D%0A%0D%0AI am a PhD student interested in your research grant program.%0D%0A%0D%0APlease provide information about:%0D%0A☐ Eligibility requirements%0D%0A☐ Application process%0D%0A☐ Required documentation%0D%0A☐ Timeline and deadlines%0D%0A%0D%0AThank you!"
                className="flex-1 rounded-full border border-neutral-300 px-6 py-3 text-center text-sm font-semibold text-neutral-950 transition hover:bg-neutral-50"
              >
                Contact Now
              </a>
            </div>
          </div>
        </FadeIn>

        <FadeIn className="flex">
          <div className="relative flex w-full flex-col rounded-3xl p-8 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-10">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-neutral-100">
                <svg className="h-6 w-6 text-neutral-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
                </svg>
              </div>
              <h3 className="font-display text-2xl font-semibold text-neutral-950">
                Business Solutions
              </h3>
            </div>
            <p className="mt-6 text-base text-neutral-600">
              Looking for software development, consulting, or technology solutions 
              for your business? Let&apos;s discuss how we can help transform your ideas into reality.
            </p>
            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-2 text-sm text-neutral-600">
                <svg className="h-4 w-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Web & App Development
              </div>
              <div className="flex items-center gap-2 text-sm text-neutral-600">
                <svg className="h-4 w-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Technology Consulting
              </div>
              <div className="flex items-center gap-2 text-sm text-neutral-600">
                <svg className="h-4 w-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Custom Solutions
              </div>
            </div>
            <div className="mt-8 flex gap-4">
              <Link
                href="/work"
                className="flex-1 rounded-full border border-neutral-300 px-6 py-3 text-center text-sm font-semibold text-neutral-950 transition hover:bg-neutral-50"
              >
                View Our Work
              </Link>
              <Link
                href="/contact"
                className="flex-1 rounded-full bg-neutral-950 px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-neutral-800"
              >
                Get In Touch
              </Link>
            </div>
          </div>
        </FadeIn>
      </FadeInStagger>
    </Container>
  )
}

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Choose how you&apos;d like to get in touch with us - whether you&apos;re a student seeking support or a business looking for technology solutions.',
}

export default function ContactSelect() {
  return (
    <>
      <PageIntro eyebrow="Get in touch" title="How can we help you?">
        <p>
          We&apos;re here to support both students in their academic journey and 
          businesses in their technology needs. Choose the option that best describes 
          what you&apos;re looking for.
        </p>
      </PageIntro>

      <ContactOptions />
    </>
  )
}