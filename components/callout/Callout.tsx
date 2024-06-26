import { WithChildren } from "@/types";
import { Box, Icon, useStyleConfig } from "@chakra-ui/react";
import { FC } from "react";
import {
  RiAlertFill,
  RiCheckboxCircleFill,
  RiCloseCircleFill,
  RiEmotionFill,
  RiInformationFill,
} from "react-icons/ri";

interface CalloutProps extends WithChildren {
  size: "sm" | "md";
  variant: "info" | "success" | "warning" | "error";
}

const Callout: FC<CalloutProps> = ({ size, variant, children }) => {
  const styles = useStyleConfig("Callout", { size, variant });
  let icon;

  switch (variant) {
    case "info":
      icon = RiInformationFill;
      break;
    case "success":
      icon = RiCheckboxCircleFill;
      break;
    case "warning":
      icon = RiAlertFill;
      break;
    case "error":
      icon = RiCloseCircleFill;
      break;
    default:
      icon = RiEmotionFill;
      break;
  }

  return (
    <Box __css={styles}>
      <Box>
        <Icon boxSize="6" as={icon} />
      </Box>
      {children}
    </Box>
  );
};

export default Callout;
