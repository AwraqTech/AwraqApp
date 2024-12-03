import { useState } from "react";

export function useTooltip(): {
  tooltipVisible: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
} {
  const [tooltipVisible, setTooltipVisible] = useState<boolean>(false);

  const onMouseEnter = (): void => {
    setTooltipVisible(true);
  };

  const onMouseLeave = (): void => {
    setTooltipVisible(false);
  };

  return { tooltipVisible, onMouseEnter, onMouseLeave };
}
