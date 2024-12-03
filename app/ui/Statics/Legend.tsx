interface LegendProps {
    legendTitleOne: string;
    legendTitleTwo: string;
}

const Legend = ({legendTitleOne, legendTitleTwo}: LegendProps) => {
    return (
      <div className="flex justify-center w-full items-center gap-x-4 mb-3 sm:mb-6">
        <div className="inline-flex items-center">
          <span className="size-2.5 inline-block bg-[#43A2FE] rounded-sm me-2"></span>
          <span className="text-[13px] text-gray-600 dark:text-neutral-400">{legendTitleOne}</span>
        </div>
        <div className="inline-flex items-center">
          <span className="size-2.5 inline-block bg-[#26EAB8] rounded-sm me-2"></span>
          <span className="text-[13px] text-gray-600 dark:text-neutral-400">{legendTitleTwo}</span>
        </div>
      </div>
    );
  };
  
  export default Legend;