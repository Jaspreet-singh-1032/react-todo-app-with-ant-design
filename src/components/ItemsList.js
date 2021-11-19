import { List } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
const ItemsList = ({ items, removeItem }) => {
  return (
    <>
      <List
        size="small"
        bordered
        dataSource={items}
        pagination={true}
        renderItem={(item) => (
          <div>
            <List.Item style={{ display: "inline-block" }}>
              {item.name}
            </List.Item>
            <DeleteOutlined
              onClick={() => removeItem(item.id)}
              style={{
                display: "inline-block",
                float: "right",
                marginTop: "11px",
              }}
            />
          </div>
        )}
      />
    </>
  );
};

export default ItemsList;
