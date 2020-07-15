import React from 'react';
import { Layout } from 'antd';
import { connect, Loading } from 'umi';
import { GlobalModelState } from '@/models/connect';
import HeaderContent from './header';
import MenuContent from './menu';
import styles from './index.less';

interface BaseLayoutProps {
  global: GlobalModelState;
  loading: boolean;
}

interface ParentProps {
  children: any;
}

const { Header, Content, Sider } = Layout;

// export default (props: any) => {

const BaseLayout: React.FC<BaseLayoutProps & ParentProps> = ({
  global,
  children,
}) => {
  const { collapsed } = global;
  return (
    <Layout className={styles.container}>
      <Sider width={200} trigger={null} collapsible collapsed={collapsed}>
        <MenuContent />
      </Sider>
      <Layout style={{ padding: 0 }}>
        <Header className={styles.contentHeader}>
          <HeaderContent />
        </Header>
        <Content className={styles.content}>{children}</Content>
      </Layout>
      {/* <Footer className={styles.footerContent}>管理平台通用业务模版</Footer> */}
    </Layout>
  );
};

export default connect(
  ({ global, loading }: { global: GlobalModelState; loading: Loading }) => ({
    global,
    loading: loading.models.index,
  }),
)(BaseLayout);
