const TooltipPlain = ({
  text,
  tooltipTarget,
  tooltipWidth = "w-32",
  direction = "top",
}) => {
  return (
    <>
      {direction === "top" && (
        <div
          id={tooltipTarget}
          role="tooltip"
          className={`${tooltipWidth} absolute -top-12 -right-[5.7rem] z-10  py-2 text-sm font-medium text-white transition-opacity duration-300 rounded-lg shadow-sm tooltip bg-gray-700`}
        >
          {text}
          <div className="tooltip-arrow" data-popper-arrow></div>
        </div>
      )}
      {direction === "left" && (
        <div
          id={tooltipTarget}
          role="tooltip"
          className={`${tooltipWidth} absolute top-[-0.1rem] right-10 z-10  py-2 text-sm font-medium text-white transition-opacity duration-300 rounded-lg shadow-sm tooltip bg-gray-700`}
        >
          {text}
          {/* <div class="tooltip-arrow" data-popper-arrow></div> */}
        </div>
      )}
    </>
  );
};
export default TooltipPlain;
