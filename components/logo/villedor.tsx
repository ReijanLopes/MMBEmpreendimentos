type LogoProps = {
  size?: number | string
}

export function VilledorLogo({ size = 142 }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 142 142"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0)">
        <path
          d="M70.7107 0L141.421 70.7107L107.48 104.652L70.7107 67.8822L33.9411 104.652L1.64509e-05 70.7107L70.7107 0Z"
          fill="url(#paint0_linear)"
        />
        <rect
          x="70.7107"
          y="73.5391"
          width="48"
          height="48"
          transform="rotate(45 70.7107 73.5391)"
          fill="#F6E508"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="70.7107"
          y1="-0.289307"
          x2="70.7107"
          y2="104.211"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.500553" stopColor="#F6E508" />
          <stop offset="1" stopColor="#FCC801" />
        </linearGradient>
        <clipPath id="clip0">
          <rect
            width="100"
            height="100"
            fill="white"
            transform="translate(70.7107) rotate(45)"
          />
        </clipPath>
      </defs>
    </svg>
  )
}
