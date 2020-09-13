import React from "react";
import "./RoomPage.scss";
import Chat from "../../layout/Chat/Chat";
import Sidebar from "../../layout/Sidebar/Sidebar";
import { useParams } from "react-router-dom";

const RoomPage: React.FC = () => {
  const params: { room_id?: string } = useParams();

  console.log(params?.room_id);

  return (
    <div className="roomPage">
      <Sidebar />
      <Chat />
    </div>
  );
};

export default RoomPage;
