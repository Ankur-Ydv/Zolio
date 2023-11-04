import React from "react";

const FormHeader = () => {
  return (
    <>
      <article className="w-full flex flex-col gap-2 p-2 justify-center items-center bg-slate-200">
        <div className="flex gap-4 items-center">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="40"
              height="40"
              viewBox="0 0 50 50"
            >
              <path d="M 8.5 4 L 8.5 29 L 9.8066406 38.738281 L 11.306641 40.136719 C 7.9166406 42.993719 6.4364687 45.891734 6.3554688 46.052734 L 8.1425781 46.949219 C 8.1655781 46.903219 10.478016 42.415234 15.916016 39.365234 C 16.867016 39.839234 18.184828 40.721406 18.673828 41.066406 L 19.195312 41.435547 L 22.431641 39.568359 L 25.349609 41.726562 L 28.460938 39.609375 L 31.269531 41.779297 L 34.357422 39.230469 C 35.567422 39.643469 39.212578 41.299625 42.642578 47.015625 L 44.357422 45.986328 C 42.647422 43.135328 40.875734 41.198906 39.302734 39.878906 L 40.876953 39.216797 L 40.980469 38.695312 C 41.053469 38.332313 42.754047 29.754828 42.373047 24.798828 C 42.004047 20.005828 41.629 5.1236094 41.625 4.9746094 L 41.599609 4 L 8.5 4 z M 10.5 6 L 39.650391 6 C 39.740391 9.429 40.056906 20.770172 40.378906 24.951172 C 40.687906 28.965172 39.478187 35.852156 39.117188 37.785156 L 37.412109 38.503906 C 35.644109 37.408906 34.406734 37.158625 34.302734 37.140625 L 33.845703 37.058594 L 31.228516 39.220703 L 28.537109 37.140625 L 25.398438 39.273438 L 22.568359 37.181641 L 19.296875 39.068359 C 18.555875 38.571359 17.199094 37.701313 16.246094 37.320312 L 15.816406 37.148438 L 15.40625 37.365234 C 14.49725 37.847234 13.673062 38.368344 12.914062 38.902344 L 11.693359 37.761719 L 10.5 28.931641 L 10.5 6 z M 17.5 22 A 2.5 2.5 0 0 0 17.5 27 A 2.5 2.5 0 0 0 17.5 22 z M 33.5 22 A 2.5 2.5 0 0 0 33.5 27 A 2.5 2.5 0 0 0 33.5 22 z M 19.625 31.875 L 18.75 32.75 C 18.75 32.75 22 36 25.5 35.75 C 29 35.5 31.875 32.875 31.875 32.875 L 30.75 32.125 C 30.75 32.125 29 33 25.25 33.5 C 22.479 33.869 19.625 31.875 19.625 31.875 z"></path>
            </svg>
          </span>
          <h1 className="text-5xl font-semibold">Zolio</h1>
        </div>
        <h3 className="text-2xl">Built Your Own PortFolio</h3>
      </article>
    </>
  );
};

export default FormHeader;
