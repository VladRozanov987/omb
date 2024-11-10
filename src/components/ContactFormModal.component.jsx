import React, { useState } from "react";
import styled from "styled-components";
import ArrowUp from "../assets/icons/ArrowUpRight.svg";
import Download from "../assets/icons/Download.svg";
import DeleteIcon from "../assets/icons/DeleteIcon.svg"; // предполагается, что иконка для удаления находится здесь

const ContactFormModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    reason: "",
    message: "",
    files: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setFormData((prev) => ({ ...prev, files: [...prev.files, ...files] }));
  };

  const handleRemoveFile = (fileToRemove) => {
    setFormData((prev) => ({
      ...prev,
      files: prev.files.filter((file) => file !== fileToRemove),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <ModalOverlay>
      <ModalContent>
        <button className="close-button" onClick={onClose}>
          ×
        </button>
        <h4>Задайте питання омбудсмену</h4>
        <p>
          Головний документ, яким керується Омбудсман України — Конституція
          України. Відповідно до неї Уповноважений має доступ до місць
          несвободи.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="d-flex">
            <input
              type="text"
              name="name"
              placeholder="Ваше ім’я*"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Ваш телефон*"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <select
            name="reason"
            value={formData.reason}
            onChange={handleChange}
            required
          >
            <option value="">Тема запиту</option>
            <option value="reason1">Тема 1</option>
            <option value="reason2">Тема 2</option>
            <option value="reason3">Тема 3</option>
          </select>
          <textarea
            name="message"
            placeholder="Ваше повідомлення"
            value={formData.message}
            onChange={handleChange}
          />

          <div className="upload-container d-flex">
            <label className="upload-btn">
              <input type="file" onChange={handleFileChange} multiple hidden />
              <img src={Download} alt="Upload" />
            </label>
            <span>Загрузити додаткові матеріали</span>
          </div>

          <div className="file-list">
            {formData.files.length > 0 && (
              <ul>
                {formData.files.map((file, index) => {
                  const isImage = file.type.startsWith("image/"); // Проверка, является ли файл изображением
                  return (
                    <li key={index}>
                      <div className="file-preview">
                        {isImage ? (
                          <img
                            src={URL.createObjectURL(file)}
                            alt={file.name}
                            className="file-img"
                          />
                        ) : (
                          <span>{file.name}</span>
                        )}
                      </div>
                      <button
                        type="button"
                        className="delete-btn"
                        onClick={() => handleRemoveFile(file)}
                      >
                        <img src={DeleteIcon} alt="Delete" />
                      </button>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
          <button className="btn-primary" type="submit">
            Відправити питання
            <img src={ArrowUp} alt="ArrowUp" />
          </button>
        </form>
      </ModalContent>
    </ModalOverlay>
  );
};

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: var(--245daa);
  padding: 40px;
  width: 782px;
  border-radius: 24px;
  position: relative;

  h4 {
    font-family: var(--font-family);
    font-weight: 700;
    font-size: 32px;
    text-align: center;
    color: #fff;
  }
  p {
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 16px;
    line-height: 187%;
    text-align: center;
    color: #fff;
    margin-bottom: 46px;
  }

  .d-flex > input:not(:last-child) {
    margin-right: 24px;
  }

  .close-button {
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    font-size: 24px;
    cursor: pointer;
  }

  form {
    display: flex;
    flex-direction: column;

    input,
    select,
    textarea {
      width: 100%;
      padding: 16px 24px;
      margin-top: 5px;
      margin-bottom: 15px;
      border: 1px solid #ccc;
      border-radius: 16px;
    }

    textarea {
      height: 150px;
    }

    input[type="file"] {
      margin-bottom: 15px;
    }

    button {
      display: flex;
      align-self: center;
    }
  }

  .file-list {
    margin-top: 15px;

    ul {
      list-style: none;
      padding: 0;
      display: flex;
      flex-direction: column;

      li {
        display: flex;
        justify-content: space-between;
        margin-bottom: 10px;
        align-items: center;
        margin: 0;

        .file-preview {
          display: flex;
          align-items: center;
        }

        .file-img {
          width: 40px;
          height: 40px;
          object-fit: cover;
          margin-right: 10px;
        }

        .delete-btn {
          background: none;
          border: none;
          cursor: pointer;
        }

        .delete-btn img {
          width: 50px;
          height: 50px;
        }
      }
    }
  }

  .upload-container {
    justify-content: start;
    span {
      margin-left: 16px;
    }
  }

  span {
    font-family: var(--second-family);
    font-weight: 400;
    font-size: 14px;
    line-height: 143%;
    color: #fff;
  }
  input::placeholder,
  textarea::placeholder {
    font-family: var(--second-family);
    font-weight: 400;
    font-size: 14px;
    line-height: 171%;
    color: var(--1c1f1c);
  }
`;

export default ContactFormModal;
