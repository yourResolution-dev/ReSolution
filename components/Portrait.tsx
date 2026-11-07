import styles from "./Portrait.module.css";

type HairStyle = "short" | "long" | "fade" | "bun" | "curly" | "ponytail";

const PEOPLE: {
  skin: string;
  skinShade: string;
  hair: string;
  hairLight: string;
  clothing: string;
  shirt: string;
  hairStyle: HairStyle;
  glasses?: boolean;
}[] = [
  {
    skin: "#E9B894",
    skinShade: "#D49B76",
    hair: "#2C2421",
    hairLight: "#463A34",
    clothing: "#22304E",
    shirt: "#F4F0E8",
    hairStyle: "short",
  },
  {
    skin: "#CE9067",
    skinShade: "#B47850",
    hair: "#3B2B22",
    hairLight: "#553F31",
    clothing: "#4C3D79",
    shirt: "#EFE8F6",
    hairStyle: "long",
  },
  {
    skin: "#B27C54",
    skinShade: "#986441",
    hair: "#241C18",
    hairLight: "#3B2E27",
    clothing: "#2C4A46",
    shirt: "#E9F1ED",
    hairStyle: "fade",
  },
  {
    skin: "#F2C8A7",
    skinShade: "#DCA983",
    hair: "#4B3327",
    hairLight: "#654534",
    clothing: "#2D3652",
    shirt: "#F3EEE5",
    hairStyle: "bun",
  },
  {
    skin: "#9C6746",
    skinShade: "#84543A",
    hair: "#1F1B18",
    hairLight: "#352E28",
    clothing: "#3E5074",
    shirt: "#EDF1F6",
    hairStyle: "curly",
    glasses: true,
  },
  {
    skin: "#DFAF8B",
    skinShade: "#C8946F",
    hair: "#2F211A",
    hairLight: "#4A3428",
    clothing: "#5B4A6E",
    shirt: "#F3EDF0",
    hairStyle: "ponytail",
  },
];

function HairFront({ style }: { style: HairStyle }) {
  if (style === "curly") {
    return (
      <g>
        <circle cx="108" cy="48" r="15" />
        <circle cx="130" cy="36" r="17" />
        <circle cx="152" cy="48" r="15" />
        <circle cx="100" cy="64" r="11" />
        <circle cx="160" cy="64" r="11" />
      </g>
    );
  }

  if (style === "fade") {
    return (
      <path d="M98 70c0-24 14-38 32-38s32 14 32 38c-4-6-8-10-13-13-6-4-12-5-19-5s-13 1-19 5c-5 3-9 7-13 13Z" />
    );
  }

  return (
    <path d="M96 82c-4-34 12-58 34-58s38 24 34 58c-4-16-8-25-14-30-10-8-32-8-42 0-5 4-9 13-12 30Z" />
  );
}

export function Portrait({
  tone = 0,
  name,
  variant = "card",
}: {
  tone?: number;
  name: string;
  variant?: "card" | "avatar";
}) {
  const person = PEOPLE[tone % PEOPLE.length];
  const isAvatar = variant === "avatar";

  return (
    <div
      className={styles.portrait}
      data-tone={tone}
      data-variant={variant}
      role="img"
      aria-label={`Portrait of ${name}`}
    >
      <span className={styles.halo} aria-hidden="true" />
      <svg
        viewBox={isAvatar ? "62 16 136 136" : "0 0 260 180"}
        preserveAspectRatio={isAvatar ? "xMidYMid slice" : "xMidYMax slice"}
        className={styles.figure}
        aria-hidden="true"
        focusable="false"
      >
        {/* Back hair */}
        {person.hairStyle === "long" ? (
          <path
            d="M93 72c0-33 16-52 37-52s37 19 37 52l6 84-26-10-4-52h-26l-4 52-26 10Z"
            fill={person.hair}
          />
        ) : null}
        {person.hairStyle === "bun" ? (
          <circle cx="130" cy="22" r="16" fill={person.hair} />
        ) : null}
        {person.hairStyle === "ponytail" ? (
          <path
            d="M157 54c16 2 26 14 24 30-2 14-12 22-22 22 8-8 10-16 8-24-2-9-8-15-10-28Z"
            fill={person.hair}
          />
        ) : null}
        {person.hairStyle === "curly" ? (
          <g fill={person.hair}>
            <circle cx="106" cy="50" r="17" />
            <circle cx="130" cy="38" r="19" />
            <circle cx="154" cy="50" r="17" />
          </g>
        ) : null}

        {/* Body */}
        <path
          d="M44 180c0-26 20-40 46-46l22-6h26l22 6c26 6 46 20 46 46Z"
          fill={person.clothing}
        />
        <path
          d="M112 128h26l10 8-16 24h-14l-16-24Z"
          fill={person.shirt}
          opacity="0.92"
        />
        <path
          d="M112 128c2 12 8 20 8 32h12c0-12 6-20 8-32l-14 10Z"
          fill={person.shirt}
          stroke={person.clothing}
          strokeWidth="1"
          opacity="0.7"
        />
        <path
          d="M44 180c2-16 10-28 24-36l14 22 10 14Z"
          fill="#000"
          opacity="0.12"
        />
        <path
          d="M216 180c-2-16-10-28-24-36l-14 22-10 14Z"
          fill="#000"
          opacity="0.12"
        />

        {/* Neck */}
        <path
          d="M114 102h26v28c0 8-26 8-26 0Z"
          fill={person.skinShade}
        />

        {/* Head */}
        <ellipse cx="130" cy="76" rx="33" ry="38" fill={person.skin} />
        <ellipse cx="97" cy="80" rx="6.5" ry="9" fill={person.skinShade} />
        <ellipse cx="163" cy="80" rx="6.5" ry="9" fill={person.skinShade} />
        <path
          d="M130 114c-8 0-14-4-16-9 6 3 10 4 16 4s10-1 16-4c-2 5-8 9-16 9Z"
          fill={person.skinShade}
          opacity="0.6"
        />

        {/* Hair front */}
        <g fill={person.hair}>
          <HairFront style={person.hairStyle} />
        </g>
        {/* Features */}
        <g fill="#2A211E">
          <rect
            x="111"
            y="66"
            width="13"
            height="2.6"
            rx="1.3"
            opacity="0.65"
          />
          <rect
            x="136"
            y="66"
            width="13"
            height="2.6"
            rx="1.3"
            opacity="0.65"
          />
          <ellipse cx="118" cy="77" rx="2.6" ry="3.2" opacity="0.85" />
          <ellipse cx="142" cy="77" rx="2.6" ry="3.2" opacity="0.85" />
        </g>
        <path
          d="M130 79v10c0 3 3 4 5 3"
          fill="none"
          stroke={person.skinShade}
          strokeWidth="1.8"
          strokeLinecap="round"
          opacity="0.9"
        />
        <path
          d="M124 99c4 3 8 3 12 0"
          fill="none"
          stroke="#8B5B4C"
          strokeWidth="1.7"
          strokeLinecap="round"
          opacity="0.7"
        />
        <ellipse
          cx="110"
          cy="88"
          rx="6"
          ry="4"
          fill="#D98A78"
          opacity="0.18"
        />
        <ellipse
          cx="150"
          cy="88"
          rx="6"
          ry="4"
          fill="#D98A78"
          opacity="0.18"
        />

        {/* Glasses */}
        {person.glasses ? (
          <g
            fill="none"
            stroke="#2A211E"
            strokeWidth="1.6"
            opacity="0.55"
            strokeLinecap="round"
          >
            <rect x="108" y="70" width="20" height="14" rx="5" />
            <rect x="132" y="70" width="20" height="14" rx="5" />
            <path d="M128 76h4" />
          </g>
        ) : null}
      </svg>
      <span className={styles.grain} aria-hidden="true" />
    </div>
  );
}
