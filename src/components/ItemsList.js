import { List } from "antd";

const ItemsList = ({ items }) => {
  return (
    <>
      <List
        size="small"
        bordered
        dataSource={items}
        pagination={true}
        renderItem={(item) => <List.Item>{item.name}</List.Item>}
      />
    </>
  );
};

export default ItemsList;
