import { Card } from "antd";
import { NoteWrapper } from "./styled";

const NoteCard = (props) => {
    const {
        handleAddNoteClick,
        note: { _id, title, description },
    } = props;
    return (
        <NoteWrapper
            key={_id}
            title={title}
            size="default"
            onClick={handleAddNoteClick}
        >
            <p className="description">{description}</p>
        </NoteWrapper>
    );
};

export default NoteCard;
