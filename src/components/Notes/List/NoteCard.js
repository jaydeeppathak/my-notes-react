import { Card } from "antd";
import { NoteWrapper } from "./styled";

const NoteCard = (props) => {
    const {
        handleClick,
        note: { _id, title, description },
    } = props;
    return (
        <NoteWrapper
            key={_id}
            title={title}
            size="default"
            onClick={handleClick}
        >
            <p className="description">{description}</p>
        </NoteWrapper>
    );
};

export default NoteCard;
