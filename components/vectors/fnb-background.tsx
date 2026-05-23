export function FnbBackground() {
    return (
        <div className="absolute inset-0 overflow-hidden">
            {/* Main Gradient */}
            <div
                className="absolute inset-0 bg-linear-to-br from-[#2B1D14] via-[#1B1B1B] to-[#0F0F0F]"
            />

            {/* Glow Top */}
            <div
                className="absolute left-1/2 top-0 h-125 w-125 -translate-x-1/2 rounded-full bg-orange-500/20 blur-3xl"
            />

            {/* Glow Bottom */}
            <div
                className="absolute bottom-0 right-0 h-100 w-100 rounded-full bg-amber-400/10 blur-3xl"
            />

            {/* SVG Pattern */}
            <svg
                className="absolute inset-0 h-full w-full opacity-[0.08]"
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    <pattern
                        id="culinary-pattern"
                        width="120"
                        height="120"
                        patternUnits="userSpaceOnUse"
                    >
                        {/* Spoon */}
                        <path
                            d="M30 20C30 12 36 8 40 8C44 8 50 12 50 20C50 28 44 34 40 34C36 34 30 28 30 20Z"
                            stroke="white"
                            strokeWidth="2"
                            fill="none"
                        />
                        <line
                            x1="40"
                            y1="34"
                            x2="40"
                            y2="60"
                            stroke="white"
                            strokeWidth="2"
                        />

                        {/* Fork */}
                        <line
                            x1="80"
                            y1="10"
                            x2="80"
                            y2="60"
                            stroke="white"
                            strokeWidth="2"
                        />
                        <line
                            x1="72"
                            y1="10"
                            x2="72"
                            y2="24"
                            stroke="white"
                            strokeWidth="2"
                        />
                        <line
                            x1="76"
                            y1="10"
                            x2="76"
                            y2="24"
                            stroke="white"
                            strokeWidth="2"
                        />
                        <line
                            x1="84"
                            y1="10"
                            x2="84"
                            y2="24"
                            stroke="white"
                            strokeWidth="2"
                        />
                        <line
                            x1="88"
                            y1="10"
                            x2="88"
                            y2="24"
                            stroke="white"
                            strokeWidth="2"
                        />

                        {/* Chef Hat */}
                        <path
                            d="M20 90C20 82 26 76 34 76C38 68 50 68 54 76C62 76 68 82 68 90V96H20V90Z"
                            stroke="white"
                            strokeWidth="2"
                            fill="none"
                        />
                    </pattern>
                </defs>
                <rect
                    width="100%"
                    height="100%"
                    fill="url(#culinary-pattern)"
                />
            </svg>
            {/* Floating Blur */}
            <div
                className="absolute left-[10%] top-[30%] h-40 w-40 rounded-full bg-primary/10 blur-3xl"
            />
            <div
                className="absolute right-[10%] top-[50%] h-52 w-52 rounded-full bg-amber-300/10 blur-3xl"
            />
        </div>
    );
}