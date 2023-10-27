import React, { ReactNode } from 'react';
import { Text } from '@urban-bot/core';
import { useTranslation } from '@common_bot/i18n';
import { useRemoveKeyboard } from './use-remove-keyboard';

type Props = {
  children: ReactNode;
};

const RemoveKeyboard = ({ children }: Props) => {
  const { t } = useTranslation('common');
  const { shouldRemoveKeyboard } = useRemoveKeyboard();

  if (shouldRemoveKeyboard) {
    return (
      <Text isNewMessageEveryRender={false} isRemoveKeyboard>
        🤖
        &#32;
        {t('loading')}
      </Text>
    );
  }

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{children}</>;
};

export { RemoveKeyboard };
