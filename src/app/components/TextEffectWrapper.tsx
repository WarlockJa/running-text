"use client";
import { useState } from "react";
import RunningText from "./RunningText";
import "./texteffectwrapper.css";

interface IData {
  inputText: string;
  currentText: string;
  invalidText: boolean;
}

const regexLatinLetters = new RegExp(/[A-Za-z]/);

export default function TextEffectWrapper() {
  const [data, setData] = useState<IData>({
    inputText: "",
    currentText: "CONSCIENTIOUSNESS",
    invalidText: false,
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const newtext = formData.get("newtext")?.toString().toUpperCase();
    if (!newtext) return;
    const validText = regexLatinLetters.test(newtext);
    validText
      ? setData({ currentText: newtext, inputText: "", invalidText: false })
      : setData({ ...data, invalidText: true });
  };

  return (
    <div>
      <RunningText lng="EN" text={data.currentText} />
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="formWrapper">
          <label htmlFor="formInput">
            {data.invalidText
              ? "only Latin letters accepted"
              : "enter new text"}
          </label>
          <div className="inputBlock">
            <input
              id="formInput"
              required
              type="text"
              name="newtext"
              value={data.inputText}
              onChange={(e) => setData({ ...data, inputText: e.target.value })}
            />
            <button type="submit">OK</button>
          </div>
        </div>
      </form>
    </div>
  );
}
