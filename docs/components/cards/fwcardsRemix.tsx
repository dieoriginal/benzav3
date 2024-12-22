"use client"
import { ShiftCard } from "../ui/shift-card"
import { motion } from "framer-motion"
import { TextureButton } from "@/components/ui/texture-button"

export function FwCardsRemix() {
    // Promoting Angular
    const topContent = (
      <div className="bg-accent/90 rounded-md text-primary shadow-[0px_1px_1px_0px_rgba(0,0,0,0.05),0px_1px_1px_0px_rgba(255,252,240,0.5)_inset,0px_0px_0px_1px_hsla(0,0%,100%,0.1)_inset,0px_0px_1px_0px_rgba(28,27,26,0.5)] dark:shadow-[0_1px_0_0_rgba(255,255,255,0.03)_inset,0_0_0_1px_rgba(255,255,255,0.03)_inset,0_0_0_1px_rgba(0,0,0,0.1),0_2px_2px_0_rgba(0,0,0,0.1),0_4px_4px_0_rgba(0,0,0,0.1),0_8px_8px_0_rgba(0,0,0,0.1)] w-[calc(100%+2.54cm)]">
          <h3 className=" text-lg  p-4">
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 54 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_912_3)">
                <path
                  d="M13.3333 80.0002C20.6933 80.0002 26.6667 74.0268 26.6667 66.6668V53.3335H13.3333C5.97333 53.3335 0 59.3068 0 66.6668C0 74.0268 5.97333 80.0002 13.3333 80.0002Z"
                  fill="#0ACF83"
                />
                <path
                  d="M0 39.9998C0 32.6398 5.97333 26.6665 13.3333 26.6665H26.6667V53.3332H13.3333C5.97333 53.3332 0 47.3598 0 39.9998Z"
                  fill="#A259FF"
                />
                <path
                  d="M0 13.3333C0 5.97333 5.97333 0 13.3333 0H26.6667V26.6667H13.3333C5.97333 26.6667 0 20.6933 0 13.3333Z"
                  fill="#F24E1E"
                />
                <path
                  d="M26.6667 0H40.0001C47.3601 0 53.3334 5.97333 53.3334 13.3333C53.3334 20.6933 47.3601 26.6667 40.0001 26.6667H26.6667V0Z"
                  fill="#FF7262"
                />
                <path
                  d="M53.3334 39.9998C53.3334 47.3598 47.3601 53.3332 40.0001 53.3332C32.6401 53.3332 26.6667 47.3598 26.6667 39.9998C26.6667 32.6398 32.6401 26.6665 40.0001 26.6665C47.3601 26.6665 53.3334 32.6398 53.3334 39.9998Z"
                  fill="#1ABCFE"
                />
              </g>
              <defs>
                <clipPath id="clip0_912_3">
                  <rect width={53.3333} height={80} fill="white" />
                </clipPath>
              </defs>
            </svg>
            Angular
          </h3>
        </div>
    )

    const topAnimateContent = (
      <>
        <motion.img
          transition={{ duration: 0.3, ease: "circIn" }}
          src={"https://angular.io/assets/images/logos/angular/angular.svg"}
          layoutId={`img-0`}
          width={78}
          height={100}
          alt="Angular logo"
          className="rounded-sm  absolute top-1.5 right-2 shadow-lg"
        />

        <motion.div
          className="h-[70px] w-[82px] absolute top-[4px] right-[6px] bg-transparent border-[2px] rounded-br-sm rounded-sm  border-neutral-800/80 dark:border-neutral-200/80 border-dashed  ml-auto  mb-[6px] dark:mb-[3px]"
          initial={{ opacity: 0, scale: 1.6, y: 0, filter: "blur(4px)" }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
            transition: { delay: 0.35, duration: 0.15 },
          }}
          exit={{
            opacity: 0,
            y: 100,
            filter: "blur(4px)",
            transition: { delay: 0.0, duration: 0 },
          }}
        />
      </>
    )

    const middleContent = (
      <motion.img
        src="https://angular.io/assets/images/logos/angular/angular.svg"
        layoutId={`img-0`}
        width={150}
        height={200}
        alt="Angular logo"
        className="rounded-sm  border-2 border-white dark:border-black"
      />
    )

    const bottomContent = (
      <div className="pb-4">
        <div className="flex w-full flex-col gap-1 bg-primary/90 border-t border-t-black/10 rounded-t-lg px-4 pb-4  ">
          <div className="font-sans text-[14px] font-medium text-white dark:text-[#171717] flex gap-1 pt-2.5 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="-50 -50 430 390"
              fill="#1185fd"
              aria-hidden="true"
              width="1em"
              height="1em"
            >
              <path d="M180 141.964C163.699 110.262 119.308 51.1817 78.0347 22.044C38.4971 -5.86834 23.414 -1.03207 13.526 3.43594C2.08093 8.60755 0 26.1785 0 36.5164C0 46.8542 5.66748 121.272 9.36416 133.694C21.5786 174.738 65.0603 188.607 105.104 184.156C107.151 183.852 109.227 183.572 111.329 183.312C109.267 183.642 107.19 183.924 105.104 184.156C46.4204 192.847 -5.69621 214.233 62.6582 290.33C137.848 368.18 165.705 273.637 180 225.702C194.295 273.637 210.76 364.771 295.995 290.33C360 225.702 313.58 192.85 254.896 184.158C252.81 183.926 250.733 183.645 248.671 183.315C250.773 183.574 252.849 183.855 254.896 184.158C294.94 188.61 338.421 174.74 350.636 133.697C354.333 121.275 360 46.8568 360 36.519C360 26.1811 357.919 8.61012 346.474 3.43851C336.586 -1.02949 321.503 -5.86576 281.965 22.0466C240.692 51.1843 196.301 110.262 180 141.964Z" />
            </svg>{" "}
            <p>See more about Angular</p>
          </div>
          <div className="w-full text-pretty font-sans text-[13px] leading-4 text-neutral-200 dark:text-[#171717] pb-2  ">
            {" "}
            
          </div>

          <div className="bg-accent/80 dark:bg-accent px-1 py-1 rounded-xl flex flex-col gap-1">
            <TextureButton variant="primary">
              <svg
                viewBox="0 0 256 256"
                xmlns="https://angular.io/assets/images/logos/angular/angular.svg"
                width="1em"
                height="1em"
                preserveAspectRatio="xMidYMid"
              >
                <path
                  fill="#625DF5"
                  d="M256 113.765h-74.858l64.83-37.43-14.237-24.667-64.83 37.43 37.421-64.825-24.667-14.246-37.421 64.826V0h-28.476v74.86L76.326 10.027 51.667 24.266 89.096 89.09 24.265 51.668l-14.238 24.66 64.83 37.43H0v28.477h74.85l-64.823 37.43 14.238 24.667 64.824-37.423-37.43 64.825 24.667 14.239 37.429-64.832V256h28.476v-74.853l37.422 64.826 24.665-14.239-37.428-64.832 64.83 37.43 14.24-24.667-64.825-37.423h74.85v-28.477H256ZM128 166.73c-21.472 0-38.876-17.403-38.876-38.876 0-21.472 17.404-38.876 38.876-38.876 21.472 0 38.875 17.404 38.875 38.876 0 21.473-17.403 38.876-38.875 38.876Z"
                />
              </svg>{" "}
              Open Angular Website{" "}
            </TextureButton>
          </div>
        </div>
      </div>
    )

    return (
      <div className="flex justify-center items-center space-x-4">
        <ShiftCard
          key={0}
          className="bg-card dark:bg-[#1A1A1A] "
          topContent={topContent}
          topAnimateContent={topAnimateContent}
          middleContent={middleContent}
          bottomContent={bottomContent}
        />
      </div>
    )
}
