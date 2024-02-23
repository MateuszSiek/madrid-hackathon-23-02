import { AiOutlineArrowLeft } from "react-icons/ai";

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
    if (!summaryLoading) {
      setSummaryLoading(true);
      const msg = messages.map(({ message, id }) => ({
        message,
      }));
      setSummaryLoading(false);
      // IMPLEMENT API
      console.log(msg, messages);
      setMsgSummary("This is a chat summary");
      setTimeout(() => {
        setMsgSummary(undefined);
      }, 5000);
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
          peer flex rounded-xl py-1.5 px-3 text-md max-w-xs w-fit h-fit text-start break-words 
          bg-white text-black rounded-sm
        "
            style={{
              borderRadius: "5px",
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
            {msgSummary}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default ChatHeader;
