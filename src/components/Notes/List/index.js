import { Card, Modal, Space } from "antd";
import NoteCard from "./NoteCard";
import { ListWrapper } from "./styled";
import { notesArr } from "./constants";

const NotesList = () => {
    const handleClick = () => {
        Modal.success({
            title: "Success",
            content: "some messages...some messages...",
            centered: true,
        });
    };
    return (
        <ListWrapper size="middle">
            {notesArr.map((note) => {
                return <NoteCard note={note} handleClick={handleClick} />;
            })}
        </ListWrapper>
    );
};

export { NotesList };
