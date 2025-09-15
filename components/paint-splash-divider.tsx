export function PaintSplashDivider() {
  return (
    <div className="relative h-16 overflow-hidden">
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 100" fill="none" preserveAspectRatio="none">
        <defs>
          <linearGradient id="paintGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgb(217, 119, 6)" stopOpacity="0.3" />
            <stop offset="50%" stopColor="rgb(236, 72, 153)" stopOpacity="0.4" />
            <stop offset="100%" stopColor="rgb(217, 119, 6)" stopOpacity="0.3" />
          </linearGradient>
        </defs>

        {/* Paint Splash Path */}
        <path
          d="M0 50 Q100 20 200 50 T400 50 Q500 80 600 50 T800 50 Q900 20 1000 50 T1200 50 V100 H0 Z"
          fill="url(#paintGradient)"
          className="brush-stroke"
        />

        {/* Paint Drops */}
        <circle cx="150" cy="30" r="4" fill="rgb(217, 119, 6)" opacity="0.6" className="paint-splash" />
        <circle
          cx="350"
          cy="70"
          r="3"
          fill="rgb(236, 72, 153)"
          opacity="0.5"
          className="paint-splash"
          style={{ animationDelay: "0.5s" }}
        />
        <circle
          cx="550"
          cy="25"
          r="5"
          fill="rgb(217, 119, 6)"
          opacity="0.4"
          className="paint-splash"
          style={{ animationDelay: "1s" }}
        />
        <circle
          cx="750"
          cy="65"
          r="3"
          fill="rgb(236, 72, 153)"
          opacity="0.6"
          className="paint-splash"
          style={{ animationDelay: "1.5s" }}
        />
        <circle
          cx="950"
          cy="35"
          r="4"
          fill="rgb(217, 119, 6)"
          opacity="0.5"
          className="paint-splash"
          style={{ animationDelay: "2s" }}
        />
      </svg>
    </div>
  )
}
