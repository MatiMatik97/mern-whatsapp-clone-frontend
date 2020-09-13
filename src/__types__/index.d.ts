type Message = {
  message: string;
  name: string;
  room_id: string;
  timestamp: string;
  user_id: string;
  _id: string;
};

type Room = { _id: string; users: string[]; name: string; image: string };
