import React from "react";
import { Card } from "./Card";
function Home() {
  const campaigns = [
    {
      title: "Campaign 1",
      desc: "This is the first campaign description.",
      type: "Fundraising",
      totalRaised: "0.02",
      totalNeeded: "0.1",
      daysLeft: "20",
      totalDays: "30",
    },
    {
      title: "Campaign 2",
      desc: "This is the second campaign description.",
      type: "Volunteer Drive",
      totalRaised: "0.01",
      totalNeeded: "0.05",
      daysLeft: "10",
      totalDays: "15",
    },
    {
      title: "Campaign 3",
      desc: "This is the third campaign description.",
      type: "Awareness",
      totalRaised: "0.03",
      totalNeeded: "0.15",
      daysLeft: "5",
      totalDays: "7",
    },
    {
      title: "Campaign 4",
      desc: "Description for the fourth campaign.",
      type: "Charity Event",
      totalRaised: "0.025",
      totalNeeded: "0.1",
      daysLeft: "12",
      totalDays: "20",
    },
    {
      title: "Campaign 5",
      desc: "Description for the fifth campaign.",
      type: "Donation Drive",
      totalRaised: "0.015",
      totalNeeded: "0.05",
      daysLeft: "8",
      totalDays: "15",
    },
    {
      title: "Campaign 6",
      desc: "Description for the sixth campaign.",
      type: "Community Outreach",
      totalRaised: "0.035",
      totalNeeded: "0.2",
      daysLeft: "15",
      totalDays: "25",
    },
    {
      title: "Campaign 7",
      desc: "Description for the seventh campaign.",
      type: "Educational Program",
      totalRaised: "0.04",
      totalNeeded: "0.18",
      daysLeft: "18",
      totalDays: "30",
    },
    {
      title: "Campaign 8",
      desc: "Description for the eighth campaign.",
      type: "Healthcare Initiative",
      totalRaised: "0.03",
      totalNeeded: "0.12",
      daysLeft: "14",
      totalDays: "25",
    },
    {
      title: "Campaign 9",
      desc: "Description for the ninth campaign.",
      type: "Environmental Conservation",
      totalRaised: "0.05",
      totalNeeded: "0.25",
      daysLeft: "22",
      totalDays: "40",
    },
    {
      title: "Campaign 10",
      desc: "Description for the tenth campaign.",
      type: "Animal Welfare",
      totalRaised: "0.01",
      totalNeeded: "0.08",
      daysLeft: "7",
      totalDays: "14",
    },
    {
      title: "Campaign 11",
      desc: "Description for the eleventh campaign.",
      type: "Food Drive",
      totalRaised: "0.03",
      totalNeeded: "0.12",
      daysLeft: "9",
      totalDays: "20",
    },
    {
      title: "Campaign 12",
      desc: "Description for the twelfth campaign.",
      type: "Children's Education",
      totalRaised: "0.02",
      totalNeeded: "0.1",
      daysLeft: "11",
      totalDays: "30",
    },
    {
      title: "Campaign 13",
      desc: "Description for the thirteenth campaign.",
      type: "Community Garden",
      totalRaised: "0.04",
      totalNeeded: "0.2",
      daysLeft: "17",
      totalDays: "35",
    },
    {
      title: "Campaign 14",
      desc: "Description for the fourteenth campaign.",
      type: "Elderly Care",
      totalRaised: "0.015",
      totalNeeded: "0.08",
      daysLeft: "6",
      totalDays: "10",
    },
    {
      title: "Campaign 15",
      desc: "Description for the fifteenth campaign.",
      type: "Art and Culture",
      totalRaised: "0.03",
      totalNeeded: "0.15",
      daysLeft: "13",
      totalDays: "25",
    },
    {
      title: "Campaign 16",
      desc: "Description for the sixteenth campaign.",
      type: "Clean Water Initiative",
      totalRaised: "0.06",
      totalNeeded: "0.3",
      daysLeft: "25",
      totalDays: "40",
    },
    {
      title: "Campaign 17",
      desc: "Description for the seventeenth campaign.",
      type: "Homelessness Support",
      totalRaised: "0.02",
      totalNeeded: "0.12",
      daysLeft: "8",
      totalDays: "15",
    },
    {
      title: "Campaign 18",
      desc: "Description for the eighteenth campaign.",
      type: "Cancer Research",
      totalRaised: "0.05",
      totalNeeded: "0.25",
      daysLeft: "19",
      totalDays: "30",
    },
    {
      title: "Campaign 19",
      desc: "Description for the nineteenth campaign.",
      type: "Youth Empowerment",
      totalRaised: "0.03",
      totalNeeded: "0.15",
      daysLeft: "12",
      totalDays: "20",
    },
    {
      title: "Campaign 20",
      desc: "Description for the twentieth campaign.",
      type: "Disaster Relief",
      totalRaised: "0.04",
      totalNeeded: "0.2",
      daysLeft: "14",
      totalDays: "25",
    },
  ];
  return (
    <>
      
      <div className="cardContainer container mt-5">
        {campaigns.map((campaign, key) => (
          <Card campaign={campaign} key={key} />
        ))}
      </div>
    </>
  );
}

export default Home;
