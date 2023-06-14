import { Tabs } from 'antd';
import './App.scss';
import TopicList from './pageComponents/TopicList.tsx';

const items = [
  {
    key: '1',
    label: `All`,
    children: <TopicList />,
  },
  {
    key: '2',
    label: `Custom`,
    children: `Content of Tab Pane 2`,
  },
  {
    key: '3',
    label: `ICP`,
    children: `Content of Tab Pane 3`,
  },
  {
    key: '4',
    label: `Mission`,
    children: `Content of Tab Pane 3`,
  },
  {
    key: '5',
    label: `Product`,
    children: `Content of Tab Pane 3`,
  },
];
function App() {
  return (
    <div className="app">
      <Tabs defaultActiveKey="1" items={items} className='categories_tab' />
    </div>
  );
}

export default App;
