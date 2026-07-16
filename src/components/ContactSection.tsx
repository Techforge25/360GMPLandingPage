"use client";

export function ContactSection() {
  return (
    <section id="contact" data-reveal className="w-full scroll-mt-24 bg-white px-4 py-14 sm:px-10 sm:py-[100px] lg:px-[72px]">
      <div className="mx-auto flex w-full max-w-[1296px] flex-col gap-10 sm:gap-[72px] lg:h-[823px] lg:flex-row lg:items-start">
        <div className="flex flex-1 flex-col gap-8 sm:gap-[52px] p-0 lg:p-8" data-reveal-item>
          <div className="w-full max-w-[525px]">
            <div className="inline-flex rounded-[24px] bg-[linear-gradient(164deg,rgba(184,255,186,0.63)_10%,rgba(200,255,223,0.63)_80%)] px-[22px] py-1">
              <span className="text-[16px] font-semibold leading-6 text-[#023014]">Contact</span>
            </div>

            <h2 className="mt-[18px] text-[30px] font-bold capitalize leading-[38px] text-[#303231] sm:text-[42px] sm:leading-[50px]">
              Let&apos;s talk about your <span className="text-[#06923e]">Golf Gaming Needs! We would love to hear from you!</span>
            </h2>

            <p className="mt-5 text-[16px] capitalize leading-[24px] text-[#697586]">
              Share a few details and we&apos;ll get back with a tailored demo and rollout plan.
            </p>
          </div>

          <div className="relative h-[200px] w-full overflow-hidden rounded-[14px] bg-[#075428] px-6 py-6 sm:h-[230px] sm:px-[34px] sm:py-[30px]">
            <div className="relative z-10">
              <p className="text-[16px] font-medium leading-7 text-white sm:text-[18px] sm:leading-8">Quick response</p>
              <p className="mt-2 text-[40px] leading-[46px] text-[#e8f2ec] sm:mt-3 sm:text-[56px] sm:leading-[64px]">Within 24 hours</p>
              <p className="mt-3 text-[16px] leading-6 text-[#cecece]">We&apos;ll review and reply fast.</p>
            </div>

            <div className="pointer-events-none absolute -right-[56px] -top-[112px] h-[260px] w-[260px] rounded-full bg-[#003919]/55" />
            <div className="pointer-events-none absolute -bottom-[164px] right-[-16px] h-[300px] w-[360px] rounded-full bg-[#0a8d43]/45" />
          </div>
        </div>

        <form
          className="relative flex flex-1 flex-col gap-4 rounded-[22px] bg-[#123c20] p-5 sm:p-8 lg:p-[72px]"
          data-reveal-item
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="pointer-events-none absolute left-[58%] top-[34%] h-[417px] w-[417px] rounded-full bg-[radial-gradient(circle,rgba(23,170,80,0.42)_0%,rgba(23,170,80,0)_74%)]" />
          <div className="pointer-events-none absolute -right-20 -top-20 h-[260px] w-[260px] rounded-full bg-[#0f7a3d]/30" />

          <label className="relative z-10 flex flex-col gap-3">
            <span className="text-[16px] font-semibold capitalize leading-6 tracking-[-0.08px] text-[#e0e0e0]">First Name</span>
            <input className="h-[52px] rounded-[12px] bg-white px-3 text-[16px] text-[#adb1b8] shadow-[0_8px_24px_rgba(0,0,0,0.1)] outline-none" defaultValue="John" />
          </label>

          <label className="relative z-10 flex flex-col gap-3">
            <span className="text-[16px] font-semibold capitalize leading-6 tracking-[-0.08px] text-[#e0e0e0]">Email</span>
            <input className="h-[52px] rounded-[12px] bg-white px-3 text-[16px] text-[#768299] shadow-[0_8px_24px_rgba(0,0,0,0.1)] outline-none" defaultValue="Info@Gmail.Com" />
          </label>

          <label className="relative z-10 flex flex-col gap-3">
            <span className="text-[16px] font-semibold capitalize leading-6 tracking-[-0.08px] text-[#e0e0e0]">Club Name</span>
            <input className="h-[52px] rounded-[12px] bg-white px-3 text-[16px] text-[#768299] shadow-[0_8px_24px_rgba(0,0,0,0.1)] outline-none" defaultValue="Info@Gmail.Com" />
          </label>

          <label className="relative z-10 flex flex-col gap-3">
            <span className="text-[16px] font-semibold capitalize leading-6 tracking-[-0.08px] text-[#e0e0e0]">Message</span>
            <textarea className="h-[131px] resize-none rounded-[12px] bg-white px-3 py-4 text-[16px] capitalize text-[#768299] shadow-[0_8px_24px_rgba(0,0,0,0.1)] outline-none" defaultValue="Tell us about you need" />
          </label>

          <div className="relative z-20 pt-2">
            <button
              type="submit"
              className="block h-[54px] w-full rounded-[12px] border border-[#0a5f2c] bg-[#14a44d] px-6 text-[16px] font-semibold text-white shadow-[0_12px_26px_rgba(0,0,0,0.28)] transition hover:bg-[#0f8f43]"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default ContactSection;
