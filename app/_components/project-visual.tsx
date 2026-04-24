import Image from "next/image";
import shield360Image from "@/app/assets/images/industry/shield360.jpg";
import zHealthyFoodsImage from "@/app/assets/images/industry/zhealthyfoods.jpg";
import type { ProjectItem } from "@/app/_data/portfolio";

type ProjectVisualProps = {
  project: ProjectItem;
};

function FramedImage({
  src,
  alt,
}: {
  src: typeof shield360Image;
  alt: string;
}) {
  return (
    <div className="relative h-full overflow-hidden bg-black/20">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover object-center"
        sizes="(max-width: 1024px) 100vw, 50vw"
        priority={false}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/18 via-transparent to-white/6" />
    </div>
  );
}

function NdaPanel() {
  return (
    <div className="relative flex h-full flex-col justify-between overflow-hidden bg-[#0b0d11] p-6 sm:p-7">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(139,92,246,0.18),transparent_38%),linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0))]" />
      <div className="relative z-10 space-y-4">
        <p className="font-mono text-[0.74rem] uppercase tracking-[0.18em] text-[var(--color-accent)]">
          Confidential Project
        </p>
        <h3 className="font-display text-[clamp(2.1rem,3.4vw,3.6rem)] font-bold uppercase leading-[0.92] tracking-[-0.06em] text-white">
          NDA
        </h3>
        <p className="max-w-[24rem] text-sm leading-7 text-white/62 sm:text-base">
          Screens are confidential, so this project is represented through context and outcomes only.
        </p>
      </div>

      <div className="relative z-10 bg-white/[0.03] px-4 py-4 sm:px-5 sm:py-5">
        <p className="font-mono text-[0.66rem] uppercase tracking-[0.16em] text-white/42">
          Visibility
        </p>
        <p className="mt-2 text-sm leading-7 text-white/76">
          Limited due to confidentiality.
        </p>
      </div>
    </div>
  );
}

export function ProjectVisual({ project }: ProjectVisualProps) {
  if (project.slug === "seatrium") {
    return <FramedImage src={shield360Image} alt="Shield360 project preview" />;
  }

  if (project.slug === "zhealthy") {
    return (
      <FramedImage
        src={zHealthyFoodsImage}
        alt="Z Healthy Foods project preview"
      />
    );
  }

  return <NdaPanel />;
}

export function ProjectPreviewThumbnail({ project }: ProjectVisualProps) {
  if (project.slug === "seatrium") {
    return (
      <div className="relative h-full overflow-hidden bg-black/20">
        <Image
          src={shield360Image}
          alt="Shield360 next preview"
          fill
          className="object-cover object-center grayscale"
          sizes="20rem"
        />
        <div className="pointer-events-none absolute inset-0 bg-black/35" />
      </div>
    );
  }

  if (project.slug === "zhealthy") {
    return (
      <div className="relative h-full overflow-hidden bg-black/20">
        <Image
          src={zHealthyFoodsImage}
          alt="Z Healthy Foods next preview"
          fill
          className="object-cover object-center grayscale"
          sizes="20rem"
        />
        <div className="pointer-events-none absolute inset-0 bg-black/35" />
      </div>
    );
  }

  return (
    <div className="relative flex h-full items-end overflow-hidden bg-[#0b0d11] p-4">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(139,92,246,0.16),transparent_40%),linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0))]" />
      <p className="relative z-10 font-mono text-[0.66rem] uppercase tracking-[0.16em] text-white/46">
        Confidential Preview
      </p>
    </div>
  );
}
