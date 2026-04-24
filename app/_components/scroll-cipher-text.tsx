"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";

const UPPERCASE_SET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const LOWERCASE_SET = "abcdefghijklmnopqrstuvwxyz";
const DIGIT_SET = "0123456789";

type SupportedTag = "p" | "span" | "div" | "h1" | "h2" | "h3";

type ScrollCipherTextProps = {
  as?: SupportedTag;
  text: string;
  className?: string;
  interactiveTokens?: Array<{
    token: string;
    href: string;
    hoverLabel: string;
  }>;
  startViewport?: number;
  endViewport?: number;
  fps?: number;
  maxBlurPx?: number;
  translateYPx?: number;
  minOpacity?: number;
};

type CipherCharacter = {
  output: string;
  blur: number;
  opacity: number;
  translateY: number;
};

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

function easeInOutCubic(value: number) {
  return value < 0.5
    ? 4 * value * value * value
    : 1 - Math.pow(-2 * value + 2, 3) / 2;
}

function getCharacterSet(character: string) {
  if (/[A-Z]/.test(character)) {
    return UPPERCASE_SET;
  }

  if (/[a-z]/.test(character)) {
    return LOWERCASE_SET;
  }

  if (/[0-9]/.test(character)) {
    return DIGIT_SET;
  }

  return "";
}

function isWhitespace(character: string) {
  return /\s/.test(character);
}

function buildCipherCharacters(
  text: string,
  progress: number,
  frame: number,
  maxBlurPx: number,
  translateYPx: number,
  minOpacity: number,
) {
  const revealableCharacters = text.split("").filter((character) => {
    return getCharacterSet(character).length > 0;
  });

  const revealableCount = Math.max(revealableCharacters.length, 1);
  let revealIndex = 0;
  const revealWindow = 0.16;
  const revealTravel = Math.max(1 - revealWindow, 0);

  return text
    .split("")
    .map((character, index) => {
      const characterSet = getCharacterSet(character);
      const isSpace = isWhitespace(character);

      if (isSpace) {
        return {
          output: character,
          blur: 0,
          opacity: 1,
          translateY: 0,
        } satisfies CipherCharacter;
      }

      const threshold =
        revealableCount <= 1
          ? 0
          : (revealIndex / (revealableCount - 1)) * revealTravel;
      const localProgress = clamp(
        (progress - threshold) / revealWindow,
        0,
        1,
      );
      const easedLocalProgress = easeInOutCubic(localProgress);
      const isRevealable = characterSet.length > 0;
      const isRevealed = localProgress >= 0.98;
      const scrambledIndex = isRevealable
        ? (frame + index * 3 + Math.floor(progress * 32)) % characterSet.length
        : 0;

      if (isRevealable) {
        revealIndex += 1;
      }

      return {
        output:
          isRevealable && !isRevealed
            ? characterSet[scrambledIndex]
            : character,
        blur: (1 - easedLocalProgress) * maxBlurPx,
        opacity: minOpacity + easedLocalProgress * (1 - minOpacity),
        translateY: (1 - easedLocalProgress) * translateYPx,
      } satisfies CipherCharacter;
    })
    ;
}

export function ScrollCipherText({
  as = "p",
  text,
  className = "",
  interactiveTokens = [],
  startViewport = 0.88,
  endViewport = 0.5,
  fps = 14,
  maxBlurPx = 0,
  translateYPx = 12,
  minOpacity = 0.64,
}: ScrollCipherTextProps) {
  const elementRef = useRef<HTMLElement | null>(null);
  const [progress, setProgress] = useState(0);
  const [frame, setFrame] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncMotionPreference = () => setReducedMotion(mediaQuery.matches);

    syncMotionPreference();
    mediaQuery.addEventListener("change", syncMotionPreference);

    return () => mediaQuery.removeEventListener("change", syncMotionPreference);
  }, []);

  useEffect(() => {
    if (reducedMotion) {
      setProgress(1);
      return;
    }

    let scheduledFrame = 0;

    const updateProgress = () => {
      scheduledFrame = 0;

      if (!elementRef.current) {
        return;
      }

      const rect = elementRef.current.getBoundingClientRect();
      const elementCenter = rect.top + rect.height / 2;
      const viewportStart = window.innerHeight * startViewport;
      const viewportEnd = window.innerHeight * endViewport;
      const nextProgress = clamp(
        (viewportStart - elementCenter) / (viewportStart - viewportEnd),
        0,
        1,
      );

      setProgress((currentProgress) => {
        if (Math.abs(currentProgress - nextProgress) < 0.002) {
          return currentProgress;
        }

        return nextProgress;
      });
    };

    const requestProgressUpdate = () => {
      if (scheduledFrame) {
        return;
      }

      scheduledFrame = window.requestAnimationFrame(updateProgress);
    };

    requestProgressUpdate();

    window.addEventListener("scroll", requestProgressUpdate, { passive: true });
    window.addEventListener("resize", requestProgressUpdate);

    return () => {
      if (scheduledFrame) {
        window.cancelAnimationFrame(scheduledFrame);
      }

      window.removeEventListener("scroll", requestProgressUpdate);
      window.removeEventListener("resize", requestProgressUpdate);
    };
  }, [endViewport, reducedMotion, startViewport]);

  useEffect(() => {
    if (reducedMotion || progress <= 0 || progress >= 1) {
      return;
    }

    let animationFrame = 0;
    let lastFrameTime = 0;
    const frameDuration = 1000 / fps;

    const updateFrame = (timestamp: number) => {
      if (!lastFrameTime || timestamp - lastFrameTime >= frameDuration) {
        setFrame((currentFrame) => currentFrame + 1);
        lastFrameTime = timestamp;
      }

      animationFrame = window.requestAnimationFrame(updateFrame);
    };

    animationFrame = window.requestAnimationFrame(updateFrame);

    return () => window.cancelAnimationFrame(animationFrame);
  }, [fps, progress, reducedMotion]);

  const displayText = useMemo(() => {
    if (reducedMotion || progress >= 1) {
      return text.split("").map((character) => ({
        output: character,
        blur: 0,
        opacity: 1,
        translateY: 0,
      }));
    }

    return buildCipherCharacters(
      text,
      progress,
      frame,
      maxBlurPx,
      translateYPx,
      minOpacity,
    );
  }, [
    frame,
    maxBlurPx,
    minOpacity,
    progress,
    reducedMotion,
    text,
    translateYPx,
  ]);

  const Component = as;
  const tokens = text.split(/(\s+)/);
  let characterIndex = 0;

  return (
    <Component
      ref={elementRef as never}
      className={className}
      aria-label={text}
    >
      <span aria-hidden="true">
        {tokens.map((token, tokenIndex) => {
          if (/^\s+$/.test(token)) {
            characterIndex += token.length;
            return <span key={`${text}-space-${tokenIndex}`}>{token}</span>;
          }

          const characters = displayText.slice(
            characterIndex,
            characterIndex + token.length,
          );
          characterIndex += token.length;
          const interactiveToken = interactiveTokens.find(
            (item) => item.token === token,
          );

          const content = (
            <span className="inline-flex whitespace-nowrap">
              {characters.map((character, index) => (
                <span
                  key={`${text}-${tokenIndex}-${index}`}
                  className="inline-block align-top"
                  style={{
                    filter:
                      character.blur <= 0.05
                        ? "none"
                        : `blur(${character.blur.toFixed(2)}px)`,
                    opacity: character.opacity,
                    transform:
                      character.translateY <= 0.05
                        ? "translate3d(0, 0, 0)"
                        : `translate3d(0, ${character.translateY.toFixed(
                            2,
                          )}px, 0)`,
                    transition:
                      "filter 120ms linear, opacity 120ms linear, transform 160ms ease-out",
                    willChange:
                      progress > 0 && progress < 1
                        ? "filter, opacity, transform"
                        : undefined,
                    ...(interactiveToken
                      ? {
                          backgroundImage:
                            "linear-gradient(135deg, #6d28d9 0%, #8b5cf6 38%, #a78bfa 72%, #ddd6fe 100%)",
                          WebkitBackgroundClip: "text",
                          backgroundClip: "text",
                          color: "transparent",
                          textShadow: "0 0 16px rgba(139, 92, 246, 0.18)",
                        }
                      : {}),
                  }}
                >
                  {character.output}
                </span>
              ))}
            </span>
          );

          if (interactiveToken) {
            return (
              <a
                key={`${text}-token-${tokenIndex}`}
                href={interactiveToken.href}
                target="_blank"
                rel="noreferrer"
                className="group relative inline-flex whitespace-nowrap no-underline"
              >
                <span className="pointer-events-none absolute -top-[1.95em] left-1/2 inline-flex -translate-x-1/2 translate-y-1 items-center gap-1.5 whitespace-nowrap rounded-full border border-[rgba(124,58,237,0.16)] bg-white/88 px-2.5 py-1 font-mono text-[0.62em] uppercase tracking-[0.14em] text-[var(--color-accent-strong)] opacity-0 shadow-[0_10px_30px_rgba(17,18,22,0.08)] transition-all duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100">
                  <span>{interactiveToken.hoverLabel}</span>
                  <ArrowUpRight className="h-[0.95em] w-[0.95em]" />
                </span>
                {content}
              </a>
            );
          }

          return (
            <span key={`${text}-word-${tokenIndex}`} className="inline-flex whitespace-nowrap">
              {content}
            </span>
          );
        })}
      </span>
    </Component>
  );
}
