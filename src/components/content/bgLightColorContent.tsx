import { m, LazyMotion, domAnimation } from "framer-motion"

export default function bgLightColorContent() {
  return (
    <LazyMotion features={domAnimation}>
      <m.div
        initial={{ opacity: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, margin: "0px" }}
        whileInView={{ opacity: 1 }}
      >
        <svg className="absolute top-[calc(100%-13rem)] -left-56 w-[72.1875rem] transform-gpu blur-3xl lg:top-[calc(50%-7rem)] lg:left-[max(-14rem,calc(100%-59rem))]" viewBox="0 0 1155 678" aria-hidden="true">
          <path fill="url(#0a9a5302-e517-46c6-85f0-d826aa6a313e)" fillOpacity=".2" d="M317.219 159.025 203.852 0 0 239.659l317.219-80.634 204.172 286.402c1.307-132.337 45.083-346.658 209.733-145.248C936.936 551.942 882.053 772.234 1031.02 636.67c119.18-108.452 130.68-295.338 121.53-375.224L855 379l21.173-362.054-558.954 142.079Z" />
          <defs>
            <linearGradient id="0a9a5302-e517-46c6-85f0-d826aa6a313e" x1="1155.49" x2="-78.208" y1="677.823" y2="203.355" gradientUnits="userSpaceOnUse">
              <stop stopColor="#4F46E5" />
              <stop offset="1" stopColor="#80CAFF" />
            </linearGradient>
          </defs>
        </svg>
      </m.div>
    </LazyMotion>
  )
}