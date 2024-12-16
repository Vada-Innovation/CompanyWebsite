'use client'

import { FadeIn } from '@/components/FadeIn'
import { getCalApi } from '@calcom/embed-react'
import { useEffect } from 'react'

export default function ContactForm() {
  useEffect(() => {
    ;(async function () {
      const cal = await getCalApi({
        namespace: 'free-1-hour-consultative-meeting',
      })
      cal('ui', { hideEventTypeDetails: false, layout: 'month_view' })
    })()
  }, [])

  return (
    <FadeIn className="lg:order-last">
      <button
        className="inline-flex rounded-full bg-neutral-950 px-4 py-1.5 text-sm font-semibold text-white transition"
        data-cal-namespace="free-1-hour-consultative-meeting"
        data-cal-link="vadainnovation/free-1-hour-consultative-meeting"
        data-cal-config='{"layout":"month_view"}'
      >
        Ready to be transformed? Book your free consultation?
      </button>
    </FadeIn>
  )
}
