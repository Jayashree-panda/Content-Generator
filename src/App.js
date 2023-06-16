import { Tabs } from 'antd';
import './App.scss';
import TopicList from './pageComponents/TopicList.tsx';
const tabs = ['All', 'Custom', 'ICP', 'Mission', 'Product']

const items = tabs.map((tab, index) => ({
    key: index+1,
    label: tab,
    children: <TopicList />,
}))

function App() {
  return (
    <div className="root_container">
      <div className="app">
        <Tabs defaultActiveKey="1" items={items} className='categories_tab' />
      </div>
    </div>
  );
}

export default App;
