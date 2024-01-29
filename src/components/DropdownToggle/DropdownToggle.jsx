import React, { useState, useEffect } from "react";
import "../Sidebar/Sidebar.css"; // Make sure to have your CSS in Dashboard.css
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronUp,
  faEllipsis,
  faFolder,
} from "@fortawesome/free-solid-svg-icons";
import {
  Modal,
  Form,
  Button,
  Dropdown,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import subStyles from "../Subscription/Subscription.module.css";
import KeyboardIcon from "../Icons/KeyboardIcon";
import MoveIcon from "../Icons/MoveIcon";
import ExportIcon from "../Icons/ExportIcon";
import DeleteIcon from "../Icons/DeleteIcon";

const DropdownToggle = () => {
  const [inputValue, setInputValue] = useState("");
  const [values, setValues] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showMoveModal, setShowMoveModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showExportModal, setShowExportModal] = useState(false);
  const [isChecked, setChecked] = useState(false);
  const [isChecked1, setChecked1] = useState(false);
  const [isChecked2, setChecked2] = useState(false);
  const handleToggle = () => {
    setChecked(!isChecked);
  };
  const handleToggle1 = () => {
    setChecked1(!isChecked1);
  };
  const handleToggle2 = () => {
    setChecked2(!isChecked2);
  };

  const handleExportClick = () => {
    setShowExportModal(true);
  };

  const handleCloseExportModal = () => {
    setShowExportModal(false);
  };

  const handleCancelExport = () => {
    handleCloseExportModal();
  };

  const handleExport = () => {
    handleCloseExportModal();
  };

  const handleDeleteClick = () => {
    setShowDeleteModal(true);
  };

  const handleCloseDeleteModal = () => {
    setShowDeleteModal(false);
  };

  const handleCancelDelete = () => {
    handleCloseDeleteModal();
  };

  const handleOkDelete = () => {
    handleCloseDeleteModal();
  };

  const handleMoveClick = () => {
    setShowMoveModal(true);
  };

  const handleCloseMoveModal = () => {
    setShowMoveModal(false);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <Dropdown>
        <Dropdown.Toggle style={{ background: "transparent", border: "none" }}>
          <OverlayTrigger
            placement="bottom"
            overlay={<Tooltip id="pencil-tooltip">More</Tooltip>}
          >
            <FontAwesomeIcon
              icon={faEllipsis}
              className="nav-right-icon"
              color="#102741"
              style={{ marginLeft: "-1.5rem" }}
            />
          </OverlayTrigger>
        </Dropdown.Toggle>

        <Dropdown.Menu className="dropdown-setting">
          <Dropdown.Item className="dropdownItemHover">
            <div className="dropdown-items">
              <KeyboardIcon cls="dropdown-icons" />
              Keyboard Shortcuts
            </div>
          </Dropdown.Item>
          <Dropdown.Item
            className="dropdownItemHover"
            onClick={handleMoveClick}
          >
            <div className="dropdown-items">
              <MoveIcon cls="dropdown-icons" />
              Move
            </div>
          </Dropdown.Item>
          <Dropdown.Item
            className="dropdownItemHover"
            onClick={handleExportClick}
          >
            <div className="dropdown-items">
              <ExportIcon cls="dropdown-icons" />
              Export
            </div>
          </Dropdown.Item>
          <Dropdown.Item
            className="dropdownItemHover"
            onClick={handleDeleteClick}
          >
            <div className="dropdown-items">
              <DeleteIcon cls="dropdown-icons" />
              Delete
            </div>
          </Dropdown.Item>
        </Dropdown.Menu>
        <Modal show={showMoveModal} onHide={handleCloseMoveModal} centered>
          <Modal.Header closeButton>
            <Modal.Title style={{ fontSize: "1.25rem", fontWeight: "600" }}>
              Move To
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="move-modal-item">
              <FontAwesomeIcon icon={faFolder} className="folder-icon" /> Folder
              1
            </div>
          </Modal.Body>
          <Modal.Footer className="d-flex justify-content-center">
            <Button
              variant="secondary"
              onClick={handleCloseMoveModal}
              className="modal-move-btn"
            >
              Cancel
            </Button>
          </Modal.Footer>
        </Modal>
        <Modal show={showDeleteModal} onHide={handleCloseDeleteModal} centered>
          <Modal.Header closeButton>
            <Modal.Title style={{ fontSize: "1.25rem", fontWeight: "600" }}>
              Delete Item
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="delete-modal-body">
            <div>Are you sure you want to delete the conversation "Note"?</div>
            <div>
              It will be moved to your trash, and unshared from any channels to
              which it was shared.
            </div>
          </Modal.Body>
          <Modal.Footer className="d-flex justify-content-center">
            <Button
              variant="secondary"
              onClick={handleCancelDelete}
              className="modal-move-btn"
            >
              Cancel
            </Button>
            <Button
              variant="danger"
              onClick={handleOkDelete}
              className="modal-move-btn"
              style={{ backgroundColor: "red", color: "#fff" }}
            >
              Delete
            </Button>
          </Modal.Footer>
        </Modal>
        <Modal
          show={showExportModal}
          onHide={handleCloseExportModal}
          size="lg"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title style={{ fontSize: "1.25rem", fontWeight: "600" }}>
              Export Item
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="export-modal-body">
            <div className="export-modal-left">
              <div>Transcript Preview</div>
              <div>
                <p>Unknown Speaker 0:02</p>
                <p>Good day</p>
              </div>
              <div>
                <p>Unknown Speaker 0:03</p>
                <p>You</p>
              </div>
              <div>Transcribed by https://otter.ai</div>
            </div>
            <div className="export-modal-right">
              <div>
                <div>Trancript</div>
                <div
                  className={subStyles.toggleItems}
                  style={{ marginTop: "1rem" }}
                >
                  <label className={subStyles.toggleSwitch}>
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={handleToggle}
                      className={subStyles.checkbox}
                    />
                    <span className={subStyles.slider}></span>
                  </label>
                </div>
              </div>
              <div>
                <div>File format</div>
                <div>
                  <select name="txt" id="txt">
                    <option value="txt">txt</option>
                    <option value="clipboard">clipboard</option>
                    <option value="docx">docx (PRO)</option>
                    <option value="pdf">pdf (PRO)</option>
                    <option value="srt">srt (PRO)</option>
                  </select>
                </div>
              </div>
              <div>
                <div>More Options</div>
                <FontAwesomeIcon icon={faChevronUp} className="chevron-modal" />
              </div>
              <div>
                <input type="checkbox" />
                <label> Show speaker names</label>
                <br />
                <input type="checkbox" />
                <label> Show timestamps</label>
                <br />
                <input type="checkbox" />
                <label>Combine paragraphs of the same speaker</label>
              </div>
              <div>
                <div>Takeaways</div>
                <div
                  className={subStyles.toggleItems}
                  style={{ marginTop: "1rem" }}
                >
                  <label className={subStyles.toggleSwitch}>
                    <input
                      type="checkbox"
                      checked={isChecked1}
                      onChange={handleToggle1}
                      className={subStyles.checkbox}
                    />
                    <span className={subStyles.slider}></span>
                  </label>
                </div>
              </div>
              <div>There are no Takeaways in this conversation</div>
              <div>
                <div>Audio</div>
                <div
                  className={subStyles.toggleItems}
                  style={{ marginTop: "1rem" }}
                >
                  <label className={subStyles.toggleSwitch}>
                    <input
                      type="checkbox"
                      checked={isChecked2}
                      onChange={handleToggle2}
                      className={subStyles.checkbox}
                    />
                    <span className={subStyles.slider}></span>
                  </label>
                </div>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer className="modal-export-footer">
            <div>
              <strong>File name: </strong> Note_20240128_1557_otter_ai{" "}
              <strong>.txt</strong>
            </div>
            <div>
              <Button
                variant="secondary"
                onClick={handleCancelExport}
                className="modal-move-btn mx-1"
              >
                Cancel
              </Button>
              <Button
                variant="success"
                onClick={handleExport}
                className="modal-move-btn mx-1"
                style={{ backgroundColor: "#126fd6", color: "#fff" }}
              >
                Export
              </Button>
            </div>
          </Modal.Footer>
        </Modal>
      </Dropdown>
    </>
  );
};

export default DropdownToggle;
