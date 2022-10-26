import React, { useState } from 'react';
import {
  ButtonGroup,
  Button,
  Text,
  useText,
} from '@urban-bot/core';
import { useTranslation } from '@common_bot/i18n';
import { predicates, RoleEnum } from '@common_bot/shared';
import { useUser } from '../contexts';

const { roles } = predicates;
const BOT_NAME = 'zheludkov_test_bot';
const nothingShown = { inviteIsShowed: false, moneyIsShowed: false };
const inviteShowed = { inviteIsShowed: true, moneyIsShowed: false };
const moneyShowed = { inviteIsShowed: false, moneyIsShowed: true };

interface Props {
  onStatistic: () => void;
  onLinkGenerator: () => void;
  onBack: () => void;
}

interface State {
  inviteIsShowed: boolean;
  moneyIsShowed: boolean;
}

// TODO сделать перевод по запросу после проверки и подтверждения данных
const Referral = ({ onStatistic, onLinkGenerator, onBack }: Props) => {
  const { user } = useUser();
  const { t } = useTranslation(['buttons', 'referral', 'invite']);
  const [{ inviteIsShowed, moneyIsShowed }, setShowed] = useState<State>(nothingShown);
  const role = user.role as unknown as RoleEnum;
  const isAffiliate = roles.isAffiliate(role);

  const handleLinkGenerator = () => {
    if (isAffiliate) {
      onLinkGenerator();
    }
  };

  const handleStatistic = () => {
    if (isAffiliate) {
      onStatistic();
    }
  };

  useText(() => setShowed(inviteShowed), t('invite'));
  useText(() => setShowed(moneyShowed), t('output_money'));
  useText(handleLinkGenerator, t('link_generator'));
  useText(handleStatistic, t('statistics'));
  useText(onBack, t('back'));

  if (inviteIsShowed) {
    const inviteLink = `https://t.me/${BOT_NAME}?start=${user.id}`;
    return (
      <>
        <Text>
          <b>{t('invite:title')}</b>
        </Text>
        <Text simulateTyping={2000}>
          {t('invite:message')}
          <br />
          <br />
          <a href={inviteLink}>{inviteLink}</a>
        </Text>
      </>
    );
  }

  if (moneyIsShowed) {
    return <Text>{t('output_money:message')}</Text>;
  }

  const message = (
    <>
      {t('referral:title')}
      <br />
      <br />
      {t('referral:message')}
      <br />
      <br />
      {t('referral:balance')}
      <b>{user.referral_money}</b>
      &#32;
      $
    </>
  );

  return (
    <ButtonGroup isReplyButtons isResizedKeyboard maxColumns={2} title={message}>
      <Button>{t('invite')}</Button>
      <Button>{t('output_money')}</Button>
      {isAffiliate && <Button>{t('statistics')}</Button>}
      {isAffiliate && <Button>{t('link_generator')}</Button>}
      <Button>{t('back')}</Button>
    </ButtonGroup>
  );
};

export { Referral };
