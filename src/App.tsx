/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef, useState } from "react";
import { MessageInt } from "./components/model";
import Message from "./components/Message";

const App = () => {
  const inputMessage = useRef<HTMLInputElement | null>(null);
  const [messData, setMessData] = useState<MessageInt[]>([]);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (inputMessage.current) {
      const mess: MessageInt = {
        id: Math.round(Math.random() * Date.now()),
        message: inputMessage?.current?.value,
        date: Date.now(),
      };
      setMessData((prevData) => [...prevData, mess]);
      inputMessage.current.value = "";
    }
  };
  return (
    <div className="ctn">
      <h2>Poster un message</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          name="message"
          id="inputMessage"
          placeholder="Entrez un message"
          ref={inputMessage}
        />
        <input type="submit" value="Envoyer" />
      </form>
      <h2>Liste des messages</h2>
      <div>
        {messData?.map((mess) => {
          return (
            <Message
              mess={mess}
              messData={messData}
              setMessData={setMessData}
              key={mess.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default App;
