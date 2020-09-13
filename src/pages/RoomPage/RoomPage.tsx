import React, { useEffect, useState } from "react";
import "./RoomPage.scss";
import Chat from "../../layout/Chat/Chat";
import Sidebar from "../../layout/Sidebar/Sidebar";
import { useParams } from "react-router-dom";
import RoomService from "../../services/RoomService";
import MessageService from "../../services/MessageService";
import { useAppContext } from "../../contexts/AppContext";
import Pusher from "pusher-js";

const RoomPage: React.FC = () => {
  const [rooms, setRooms] = useState<Room[]>([]);
  const [messages, setMessages] = useState<Message[] | null>(null);
  const { room_id }: { room_id?: string } = useParams();
  const [{ user }, dispatch] = useAppContext();

  // GET ROOMS BY USER ID
  useEffect(() => {
    (async () => {
      const responseGetRooms = await RoomService.getRooms(user?.uid || "");

      if (responseGetRooms.status === "SUCCESS") {
        setRooms(responseGetRooms.data);
      }
    })();

    // eslint-disable-next-line
  }, []);

  // GET ROOM - CHECK IF EXISTS
  useEffect(() => {
    (async () => {
      if (room_id) {
        const responseGetRoom = await RoomService.getRoom(
          room_id,
          user?.uid || ""
        );

        // const index = rooms.map((room: Room) => room?._id).indexOf(room_id);
        // console.log(index);
        // if (index >= 0) {
        //   console.log(rooms[index]);
        // }

        if (responseGetRoom.status === "SUCCESS") {
          dispatch({ type: "SET_ROOM", payload: responseGetRoom.data[0] });

          const responseGetMessages = await MessageService.getMessages(room_id);

          if (responseGetMessages.status === "SUCCESS") {
            setMessages(responseGetMessages.data);
          }
        }
      }
    })();

    // eslint-disable-next-line
  }, [room_id]);

  // REALTIME DATABASE FUNCTIONALITY
  useEffect(() => {
    const pusher = new Pusher("cde362d7c383a6381e2f", {
      cluster: "eu",
    });

    (async () => {
      if (room_id) {
        const channel = pusher.subscribe("messages");
        channel.bind("inserted", (newMessage: Message) =>
          setMessages((prevMessages) => [
            ...(prevMessages as Message[]),
            newMessage,
          ])
        );
      }
    })();

    return () => {
      pusher.unbind_all();
      pusher.unsubscribe("messages");
    };
  }, [room_id]);

  return (
    <div className="roomPage">
      <Sidebar rooms={rooms} />

      {messages ? (
        <Chat messages={messages} />
      ) : (
        <div className="roomPage__notFound">
          <h2>Join or create a room</h2>
        </div>
      )}
    </div>
  );
};

export default RoomPage;
