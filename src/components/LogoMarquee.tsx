import logoArchive from "@/assets/logo-archive.svg";
import logoCaseEasy from "@/assets/client-logos/caseeasy-favicon.ico";
import logoFireflies from "@/assets/logo-fireflies.svg";
import logoZeniq from "@/assets/logo-zeniq.svg";
import logoArgusLabs from "@/assets/client-logos/argus-favicon.ico";
import logoGradePotential from "@/assets/client-logos/grade-potential.png";
import logoHardense from "@/assets/client-logos/hardense-favicon.png";
import logoInterruptMedia from "@/assets/client-logos/interrupt-media.png";
import logoStandardProcedure from "@/assets/client-logos/standard-procedure.png";
import logoStudySmarter from "@/assets/client-logos/studysmarter.svg";
import logoVenley from "@/assets/client-logos/venley-favicon.svg";
import logoVNIndustrial from "@/assets/client-logos/vnindustrial-favicon.svg";
import logoVpnpro from "@/assets/client-logos/vpnpro.png";
import logoZenGRC from "@/assets/client-logos/zengrc.png";

interface LogoMarqueeItem {
  name: string;
  domain: string;
}

interface LogoMarqueeProps {
  items: LogoMarqueeItem[];
  className?: string;
}

type LogoConfig =
  | {
      type: "asset";
      src: string;
      className: string;
      imgClassName?: string;
    }
  | {
      type: "iconText";
      icon: string;
      iconClassName?: string;
      label?: string;
    };

const customWordmarkMap: Record<string, LogoConfig> = {
  Archive: {
    type: "asset",
    src: logoArchive,
    className: "h-7 w-auto",
  },
  "Fireflies.ai": {
    type: "iconText",
    icon: logoFireflies,
    label: "Fireflies.ai",
    iconClassName: "h-7 w-7 rounded-sm",
  },
  "Zeniq Ecosystem": {
    type: "asset",
    src: logoZeniq,
    className: "h-8 w-auto",
  },
  "Interrupt Media": {
    type: "asset",
    src: logoInterruptMedia,
    className: "h-8 w-auto",
    imgClassName: "[filter:brightness(0)]",
  },
  ZenGRC: {
    type: "iconText",
    icon: logoZenGRC,
    label: "ZenGRC",
    iconClassName: "h-7 w-7 rounded-md",
  },
  "CaseEasy.ca": {
    type: "iconText",
    icon: logoCaseEasy,
    label: "CaseEasy.ca",
    iconClassName: "h-7 w-7 rounded-md object-contain",
  },
  StudySmarter: {
    type: "asset",
    src: logoStudySmarter,
    className: "h-8 w-auto",
  },
  "Grade Potential": {
    type: "asset",
    src: logoGradePotential,
    className: "h-8 w-auto",
  },
  "Argus Labs": {
    type: "iconText",
    icon: logoArgusLabs,
    label: "Argus Labs",
    iconClassName: "h-7 w-7 rounded-md",
  },
  "Venley.ai": {
    type: "iconText",
    icon: logoVenley,
    label: "Venley.ai",
    iconClassName: "h-7 w-7 rounded-md",
  },
  "VN Industrial": {
    type: "iconText",
    icon: logoVNIndustrial,
    label: "VN Industrial",
    iconClassName: "h-7 w-7 rounded-md",
  },
  Hardense: {
    type: "iconText",
    icon: logoHardense,
    label: "Hardense",
    iconClassName: "h-7 w-7 rounded-md object-cover",
  },
  VPNpro: {
    type: "iconText",
    icon: logoVpnpro,
    label: "VPNpro",
    iconClassName: "h-7 w-7 rounded-md",
  },
  "Standard Procedure": {
    type: "iconText",
    icon: logoStandardProcedure,
    label: "Standard Procedure",
    iconClassName: "h-8 w-8 rounded-md object-cover",
  },
};

const LogoWordmark = ({ item }: { item: LogoMarqueeItem }) => {
  const custom = customWordmarkMap[item.name];

  if (!custom) {
    return (
      <span className="text-base font-semibold tracking-[0.1em] uppercase text-foreground/65 transition-colors duration-300 group-hover:text-foreground/90">
        {item.name}
      </span>
    );
  }

  if (custom.type === "asset") {
    return (
      <img
        src={custom.src}
        alt={`${item.name} logo`}
        className={`${custom.className} ${custom.imgClassName ?? ""} object-contain opacity-65 transition-opacity duration-300 group-hover:opacity-100`}
        loading="lazy"
      />
    );
  }

  if (custom.type === "iconText") {
    return (
      <div className="flex items-center gap-3 opacity-65 transition-opacity duration-300 group-hover:opacity-100">
        <img
          src={custom.icon}
          alt=""
          className={custom.iconClassName ?? "h-7 w-7 rounded-md"}
          loading="lazy"
        />
        <span className="text-base font-semibold tracking-[0.08em] uppercase text-foreground/80">
          {custom.label ?? item.name}
        </span>
      </div>
    );
  }
};

const LogoMarquee = ({ items, className = "" }: LogoMarqueeProps) => {
  const repeatedItems = [...items, ...items];

  return (
    <div className={className}>
      <div className="logo-marquee relative overflow-hidden py-2">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-background via-background/90 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-background via-background/90 to-transparent" />

        <div className="logo-marquee-track flex w-max items-center gap-14 pr-14 md:gap-20 md:pr-20">
          {repeatedItems.map((item, index) => (
            <div
              key={`${item.name}-${index}`}
              className="group relative flex min-w-fit shrink-0 items-center justify-center"
            >
              <LogoWordmark item={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoMarquee;
