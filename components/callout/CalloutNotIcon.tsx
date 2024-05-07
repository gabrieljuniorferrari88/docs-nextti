import { WithChildren } from "@/types";
import { Box, useStyleConfig } from "@chakra-ui/react";
import { FC } from "react";

interface CalloutNotIconProps extends WithChildren {
  size: "sm" | "md";
  variant: "info" | "success" | "warning" | "error";
}

const CalloutNotIcon: FC<CalloutNotIconProps> = ({
  size,
  variant,
  children,
}) => {
  const styles = useStyleConfig("Callout", { size, variant });

  switch (variant) {
    case "info":
      break;
    case "success":
      break;
    case "warning":
      break;
    case "error":
      break;
    default:
      break;
  }

  return <Box __css={styles}>{children}</Box>;
};

export default CalloutNotIcon;
