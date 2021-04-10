import { Link } from 'umi';
import { Menu } from 'antd';

export default function BasicLayout({ children }) {
  return (
    <div>
      <Menu mode="horizontal" theme="dark">
        <Menu.Item  >
          <Link to="/">Index</Link>
        </Menu.Item>
        <Menu.Item  >
         <Link to="/employee">Employee</Link>
        </Menu.Item>
        <Menu.Item >
         <Link to="/list">List</Link>
        </Menu.Item>
      </Menu>
      {children}
    </div>
  );
}
