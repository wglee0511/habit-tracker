import React from 'react';

import Button from 'src/components/Button';
import Divider from 'src/components/Divider';
import Text from 'src/components/Text';
import { ROUTINE_ADD_TEXT } from 'src/lib/constants';
import { useThemeStore } from 'src/stores';
import { RADIUS } from 'src/themes/radius';

const EmptyRoutineButton = ({ onClickButton }: { onClickButton: () => void }) => {
  const { textColor } = useThemeStore();
  return (
    <Button
      width="100%"
      radius={RADIUS.base}
      onClick={onClickButton}
    >
      <Divider vertical={40} />
      <Text
        fontSize={16}
        fontWeight={600}
        color={textColor}
      >
        {ROUTINE_ADD_TEXT}
      </Text>
      <Divider vertical={40} />
    </Button>
  );
};

export default EmptyRoutineButton;
