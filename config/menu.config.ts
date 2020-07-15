/*
 * @Description:
 * @Version: 2.0
 * @Autor: Liuxin
 * @Date: 2020-07-14 12:14:13
 * @LastEditors: Liuxin
 * @LastEditTime: 2020-07-15 14:32:16
 */

export default [
  {
    title: '首页',
    link: '/dashboard',
    key: 'dashboard',
    icon: 'HomeOutlined',
    children: [],
  },
  {
    title: '用户管理',
    link: '/userManagement',
    key: 'userManagement',
    icon: 'UserOutlined',
    children: [],
  },
  {
    title: '审核管理',
    link: '/auditManagement',
    key: 'auditManagement',
    icon: 'SnippetsOutlined',
    children: [
      {
        title: '印章审核',
        link: '/auditManagement/sealAduit',
        key: 'sealAduit',
        icon: '',
        children: [],
      },
      {
        title: '企业认证审核',
        link: '/auditManagement/companyCertificationAudit',
        key: 'companyCertificationAudit',
        icon: '',
        children: [],
      },
    ],
  },
  {
    title: '财务管理',
    link: '/financialManagement',
    key: 'financialManagement',
    icon: 'MoneyCollectOutlined',
    children: [],
  },
  {
    title: '客户工单管理',
    link: '/cwoManagement',
    key: 'cwoManagement',
    icon: 'SolutionOutlined',
    children: [],
  },
  {
    title: '开发者配置',
    link: '/developerConfig',
    key: 'developerConfig',
    icon: 'SettingOutlined',
    children: [],
  },
];
