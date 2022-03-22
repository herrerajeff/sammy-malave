import React from "react";

function Logo({classes}) {
  return (
    <div className={`${classes}`}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="w-full"
      height="auto"
      fill="currentColor"
      viewBox="0 0 178 60"
    >
      <path
        fill="currentColor"
        d="M13.349 26.412c7.568 0 12.058-2.648 12.058-7.425 0-4.276-3.417-5.672-8.623-6.781l-5.17-1.091c-5.19-1.11-5.851-2.094-5.851-3.722 0-2.648 2.308-3.954 6.906-3.954 5.314 0 7.675 2.29 7.836 6.978l4.294-.823C24.567 3.922 20.344.54 12.74.54 5.602.54 1.344 3.01 1.344 7.66c0 3.65 2.576 5.421 7.747 6.53l5.17 1.11c5.224 1.127 6.566 2.04 6.566 4.276 0 2.63-2.45 3.936-7.228 3.936-5.582 0-8.427-2.04-8.767-6.566l-4.651.823c.554 5.6 5.385 8.642 13.168 8.642zM34.729 26.447c5.08 0 9.339-2.147 10.77-5.35l.358.108c-.787 3.757-.179 5.224 4.294 5.242.483 0 .93-.035 1.36-.107l.59-2.666h-1.127c-1.127 0-1.503-.125-1.503-1.538v-8.678c0-4.526-3.22-6.62-10.27-6.62-7.389 0-11.164 2.434-10.913 6.835v-.018l4.508.501c-.232-3.131 2.058-4.652 6.352-4.652 3.864 0 5.76 1.181 5.76 3.847v.84l-6.78 1.003c-6.78 1.002-10.287 2.648-10.287 6.387v.036c0 3.113 2.469 4.83 6.888 4.83zm1.86-2.952c-2.648 0-4.079-.77-4.079-2.272v-.036c0-2.147 1.968-2.827 7.193-3.596l5.206-.787v.698c0 3.435-4.044 5.993-8.32 5.993zM54.176 26h4.563v-7.604c0-5.045 2.361-7.944 6.584-7.944 3.238 0 5.01 1.432 5.01 4.026V26h4.544v-8.105c0-4.723 2.38-7.442 6.601-7.442 3.257 0 5.01 1.43 5.01 3.971V26h4.562V13.297c0-4.007-2.648-6.119-7.46-6.119-4.616 0-7.568 1.915-9.179 5.6l-.375-.071c.268-3.596-2.147-5.529-6.87-5.529-4.438 0-7.3 1.879-8.91 5.51l-.376-.124c.698-2.183.948-3.632.93-5.028h-4.634V26zM94.61 26h4.563v-7.604c0-5.045 2.361-7.944 6.584-7.944 3.238 0 5.009 1.432 5.009 4.026V26h4.545v-8.105c0-4.723 2.379-7.442 6.602-7.442 3.256 0 5.009 1.43 5.009 3.971V26h4.562V13.297c0-4.007-2.648-6.119-7.46-6.119-4.616 0-7.568 1.915-9.178 5.6l-.376-.071c.268-3.596-2.147-5.529-6.87-5.529-4.437 0-7.3 1.879-8.91 5.51l-.376-.124c.698-2.183.948-3.632.93-5.028h-4.633V26zM134.096 32.673c8.034-.536 10.825-1.932 14.099-8.73l8.176-16.729h-4.67l-4.848 10.663a62.438 62.438 0 00-1.95 4.76h-.358a40.725 40.725 0 00-2.022-4.76l-5.242-10.663h-4.777l9.769 18.947-.501 1.002c-.501 1.02-1.306 1.395-4.437 1.574l-3.811.233.572 3.703zM38.683 59h4.473V45.349c0-1.968-.072-3.489-.269-5.886l.376-.036L52.047 59h3.49l8.748-19.555.358.053c-.215 2.362-.287 3.883-.287 5.851V59h4.527V33.952h-5.85l-6.53 14.224c-.931 2.057-1.7 3.846-2.523 6.19h-.287c-.858-2.344-1.628-4.15-2.54-6.19l-6.566-14.224h-5.904V59zM78.813 59.447c5.08 0 9.339-2.147 10.77-5.35l.358.108c-.787 3.757-.179 5.224 4.294 5.242.483 0 .93-.036 1.36-.107l.59-2.666h-1.127c-1.127 0-1.503-.125-1.503-1.538v-8.678c0-4.526-3.22-6.62-10.27-6.62-7.389 0-11.164 2.434-10.913 6.835v-.018l4.508.501c-.232-3.131 2.058-4.652 6.352-4.652 3.864 0 5.76 1.181 5.76 3.847v.84l-6.78 1.003c-6.78 1.002-10.288 2.648-10.288 6.387v.036c0 3.113 2.47 4.83 6.889 4.83zm1.86-2.952c-2.648 0-4.079-.77-4.079-2.272v-.036c0-2.147 1.968-2.827 7.192-3.596l5.207-.787v.698c0 3.435-4.044 5.993-8.32 5.993zM98.26 33.952V59h4.563V33.952H98.26zM112.555 59.447c5.082 0 9.34-2.147 10.771-5.35l.358.108c-.787 3.757-.179 5.224 4.294 5.242a8.2 8.2 0 001.359-.107l.591-2.666h-1.127c-1.127 0-1.503-.125-1.503-1.538v-8.678c0-4.526-3.221-6.62-10.27-6.62-7.389 0-11.164 2.434-10.913 6.835v-.018l4.508.501c-.232-3.131 2.058-4.652 6.352-4.652 3.864 0 5.761 1.181 5.761 3.847v.84l-6.781 1.003c-6.781 1.002-10.288 2.648-10.288 6.387v.036c0 3.113 2.469 4.83 6.888 4.83zm1.861-2.952c-2.648 0-4.079-.77-4.079-2.272v-.036c0-2.147 1.968-2.827 7.192-3.596l5.207-.787v.698c0 3.435-4.044 5.993-8.32 5.993zM137.836 59h5.457l9.178-18.786h-4.652l-4.634 9.68c-.805 1.699-1.521 3.452-2.361 5.689h-.358a60.251 60.251 0 00-2.38-5.69l-4.705-9.679h-4.777L137.836 59zM172.777 52.577c-.751 2.702-3.328 4.061-7.264 4.061-4.383 0-7.353-1.968-7.693-5.922h19.287c.089-.697.125-1.252.125-1.896 0-5.546-4.401-9.017-11.772-9.017-7.765 0-12.363 3.614-12.363 9.66v.287c0 6.352 4.598 9.661 12.309 9.661 6.745 0 10.896-2.182 12.023-6.28l-4.652-.554zm-7.264-9.983c4.42 0 7.103 2.165 7.103 5.278v.071h-14.724c.572-3.381 3.363-5.35 7.621-5.35z"
      ></path>
    </svg>
    </div>
  );
}

export default Logo;