import React, { ChangeEvent, useCallback, useEffect, useMemo, useState } from 'react';

import styled from '@emotion/styled';
import { filter, find, isNil, map } from 'lodash';
import Button from 'src/components/Button';
import Divider from 'src/components/Divider';
import InputField from 'src/components/InputField';
import FullPageModal from 'src/components/Modal/FullPageModal';
import Text from 'src/components/Text';
import {
  DELETE_BUTTON_TEXT,
  ROUTINE_CYCLE_CUSTOM,
  ROUTINE_CYCLE_CUSTOM_LABEL,
  ROUTINE_CYCLE_CUSTOM_TEXT,
  ROUTINE_CYCLE_DAY,
  ROUTINE_CYCLE_MAX_VALUE,
  ROUTINE_CYCLE_PLACE_HOLDER,
  ROUTINE_CYCLE_WEEK,
  ROUTINE_MODIFY,
  ROUTINE_NAME,
  ROUTINE_NAME_PLACE_HOLDER,
  ROUTINE_START,
  ROUTINE_CONFIRM_TOAST_MESSAGE,
  SAVE_BUTTON_TEXT,
  ROUTINE_SUCCESS_TOAST_MESSAGE,
} from 'src/lib/constants';
import { hapticFeedback } from 'src/lib/device';
import { getRemoveText, getRoutineCycleText } from 'src/lib/text';
import { useModalStore, useThemeStore, useToastStore } from 'src/stores';
import { initialModalState } from 'src/stores/modal';
import { InitialRoutine, RoutineCycleType, RoutineType, useRoutineStore } from 'src/stores/routine';

import ResponsiveContainer from '../common/ResponsiveContainer';
import TopNavigation from '../common/TopNavigation';

const S = {
  ButtonContainer: styled.div`
    display: flex;
    justify-content: space-between;
    gap: 10px;
  `,
};

const MainManagingFullPageModal = () => {
  const { habitManagementModal } = useModalStore();
  const { routines } = useRoutineStore();
  const { textColor } = useThemeStore();

  const selectedRoutine = useMemo(
    () => find(routines, (value) => value.key === habitManagementModal.routineKey),
    [habitManagementModal.routineKey, routines],
  );
  const isStart = useMemo(() => isNil(selectedRoutine), [selectedRoutine]);

  const [routine, setRoutine] = useState<RoutineType | null>(null);

  const onChangRoutineName = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const text = event.target.value;

    hapticFeedback();
    setRoutine((prev) => {
      if (isNil(prev)) {
        return prev;
      }
      return { ...prev, name: text };
    });
  }, []);

  const onChangeCustomValue = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const text = event.target.value;
      const prev = getRemoveText(routine?.customValue || '');
      const currentValue = getRemoveText(text);

      hapticFeedback();
      if (Number(currentValue) > ROUTINE_CYCLE_MAX_VALUE) {
        return;
      }

      if (prev.length === currentValue.length) {
        const convertValue = currentValue.substring(0, currentValue.length - 1);

        setRoutine((preValue) => {
          if (isNil(preValue)) {
            return preValue;
          }
          return { ...preValue, customValue: convertValue };
        });
        return;
      }

      setRoutine((preValue) => {
        if (isNil(preValue)) {
          return preValue;
        }
        return { ...preValue, customValue: currentValue };
      });
    },
    [routine?.customValue],
  );

  const onCloseModal = () => {
    hapticFeedback();
    useModalStore.setState({ habitManagementModal: initialModalState.habitManagementModal });
  };

  const renderCycleButtons = useMemo(
    () =>
      map(
        [ROUTINE_CYCLE_DAY, ROUTINE_CYCLE_WEEK, ROUTINE_CYCLE_CUSTOM],
        (value: RoutineCycleType) => (
          <Button
            key={value}
            isSelected={value === routine?.type}
            onClick={() => {
              hapticFeedback();
              setRoutine((prev) => {
                if (isNil(prev)) {
                  return prev;
                }
                return { ...prev, type: value };
              });
            }}
          >
            <Text
              fontSize={20}
              fontWeight={400}
              color={textColor}
              textAlign="center"
            >
              {getRoutineCycleText(value)}
            </Text>
          </Button>
        ),
      ),
    [textColor, routine],
  );

  const onClickSaveButton = useCallback(() => {
    hapticFeedback();
    const hasCustomCycleValue = routine?.customValue !== '' && routine?.customValue !== '0';
    const isValidCustomCycleValue = routine?.type !== 'CUSTOM' ? true : hasCustomCycleValue;
    const isValidRoutine = routine?.name !== '' && isValidCustomCycleValue;

    if (isValidRoutine && !isNil(routine)) {
      useRoutineStore.setState({ routines: [...routines, routine] });
      onCloseModal();
      useToastStore.setState({ message: ROUTINE_SUCCESS_TOAST_MESSAGE, isVisible: true });
    } else {
      useToastStore.setState({ message: ROUTINE_CONFIRM_TOAST_MESSAGE, isVisible: true });
    }
  }, [routine, routines]);

  const onClickDeleteButton = () => {
    hapticFeedback();
    onCloseModal();
    useRoutineStore.setState(() => {
      const filteredRoutine = filter(
        [...routines],
        (value) => value.key !== habitManagementModal?.routineKey,
      );

      return { routines: filteredRoutine };
    });
  };

  useEffect(() => {
    if (!isNil(selectedRoutine)) {
      setRoutine(() => selectedRoutine);
    } else {
      const initRoutine = new InitialRoutine();
      setRoutine(() => initRoutine as RoutineType);
    }

    return () => {
      setRoutine(() => null);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <FullPageModal
      visible={habitManagementModal.isVisible}
      onCloseModal={onCloseModal}
    >
      <TopNavigation
        leadingIcon="ArrowBack"
        onClickLeadingButton={onCloseModal}
        name={isStart ? ROUTINE_START : ROUTINE_MODIFY}
      />
      <ResponsiveContainer style={{ padding: '10px 10px' }}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: '100%',
          }}
        >
          <div>
            <Divider vertical={50} />
            <InputField
              value={routine?.name || ''}
              label={ROUTINE_NAME}
              width="100%"
              onChange={onChangRoutineName}
              placeholder={ROUTINE_NAME_PLACE_HOLDER}
              isVisibleTrailingIcon
              onClickClear={() =>
                setRoutine((prev) => {
                  if (isNil(prev)) {
                    return prev;
                  }

                  return { ...prev, name: '' };
                })
              }
            />
            <Divider vertical={40} />
            <Text
              fontSize={16}
              fontWeight={600}
              color={textColor}
              textAlign="center"
            >
              {ROUTINE_CYCLE_CUSTOM_LABEL}
            </Text>
            <Divider vertical={20} />
            <S.ButtonContainer>{renderCycleButtons}</S.ButtonContainer>
            {routine?.type === 'CUSTOM' && (
              <div>
                <Divider vertical={20} />
                <InputField
                  inputMode="numeric"
                  value={routine?.customValue || ''}
                  label={`${ROUTINE_CYCLE_CUSTOM_TEXT} (최대 주기일수: ${ROUTINE_CYCLE_MAX_VALUE} 일)`}
                  width="100%"
                  onChange={onChangeCustomValue}
                  placeholder={ROUTINE_CYCLE_PLACE_HOLDER}
                  isVisibleTrailingIcon
                  onClickClear={() =>
                    setRoutine((prev) => {
                      if (isNil(prev)) {
                        return prev;
                      }

                      return { ...prev, name: '' };
                    })
                  }
                />
              </div>
            )}
          </div>
          <div>
            <S.ButtonContainer>
              {!isStart && (
                <Button
                  theme="errorPrimary"
                  onClick={onClickDeleteButton}
                >
                  <Text
                    fontSize={20}
                    fontWeight={400}
                    color={textColor}
                    textAlign="center"
                  >
                    {DELETE_BUTTON_TEXT}
                  </Text>
                </Button>
              )}
              <Button
                theme="primary"
                onClick={onClickSaveButton}
              >
                <Text
                  fontSize={20}
                  fontWeight={400}
                  color={textColor}
                  textAlign="center"
                >
                  {SAVE_BUTTON_TEXT}
                </Text>
              </Button>
            </S.ButtonContainer>
            <Divider vertical={40} />
          </div>
        </div>
      </ResponsiveContainer>
    </FullPageModal>
  );
};

export default MainManagingFullPageModal;
