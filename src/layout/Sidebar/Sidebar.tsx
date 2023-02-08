import React, { useState, useEffect } from "react";
import "./Sidebar.scss";
import { IconButton, Avatar } from "@material-ui/core";
import { DonutLarge, Chat, MoreVert, SearchOutlined } from "@material-ui/icons";
import SidebarChat from "../../components/SidebarChat/SidebarChat";
import { useAppContext } from "../../contexts/AppContext";
import RoomService from "../../services/RoomService";
import Pusher from "pusher-js";

interface SidebarProps {
  rooms: Room[];
  setRooms: React.Dispatch<React.SetStateAction<Room[]>>;
}

const Sidebar: React.FC<SidebarProps> = ({ rooms, setRooms }) => {
  const [searchInput, setSearchInput] = useState("");
  const [{ user }] = useAppContext();

  const getRooms = async () => {
    const responseGetRooms = await RoomService.getRooms(user?.uid || "");

    if (responseGetRooms.status === "SUCCESS") {
      setRooms(responseGetRooms.data);
    }
  };

  const joinRoom = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (searchInput === "") return;

    const responseJoinRoom = await RoomService.joinRoom(
      user?.uid || "",
      searchInput
    );

    if (responseJoinRoom.status === "SUCCESS" && responseJoinRoom.data !== "") {
      setSearchInput("");
      getRooms();
    } else {
      await RoomService.createRoom(searchInput, user?.uid || "");
      setSearchInput("");
    }
  };

  const searchRooms = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    const _searchInput = e.target.value;
    setSearchInput(_searchInput);

    if (_searchInput === "") {
      getRooms();
    }

    const responseSearchRooms = await RoomService.searchRooms(
      _searchInput,
      user?.uid || ""
    );

    if (responseSearchRooms.status === "SUCCESS") {
      setRooms(responseSearchRooms.data);
    } else {
      setRooms([]);
    }
  };

  useEffect(() => {
    const pusher = new Pusher("cde362d7c383a6381e2f", {
      cluster: "eu",
    });

    (async () => {
      const channel = pusher.subscribe("rooms");

      channel.bind("inserted", async (newRoom: Room) => {
        await getRooms();
      });

      channel.bind("updated", (updatedRoom: Room) => {
        const { _id, users } = updatedRoom;

        if (rooms.length > 0) {
          const index = rooms.map((room: Room) => room?._id).indexOf(_id);

          if (index >= 0) {
            setRooms((prevRooms) => {
              const newRooms = [...prevRooms];
              newRooms[index].users = users;
              return newRooms;
            });
          }
        }
      });
    })();

    return () => {
      pusher.unbind_all();
      pusher.unsubscribe("messages");
    };

    // eslint-disable-next-line
  }, [rooms]);

  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <div className="sidebar__headerInfo">
          <Avatar src={user?.photoURL || ""} />
          <h3>{user?.displayName || "Your name goes here..."}</h3>
        </div>

        <div className="sidebar__headerRight">
          <IconButton>
            <DonutLarge />
          </IconButton>

          <IconButton>
            <Chat />
          </IconButton>

          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>

      <div className="sidebar__search">
        <div className="sidebar__searchContainer">
          <SearchOutlined />

          <form onSubmit={joinRoom}>
            <input
              id="sidebar__searchInput"
              type="text"
              placeholder="Create new room or search by ID"
              value={searchInput}
              onChange={searchRooms}
            />
            <button type="submit">JOIN</button>
          </form>
        </div>
      </div>

      <div className="sidebar__chats">
        {[...rooms].reverse().map((room) => (
          <SidebarChat
            key={room._id}
            id={room._id}
            image={room.image}
            name={room.name}
            members={`${room.users.length} ${
              room.users.length === 1 ? "member" : "members"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
