import React, { useState, FC } from 'react';
import UserSetting from './userSetting';
import { connect, Loading, Dispatch } from 'umi';
import { GlobalModelState } from '@/models/connect';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import styles from '../index.less';

interface HeaderProps {
  dispatch: Dispatch;
  global: GlobalModelState;
  loading: boolean;
}
const Header: FC<HeaderProps> = ({ global, dispatch }) => {
  const { collapsed } = global;
  function changeCollapseStatus() {
    dispatch({
      type: 'global/handleCollapseChange',
      payload: { collapsed: !collapsed },
    });
  }
  return (
    <>
      <div className={styles.collapse} onClick={changeCollapseStatus}>
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </div>
      <UserSetting />
    </>
  );
};

export default connect(
  ({ global, loading }: { global: GlobalModelState; loading: Loading }) => ({
    global,
    loading: loading.models.index,
  }),
)(Header);
