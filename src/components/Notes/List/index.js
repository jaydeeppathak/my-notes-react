import { Card, Modal, Space } from "antd";

const NotesList = () => {
    const handleClick = () => {
        Modal.success({
            title: "This is an error message",
            content: "some messages...some messages...",
            centered: true,
        });
    };
    return (
        <Space direction="horizontal" size="middle" style={{ display: "flex" }}>
            <Card
                title="Note Title"
                size="default"
                onClick={handleClick}
                style={{ textAlign: "left" }}
            >
                <p>Card content</p>
            </Card>
            <Card title="Card" size="default">
                <p>Card content</p>
            </Card>
            <Card title="Card" size="default">
                <p>Card content</p>
            </Card>
        </Space>
    );
};

export { NotesList };
