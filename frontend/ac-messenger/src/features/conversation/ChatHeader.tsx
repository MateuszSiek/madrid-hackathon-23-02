import { AiOutlineArrowLeft } from "react-icons/ai";

import { Configuration, OpenAIApi } from "openai";
import { ProfilePicture, TwButton } from "components";
import { Message, User } from "interfaces";
import { useAppDispatch, useAppSelector } from "hooks";
import { getChatState, resetChat } from "features/inbox/chatReducer";
import { useGetUserStatus } from "hooks";
import { showUserProfile } from "reducers/sideContentReducer";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface ChatHeaderProps {
  recipient: User;
  messages: Message[];
}

const model = "text-davinci-002";

const configuration = new Configuration({
  apiKey: "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",
});
const openai = new OpenAIApi(configuration);

delete configuration.baseOptions.headers["User-Agent"];

const DEFAULT_PARAMS = {
  model: "gpt-4",
  temperature: 0.7,
  max_tokens: 256,
  top_p: 1,
  frequency_penalty: 0,
  presence_penalty: 0,
};

export async function query(params = {}) {
  const params_ = { ...DEFAULT_PARAMS, ...params };
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Bearer " +
        String("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"),
    },
    body: JSON.stringify(params_),
  };
  const response = await fetch(
    "https://api.openai.com/v1/chat/completions",
    requestOptions
  );
  const data = await response.json();
  return data.choices[0].text;
}

const fetchData = async (str: string) => {
  try {
    const answer = await openai.createChatCompletion({
      model: "gpt-4",
      // prompt: `Write a code in ${language} for: "${input}"`,
      messages: [
        {
          role: "user",
          content: `Your task is to extract relevant information from a text. This information will be used to create a chat summary.
        Extract relevant information from the following text.
        Be sure to preserve the important details.`,
        },
        { role: "user", content: str },
      ],
      max_tokens: 3000,
      temperature: 0.7,
      n: 1,
    });

    const text = answer.data.choices[0];
    return text;
  } catch (err) {
    console.error(err);
  }
};

const ChatHeader = ({ recipient, messages }: ChatHeaderProps) => {
  const { isGroup } = useAppSelector(getChatState);
  const online = useGetUserStatus(recipient?.uid);
  const [msgSummary, setMsgSummary] = useState<string | undefined>();
  const [summaryLoading, setSummaryLoading] = useState<boolean>(false);

  const dispatch = useAppDispatch();

  const profileClickHandler = () => {
    // 768px screen width below have the mobile layout
    if (screen.width <= 768) {
      dispatch(resetChat());
    }

    dispatch(showUserProfile({ userProfileData: recipient }));
  };

  const handleBackBtn = () => {
    dispatch(resetChat());
  };

  const summariseMessages = () => {
    setMsgSummary(undefined);
    const callApi = async (str: any) => {
      const data = await fetchData(str);
      setMsgSummary(data?.message?.content);

      setSummaryLoading(false);
      setTimeout(() => {
        setMsgSummary(undefined);
      }, 10000);
    };
    if (!summaryLoading) {
      const msg = messages.map(({ message, id }) => message).join(" ");
      // IMPLEMENT API
      setSummaryLoading(true);
      callApi(msg);
    }
  };

  return (
    <header
      style={{ position: "relative", justifyContent: "space-between" }}
      className="border-b border-main w-full p-4  mb-auto bg-main duration-300 flex gap-2"
    >
      <TwButton
        variant="transparent"
        onClick={handleBackBtn}
        className="md:hidden px-4"
      >
        <AiOutlineArrowLeft className="text-xl" />
      </TwButton>
      <div className="flex items-center gap-4">
        <button disabled={isGroup ? true : false} onClick={profileClickHandler}>
          <ProfilePicture
            isOnline={online}
            photoURL={recipient?.photoURL}
            size="small"
          />
        </button>
        <div className="flex flex-col gap-0">
          <h2 className="text text-xl">
            {recipient.displayName || recipient.groupName}
          </h2>
          {/* Disabled for now */}
          {/* {!isGroup && (
            <p className="text-muted text-sm">
              {online ? "online" : "offline"}
            </p>
          )} */}
        </div>
      </div>
      <TwButton
        className="flex-end"
        variant="contained"
        onClick={summariseMessages}
      >
        {summaryLoading ? "Loading..." : "Summary"}
      </TwButton>
      <AnimatePresence>
        {msgSummary && (
          <motion.div
            className="
          peer rounded-xl py-1.5 px-3 text-md w-fit h-fit text-start break-words 
          bg-white text-black rounded-sm
        "
            style={{
              boxShadow: "1px 2px 7px 3px #0000004a",
              borderRadius: "10px",
              position: "absolute",
              bottom: "-20px",
              left: 0,
              margin: "10px",
            }}
            animate={{ opacity: 1, y: "100%" }}
            initial={{ opacity: 0, y: "0%" }}
            exit={{ opacity: 0, y: "100%" }}
            // className="absolute -top-3/4 left-1/2 z-10"
          >
            <b>🤖 AI SUMMARY 🤖</b>
            <br />
            {msgSummary}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default ChatHeader;
