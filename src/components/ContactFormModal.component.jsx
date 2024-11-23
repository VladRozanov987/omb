import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ArrowUp from "../assets/icons/ArrowUpRight.svg";
import Download from "../assets/icons/Download.svg";
import DeleteIcon from "../assets/icons/DeleteIcon.svg";
import select from "../assets/icons/select.svg";

const ContactFormModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    reason: "",
    message: "",
    files: [],
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isOpen]);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("phone", formData.phone);
    formDataToSend.append("reason", formData.reason);
    formDataToSend.append("message", formData.message);

    formData.files.forEach((file, index) => {
      formDataToSend.append(`files[${index}]`, file);
    });

    try {
      const response = await fetch("/form.php", {
        method: "POST",
        body: formDataToSend,
      });

      if (response.ok) {
        console.log("Form successfully submitted");
        alert("Ваш запит був успішно виконаний.");
        onClose();
      } else {
        console.error("Form submission error");
        alert("Сталась помилка при передачі запиту.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Помилка відправки форми. Будь ласка спробуйте ще раз.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <ModalOverlay>
      <ModalContent>
        <button className="close-button" onClick={onClose}>
          ×
        </button>
        <ModalContentInner>
          <h4>Задайте питання омбудсмену</h4>
          <p>
            Головний документ, яким керується Омбудсман України — Конституція
            України. Відповідно до неї Уповноважений має доступ до місць
            несвободи.
          </p>
          <form onSubmit={handleSubmit}>
            <div className="d-flex name-tel">
              <input
                className="marginInput"
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
              className="custom-select"
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

            <div className="upload-container">
              <label className="upload-btn">
                <input
                  type="file"
                  onChange={handleFileChange}
                  multiple
                  hidden
                />
                <img src={Download} alt="Upload" />
              </label>
              <span>
                Загрузити додаткові матеріали{" "}
                <span className="orangeSpan">Відкрити</span>{" "}
              </span>
            </div>

            <div className="file-list">
              {formData.files.length > 0 && (
                <ul>
                  {formData.files.map((file, index) => {
                    const isImage = file.type.startsWith("image/");
                    return (
                      <li key={index}>
                        <div className="file-preview">
                          {isImage ? (
                            <>
                              <img
                                src={URL.createObjectURL(file)}
                                alt={file.name}
                                className="file-img"
                              />
                              <span>{file.name}</span>
                            </>
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
            <button
              className="btn-primary"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Надсилання..." : "Відправити питання"}
              <img src={ArrowUp} alt="ArrowUp" />
            </button>
          </form>
        </ModalContentInner>
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

const ModalContentInner = styled.div`
  overflow-y: auto;
  max-height: 70vh;
  padding-top: 20px;
`;

const ModalContent = styled.div`
  background: var(--245daa);
  padding: 40px;
  width: 782px;
  border-radius: 24px;
  position: relative;
  max-height: 80vh;
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
  .upload-container {
    display: flex;
    align-items: center;
    justify-content: start;
  }
  .upload-btn {
    cursor: pointer;
  }
  .marginInput {
    margin-right: 24px;
  }
  .close-button {
    position: absolute;
    top: -20px;
    right: -30px;
    width: 35px;
    height: 35px;
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #ffffff;
    color: #000000;
    cursor: pointer;
    border-radius: 50%;
    border: 1px solid #ccc;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    transition: background-color 0.2s, transform 0.2s;
    &:hover {
      background-color: #f0f0f0;
      transform: scale(1.1);
    }
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
    .custom-select {
      appearance: none;
      -moz-appearance: none;
      -webkit-appearance: none;
      background-image: url(${select});
      background-repeat: no-repeat;
      background-position: right 10px center;
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
        align-items: center;
        margin: 0 0 10px 0;
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
    .orangeSpan {
      font-family: var(--second-family);
      font-weight: 500;
      font-size: 14px;
      line-height: 143%;
      text-decoration: underline;
      text-decoration-skip-ink: none;
      color: var(--ffc50a);
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
  @media (max-width: 768px) {
    width: 80%;
    .name-tel {
      flex-direction: column;
      input {
        margin: 8px 0;
      }
    }
    .btn-primary {
      width: 100% !important;
    }
    .orangeSpan {
      margin-left: 0 !important;
    }
  }
`;

export default ContactFormModal;
