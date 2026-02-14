export const Ichthys = ({ className, ...props }) => (
    <svg
        viewBox="0 0 100 50"
        fill="none"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
        {...props}
    >
        <path d="M85 25C85 25 70 0 35 0C15 0 0 15 0 25C0 35 15 50 35 50C70 50 100 25 100 25M85 25L100 50" />
    </svg>
)

export const Flower = ({ className, ...props }) => (
    <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
        {...props}
    >
        <path d="M12 7.5a4.5 4.5 0 1 1 4.5 4.5M12 7.5A4.5 4.5 0 1 0 7.5 12M12 7.5V12m4.5 4.5a4.5 4.5 0 1 1-4.5 4.5M16.5 16.5A4.5 4.5 0 1 0 12 12m4.5 4.5H12m-4.5 4.5a4.5 4.5 0 1 1-4.5-4.5M7.5 16.5A4.5 4.5 0 1 0 12 12m-4.5 4.5V12m-4.5-4.5a4.5 4.5 0 1 1 4.5-4.5M3 7.5A4.5 4.5 0 1 0 7.5 12m-4.5-4.5H12" />
        <circle cx="12" cy="12" r="3" fill="currentColor" className="opacity-20" />
    </svg>
)
