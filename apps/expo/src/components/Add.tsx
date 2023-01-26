import React from "react";
import { Fab, Icon } from "native-base";
import { AntDesign } from "@expo/vector-icons";

const Add: React.FC = () => {
  return (
    <Fab
      renderInPortal={false}
      shadow={2}
      placement="bottom-right"
      size="lg"
      icon={<Icon color="white" as={AntDesign} name="plus" size="4" />}
    />
  );
};

export default Add;
