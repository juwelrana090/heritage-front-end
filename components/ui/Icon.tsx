const colors: any = {
  black: '#111111',
  'blue-500': '#0059B1'
};

type IconProps = {
  name: string;
  size?: string;
  color?: string;
  style?: React.CSSProperties;
  className?: string;
  noHoverEffect?: boolean;
};

const Icon = ({
  name,
  size = '24',
  color,
  style,
  className,
  noHoverEffect
}: IconProps) => {
  const getIcon = () => {
    const f: string = colors[color ?? 'black'];
    switch (name) {
      case 'twitter':
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width={size}
            height={size}
            x={0}
            y={0}
            viewBox="0 0 512 512"
            enableBackground="new 0 0 512 512"
            xmlSpace="preserve"
          >
            <g>
              <path
                d="M512 97.248c-19.04 8.352-39.328 13.888-60.48 16.576 21.76-12.992 38.368-33.408 46.176-58.016-20.288 12.096-42.688 20.64-66.56 25.408C411.872 60.704 384.416 48 354.464 48c-58.112 0-104.896 47.168-104.896 104.992 0 8.32.704 16.32 2.432 23.936-87.264-4.256-164.48-46.08-216.352-109.792-9.056 15.712-14.368 33.696-14.368 53.056 0 36.352 18.72 68.576 46.624 87.232-16.864-.32-33.408-5.216-47.424-12.928v1.152c0 51.008 36.384 93.376 84.096 103.136-8.544 2.336-17.856 3.456-27.52 3.456-6.72 0-13.504-.384-19.872-1.792 13.6 41.568 52.192 72.128 98.08 73.12-35.712 27.936-81.056 44.768-130.144 44.768-8.608 0-16.864-.384-25.12-1.44C46.496 446.88 101.6 464 161.024 464c193.152 0 298.752-160 298.752-298.688 0-4.64-.16-9.12-.384-13.568 20.832-14.784 38.336-33.248 52.608-54.496z"
                style={{}}
                fill={f}
                data-original={f}
              />
            </g>
          </svg>
        );

      case 'linkedin':
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width={size}
            height={size}
            x={0}
            y={0}
            viewBox="0 0 176 176"
            enableBackground="new 0 0 512 512"
            xmlSpace="preserve"
            className=""
          >
            <g>
              <g data-name="Layer 2">
                <rect
                  width={176}
                  height={176}
                  fill={f}
                  rx={24}
                  opacity={1}
                  data-original={f}
                  className=""
                />
                <g fill="#fff">
                  <path
                    d="M63.4 48a15 15 0 1 1-15-15 15 15 0 0 1 15 15zM60 73v66.27a3.71 3.71 0 0 1-3.71 3.73H40.48a3.71 3.71 0 0 1-3.72-3.72V73a3.72 3.72 0 0 1 3.72-3.72h15.81A3.72 3.72 0 0 1 60 73zM142.64 107.5v32.08a3.41 3.41 0 0 1-3.42 3.42h-17a3.41 3.41 0 0 1-3.42-3.42v-31.09c0-4.64 1.36-20.32-12.13-20.32-10.45 0-12.58 10.73-13 15.55v35.86A3.42 3.42 0 0 1 90.3 143H73.88a3.41 3.41 0 0 1-3.41-3.42V72.71a3.41 3.41 0 0 1 3.41-3.42H90.3a3.42 3.42 0 0 1 3.42 3.42v5.78c3.88-5.82 9.63-10.31 21.9-10.31 27.18 0 27.02 25.38 27.02 39.32z"
                    fill="#ffffff"
                    opacity={1}
                    data-original="#ffffff"
                    className=""
                  />
                </g>
              </g>
            </g>
          </svg>
        );

      case 'facebook':
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width={size}
            height={size}
            x={0}
            y={0}
            viewBox="0 0 512 512"
            enableBackground="new 0 0 512 512"
            xmlSpace="preserve"
          >
            <g>
              <path
                fill={f}
                d="M512 256c0 127.78-93.62 233.69-216 252.89V330h59.65L367 256h-71v-48.02c0-20.25 9.92-39.98 41.72-39.98H370v-63s-29.3-5-57.31-5c-58.47 0-96.69 35.44-96.69 99.6V256h-65v74h65v178.89C93.62 489.69 0 383.78 0 256 0 114.62 114.62 0 256 0s256 114.62 256 256z"
                opacity={1}
                data-original={f}
              />
              <path
                fill="#ffffff"
                d="M355.65 330 367 256h-71v-48.021c0-20.245 9.918-39.979 41.719-39.979H370v-63s-29.296-5-57.305-5C254.219 100 216 135.44 216 199.6V256h-65v74h65v178.889c13.034 2.045 26.392 3.111 40 3.111s26.966-1.066 40-3.111V330z"
                opacity={1}
                data-original="#ffffff"
              />
            </g>
          </svg>
        );

      case 'angelList':
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width={size}
            height={size}
            x={0}
            y={0}
            viewBox="0 0 56.7 56.7"
            enableBackground="new 0 0 512 512"
            xmlSpace="preserve"
            className=""
          >
            <g>
              <path
                d="M38.88 24.745c2.021.382 3.447 1.235 4.279 2.56.83 1.327 1.246 3.416 1.246 6.268 0 5.66-1.701 10.294-5.105 13.9-3.403 3.604-7.755 5.407-13.056 5.407-2.09 0-4.117-.376-6.082-1.129-1.967-.752-3.656-1.802-5.072-3.15-1.617-1.482-2.83-3.05-3.639-4.7-.808-1.651-1.213-3.341-1.213-5.071 0-1.932.416-3.426 1.247-4.482.83-1.056 2.145-1.774 3.942-2.156-.337-.787-.584-1.45-.74-1.988-.158-.54-.237-.955-.237-1.247 0-1.011.534-2.044 1.6-3.1 1.067-1.056 2.073-1.584 3.016-1.584.405 0 .831.073 1.28.22.45.146.966.387 1.55.724-1.73-4.897-2.987-8.677-3.773-11.339-.787-2.662-1.18-4.498-1.18-5.509 0-1.393.36-2.498 1.079-3.319.719-.82 1.696-1.23 2.931-1.23 2.112 0 4.785 4.717 8.02 14.152.561 1.617.988 2.864 1.28 3.74.247-.696.595-1.685 1.045-2.965 3.235-9.345 6.02-14.017 8.356-14.017 1.146 0 2.061.387 2.746 1.162.686.775 1.028 1.815 1.028 3.117 0 .989-.376 2.797-1.129 5.425-.753 2.628-1.892 6.065-3.42 10.31zM14.752 38.493c.315.382.753.943 1.315 1.684 1.482 2.045 2.852 3.067 4.11 3.067.427 0 .81-.135 1.146-.405.337-.27.505-.55.505-.842 0-.337-.224-.898-.673-1.685-.45-.786-1.067-1.673-1.854-2.662-.898-1.146-1.646-1.982-2.24-2.51-.596-.528-1.074-.792-1.432-.792-.787 0-1.512.421-2.174 1.263-.663.843-.994 1.837-.994 2.982 0 .922.23 1.95.691 3.083.46 1.135 1.129 2.275 2.005 3.42a13.373 13.373 0 0 0 4.936 4.094c1.966.956 4.14 1.432 6.52 1.432 4.38 0 8.048-1.634 11.002-4.902 2.953-3.269 4.43-7.363 4.43-12.282 0-1.505-.112-2.7-.336-3.589-.225-.887-.596-1.533-1.112-1.937-.922-.763-2.713-1.449-5.375-2.055-2.662-.607-5.441-.91-8.34-.91-.808 0-1.38.135-1.718.404-.337.27-.505.73-.505 1.381 0 1.528.854 2.634 2.56 3.32 1.708.685 4.47 1.027 8.29 1.027h1.381c.315 0 .568.118.758.354.19.236.32.59.388 1.061-.382.36-1.168.77-2.359 1.23-1.19.46-2.1.916-2.729 1.365-1.348.989-2.432 2.162-3.252 3.521-.82 1.36-1.23 2.645-1.23 3.858 0 .742.174 1.634.523 2.679.348 1.045.522 1.69.522 1.938v.235l-.067.304c-.99-.068-1.77-.646-2.342-1.736-.573-1.09-.86-2.544-.86-4.363v-.304c-.18.158-.353.27-.522.338a1.484 1.484 0 0 1-.556.1c-.202 0-.393-.016-.573-.05a5.871 5.871 0 0 1-.606-.152c.067.248.118.489.152.725.033.236.05.421.05.556 0 .831-.326 1.545-.977 2.14-.652.595-1.427.892-2.325.892-1.415 0-2.853-.69-4.313-2.072-1.46-1.381-2.19-2.734-2.19-4.06 0-.247.028-.466.084-.657.056-.19.152-.354.286-.489zm10.11.808c.38 0 .729-.173 1.044-.522.314-.348.471-.725.471-1.129 0-.426-.309-1.42-.926-2.982a29.902 29.902 0 0 0-2.308-4.6c-.674-1.123-1.337-1.97-1.988-2.543-.652-.573-1.27-.86-1.854-.86-.471 0-.994.299-1.567.893-.572.596-.859 1.152-.859 1.668 0 .54.281 1.348.843 2.426.56 1.079 1.314 2.224 2.257 3.437.989 1.326 1.92 2.359 2.797 3.1.876.742 1.572 1.112 2.09 1.112zm3.301-16.275-3.639-10.513c-.943-2.673-1.673-4.419-2.19-5.24-.517-.82-1.078-1.23-1.685-1.23-.471 0-.854.181-1.145.54-.292.36-.438.842-.438 1.449 0 1.033.392 2.83 1.179 5.391.786 2.561 1.966 5.92 3.538 10.075.135-.247.325-.421.573-.522.247-.101.584-.152 1.01-.152.135 0 .405.012.81.034.404.022 1.066.079 1.987.168zm3.808 10.21a20.737 20.737 0 0 1-2.746-.303 14.55 14.55 0 0 1-2.477-.674c.359.72.68 1.438.96 2.156.281.72.511 1.427.691 2.123a16.748 16.748 0 0 1 1.702-1.836c.595-.55 1.218-1.04 1.87-1.466zm4.481-9.064c1.505-4.088 2.68-7.463 3.521-10.126.843-2.661 1.264-4.296 1.264-4.902 0-.652-.14-1.157-.421-1.516-.281-.36-.669-.54-1.163-.54-.629 0-1.269.523-1.92 1.567-.652 1.045-1.37 2.725-2.157 5.038l-3.37 9.738z"
                fill={f}
                opacity={1}
                data-original={f}
              />
            </g>
          </svg>
        );

      case 'empty':
        return <></>;

      default:
        return null;
    }
  };

  return (
    <span
      className={`flex items-center border-none bg-transparent outline-none ${!noHoverEffect && 'hover:opacity-80'} ${className}`}
      style={style}
    >
      {getIcon()}
    </span>
  );
};

export default Icon;
