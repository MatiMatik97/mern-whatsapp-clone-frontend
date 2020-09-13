import ApiService from "./ApiService";

const RoomService = () => {};

RoomService.getRooms = async (user_id: string) => {
  try {
    const response = await ApiService.request({
      url: "api/rooms/sync",
      method: "GET",
      params: {
        user_id: user_id,
      },
    });

    return {
      status: "SUCCESS",
      data: response.data,
    };
  } catch (error) {
    console.error(error);

    return {
      status: "ERROR",
      data: error,
    };
  }
};

RoomService.getRoom = async (room_id: string, user_id: string) => {
  try {
    const response = await ApiService.request({
      url: "api/rooms/get",
      method: "GET",
      params: {
        room_id: room_id,
        user_id: user_id,
      },
    });

    return {
      status: "SUCCESS",
      data: response.data,
    };
  } catch (error) {
    console.error(error);

    return {
      status: "ERROR",
      data: error,
    };
  }
};

RoomService.searchRooms = async (name: string, user_id: string) => {
  try {
    const response = await ApiService.request({
      url: "api/rooms/search",
      method: "GET",
      params: {
        name: name,
        user_id: user_id,
      },
    });

    return {
      status: "SUCCESS",
      data: response.data,
    };
  } catch (error) {
    console.error(error);

    return {
      status: "ERROR",
      data: error,
    };
  }
};

RoomService.joinRoom = async (user_id: string, room_id: string) => {
  try {
    const response = await ApiService.request({
      url: "/api/rooms/join",
      method: "POST",
      data: { user_id: user_id as string, room_id: room_id as string },
    });

    return {
      status: "SUCCESS",
      data: response.data,
    };
  } catch (error) {
    console.log(error);

    return {
      status: "ERROR",
      data: error,
    };
  }
};

RoomService.createRoom = async (name: string, user_id: string) => {
  try {
    const randomSeed = Math.floor(Math.random() * 10000) + 10000;

    const response = await ApiService.request({
      url: "/api/rooms/create",
      method: "POST",
      data: {
        name: name,
        users: [user_id],
        image: `https://avatars.dicebear.com/api/human/${randomSeed}.svg`,
      },
    });

    return {
      status: "SUCCESS",
      data: response.data,
    };
  } catch (error) {
    console.log(error);

    return {
      status: "ERROR",
      data: error,
    };
  }
};

export default RoomService;
