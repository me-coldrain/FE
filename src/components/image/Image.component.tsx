import React, { useCallback, useState } from "react";
import { injectClassNames } from "utils/css";
import styles from "./Image.module.scss";

const { image, placeholder, absoluteText, expectedMatch, matchingTeam, title } =
  styles;

enum ImageState {
  Loading = "IMAGE_LOADING",
  Loaded = "IMAGE_LOADED",
  NotFound = "IMAGE_NOT_FOUND",
  NotSpecified = "IMAGE_NOT_SPECIFIED",
}

type ImageProps = {
  isPlaceholder?: boolean | null;
  src?: string;
  alt?: string;
  height?: string;
  width?: string;
  loading?: "lazy" | "eager";
  className?: string;
  expected?: boolean;
};

type UseImageState = () => [(img: HTMLImageElement | null) => void, ImageState];

const useImageState: UseImageState = () => {
  const [imageState, setImageState] = useState<ImageState>(
    () => ImageState.Loading
  );

  const imageRefCallback = useCallback((img: HTMLImageElement | null) => {
    if (!img) {
      return;
    }

    if (img.complete) {
      setImageState(ImageState.Loaded);
      return;
    }

    if (!img.src) {
      setImageState(ImageState.NotSpecified);
      return;
    }

    const onLoad = (): void => {
      setImageState(ImageState.Loaded);
    };

    const onError = (): void => {
      setImageState(ImageState.NotFound);
    };

    img.addEventListener("load", onLoad);
    img.addEventListener("error", onError);

    return () => {
      img.removeEventListener("load", onLoad);
      img.removeEventListener("error", onError);
    };
  }, []);

  return [imageRefCallback, imageState];
};

export function ImageWithHeader(props: ImageProps): JSX.Element {
  const {
    src = "",
    alt = "",
    height,
    width,
    loading = "lazy",
    className = "",
    isPlaceholder = false,
    expected,
  } = props;
  const [imageRef, imageState] = useImageState();

  const imageStyle = isPlaceholder ? placeholder : styles[imageState];

  if (expected) {
    return (
      <div className={expectedMatch}>
        <div className={title}>
          <div className={matchingTeam}>대결팀</div>
          <h1>서울FC</h1>
        </div>
      </div>
    );
  }
  return (
    <div
      role="img"
      aria-label={alt}
      className={injectClassNames(image, imageStyle, [className, !!className])}
    >
      {!isPlaceholder && (
        <img
          src={src}
          alt={alt}
          ref={imageRef}
          height={height}
          width={width}
          loading={loading}
        />
      )}
      <div className={absoluteText}>
        <h3>팀이름</h3>
        <h4>
          팀소개입니다.팀소개입니다.팀소개입니다.팀소개입니다.팀소개입니다.팀소개입니다.팀소개입니다.팀소개입니다.팀소개입니다.팀소개입니다.팀소개입니다.팀소개입니다.팀소개입니다.팀소개입니다.팀소개입니다.팀소개입니다.팀소개입니다.팀소개입니다.팀소개입니다.팀소개입니다.팀소개입니다.팀소개입니다.
        </h4>
      </div>
    </div>
  );
}

export default function Image(props: ImageProps): JSX.Element {
  const {
    src = "",
    alt = "",
    height,
    width,
    loading = "lazy",
    className = "",
    isPlaceholder = false,
  } = props;
  const [imageRef, imageState] = useImageState();

  const imageStyle = isPlaceholder ? placeholder : styles[imageState];

  return (
    <div
      role="img"
      aria-label={alt}
      className={injectClassNames(image, imageStyle, [className, !!className])}
    >
      {!isPlaceholder && (
        <img
          src={src}
          alt={alt}
          ref={imageRef}
          height={height}
          width={width}
          loading={loading}
        />
      )}
    </div>
  );
}
