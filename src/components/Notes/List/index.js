import { useEffect, useRef, useState } from "react";
import isEmpty from "lodash/isEmpty";
import {
    Button,
    Card,
    FloatButton,
    Form,
    Input,
    Modal,
    Result,
    Skeleton,
    Space,
} from "antd";
import { PlusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { UserModel } from "../../../models";
import { notesArr as dummyArr, loaderNoteArr } from "./constants";
import NoteCard from "./NoteCard";
import { ListWrapper, NoteWrapper } from "./styled";
import "./index.scss";

const NotFound = ({ handleAddNoteClick }) => {
    return (
        <Result
            title="Oopps"
            subTitle="No note found !"
            extra={
                <Button
                    type="primary"
                    key="console"
                    onClick={handleAddNoteClick}
                >
                    Add note
                </Button>
            }
        />
    );
};

const NotesList = () => {
    const [showNotesModal, setShowNotesModal] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [selectedNote, setSelectedNote] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [notesArr, setNotesArr] = useState([]);
    const [form] = Form.useForm();
    const titleRef = useRef();

    const handleAddNoteClick = (note = {}) => {
        setShowNotesModal(!showNotesModal);
        setSelectedNote(note);
    };

    useEffect(() => {
        fetchNotes();
    }, []);

    useEffect(() => {
        if (!titleRef.current) return;

        if (showNotesModal) {
            titleRef.current.focus();
        }
    }, [showNotesModal]);

    useEffect(() => {
        if (!isEmpty(selectedNote)) {
            form.setFieldsValue({
                _id: selectedNote._id,
                title: selectedNote.title,
                description: selectedNote.description,
            });
        }
    }, [selectedNote]);

    const fetchNotes = async (values) => {
        setIsLoading(true);
        const queryData = {
            page: 1,
            pageSize: 10,
        };
        const res = await UserModel.list(queryData);
        console.log("res :>> ", res);

        if (!res.success) {
            Modal.error({
                title: "Oops!",
                content: res.error || "Something went wrong",
                centered: true,
            });
            setIsLoading(false);
            return;
        }
        setIsLoading(false);
        setNotesArr(res?.data);
    };

    const handleSubmit = async (values) => {
        setIsSubmitting(true);

        let res;
        if (values._id) {
            res = await UserModel.updateNote(values._id, values);
        } else {
            res = await UserModel.addNote(values);
        }
        console.log("res :>> ", res);

        if (!res.success) {
            Modal.error({
                title: "Oops!",
                content: res.error || "Something went wrong",
                centered: true,
            });
            setIsSubmitting(false);
            return;
        }
        setIsSubmitting(false);
        showNotesModal(false);
        fetchNotes();
    };
    if (isLoading) {
        return (
            <ListWrapper size="middle">
                {loaderNoteArr.map((_note, i) => {
                    return (
                        <NoteWrapper key={i} size="default">
                            <Skeleton active />
                        </NoteWrapper>
                    );
                })}
            </ListWrapper>
        );
    }

    return (
        <>
            {notesArr.length > 0 ? (
                <ListWrapper size="middle">
                    {notesArr.map((note) => {
                        return (
                            <NoteCard
                                note={note}
                                handleAddNoteClick={() =>
                                    handleAddNoteClick(note)
                                }
                            />
                        );
                    })}
                </ListWrapper>
            ) : (
                <NotFound handleAddNoteClick={handleAddNoteClick} />
            )}
            <FloatButton
                onClick={() => handleAddNoteClick()}
                type="primary"
                icon={<PlusOutlined style={{ fontSize: "35px" }} />}
                className="fab"
                tooltip={<div>Add Note</div>}
            />
            <Modal
                open={showNotesModal}
                closeIcon={false}
                className="note-modal"
                style={{ padding: "0px" }}
                okText={`${!selectedNote?._id ? "Add" : "Edit"} note`}
                okButtonProps={{
                    loading: isSubmitting,
                    disabled: isSubmitting,
                }}
                cancelButtonProps={{
                    disabled: isSubmitting,
                }}
                onCancel={handleAddNoteClick}
                onOk={() => form.submit()}
            >
                <Form form={form} className="" onFinish={handleSubmit}>
                    <Form.Item name={"_id"} noStyle hidden>
                        <Input />
                    </Form.Item>

                    <Form.Item name={"title"} noStyle>
                        <Input
                            ref={titleRef}
                            placeholder="Title"
                            className="mb-2 title"
                            variant="borderless"
                        />
                    </Form.Item>
                    <Form.Item name={"description"} noStyle>
                        <Input.TextArea
                            placeholder="Take a note..."
                            rows={10}
                            // style={{ borderRadius: "14px", padding: "10px" }}
                            className="description"
                            variant="borderless"
                        />
                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
};

export { NotesList };
