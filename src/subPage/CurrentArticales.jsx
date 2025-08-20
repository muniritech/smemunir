import React, { useState } from "react";
import ArticlesComp from "../appComponents/ArticlesComp";
import BaseModal from "../appComponents/appModal/BaseModal";
import TextEditorModal from "../appComponents/appModal/TextEditorModal";

const CurrentArticales = () => {
  const [selectedMainTab, setSelectedMainTab] = useState("Commentary");
  const [isPublished, setIsPublished] = useState(true);
  const mainTabs = [
    "Commentary",
    "Covered Calls",
    "Stock Picks",
    "Spreads",
    "Learning Curve",
    "LEAPS Plays",
    "Homework Followup",
    "Coval Trend Indicator",
    "Technical Talk",
  ];
  const selectedHandler = (name) => {
    // getSelectedOptions(name)
    setSelectedMainTab(name);
  };
  const isNew = {
    title: "The market hit resistance hard late last week",
    text: "Apple sells its products by focusing on the benefits users gain from their products, rather than solely highlighting the features. The same approach should be used for selling to Qonto. Understand their pain points and how your product can alleviate those issues. Emphasize how your CRM tool can help streamline their operations, improve customer service, and ultimately, grow their business.",
    time: "Wed Jan 17, 13:00",
  };

  const data = [
    {
      id: 1,
      title: "The market hit resistance hard late last week",
      text: "Apple sells its products by focusing on the benefits users gain from their products, rather than solely highlighting the features. The same approach should be used for selling to Qonto. Understand their pain points and how your product can alleviate those issues. Emphasize how your CRM tool can help streamline their operations, improve customer service, and ultimately, grow their business.",
      time: "Wed Jan 17, 13:00",
    },
    {
      id: 2,
      title: "Tech stocks rallied after positive earnings",
      text: "Following the release of quarterly reports, major tech companies saw their stock prices climb. This is a great opportunity to analyze market sentiment and adjust investment strategies accordingly.",
      time: "Thu Jan 18, 09:30",
    },
    {
      id: 3,
      title: "CRM adoption rates continue to grow",
      text: "More businesses are investing in CRM solutions to improve customer engagement. Highlight how your tool’s automation features save time and improve productivity.",
      time: "Fri Jan 19, 14:45",
    },
    {
      id: 4,
      title: "Market opens flat amid global uncertainty",
      text: "Global markets remained cautious after mixed economic data. Focus on solutions that help businesses remain agile and adaptable during uncertain times.",
      time: "Mon Jan 22, 10:15",
    },
  ];

  return (
    <div className="flex flex-1 flex-col gap-2">
      {isPublished && (
        <BaseModal>
          <TextEditorModal />
        </BaseModal>
      )}
      <div className="flex flex-col gap-2">
        <div className="flex items-center space-x-2">
          <h2 className="text-[20px] font-semibold">Current Articles </h2>
          <span className="text-sm text-gray-500">2,530 </span>
        </div>

        <div className="flex bg-gray-100 rounded-[8px] p-1 w-fit">
          {mainTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => selectedHandler(tab)}
              className={`px-3 py-1 text-[14px] font-[400]  rounded-[5px] transition ${
                selectedMainTab === tab
                  ? "bg-white shadow text-black"
                  : "text-gray-400"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="text-[18px] font-semibold">Published Article</div>
        <div className="text-[#FAFAFA] text-[12px] bg-[#16A34A] items-center justify-between flex px-4 py-2 rounded-md cursor-pointer">
          Publish a new Article
        </div>
      </div>

      <ArticlesComp
        title={isNew?.title}
        text={isNew?.text}
        time={isNew?.time}
        isNew={true}
        isDelete={false}
      />

      <div>
        <div className="text-[18px] font-semibold">
          Draft Commentary Articles
        </div>
        <div className="flex flex-col gap-3 py-4">
          {data?.map((item) => (
            <ArticlesComp
              title={item?.title}
              text={item?.text}
              time={item?.time}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CurrentArticales;
